// Complete menu data for all canteens
const canteenMenus = {
    "Captain Cuisine": [
        { id: 1, name: "Captain's Special Platter", price: 350, description: "Signature dish with grilled chicken, vegetables and special sauce", nutrition: { protein: "25g", carbs: "40g", fat: "15g" } },
        { id: 2, name: "Butter Chicken", price: 280, description: "Tender chicken in rich tomato and butter gravy", nutrition: { protein: "22g", carbs: "12g", fat: "18g" } },
        { id: 3, name: "Veg Biryani", price: 180, description: "Fragrant basmati rice with mixed vegetables and spices", nutrition: { protein: "8g", carbs: "60g", fat: "10g" } },
        { id: 4, name: "Paneer Tikka", price: 220, description: "Cottage cheese cubes marinated and grilled to perfection", nutrition: { protein: "18g", carbs: "8g", fat: "12g" } },
        { id: 5, name: "Chocolate Lava Cake", price: 120, description: "Warm chocolate cake with molten center, served with ice cream", nutrition: { protein: "5g", carbs: "45g", fat: "20g" } }
    ],
    "Utopia": [
        { id: 6, name: "Caramel Frappuccino", price: 180, description: "Blended coffee with caramel syrup and whipped cream", nutrition: { protein: "4g", carbs: "35g", fat: "10g" } },
        { id: 7, name: "Blueberry Muffin", price: 90, description: "Freshly baked muffin with blueberry chunks", nutrition: { protein: "3g", carbs: "40g", fat: "8g" } },
        { id: 8, name: "Club Sandwich", price: 160, description: "Triple-decker sandwich with veggies and mayo", nutrition: { protein: "12g", carbs: "35g", fat: "15g" } },
        { id: 9, name: "Iced Tea", price: 70, description: "Refreshing lemon iced tea", nutrition: { protein: "0g", carbs: "20g", fat: "0g" } },
        { id: 10, name: "Chocolate Chip Cookies", price: 60, description: "Soft cookies loaded with chocolate chips", nutrition: { protein: "2g", carbs: "25g", fat: "8g" } }
    ],
    "Capitol": [
        { id: 11, name: "Thali Meal", price: 200, description: "Complete meal with rice, roti, dal, two vegetables, raita and dessert", nutrition: { protein: "15g", carbs: "70g", fat: "12g" } },
        { id: 12, name: "Masala Dosa", price: 120, description: "Crispy fermented crepe with potato filling", nutrition: { protein: "6g", carbs: "50g", fat: "10g" } },
        { id: 13, name: "Chole Bhature", price: 150, description: "Spicy chickpea curry with fried bread", nutrition: { protein: "10g", carbs: "65g", fat: "20g" } },
        { id: 14, name: "Vegetable Pulao", price: 130, description: "Fragrant rice cooked with vegetables and spices", nutrition: { protein: "7g", carbs: "55g", fat: "8g" } },
        { id: 15, name: "Rasmalai", price: 80, description: "Soft cottage cheese balls in sweetened condensed milk", nutrition: { protein: "8g", carbs: "30g", fat: "12g" } }
    ],
    "Size Zero": [
        { id: 16, name: "Quinoa Salad Bowl", price: 200, description: "Quinoa with mixed greens, cherry tomatoes, avocado and lemon dressing", nutrition: { protein: "12g", carbs: "35g", fat: "10g" } },
        { id: 17, name: "Green Detox Smoothie", price: 150, description: "Blend of spinach, kale, apple and lemon", nutrition: { protein: "4g", carbs: "25g", fat: "2g" } },
        { id: 18, name: "Grilled Chicken Breast", price: 250, description: "Lean chicken breast with steamed vegetables", nutrition: { protein: "30g", carbs: "5g", fat: "8g" } },
        { id: 19, name: "Protein Shake", price: 180, description: "Whey protein shake with almond milk", nutrition: { protein: "25g", carbs: "10g", fat: "5g" } },
        { id: 20, name: "Avocado Toast", price: 120, description: "Whole wheat toast with smashed avocado and seeds", nutrition: { protein: "6g", carbs: "25g", fat: "15g" } }
    ],
    "Farki": [
        { id: 21, name: "Pasta in White Sauce", price: 160, description: "Penne pasta in creamy white sauce with herbs", nutrition: { protein: "10g", carbs: "45g", fat: "15g" } },
        { id: 22, name: "French Fries", price: 80, description: "Crispy golden fries with ketchup", nutrition: { protein: "3g", carbs: "40g", fat: "15g" } },
        { id: 23, name: "Veg Burger", price: 100, description: "Burger with veg patty, lettuce and sauce", nutrition: { protein: "8g", carbs: "35g", fat: "12g" } },
        { id: 24, name: "Cold Coffee", price: 110, description: "Chilled coffee with ice cream and chocolate syrup", nutrition: { protein: "5g", carbs: "30g", fat: "10g" } },
        { id: 25, name: "Garlic Bread", price: 90, description: "Toasted bread with garlic butter and herbs", nutrition: { protein: "4g", carbs: "30g", fat: "12g" } }
    ],
    "Belgian Waffle": [
        { id: 26, name: "Chocolate Belgian Waffle", price: 180, description: "Crispy waffle with chocolate sauce and whipped cream", nutrition: { protein: "6g", carbs: "50g", fat: "18g" } },
        { id: 27, name: "Strawberry Waffle", price: 170, description: "Waffle topped with fresh strawberries and syrup", nutrition: { protein: "5g", carbs: "45g", fat: "15g" } },
        { id: 28, name: "Nutella Waffle", price: 200, description: "Waffle generously topped with Nutella and nuts", nutrition: { protein: "7g", carbs: "55g", fat: "22g" } },
        { id: 29, name: "Ice Cream Waffle", price: 190, description: "Waffle served with two scoops of ice cream", nutrition: { protein: "6g", carbs: "60g", fat: "20g" } },
        { id: 30, name: "Plain Waffle with Maple Syrup", price: 120, description: "Classic waffle with pure maple syrup", nutrition: { protein: "5g", carbs: "40g", fat: "12g" } }
    ],
    "Cafe Hot Spot": [
        { id: 31, name: "Hot Spot Burger", price: 150, description: "Signature burger with special sauce and crispy veggies", nutrition: { protein: "15g", carbs: "40g", fat: "18g" } },
        { id: 32, name: "Cappuccino", price: 100, description: "Rich espresso with steamed milk and foam", nutrition: { protein: "4g", carbs: "8g", fat: "5g" } },
        { id: 33, name: "Chicken Wrap", price: 160, description: "Grilled chicken with veggies in tortilla wrap", nutrition: { protein: "18g", carbs: "30g", fat: "12g" } },
        { id: 34, name: "Hot Chocolate", price: 90, description: "Creamy hot chocolate with marshmallows", nutrition: { protein: "6g", carbs: "35g", fat: "12g" } },
        { id: 35, name: "French Toast", price: 130, description: "Golden brown toast with honey and fruits", nutrition: { protein: "8g", carbs: "45g", fat: "15g" } }
    ],
    "Cafe Appetito": [
        { id: 36, name: "Margherita Pizza", price: 200, description: "Classic pizza with tomato sauce, mozzarella and basil", nutrition: { protein: "12g", carbs: "55g", fat: "15g" } },
        { id: 37, name: "Pasta Alfredo", price: 180, description: "Fettuccine pasta in creamy Alfredo sauce", nutrition: { protein: "14g", carbs: "50g", fat: "20g" } },
        { id: 38, name: "Garlic Mushroom", price: 140, description: "Mushrooms sautéed in garlic butter", nutrition: { protein: "6g", carbs: "8g", fat: "12g" } },
        { id: 39, name: "Tiramisu", price: 120, description: "Classic Italian dessert with coffee-soaked ladyfingers", nutrition: { protein: "6g", carbs: "35g", fat: "18g" } },
        { id: 40, name: "Minestrone Soup", price: 100, description: "Hearty Italian vegetable soup", nutrition: { protein: "5g", carbs: "20g", fat: "5g" } }
    ],
    "La Pinoz Pizza": [
        { id: 41, name: "VEG TAMER", price: 275, description: "Special veg pizza with assorted toppings", nutrition: { protein: "10g", carbs: "35g", fat: "15g" } },
        { id: 42, name: "Giant Pizza", price: 60, description: "Large pizza with generous toppings", nutrition: { protein: "20g", carbs: "50g", fat: "15g" } },
        { id: 43, name: "Sweet Corns & Cheese", price: 350, description: "Pizza loaded with sweet corn and extra cheese", nutrition: { protein: "10g", carbs: "30g", fat: "18g" } },
        { id: 44, name: "PREMIUM VEG", price: 195, description: "Premium vegetable pizza with exotic toppings", nutrition: { protein: "10g", carbs: "35g", fat: "12g" } },
        { id: 45, name: "Cheese Dip Special", price: 445, description: "Cheese Dip, Jalapeno + Dip, Cheesey Macroni, Swirl of Makhani Gravy, Mushroom, Olives, Sweet Corns", nutrition: { protein: "10g", carbs: "30g", fat: "20g" } },
        { id: 46, name: "DOUBLE BURST PIZZA", price: 209, description: "Double cheese burst pizza with special sauce", nutrition: { protein: "20g", carbs: "40g", fat: "18g" } },
        { id: 47, name: "DOUBLE CHEESE MARGHERITA", price: 185, description: "Extra cheesy Margherita pizza for cheese lovers", nutrition: { protein: "20g", carbs: "35g", fat: "15g" } },
        { id: 48, name: "Onion Tomato Pizza", price: 65, description: "Onion, Tomatoes, Fresh Tomatoes, Capsicum", nutrition: { protein: "5g", carbs: "30g", fat: "8g" } },
        { id: 49, name: "Pineapple Pizza", price: 295, description: "Pizza with juicy pineapples and cheese", nutrition: { protein: "5g", carbs: "30g", fat: "10g" } },
        { id: 50, name: "Regular Pizza", price: 89, description: "Classic regular sized pizza", nutrition: { protein: "10g", carbs: "35g", fat: "12g" } },
        { id: 51, name: "Paneer Jalapeno Pizza", price: 295, description: "Onion, Capsicum, Paneer with Jalapenos Dip", nutrition: { protein: "15g", carbs: "30g", fat: "15g" } },
        { id: 52, name: "PESTO & BASIL VEG", price: 295, description: "Pizza with pesto sauce and fresh basil", nutrition: { protein: "5g", carbs: "30g", fat: "12g" } },
        { id: 53, name: "Onions & Cheese Pizza", price: 350, description: "Pizza loaded with onions and extra cheese", nutrition: { protein: "15g", carbs: "35g", fat: "18g" } },
        { id: 54, name: "INDIANA (Korma dip)", price: 295, description: "Pizza with Indian korma dip flavor", nutrition: { protein: "10g", carbs: "30g", fat: "15g" } },
        { id: 55, name: "Say Cheese", price: 165, description: "Simple cheese pizza for cheese lovers", nutrition: { protein: "15g", carbs: "35g", fat: "15g" } },
        { id: 56, name: "ENGLISH RETREAT", price: 295, description: "Pizza with English style toppings", nutrition: { protein: "5g", carbs: "30g", fat: "10g" } },
        { id: 57, name: "SPECIALITY VEG", price: 295, description: "Special vegetable pizza with unique toppings", nutrition: { protein: "5g", carbs: "30g", fat: "10g" } },
        { id: 58, name: "AUTHENTIC VEG", price: 295, description: "Authentic vegetable pizza recipe", nutrition: { protein: "10g", carbs: "30g", fat: "12g" } },
        { id: 59, name: "CHEESE LOVERS", price: 275, description: "Extra cheesy pizza for cheese enthusiasts", nutrition: { protein: "20g", carbs: "35g", fat: "18g" } },
        { id: 60, name: "SIMPLY VEG", price: 175, description: "Simple vegetable pizza", nutrition: { protein: "10g", carbs: "35g", fat: "12g" } },
        { id: 61, name: "ONION TWIST", price: 495, description: "Pizza with twisted onion flavors", nutrition: { protein: "5g", carbs: "30g", fat: "15g" } },
        { id: 62, name: "Large Pizza", price: 50, description: "Large sized pizza", nutrition: { protein: "15g", carbs: "40g", fat: "15g" } },
        { id: 63, name: "PESTO & BASIL SPECIAL", price: 765, description: "Special pesto and basil pizza", nutrition: { protein: "15g", carbs: "45g", fat: "20g" } },
        { id: 64, name: "VEG HAWAIIAN", price: 295, description: "Hawaiian style veg pizza with pineapple", nutrition: { protein: "8g", carbs: "35g", fat: "12g" } }
    ],
    "Chatoree": [
        { id: 65, name: "Pani Puri", price: 60, description: "Crispy puris filled with spicy tangy water", nutrition: { protein: "3g", carbs: "25g", fat: "8g" } },
        { id: 66, name: "Bhel Puri", price: 70, description: "Puffed rice with chutneys and vegetables", nutrition: { protein: "4g", carbs: "30g", fat: "6g" } },
        { id: 67, name: "Samosa Chaat", price: 80, description: "Crumbled samosa with chutneys and yogurt", nutrition: { protein: "5g", carbs: "35g", fat: "12g" } },
        { id: 68, name: "Dahi Puri", price: 75, description: "Crisp puris filled with yogurt and spices", nutrition: { protein: "6g", carbs: "28g", fat: "10g" } },
        { id: 69, name: "Aloo Tikki Chaat", price: 85, description: "Potato patties with chutneys and spices", nutrition: { protein: "4g", carbs: "40g", fat: "12g" } }
    ],
    "Konaseema Ruchulu": [
        { id: 70, name: "Andhra Chicken Curry", price: 280, description: "Spicy Andhra style chicken curry", nutrition: { protein: "25g", carbs: "10g", fat: "18g" } },
        { id: 71, name: "Andhra Meals", price: 220, description: "Traditional Andhra meal with rice and curries", nutrition: { protein: "12g", carbs: "65g", fat: "15g" } },
        { id: 72, name: "Gongura Chicken", price: 300, description: "Chicken cooked with sorrel leaves", nutrition: { protein: "28g", carbs: "8g", fat: "20g" } },
        { id: 73, name: "Prawn Fry", price: 320, description: "Crispy fried prawns with Andhra spices", nutrition: { protein: "30g", carbs: "5g", fat: "18g" } },
        { id: 74, name: "Rava Laddu", price: 50, description: "Sweet semolina balls", nutrition: { protein: "3g", carbs: "35g", fat: "10g" } }
    ],
    "Sri Rudra": [
        { id: 75, name: "Masala Dosa", price: 100, description: "Crispy dosa with potato masala", nutrition: { protein: "6g", carbs: "50g", fat: "10g" } },
        { id: 76, name: "Idli Sambar", price: 70, description: "Steamed rice cakes with lentil soup", nutrition: { protein: "8g", carbs: "40g", fat: "2g" } },
        { id: 77, name: "Vada Sambar", price: 80, description: "Fried lentil donut with sambar", nutrition: { protein: "7g", carbs: "35g", fat: "12g" } },
        { id: 78, name: "Pongal", price: 90, description: "Rice and lentil porridge with ghee", nutrition: { protein: "6g", carbs: "45g", fat: "10g" } },
        { id: 79, name: "Filter Coffee", price: 40, description: "Traditional South Indian filter coffee", nutrition: { protein: "2g", carbs: "10g", fat: "5g" } }
    ],
    "Indian Salt": [
        { id: 80, name: "Butter Chicken", price: 280, description: "Classic butter chicken with naan", nutrition: { protein: "22g", carbs: "15g", fat: "18g" } },
        { id: 81, name: "Paneer Butter Masala", price: 240, description: "Cottage cheese in creamy tomato gravy", nutrition: { protein: "18g", carbs: "12g", fat: "15g" } },
        { id: 82, name: "Dal Makhani", price: 180, description: "Creamy black lentils slow-cooked", nutrition: { protein: "12g", carbs: "25g", fat: "12g" } },
        { id: 83, name: "Garlic Naan", price: 50, description: "Soft bread with garlic butter", nutrition: { protein: "4g", carbs: "35g", fat: "8g" } },
        { id: 84, name: "Gulab Jamun", price: 60, description: "Sweet milk balls in sugar syrup", nutrition: { protein: "5g", carbs: "40g", fat: "12g" } }
    ],
    "Rajwadi Gola": [
        { id: 85, name: "Kala Khatta Gola", price: 60, description: "Crushed ice with black currant syrup", nutrition: { protein: "0g", carbs: "30g", fat: "0g" } },
        { id: 86, name: "Rose Gola", price: 50, description: "Crushed ice with rose syrup", nutrition: { protein: "0g", carbs: "25g", fat: "0g" } },
        { id: 87, name: "Mango Gola", price: 70, description: "Crushed ice with mango pulp", nutrition: { protein: "1g", carbs: "35g", fat: "0g" } },
        { id: 88, name: "Chocolate Gola", price: 80, description: "Crushed ice with chocolate syrup", nutrition: { protein: "2g", carbs: "40g", fat: "5g" } },
        { id: 89, name: "Mix Fruit Gola", price: 90, description: "Crushed ice with mixed fruit syrups", nutrition: { protein: "1g", carbs: "45g", fat: "0g" } }
    ],
    "Cafe Bollywood": [
        { id: 90, name: "Bollywood Special Thali", price: 250, description: "Thali with Bollywood themed dishes", nutrition: { protein: "15g", carbs: "60g", fat: "15g" } },
        { id: 91, name: "Tandoori Chicken", price: 280, description: "Chicken marinated in spices and grilled", nutrition: { protein: "30g", carbs: "5g", fat: "15g" } },
        { id: 92, name: "Veg Manchurian", price: 180, description: "Vegetable balls in Chinese style sauce", nutrition: { protein: "8g", carbs: "25g", fat: "10g" } },
        { id: 93, name: "Mango Lassi", price: 100, description: "Sweet yogurt drink with mango", nutrition: { protein: "6g", carbs: "30g", fat: "5g" } },
        { id: 94, name: "Gajar Halwa", price: 120, description: "Carrot pudding with nuts", nutrition: { protein: "5g", carbs: "40g", fat: "15g" } }
    ],
    "Krishna Food Canteen": [
        { id: 95, name: "Veg Combo Meal", price: 120, description: "Economical meal with rice, dal, sabzi and roti", nutrition: { protein: "10g", carbs: "55g", fat: "8g" } },
        { id: 96, name: "Rajma Chawal", price: 100, description: "Kidney beans curry with rice", nutrition: { protein: "12g", carbs: "50g", fat: "5g" } },
        { id: 97, name: "Aloo Paratha", price: 60, description: "Flatbread stuffed with potato", nutrition: { protein: "6g", carbs: "40g", fat: "10g" } },
        { id: 98, name: "Chole Kulche", price: 80, description: "Spicy chickpeas with soft bread", nutrition: { protein: "10g", carbs: "45g", fat: "8g" } },
        { id: 99, name: "Sweet Curd", price: 30, description: "Sweetened yogurt", nutrition: { protein: "5g", carbs: "20g", fat: "5g" } }
    ],
    // Additional 40 canteens start here
    "Campus Brew": [
        { id: 100, name: "Espresso", price: 80, description: "Strong black coffee shot", nutrition: { protein: "1g", carbs: "2g", fat: "0g" } },
        { id: 101, name: "Cafe Latte", price: 120, description: "Coffee with steamed milk", nutrition: { protein: "6g", carbs: "10g", fat: "5g" } },
        { id: 102, name: "Croissant", price: 70, description: "Buttery French pastry", nutrition: { protein: "5g", carbs: "25g", fat: "12g" } },
        { id: 103, name: "Bagel with Cream Cheese", price: 90, description: "Toasted bagel with cream cheese", nutrition: { protein: "8g", carbs: "30g", fat: "10g" } },
        { id: 104, name: "Fruit Salad", price: 100, description: "Fresh seasonal fruits", nutrition: { protein: "2g", carbs: "20g", fat: "1g" } }
    ],
    "Spice Junction": [
        { id: 105, name: "Chicken Biryani", price: 220, description: "Fragrant rice with chicken and spices", nutrition: { protein: "25g", carbs: "60g", fat: "15g" } },
        { id: 106, name: "Mutton Rogan Josh", price: 280, description: "Lamb curry in rich gravy", nutrition: { protein: "30g", carbs: "10g", fat: "20g" } },
        { id: 107, name: "Palak Paneer", price: 180, description: "Cottage cheese in spinach gravy", nutrition: { protein: "15g", carbs: "12g", fat: "10g" } },
        { id: 108, name: "Naan Basket", price: 150, description: "Assorted Indian breads", nutrition: { protein: "8g", carbs: "40g", fat: "6g" } },
        { id: 109, name: "Mango Shake", price: 90, description: "Thick mango milkshake", nutrition: { protein: "5g", carbs: "35g", fat: "8g" } }
    ],
    "Burger Junction": [
        { id: 110, name: "Double Cheeseburger", price: 180, description: "Two patties with double cheese", nutrition: { protein: "25g", carbs: "35g", fat: "25g" } },
        { id: 111, name: "Chicken Burger", price: 160, description: "Crispy chicken burger", nutrition: { protein: "20g", carbs: "30g", fat: "18g" } },
        { id: 112, name: "Veggie Supreme Burger", price: 140, description: "Burger with veg patty and toppings", nutrition: { protein: "10g", carbs: "35g", fat: "12g" } },
        { id: 113, name: "Onion Rings", price: 80, description: "Crispy fried onion rings", nutrition: { protein: "3g", carbs: "25g", fat: "10g" } },
        { id: 114, name: "Chocolate Milkshake", price: 110, description: "Rich chocolate milkshake", nutrition: { protein: "8g", carbs: "40g", fat: "12g" } }
    ],
    "Noodle House": [
        { id: 115, name: "Chicken Chow Mein", price: 170, description: "Stir-fried noodles with chicken", nutrition: { protein: "18g", carbs: "45g", fat: "10g" } },
        { id: 116, name: "Vegetable Hakka Noodles", price: 140, description: "Chinese style vegetable noodles", nutrition: { protein: "8g", carbs: "50g", fat: "8g" } },
        { id: 117, name: "Manchow Soup", price: 90, description: "Spicy Chinese soup", nutrition: { protein: "6g", carbs: "15g", fat: "5g" } },
        { id: 118, name: "Spring Rolls", price: 100, description: "Crispy vegetable spring rolls", nutrition: { protein: "4g", carbs: "20g", fat: "8g" } },
        { id: 119, name: "Fried Rice", price: 130, description: "Chinese style fried rice", nutrition: { protein: "7g", carbs: "55g", fat: "10g" } }
    ],
    "Dosa Point": [
        { id: 120, name: "Paper Dosa", price: 100, description: "Extra thin and crispy dosa", nutrition: { protein: "5g", carbs: "45g", fat: "8g" } },
        { id: 121, name: "Rava Dosa", price: 110, description: "Crispy semolina dosa", nutrition: { protein: "6g", carbs: "40g", fat: "10g" } },
        { id: 122, name: "Onion Uttapam", price: 90, description: "Thick pancake with onions", nutrition: { protein: "7g", carbs: "35g", fat: "6g" } },
        { id: 123, name: "Sambhar", price: 40, description: "Lentil soup with vegetables", nutrition: { protein: "5g", carbs: "15g", fat: "2g" } },
        { id: 124, name: "Coconut Chutney", price: 30, description: "Fresh coconut chutney", nutrition: { protein: "2g", carbs: "8g", fat: "10g" } }
    ],
    "Juice Bar": [
        { id: 125, name: "Fresh Orange Juice", price: 70, description: "Freshly squeezed orange juice", nutrition: { protein: "2g", carbs: "25g", fat: "0g" } },
        { id: 126, name: "Watermelon Juice", price: 60, description: "Refreshing watermelon juice", nutrition: { protein: "1g", carbs: "20g", fat: "0g" } },
        { id: 127, name: "Mixed Fruit Juice", price: 80, description: "Blend of seasonal fruits", nutrition: { protein: "2g", carbs: "30g", fat: "1g" } },
        { id: 128, name: "Carrot Juice", price: 65, description: "Fresh carrot juice", nutrition: { protein: "2g", carbs: "18g", fat: "0g" } },
        { id: 129, name: "Sugarcane Juice", price: 50, description: "Fresh sugarcane juice", nutrition: { protein: "0g", carbs: "35g", fat: "0g" } }
    ],
    "Sandwich Corner": [
        { id: 130, name: "Grilled Cheese Sandwich", price: 90, description: "Toasted sandwich with melted cheese", nutrition: { protein: "12g", carbs: "30g", fat: "15g" } },
        { id: 131, name: "Club Sandwich", price: 120, description: "Triple decker sandwich", nutrition: { protein: "15g", carbs: "35g", fat: "12g" } },
        { id: 132, name: "Veggie Delight Sandwich", price: 80, description: "Sandwich with fresh vegetables", nutrition: { protein: "8g", carbs: "25g", fat: "8g" } },
        { id: 133, name: "Chicken Mayo Sandwich", price: 110, description: "Sandwich with chicken and mayo", nutrition: { protein: "18g", carbs: "28g", fat: "10g" } },
        { id: 134, name: "Paneer Tikka Sandwich", price: 100, description: "Sandwich with spiced paneer", nutrition: { protein: "15g", carbs: "30g", fat: "12g" } }
    ],
    "Ice Cream Parlor": [
        { id: 135, name: "Vanilla Scoop", price: 50, description: "Classic vanilla ice cream", nutrition: { protein: "3g", carbs: "20g", fat: "10g" } },
        { id: 136, name: "Chocolate Scoop", price: 60, description: "Rich chocolate ice cream", nutrition: { protein: "4g", carbs: "25g", fat: "12g" } },
        { id: 137, name: "Strawberry Sundae", price: 90, description: "Ice cream with strawberry sauce", nutrition: { protein: "4g", carbs: "35g", fat: "15g" } },
        { id: 138, name: "Banana Split", price: 120, description: "Ice cream with banana and toppings", nutrition: { protein: "5g", carbs: "45g", fat: "18g" } },
        { id: 139, name: "Choco Cone", price: 40, description: "Ice cream in chocolate cone", nutrition: { protein: "3g", carbs: "25g", fat: "10g" } }
    ],
    "Momo Point": [
        { id: 140, name: "Steam Momo", price: 100, description: "Steamed dumplings with filling", nutrition: { protein: "12g", carbs: "25g", fat: "8g" } },
        { id: 141, name: "Fried Momo", price: 120, description: "Crispy fried dumplings", nutrition: { protein: "12g", carbs: "28g", fat: "15g" } },
        { id: 142, name: "Chicken Momo", price: 130, description: "Dumplings with chicken filling", nutrition: { protein: "18g", carbs: "25g", fat: "10g" } },
        { id: 143, name: "Veg Momo", price: 90, description: "Dumplings with vegetable filling", nutrition: { protein: "8g", carbs: "25g", fat: "6g" } },
        { id: 144, name: "Chilli Momo", price: 140, description: "Momo in spicy chilli sauce", nutrition: { protein: "12g", carbs: "30g", fat: "12g" } }
    ],
    "Pav Bhaji Corner": [
        { id: 145, name: "Special Pav Bhaji", price: 110, description: "Spiced vegetable mash with bread", nutrition: { protein: "8g", carbs: "45g", fat: "15g" } },
        { id: 146, name: "Cheese Pav Bhaji", price: 130, description: "Pav bhaji with extra cheese", nutrition: { protein: "12g", carbs: "45g", fat: "20g" } },
        { id: 147, name: "Masala Pav", price: 70, description: "Bread with spicy masala", nutrition: { protein: "5g", carbs: "35g", fat: "10g" } },
        { id: 148, name: "Paneer Bhaji", price: 150, description: "Bhaji with paneer cubes", nutrition: { protein: "15g", carbs: "30g", fat: "15g" } },
        { id: 149, name: "Butter Pav", price: 40, description: "Buttery toasted bread", nutrition: { protein: "3g", carbs: "25g", fat: "12g" } }
    ],
    "Salad Bar": [
        { id: 150, name: "Greek Salad", price: 130, description: "Fresh vegetables with feta cheese", nutrition: { protein: "8g", carbs: "15g", fat: "10g" } },
        { id: 151, name: "Caesar Salad", price: 140, description: "Lettuce with croutons and dressing", nutrition: { protein: "6g", carbs: "20g", fat: "12g" } },
        { id: 152, name: "Fruit Salad", price: 100, description: "Assorted fresh fruits", nutrition: { protein: "2g", carbs: "25g", fat: "1g" } },
        { id: 153, name: "Chicken Salad", price: 160, description: "Salad with grilled chicken", nutrition: { protein: "20g", carbs: "10g", fat: "8g" } },
        { id: 154, name: "Quinoa Salad", price: 150, description: "Quinoa with vegetables", nutrition: { protein: "10g", carbs: "35g", fat: "8g" } }
    ],
    "Pizza Palace": [
        { id: 155, name: "Pepperoni Pizza", price: 250, description: "Pizza with pepperoni slices", nutrition: { protein: "18g", carbs: "40g", fat: "20g" } },
        { id: 156, name: "Veg Supreme Pizza", price: 220, description: "Pizza with assorted vegetables", nutrition: { protein: "12g", carbs: "45g", fat: "15g" } },
        { id: 157, name: "BBQ Chicken Pizza", price: 280, description: "Pizza with BBQ chicken", nutrition: { protein: "22g", carbs: "40g", fat: "18g" } },
        { id: 158, name: "Garlic Bread Sticks", price: 120, description: "Bread sticks with garlic butter", nutrition: { protein: "6g", carbs: "35g", fat: "12g" } },
        { id: 159, name: "Cheese Garlic Bread", price: 100, description: "Garlic bread with cheese", nutrition: { protein: "10g", carbs: "30g", fat: "15g" } }
    ],
    "Chaat Corner": [
        { id: 160, name: "Papdi Chaat", price: 80, description: "Crispy wafers with chutneys", nutrition: { protein: "5g", carbs: "35g", fat: "12g" } },
        { id: 161, name: "Aloo Chaat", price: 70, description: "Spiced potato chaat", nutrition: { protein: "3g", carbs: "30g", fat: "8g" } },
        { id: 162, name: "Raj Kachori", price: 100, description: "Large puri filled with mixtures", nutrition: { protein: "6g", carbs: "40g", fat: "15g" } },
        { id: 163, name: "Fruit Chaat", price: 90, description: "Fruits with chaat masala", nutrition: { protein: "2g", carbs: "35g", fat: "1g" } },
        { id: 164, name: "Corn Chaat", price: 80, description: "Spiced corn mixture", nutrition: { protein: "4g", carbs: "25g", fat: "5g" } }
    ],
    "Healthy Bites": [
        { id: 165, name: "Oatmeal Bowl", price: 120, description: "Oats with fruits and nuts", nutrition: { protein: "8g", carbs: "40g", fat: "10g" } },
        { id: 166, name: "Avocado Salad", price: 150, description: "Fresh avocado with greens", nutrition: { protein: "5g", carbs: "15g", fat: "20g" } },
        { id: 167, name: "Grilled Fish", price: 200, description: "Grilled fish fillet", nutrition: { protein: "25g", carbs: "2g", fat: "10g" } },
        { id: 168, name: "Steamed Vegetables", price: 110, description: "Assorted steamed vegetables", nutrition: { protein: "6g", carbs: "20g", fat: "2g" } },
        { id: 169, name: "Green Smoothie", price: 130, description: "Spinach and fruit smoothie", nutrition: { protein: "4g", carbs: "30g", fat: "2g" } }
    ],
    "Tandoori Hut": [
        { id: 170, name: "Tandoori Chicken", price: 250, description: "Chicken marinated in spices and grilled", nutrition: { protein: "28g", carbs: "5g", fat: "15g" } },
        { id: 171, name: "Seekh Kebab", price: 180, description: "Minced meat kebabs", nutrition: { protein: "20g", carbs: "8g", fat: "12g" } },
        { id: 172, name: "Tandoori Roti", price: 30, description: "Whole wheat bread cooked in tandoor", nutrition: { protein: "4g", carbs: "25g", fat: "2g" } },
        { id: 173, name: "Paneer Tikka", price: 200, description: "Grilled cottage cheese cubes", nutrition: { protein: "18g", carbs: "8g", fat: "12g" } },
        { id: 174, name: "Fish Tikka", price: 220, description: "Grilled fish pieces", nutrition: { protein: "22g", carbs: "5g", fat: "10g" } }
    ],
    "Quick Bites": [
        { id: 175, name: "Samosa", price: 30, description: "Fried pastry with potato filling", nutrition: { protein: "3g", carbs: "25g", fat: "10g" } },
        { id: 176, name: "Kachori", price: 35, description: "Fried pastry with lentil filling", nutrition: { protein: "4g", carbs: "28g", fat: "12g" } },
        { id: 177, name: "Bread Pakora", price: 40, description: "Bread slices dipped in batter and fried", nutrition: { protein: "5g", carbs: "30g", fat: "15g" } },
        { id: 178, name: "Aloo Tikki", price: 35, description: "Potato patties", nutrition: { protein: "3g", carbs: "25g", fat: "8g" } },
        { id: 179, name: "Mirchi Bajji", price: 40, description: "Chili fritters", nutrition: { protein: "3g", carbs: "20g", fat: "10g" } }
    ],
    "Cold Cafe": [
        { id: 180, name: "Iced Coffee", price: 90, description: "Chilled coffee with ice", nutrition: { protein: "3g", carbs: "20g", fat: "5g" } },
        { id: 181, name: "Frozen Yogurt", price: 100, description: "Frozen yogurt with toppings", nutrition: { protein: "6g", carbs: "30g", fat: "5g" } },
        { id: 182, name: "Smoothie Bowl", price: 130, description: "Thick smoothie in a bowl with toppings", nutrition: { protein: "5g", carbs: "35g", fat: "8g" } },
        { id: 183, name: "Cold Sandwich", price: 110, description: "Chilled sandwich with fillings", nutrition: { protein: "10g", carbs: "30g", fat: "12g" } },
        { id: 184, name: "Iced Tea Lemon", price: 60, description: "Cold tea with lemon", nutrition: { protein: "0g", carbs: "18g", fat: "0g" } }
    ],
    "Mexican Corner": [
        { id: 185, name: "Tacos", price: 150, description: "Crispy shells with fillings", nutrition: { protein: "12g", carbs: "30g", fat: "15g" } },
        { id: 186, name: "Burritos", price: 180, description: "Large wrap with rice and beans", nutrition: { protein: "15g", carbs: "45g", fat: "18g" } },
        { id: 187, name: "Nachos", price: 130, description: "Tortilla chips with cheese", nutrition: { protein: "8g", carbs: "40g", fat: "20g" } },
        { id: 188, name: "Quesadilla", price: 160, description: "Grilled tortilla with cheese", nutrition: { protein: "14g", carbs: "35g", fat: "18g" } },
        { id: 189, name: "Guacamole", price: 90, description: "Avocado dip with spices", nutrition: { protein: "3g", carbs: "10g", fat: "15g" } }
    ],
    "Thai Kitchen": [
        { id: 190, name: "Pad Thai", price: 200, description: "Stir-fried rice noodles", nutrition: { protein: "15g", carbs: "50g", fat: "12g" } },
        { id: 191, name: "Green Curry", price: 180, description: "Thai green curry with coconut milk", nutrition: { protein: "12g", carbs: "20g", fat: "15g" } },
        { id: 192, name: "Tom Yum Soup", price: 120, description: "Spicy and sour soup", nutrition: { protein: "8g", carbs: "15g", fat: "8g" } },
        { id: 193, name: "Spring Rolls", price: 100, description: "Crispy vegetable rolls", nutrition: { protein: "5g", carbs: "25g", fat: "10g" } },
        { id: 194, name: "Thai Fried Rice", price: 160, description: "Rice with Thai spices", nutrition: { protein: "10g", carbs: "45g", fat: "12g" } }
    ],
    "Mediterranean Delight": [
        { id: 195, name: "Hummus with Pita", price: 130, description: "Chickpea dip with bread", nutrition: { protein: "8g", carbs: "30g", fat: "12g" } },
        { id: 196, name: "Falafel", price: 120, description: "Fried chickpea balls", nutrition: { protein: "10g", carbs: "25g", fat: "10g" } },
        { id: 197, name: "Shawarma", price: 150, description: "Wrap with spiced meat", nutrition: { protein: "18g", carbs: "35g", fat: "15g" } },
        { id: 198, name: "Greek Salad", price: 140, description: "Fresh vegetables with feta", nutrition: { protein: "8g", carbs: "15g", fat: "12g" } },
        { id: 199, name: "Baba Ganoush", price: 110, description: "Eggplant dip", nutrition: { protein: "4g", carbs: "12g", fat: "10g" } }
    ],
    "Korean Kitchen": [
        { id: 200, name: "Bibimbap", price: 220, description: "Rice bowl with vegetables and egg", nutrition: { protein: "15g", carbs: "55g", fat: "12g" } },
        { id: 201, name: "Kimchi", price: 80, description: "Fermented spicy cabbage", nutrition: { protein: "3g", carbs: "10g", fat: "1g" } },
        { id: 202, name: "Korean Fried Chicken", price: 250, description: "Crispy chicken with Korean sauce", nutrition: { protein: "25g", carbs: "30g", fat: "18g" } },
        { id: 203, name: "Tteokbokki", price: 180, description: "Spicy rice cakes", nutrition: { protein: "8g", carbs: "40g", fat: "5g" } },
        { id: 204, name: "Bulgogi", price: 240, description: "Marinated grilled beef", nutrition: { protein: "28g", carbs: "15g", fat: "15g" } }
    ],
    "Sushi Bar": [
        { id: 205, name: "California Roll", price: 200, description: "Sushi roll with crab and avocado", nutrition: { protein: "12g", carbs: "35g", fat: "8g" } },
        { id: 206, name: "Salmon Nigiri", price: 180, description: "Rice topped with salmon", nutrition: { protein: "15g", carbs: "25g", fat: "6g" } },
        { id: 207, name: "Vegetable Tempura", price: 160, description: "Battered and fried vegetables", nutrition: { protein: "5g", carbs: "30g", fat: "12g" } },
        { id: 208, name: "Miso Soup", price: 80, description: "Japanese soybean soup", nutrition: { protein: "6g", carbs: "10g", fat: "3g" } },
        { id: 209, name: "Edamame", price: 90, description: "Steamed soybeans", nutrition: { protein: "12g", carbs: "15g", fat: "8g" } }
    ],
    "Breakfast Club": [
        { id: 210, name: "Pancakes", price: 120, description: "Fluffy pancakes with syrup", nutrition: { protein: "8g", carbs: "45g", fat: "10g" } },
        { id: 211, name: "Omelette", price: 100, description: "Egg omelette with fillings", nutrition: { protein: "15g", carbs: "5g", fat: "12g" } },
        { id: 212, name: "French Toast", price: 110, description: "Bread dipped in egg and fried", nutrition: { protein: "10g", carbs: "30g", fat: "12g" } },
        { id: 213, name: "Breakfast Burrito", price: 130, description: "Wrap with eggs and fillings", nutrition: { protein: "18g", carbs: "35g", fat: "15g" } },
        { id: 214, name: "Fruit Platter", price: 140, description: "Assorted fresh fruits", nutrition: { protein: "3g", carbs: "35g", fat: "1g" } }
    ],
    "Tea House": [
        { id: 215, name: "Masala Chai", price: 30, description: "Spiced Indian tea", nutrition: { protein: "2g", carbs: "10g", fat: "3g" } },
        { id: 216, name: "Green Tea", price: 25, description: "Healthy green tea", nutrition: { protein: "0g", carbs: "1g", fat: "0g" } },
        { id: 217, name: "Herbal Tea", price: 35, description: "Tea with herbal infusion", nutrition: { protein: "0g", carbs: "2g", fat: "0g" } },
        { id: 218, name: "Biscuits", price: 40, description: "Assorted tea biscuits", nutrition: { protein: "3g", carbs: "25g", fat: "8g" } },
        { id: 219, name: "Lemon Tea", price: 30, description: "Tea with lemon", nutrition: { protein: "0g", carbs: "8g", fat: "0g" } }
    ],
    "Waffle House": [
        { id: 220, name: "Classic Waffle", price: 100, description: "Traditional Belgian waffle", nutrition: { protein: "6g", carbs: "40g", fat: "12g" } },
        { id: 221, name: "Blueberry Waffle", price: 120, description: "Waffle with blueberry compote", nutrition: { protein: "6g", carbs: "45g", fat: "12g" } },
        { id: 222, name: "Choco Chip Waffle", price: 130, description: "Waffle with chocolate chips", nutrition: { protein: "7g", carbs: "50g", fat: "15g" } },
        { id: 223, name: "Banana Nut Waffle", price: 140, description: "Waffle with banana and nuts", nutrition: { protein: "8g", carbs: "55g", fat: "18g" } },
        { id: 224, name: "Ice Cream Waffle", price: 150, description: "Waffle with ice cream scoop", nutrition: { protein: "8g", carbs: "60g", fat: "20g" } }
    ],
    "Curry Corner": [
        { id: 225, name: "Chicken Curry", price: 180, description: "Spicy chicken curry", nutrition: { protein: "22g", carbs: "12g", fat: "15g" } },
        { id: 226, name: "Fish Curry", price: 200, description: "Fish in coconut gravy", nutrition: { protein: "25g", carbs: "10g", fat: "12g" } },
        { id: 227, name: "Vegetable Curry", price: 140, description: "Mixed vegetable curry", nutrition: { protein: "8g", carbs: "20g", fat: "10g" } },
        { id: 228, name: "Egg Curry", price: 120, description: "Hard boiled eggs in curry", nutrition: { protein: "15g", carbs: "10g", fat: "12g" } },
        { id: 229, name: "Mutton Curry", price: 250, description: "Rich mutton curry", nutrition: { protein: "30g", carbs: "12g", fat: "20g" } }
    ],
    "Street Food Hub": [
        { id: 230, name: "Vada Pav", price: 40, description: "Indian burger with potato patty", nutrition: { protein: "5g", carbs: "35g", fat: "10g" } },
        { id: 231, name: "Frankie Roll", price: 80, description: "Wrap with fillings", nutrition: { protein: "10g", carbs: "30g", fat: "12g" } },
        { id: 232, name: "Masala Dosa", price: 90, description: "South Indian crepe", nutrition: { protein: "6g", carbs: "45g", fat: "8g" } },
        { id: 233, name: "Pav Bhaji", price: 100, description: "Spiced vegetable mash", nutrition: { protein: "8g", carbs: "40g", fat: "15g" } },
        { id: 234, name: "Chole Bhature", price: 120, description: "Chickpea curry with fried bread", nutrition: { protein: "12g", carbs: "55g", fat: "20g" } }
    ],
    "Healthy Juice": [
        { id: 235, name: "Detox Juice", price: 110, description: "Cleansing vegetable juice", nutrition: { protein: "3g", carbs: "25g", fat: "1g" } },
        { id: 236, name: "Immunity Booster", price: 120, description: "Juice with immunity ingredients", nutrition: { protein: "4g", carbs: "28g", fat: "2g" } },
        { id: 237, name: "Energy Drink", price: 100, description: "Juice for instant energy", nutrition: { protein: "3g", carbs: "30g", fat: "1g" } },
        { id: 238, name: "Skin Glow", price: 130, description: "Juice for healthy skin", nutrition: { protein: "4g", carbs: "32g", fat: "2g" } },
        { id: 239, name: "Digestive Aid", price: 110, description: "Juice for better digestion", nutrition: { protein: "3g", carbs: "26g", fat: "1g" } }
    ],
    "Gourmet Kitchen": [
        { id: 240, name: "Truffle Pasta", price: 280, description: "Pasta with truffle oil", nutrition: { protein: "15g", carbs: "45g", fat: "22g" } },
        { id: 241, name: "Salmon Steak", price: 320, description: "Grilled salmon fillet", nutrition: { protein: "30g", carbs: "5g", fat: "18g" } },
        { id: 242, name: "Risotto", price: 250, description: "Creamy Italian rice", nutrition: { protein: "12g", carbs: "50g", fat: "15g" } },
        { id: 243, name: "Bruschetta", price: 180, description: "Toasted bread with toppings", nutrition: { protein: "6g", carbs: "30g", fat: "10g" } },
        { id: 244, name: "Chocolate Fondant", price: 160, description: "Warm chocolate dessert", nutrition: { protein: "6g", carbs: "40g", fat: "20g" } }
    ],
    "Snack Bar": [
        { id: 245, name: "French Fries", price: 70, description: "Crispy potato fries", nutrition: { protein: "3g", carbs: "35g", fat: "15g" } },
        { id: 246, name: "Onion Rings", price: 80, description: "Battered onion rings", nutrition: { protein: "4g", carbs: "30g", fat: "12g" } },
        { id: 247, name: "Mozzarella Sticks", price: 120, description: "Fried cheese sticks", nutrition: { protein: "12g", carbs: "25g", fat: "18g" } },
        { id: 248, name: "Chicken Wings", price: 180, description: "Spicy chicken wings", nutrition: { protein: "20g", carbs: "10g", fat: "15g" } },
        { id: 249, name: "Potato Wedges", price: 90, description: "Seasoned potato wedges", nutrition: { protein: "4g", carbs: "40g", fat: "12g" } }
    ],
    "South Indian Delight": [
        { id: 250, name: "Idli", price: 60, description: "Steamed rice cakes", nutrition: { protein: "6g", carbs: "30g", fat: "2g" } },
        { id: 251, name: "Vada", price: 50, description: "Fried lentil donut", nutrition: { protein: "5g", carbs: "25g", fat: "10g" } },
        { id: 252, name: "Sambhar", price: 40, description: "Lentil soup", nutrition: { protein: "5g", carbs: "15g", fat: "3g" } },
        { id: 253, name: "Coconut Chutney", price: 30, description: "Coconut dip", nutrition: { protein: "2g", carbs: "8g", fat: "10g" } },
        { id: 254, name: "Filter Coffee", price: 40, description: "South Indian coffee", nutrition: { protein: "2g", carbs: "10g", fat: "5g" } }
    ],
    "North Indian Feast": [
        { id: 255, name: "Butter Chicken", price: 220, description: "Creamy chicken curry", nutrition: { protein: "20g", carbs: "15g", fat: "18g" } },
        { id: 256, name: "Paneer Makhani", price: 200, description: "Cottage cheese in tomato gravy", nutrition: { protein: "15g", carbs: "12g", fat: "15g" } },
        { id: 257, name: "Dal Tadka", price: 120, description: "Tempered lentils", nutrition: { protein: "10g", carbs: "20g", fat: "8g" } },
        { id: 258, name: "Naan", price: 30, description: "Leavened bread", nutrition: { protein: "4g", carbs: "25g", fat: "3g" } },
        { id: 259, name: "Raita", price: 40, description: "Yogurt with vegetables", nutrition: { protein: "4g", carbs: "8g", fat: "5g" } }
    ],
    "Bakery Corner": [
        { id: 260, name: "Croissant", price: 70, description: "Buttery French pastry", nutrition: { protein: "5g", carbs: "25g", fat: "15g" } },
        { id: 261, name: "Danish Pastry", price: 80, description: "Sweet filled pastry", nutrition: { protein: "4g", carbs: "30g", fat: "12g" } },
        { id: 262, name: "Brownie", price: 60, description: "Chocolate brownie", nutrition: { protein: "4g", carbs: "35g", fat: "15g" } },
        { id: 263, name: "Muffin", price: 50, description: "Sweet baked cake", nutrition: { protein: "3g", carbs: "30g", fat: "10g" } },
        { id: 264, name: "Bread Loaf", price: 40, description: "Freshly baked bread", nutrition: { protein: "5g", carbs: "35g", fat: "3g" } }
    ],
    "Fast Food Express": [
        { id: 265, name: "Burger Combo", price: 180, description: "Burger with fries and drink", nutrition: { protein: "20g", carbs: "50g", fat: "25g" } },
        { id: 266, name: "Pizza Slice", price: 100, description: "Large pizza slice", nutrition: { protein: "12g", carbs: "35g", fat: "15g" } },
        { id: 267, name: "Hot Dog", price: 80, description: "Sausage in bun", nutrition: { protein: "10g", carbs: "25g", fat: "12g" } },
        { id: 268, name: "French Fries", price: 60, description: "Crispy potato fries", nutrition: { protein: "3g", carbs: "30g", fat: "12g" } },
        { id: 269, name: "Soft Drink", price: 40, description: "Carbonated beverage", nutrition: { protein: "0g", carbs: "35g", fat: "0g" } }
    ],
    "Soup Kitchen": [
        { id: 270, name: "Tomato Soup", price: 80, description: "Creamy tomato soup", nutrition: { protein: "3g", carbs: "15g", fat: "8g" } },
        { id: 271, name: "Sweet Corn Soup", price: 90, description: "Soup with sweet corn", nutrition: { protein: "4g", carbs: "20g", fat: "5g" } },
        { id: 272, name: "Mushroom Soup", price: 100, description: "Cream of mushroom soup", nutrition: { protein: "5g", carbs: "12g", fat: "10g" } },
        { id: 273, name: "Chicken Noodle Soup", price: 120, description: "Soup with chicken and noodles", nutrition: { protein: "12g", carbs: "18g", fat: "8g" } },
        { id: 274, name: "Vegetable Soup", price: 80, description: "Mixed vegetable soup", nutrition: { protein: "4g", carbs: "15g", fat: "5g" } }
    ],
    "Dessert Paradise": [
        { id: 275, name: "Chocolate Cake", price: 120, description: "Rich chocolate cake", nutrition: { protein: "6g", carbs: "45g", fat: "20g" } },
        { id: 276, name: "Cheesecake", price: 140, description: "Creamy cheesecake", nutrition: { protein: "8g", carbs: "35g", fat: "25g" } },
        { id: 277, name: "Ice Cream Sundae", price: 100, description: "Ice cream with toppings", nutrition: { protein: "5g", carbs: "40g", fat: "15g" } },
        { id: 278, name: "Brownie with Ice Cream", price: 130, description: "Warm brownie with ice cream", nutrition: { protein: "6g", carbs: "50g", fat: "20g" } },
        { id: 279, name: "Fruit Tart", price: 110, description: "Pastry with fruit filling", nutrition: { protein: "4g", carbs: "40g", fat: "15g" } }
    ]
};

