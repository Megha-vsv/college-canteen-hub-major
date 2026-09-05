# ============================================
# COLLEGE CANTEEN HUB
# ML DEMAND PREDICTION
# ============================================

import json
import os
from collections import defaultdict
from datetime import datetime

import pandas as pd
from sklearn.ensemble import RandomForestRegressor


# ============================================
# FILE PATH
# ============================================

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ORDERS_FILE = os.path.join(
    BASE_DIR,
    "data",
    "orders.json"
)


# ============================================
# LOAD ORDERS
# ============================================

def load_orders():

    try:

        with open(
            ORDERS_FILE,
            "r",
            encoding="utf-8"
        ) as file:

            return json.load(file)

    except Exception as error:

        print("Error loading orders:", error)

        return []


# ============================================
# PREPARE DATA
# ============================================

def prepare_data(orders):

    daily_sales = defaultdict(int)

    for order in orders:

        if order.get("status") == "cancelled":
            continue

        order_time = order.get("orderTime")

        if not order_time:
            continue

        try:

            date = datetime.fromisoformat(
                order_time.replace("Z", "+00:00")
            ).date()

        except Exception:

            continue

        items = order.get("items", [])

        for item in items:

            name = item.get(
                "name",
                "Unknown Item"
            )

            quantity = int(
                item.get(
                    "quantity",
                    1
                )
            )

            key = (
                name,
                str(date)
            )

            daily_sales[key] += quantity

    records = []

    for (item, date), quantity in daily_sales.items():

        records.append({

            "item": item,

            "date": date,

            "quantity": quantity

        })

    return pd.DataFrame(records)


# ============================================
# DEMAND LEVEL
# ============================================

def get_demand_level(quantity):

    if quantity >= 10:

        return "High"

    elif quantity >= 5:

        return "Medium"

    else:

        return "Low"


# ============================================
# TRAIN MODEL
# ============================================

def predict_demand(df):

    predictions = []

    if df.empty:

        return predictions

    for item_name in df["item"].unique():

        item_data = df[
            df["item"] == item_name
        ].copy()

        item_data = item_data.sort_values(
            "date"
        )

        quantities = (
            item_data["quantity"]
            .astype(float)
            .tolist()
        )

        # ------------------------------------
        # Not enough historical data
        # ------------------------------------

        if len(quantities) < 3:

            predicted_quantity = round(
                sum(quantities) /
                len(quantities),
                2
            )

            method = "Average-based prediction"

        else:

            # --------------------------------
            # Create training data
            # --------------------------------

            X = []
            y = []

            for i in range(
                1,
                len(quantities)
            ):

                X.append([
                    i,
                    quantities[i - 1]
                ])

                y.append(
                    quantities[i]
                )

            model = RandomForestRegressor(
                n_estimators=100,
                random_state=42
            )

            model.fit(
                X,
                y
            )

            next_index = len(
                quantities
            )

            last_quantity = quantities[-1]

            predicted_quantity = model.predict(
                [[
                    next_index,
                    last_quantity
                ]]
            )[0]

            predicted_quantity = round(
                max(
                    0,
                    predicted_quantity
                ),
                2
            )

            method = "Random Forest ML"

        demand_level = get_demand_level(
            predicted_quantity
        )

        if demand_level == "High":

            recommendation = (
                "Prepare more stock because "
                "predicted demand is high."
            )

        elif demand_level == "Medium":

            recommendation = (
                "Maintain normal stock and "
                "monitor demand."
            )

        else:

            recommendation = (
                "Prepare limited stock to "
                "reduce possible food waste."
            )

        predictions.append({

            "foodItem": item_name,

            "predictedQuantity":
                predicted_quantity,

            "demandLevel":
                demand_level,

            "recommendation":
                recommendation,

            "method":
                method

        })

    return predictions


# ============================================
# MAIN
# ============================================

def main():

    print()
    print("=" * 55)
    print(" COLLEGE CANTEEN HUB - ML DEMAND PREDICTION")
    print("=" * 55)

    orders = load_orders()

    print(
        f"\nTotal orders loaded: {len(orders)}"
    )

    df = prepare_data(
        orders
    )

    if df.empty:

        print(
            "\nNo order data available."
        )

        print(
            "Place at least one order first."
        )

        return

    print(
        f"Food records available: {len(df)}"
    )

    predictions = predict_demand(
        df
    )

    print()
    print("-" * 55)
    print(" DEMAND PREDICTIONS")
    print("-" * 55)

    for prediction in predictions:

        print(
            f"\nFood Item: "
            f"{prediction['foodItem']}"
        )

        print(
            f"Predicted Quantity: "
            f"{prediction['predictedQuantity']}"
        )

        print(
            f"Demand Level: "
            f"{prediction['demandLevel']}"
        )

        print(
            f"Method: "
            f"{prediction['method']}"
        )

        print(
            f"Recommendation: "
            f"{prediction['recommendation']}"
        )

    # ----------------------------------------
    # Save predictions
    # ----------------------------------------

    output_file = os.path.join(
        BASE_DIR,
        "data",
        "demand_predictions.json"
    )

    with open(
        output_file,
        "w",
        encoding="utf-8"
    ) as file:

        json.dump(
            predictions,
            file,
            indent=2
        )

    print()
    print("=" * 55)

    print(
        "Predictions saved to:"
    )

    print(
        "data/demand_predictions.json"
    )

    print("=" * 55)


if __name__ == "__main__":

    main()