// Canteen data with additional details - Updated to 56 canteens
const canteens = [
    { name: "Captain Cuisine", type: "restaurant", description: "Fine dining experience with international cuisine", timings: "11:00 AM - 10:00 PM", location: "West Campus, Block A", rating: 4 },
    { name: "Utopia", type: "cafe", description: "Cozy cafe perfect for studying and light snacks", timings: "8:00 AM - 11:00 PM", location: "Library Building, Ground Floor", rating: 5 },
    { name: "Capitol", type: "restaurant", description: "Traditional meals with a homely feel", timings: "7:00 AM - 9:00 PM", location: "Main Campus, Near Auditorium", rating: 4 },
    { name: "Size Zero", type: "specialty", description: "Healthy and diet-friendly food options", timings: "9:00 AM - 8:00 PM", location: "Sports Complex", rating: 4 },
    { name: "Farki", type: "cafe", description: "Quick bites and beverages for students on the go", timings: "7:30 AM - 10:00 PM", location: "East Campus, Near Hostel", rating: 3 },
    { name: "Belgian Waffle", type: "specialty", description: "Dedicated dessert and waffle shop", timings: "10:00 AM - 9:00 PM", location: "Food Court, Central Plaza", rating: 5 },
    { name: "Cafe Hot Spot", type: "cafe", description: "Trendy spot with coffee and fast food", timings: "8:00 AM - 11:30 PM", location: "Student Center, 1st Floor", rating: 4 },
    { name: "Cafe Appetito", type: "cafe", description: "Italian-inspired cafe with pasta and pizza", timings: "10:00 AM - 10:00 PM", location: "Arts Building, Ground Floor", rating: 4 },
    { name: "La Pinoz Pizza", type: "restaurant", description: "Specialty pizza restaurant with various toppings", timings: "11:00 AM - 11:00 PM", location: "Food Court, Central Plaza", rating: 5 },
    { name: "Chatoree", type: "specialty", description: "Authentic Indian street food and chaat", timings: "12:00 PM - 9:00 PM", location: "East Campus, Near Parking", rating: 4 },
    { name: "Konaseema Ruchulu", type: "restaurant", description: "Andhra cuisine with spicy and flavorful dishes", timings: "11:00 AM - 10:00 PM", location: "South Campus, Block B", rating: 4 },
    { name: "Sri Rudra", type: "restaurant", description: "Pure vegetarian restaurant with South Indian specialties", timings: "7:00 AM - 10:00 PM", location: "Main Campus, Near Temple", rating: 4 },
    { name: "Indian Salt", type: "restaurant", description: "North Indian cuisine with rich gravies and breads", timings: "11:00 AM - 10:30 PM", location: "West Campus, Block C", rating: 5 },
    { name: "Rajwadi Gola", type: "specialty", description: "Refreshing drinks and ice golas", timings: "10:00 AM - 7:00 PM", location: "Sports Complex, Near Pool", rating: 3 },
    { name: "Cafe Bollywood", type: "cafe", description: "Bollywood-themed cafe with Indian fusion food", timings: "9:00 AM - 11:00 PM", location: "Cultural Center", rating: 4 },
    { name: "Krishna Food Canteen", type: "restaurant", description: "Economical meals for students on a budget", timings: "7:00 AM - 9:00 PM", location: "Hostel Area, Building 5", rating: 4 },
    // Additional 40 canteens
    { name: "Campus Brew", type: "cafe", description: "Premium coffee and breakfast items", timings: "7:00 AM - 9:00 PM", location: "Main Campus, Near Library", rating: 4 },
    { name: "Spice Junction", type: "restaurant", description: "Authentic Indian spices and flavors", timings: "11:00 AM - 10:30 PM", location: "North Campus, Block D", rating: 5 },
    { name: "Burger Junction", type: "cafe", description: "Gourmet burgers and shakes", timings: "10:00 AM - 11:00 PM", location: "Food Court, Level 2", rating: 4 },
    { name: "Noodle House", type: "restaurant", description: "Asian noodles and soups", timings: "11:30 AM - 10:00 PM", location: "East Campus, Food Court", rating: 4 },
    { name: "Dosa Point", type: "specialty", description: "South Indian dosas and idlis", timings: "7:30 AM - 9:30 PM", location: "South Campus, Block A", rating: 4 },
    { name: "Juice Bar", type: "specialty", description: "Fresh juices and smoothies", timings: "8:00 AM - 8:00 PM", location: "Sports Complex Entrance", rating: 4 },
    { name: "Sandwich Corner", type: "cafe", description: "Fresh sandwiches and wraps", timings: "8:00 AM - 9:00 PM", location: "Library Cafe Area", rating: 4 },
    { name: "Ice Cream Parlor", type: "specialty", description: "Artisanal ice creams and desserts", timings: "10:00 AM - 10:00 PM", location: "Central Plaza", rating: 5 },
    { name: "Momo Point", type: "specialty", description: "Nepalese dumplings and snacks", timings: "11:00 AM - 9:00 PM", location: "International Food Court", rating: 4 },
    { name: "Pav Bhaji Corner", type: "specialty", description: "Mumbai street food specials", timings: "12:00 PM - 10:00 PM", location: "West Campus, Food Street", rating: 4 },
    { name: "Salad Bar", type: "specialty", description: "Healthy salads and bowls", timings: "9:00 AM - 8:00 PM", location: "Gymnasium Area", rating: 4 },
    { name: "Pizza Palace", type: "restaurant", description: "Wood-fired pizzas and Italian dishes", timings: "11:00 AM - 11:00 PM", location: "Food Court, Level 1", rating: 5 },
    { name: "Chaat Corner", type: "specialty", description: "Indian street snacks and chaats", timings: "11:00 AM - 9:30 PM", location: "East Campus, Near Garden", rating: 4 },
    { name: "Healthy Bites", type: "specialty", description: "Nutritious and balanced meals", timings: "8:00 AM - 8:00 PM", location: "Wellness Center", rating: 4 },
    { name: "Tandoori Hut", type: "restaurant", description: "Clay oven specialties and kebabs", timings: "12:00 PM - 11:00 PM", location: "North Campus, Block E", rating: 5 },
    { name: "Quick Bites", type: "cafe", description: "Snacks and tea for quick breaks", timings: "7:00 AM - 10:00 PM", location: "Academic Block Corridor", rating: 3 },
    { name: "Cold Cafe", type: "cafe", description: "Cold beverages and frozen treats", timings: "9:00 AM - 9:00 PM", location: "Poolside Area", rating: 4 },
    { name: "Mexican Corner", type: "restaurant", description: "Mexican tacos and burritos", timings: "11:00 AM - 10:00 PM", location: "International Cuisine Zone", rating: 4 },
    { name: "Thai Kitchen", type: "restaurant", description: "Authentic Thai curries and noodles", timings: "11:30 AM - 10:00 PM", location: "Asian Food Court", rating: 5 },
    { name: "Mediterranean Delight", type: "restaurant", description: "Mediterranean wraps and salads", timings: "10:00 AM - 9:30 PM", location: "International Food Court", rating: 4 },
    { name: "Korean Kitchen", type: "restaurant", description: "Korean BBQ and traditional dishes", timings: "11:00 AM - 10:00 PM", location: "Asian Food Court", rating: 5 },
    { name: "Sushi Bar", type: "restaurant", description: "Fresh sushi and Japanese cuisine", timings: "11:30 AM - 9:30 PM", location: "International Cuisine Zone", rating: 5 },
    { name: "Breakfast Club", type: "cafe", description: "All-day breakfast and brunch", timings: "6:00 AM - 4:00 PM", location: "Main Campus Entrance", rating: 4 },
    { name: "Tea House", type: "cafe", description: "Wide variety of teas and snacks", timings: "7:00 AM - 10:00 PM", location: "Library Basement", rating: 4 },
    { name: "Waffle House", type: "specialty", description: "Belgian waffles with toppings", timings: "9:00 AM - 9:00 PM", location: "Food Court, Dessert Section", rating: 5 },
    { name: "Curry Corner", type: "restaurant", description: "Regional Indian curries", timings: "11:00 AM - 10:00 PM", location: "North Campus, Block F", rating: 4 },
    { name: "Street Food Hub", type: "specialty", description: "Popular Indian street foods", timings: "10:00 AM - 10:00 PM", location: "Campus Food Street", rating: 4 },
    { name: "Healthy Juice", type: "specialty", description: "Detox and wellness juices", timings: "8:00 AM - 7:00 PM", location: "Wellness Center Entrance", rating: 4 },
    { name: "Gourmet Kitchen", type: "restaurant", description: "Fine dining and gourmet dishes", timings: "6:00 PM - 11:00 PM", location: "Premium Dining Area", rating: 5 },
    { name: "Snack Bar", type: "cafe", description: "Quick snacks and beverages", timings: "8:00 AM - 10:00 PM", location: "Sports Complex Cafe", rating: 3 },
    { name: "South Indian Delight", type: "restaurant", description: "Traditional South Indian meals", timings: "7:00 AM - 10:00 PM", location: "South Campus, Food Court", rating: 4 },
    { name: "North Indian Feast", type: "restaurant", description: "Rich North Indian cuisine", timings: "11:00 AM - 10:30 PM", location: "North Campus, Dining Hall", rating: 5 },
    { name: "Bakery Corner", type: "cafe", description: "Freshly baked goods and pastries", timings: "6:00 AM - 9:00 PM", location: "Main Campus Bakery", rating: 4 },
    { name: "Fast Food Express", type: "cafe", description: "Quick service fast food", timings: "10:00 AM - 11:00 PM", location: "Student Center Ground Floor", rating: 3 },
    { name: "Soup Kitchen", type: "specialty", description: "Hearty soups and breads", timings: "11:00 AM - 8:00 PM", location: "Library Cafe Extension", rating: 4 },
    { name: "Dessert Paradise", type: "specialty", description: "Decadent desserts and sweets", timings: "10:00 AM - 10:00 PM", location: "Food Court, Sweet Zone", rating: 5 }
];

// Create a function to get image path for each canteen
function getCanteenImagePath(canteenName, index) {
    // You can use either:
    // Option 1: Image numbered by position (1.jpg, 2.jpg, etc.)
    // return `images/${index + 1}.jpg`;
    // Option 2: Image named by canteen name (Captain Cuisine.jpg, Utopia.jpg, etc.)
    // return `images/${canteenName}.jpg`;
    // Currently using Option 1 (recommended)
    return `images/${index + 1}.jpg`;
}

// Shopping cart functionality
let cart = JSON.parse(localStorage.getItem('collegeCanteenCart')) || [];

// DOM Elements
const canteenContainer = document.getElementById('canteen-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const canteenCount = document.getElementById('canteen-count');
const modal = document.getElementById('canteen-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTimings = document.getElementById('modal-timings');
const modalLocation = document.getElementById('modal-location');
const modalMenu = document.getElementById('modal-menu');

// Cart elements
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeCartModal = document.getElementById('close-cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const clearCartBtn = document.getElementById('clear-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');

// Toast element
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderCanteens(canteens);
    
    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterCanteens(filter);
        });
    });
    
    // Search input event listener
    searchInput.addEventListener('input', function() {
        filterCanteensBySearch(this.value);
    });
    
    // Close modal event listener
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close cart modal event listener
    closeCartModal.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    // Cart icon click event
    cartIcon.addEventListener('click', function() {
        openCartModal();
    });
    
    // Clear cart button
    clearCartBtn.addEventListener('click', function() {
        clearCart();
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        checkout();
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});

// Render canteens to the page
function renderCanteens(canteenList) {
    canteenContainer.innerHTML = '';
    
    if (canteenList.length === 0) {
        canteenContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No canteens found</h3>
                <p>Try adjusting your search or filter to find what you're looking for.</p>
            </div>
        `;
        canteenCount.textContent = '0';
        return;
    }
    
    canteenCount.textContent = canteenList.length;
    
    canteenList.forEach((canteen, index) => {
        // Get color based on canteen type
        let color;
        switch(canteen.type) {
            case 'cafe': color = '#5d4037'; break;
            case 'restaurant': color = '#2e7d32'; break;
            case 'specialty': color = '#6a1b9a'; break;
            default: color = '#283593';
        }
        
        // Get menu items for this canteen
        const menuItems = canteenMenus[canteen.name] || [];
        const menuPreview = menuItems.slice(0, 3); // Show first 3 items as preview
        
        // Generate star rating HTML
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= canteen.rating) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        
        // Get the image path for this canteen
        const imagePath = getCanteenImagePath(canteen.name, index);
        
        const card = document.createElement('div');
        card.className = 'canteen-card';
        card.innerHTML = `
            <div class="card-header" style="background-color: transparent;">
                <img src="${imagePath}" alt="${canteen.name}" class="canteen-image">
            </div>
            <div class="card-body">
                <h3>${canteen.name}</h3>
                <p>${canteen.description}</p>
                <div class="menu-items-preview">
                    ${menuPreview.map(item => `<span class="menu-tag">${item.name}</span>`).join('')}
                    ${menuItems.length > 3 ? `<span class="menu-tag">+${menuItems.length - 3} more</span>` : ''}
                </div>
                <div class="rating">
                    ${stars}
                </div>
            </div>
            <div class="card-footer">
                <span><i class="fas fa-map-marker-alt"></i> ${canteen.location}</span>
                <button class="view-btn" data-name="${canteen.name}">View Menu</button>
            </div>
        `;
        
        // Add event listener to the view button
        const viewBtn = card.querySelector('.view-btn');
        viewBtn.addEventListener('click', function() {
            showCanteenMenu(canteen.name);
        });
        
        canteenContainer.appendChild(card);
    });
}

// Filter canteens by type
function filterCanteens(filterType) {
    let filteredCanteens;
    
    if (filterType === 'all') {
        filteredCanteens = canteens;
    } else {
        filteredCanteens = canteens.filter(canteen => canteen.type === filterType);
    }
    
    // Apply search filter if there's a search term
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredCanteens = filteredCanteens.filter(canteen => {
            const menuItems = canteenMenus[canteen.name] || [];
            const hasMatchingMenuItem = menuItems.some(item => 
                item.name.toLowerCase().includes(searchTerm) || 
                item.description.toLowerCase().includes(searchTerm)
            );
            
            return canteen.name.toLowerCase().includes(searchTerm) || 
                   canteen.description.toLowerCase().includes(searchTerm) ||
                   hasMatchingMenuItem;
        });
    }
    
    renderCanteens(filteredCanteens);
}

// Filter canteens by search term
function filterCanteensBySearch(searchTerm) {
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    
    let filteredCanteens;
    if (activeFilter === 'all') {
        filteredCanteens = canteens;
    } else {
        filteredCanteens = canteens.filter(canteen => canteen.type === activeFilter);
    }
    
    if (searchTerm) {
        filteredCanteens = filteredCanteens.filter(canteen => {
            const menuItems = canteenMenus[canteen.name] || [];
            const hasMatchingMenuItem = menuItems.some(item => 
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            
            return canteen.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   canteen.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   hasMatchingMenuItem;
        });
    }
    
    renderCanteens(filteredCanteens);
}

// Show canteen menu in modal
function showCanteenMenu(canteenName) {
    const canteen = canteens.find(c => c.name === canteenName);
    
    // Load menu from localStorage if shopkeeper has edited it
    const shopMenuKey = `shop_menu_${canteenName}`;
    let menuItems = JSON.parse(localStorage.getItem(shopMenuKey) || '[]');
    
    // If no custom menu exists, use default menu
    if (menuItems.length === 0) {
        menuItems = canteenMenus[canteenName] || [];
    }
    
    if (canteen) {
        modalTitle.textContent = canteen.name;
        modalDescription.textContent = canteen.description;
        modalTimings.textContent = canteen.timings;
        modalLocation.textContent = canteen.location;
        
        // Generate menu HTML
        let menuHTML = '';
        
        if (menuItems.length > 0) {
            menuHTML = `
                <div class="menu-section">
                    <h4>Menu Items (${menuItems.length} items)</h4>
                    <div style="background: #e3f2fd; padding: 10px; border-radius: 5px; margin-bottom: 15px; font-size: 0.85rem; color: #1565c0;">
                        <i class="fas fa-sync-alt"></i> Menu updated by shopkeeper in real-time
                    </div>
                    ${menuItems.map(item => {
                        const cartItem = cart.find(ci => ci.id === item.id);
                        const quantity = cartItem ? cartItem.quantity : 0;
                        
                        return `
                            <div class="menu-item">
                                <div class="menu-item-info">
                                    <div class="menu-item-name">${item.name}</div>
                                    <div class="menu-item-desc">${item.description || 'No description available'}</div>
                                    ${item.nutrition ? `
                                        <div class="menu-item-nutrition">
                                            <span><strong>Protein:</strong> ${item.nutrition.protein}</span>
                                            <span><strong>Carbs:</strong> ${item.nutrition.carbs}</span>
                                            <span><strong>Fat:</strong> ${item.nutrition.fat}</span>
                                        </div>
                                    ` : ''}
                                </div>
                                <div class="menu-item-price">₹${item.price}</div>
                                <div class="menu-item-actions">
                                    ${quantity > 0 ? `
                                        <div class="quantity-controls">
                                            <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                                            <span class="quantity">${quantity}</span>
                                            <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                                        </div>
                                    ` : ''}
                                    <button class="add-to-cart-btn ${quantity > 0 ? 'added' : ''}" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-canteen="${canteenName}">
                                        <i class="fas fa-${quantity > 0 ? 'check' : 'cart-plus'}"></i>
                                        ${quantity > 0 ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else {
            menuHTML = `
                <div class="menu-section">
                    <h4>Menu</h4>
                    <p>Menu information is currently unavailable for this canteen.</p>
                </div>
            `;
        }
        
        modalMenu.innerHTML = menuHTML;
        
        // Add event listeners to the buttons in the menu modal
        const addToCartButtons = modalMenu.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const name = this.getAttribute('data-name');
                const price = parseInt(this.getAttribute('data-price'));
                const canteen = this.getAttribute('data-canteen');
                
                addToCart(id, name, price, canteen);
                
                // Update the button state
                const cartItem = cart.find(item => item.id === id);
                if (cartItem) {
                    this.innerHTML = `<i class="fas fa-check"></i> Added to Cart`;
                    this.classList.add('added');
                    
                    // Show quantity controls
                    const menuItem = this.closest('.menu-item');
                    const quantityControls = menuItem.querySelector('.quantity-controls');
                    if (!quantityControls) {
                        const actionsDiv = menuItem.querySelector('.menu-item-actions');
                        const quantityHTML = `
                            <div class="quantity-controls">
                                <button class="quantity-btn decrease-btn" data-id="${id}">-</button>
                                <span class="quantity">${cartItem.quantity}</span>
                                <button class="quantity-btn increase-btn" data-id="${id}">+</button>
                            </div>
                        `;
                        actionsDiv.insertAdjacentHTML('afterbegin', quantityHTML);
                        
                        // Add event listeners to the new buttons
                        const decreaseBtn = actionsDiv.querySelector('.decrease-btn');
                        const increaseBtn = actionsDiv.querySelector('.increase-btn');
                        
                        decreaseBtn.addEventListener('click', function() {
                            decreaseQuantity(id);
                        });
                        
                        increaseBtn.addEventListener('click', function() {
                            increaseQuantity(id);
                        });
                    } else {
                        const quantitySpan = quantityControls.querySelector('.quantity');
                        quantitySpan.textContent = cartItem.quantity;
                    }
                }
            });
        });
        
        // Add event listeners to quantity buttons if they exist
        const decreaseButtons = modalMenu.querySelectorAll('.decrease-btn');
        const increaseButtons = modalMenu.querySelectorAll('.increase-btn');
        
        decreaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                decreaseQuantity(id);
            });
        });
        
        increaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                increaseQuantity(id);
            });
        });
        
        modal.style.display = 'flex';
    }
}

// Cart functionality
function addToCart(id, name, price, canteen) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            canteen: canteen,
            quantity: 1
        });
    }
    
    updateCart();
    showToast(`${name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
        updateCart();
        
        // Update quantity in menu modal if open
        const quantitySpan = document.querySelector(`.decrease-btn[data-id="${id}"]`)?.nextElementSibling;
        if (quantitySpan) {
            quantitySpan.textContent = item.quantity;
        }
    }
}

function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            // Remove item if quantity becomes 0
            removeFromCart(id);
            
            // Update button in menu modal if open
            const addButton = document.querySelector(`.add-to-cart-btn[data-id="${id}"]`);
            if (addButton) {
                addButton.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
                addButton.classList.remove('added');
                
                // Remove quantity controls
                const quantityControls = addButton.closest('.menu-item').querySelector('.quantity-controls');
                if (quantityControls) {
                    quantityControls.remove();
                }
            }
            return;
        }
        
        updateCart();
        
        // Update quantity in menu modal if open
        const quantitySpan = document.querySelector(`.decrease-btn[data-id="${id}"]`)?.nextElementSibling;
        if (quantitySpan) {
            quantitySpan.textContent = item.quantity;
        }
    }
}

function updateCart() {
    // Save to localStorage
    localStorage.setItem('collegeCanteenCart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // If cart modal is open, update it
    if (cartModal.style.display === 'flex') {
        renderCartItems();
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function openCartModal() {
    renderCartItems();
    cartModal.style.display = 'flex';
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add items from the menu to get started!</p>
            </div>
        `;
        cartTotalPrice.textContent = '₹0';
        return;
    }
    
    let totalPrice = 0;
    let cartHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <p>${item.canteen}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease-cart-btn" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase-cart-btn" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-total">₹${itemTotal}</div>
                    <button class="remove-item-btn" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = cartHTML;
    cartTotalPrice.textContent = `₹${totalPrice}`;
    
    // Add event listeners to cart buttons
    const decreaseButtons = cartItems.querySelectorAll('.decrease-cart-btn');
    const increaseButtons = cartItems.querySelectorAll('.increase-cart-btn');
    const removeButtons = cartItems.querySelectorAll('.remove-item-btn');
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            decreaseQuantity(id);
        });
    });
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            increaseQuantity(id);
        });
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        updateCart();
        showToast('Cart cleared!');
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add items before checkout.');
        return;
    }
    
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const orderSummary = cart.map(item => 
        `${item.quantity}x ${item.name} (${item.canteen}) - ₹${item.price * item.quantity}`
    ).join('\n');
    
    alert(`Order Summary:\n\n${orderSummary}\n\nTotal: ₹${totalPrice}\n\nYour order has been placed! It will be ready for pickup in 20-30 minutes.`);
    
    // Clear cart after successful checkout
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}