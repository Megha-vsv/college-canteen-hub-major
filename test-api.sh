#!/usr/bin/env bash

# ============================================
# COLLEGE CANTEEN HUB - API TEST SUITE
# ============================================
# Test all backend endpoints using curl
# Make sure server is running on port 3000
# 
# Usage: bash test-api.sh
# Or copy individual commands to terminal

BASE_URL="http://localhost:3000"

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║   College Canteen Hub - API Test Suite                   ║"
echo "║   Testing Backend Endpoints                              ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# ============================================
# COLOR CODES FOR OUTPUT
# ============================================
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ============================================
# TEST 1: USER REGISTRATION
# ============================================
echo -e "${BLUE}TEST 1: User Registration${NC}"
echo "POST /api/auth/register"
echo "Creating a new user account..."
echo ""

curl -X POST "$BASE_URL/api/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "testuser@example.com",
    "password": "password123",
    "name": "Test User",
    "role": "customer"
  }' | json_pp

echo ""
echo -e "${GREEN}✓ Registration test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 2: USER LOGIN
# ============================================
echo -e "${BLUE}TEST 2: User Login${NC}"
echo "POST /api/auth/login"
echo "Logging in with the created user..."
echo ""

curl -X POST "$BASE_URL/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "testuser@example.com",
    "password": "password123"
  }' | json_pp

echo ""
echo -e "${GREEN}✓ Login test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 3: CREATE ORDER
# ============================================
echo -e "${BLUE}TEST 3: Create Order${NC}"
echo "POST /api/orders"
echo "Placing a new order..."
echo ""

curl -X POST "$BASE_URL/api/orders" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "testuser@example.com",
    "phone": "9876543210",
    "items": [
      {
        "id": 1,
        "name": "Butter Chicken",
        "price": 280,
        "quantity": 2,
        "canteen": "Captain Cuisine"
      },
      {
        "id": 3,
        "name": "Veg Biryani",
        "price": 180,
        "quantity": 1,
        "canteen": "Captain Cuisine"
      }
    ],
    "totalPrice": 740,
    "deliveryAddress": "Room 123, Hostel A, Campus"
  }' | json_pp

echo ""
echo -e "${GREEN}✓ Order creation test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 4: GET USER ORDERS
# ============================================
echo -e "${BLUE}TEST 4: Get User Orders${NC}"
echo "GET /api/orders/:email"
echo "Retrieving all orders for the user..."
echo ""

curl -X GET "$BASE_URL/api/orders/testuser@example.com" \
  -H "Content-Type: application/json" | json_pp

echo ""
echo -e "${GREEN}✓ Get user orders test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 5: GET ALL ORDERS (ADMIN)
# ============================================
echo -e "${BLUE}TEST 5: Get All Orders (Admin)${NC}"
echo "GET /api/orders"
echo "Retrieving all orders in the system..."
echo ""

curl -X GET "$BASE_URL/api/orders" \
  -H "Content-Type: application/json" | json_pp

echo ""
echo -e "${GREEN}✓ Get all orders test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 6: ADD MENU ITEM
# ============================================
echo -e "${BLUE}TEST 6: Add Menu Item (Shopkeeper)${NC}"
echo "POST /api/menus/:canteenName/items"
echo "Adding a new menu item..."
echo ""

curl -X POST "$BASE_URL/api/menus/Captain%20Cuisine/items" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Special Paneer Dish",
    "price": 320,
    "description": "Chef special paneer preparation",
    "nutrition": {
      "protein": "20g",
      "carbs": "25g",
      "fat": "18g"
    }
  }' | json_pp

echo ""
echo -e "${GREEN}✓ Add menu item test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 7: GET MENU
# ============================================
echo -e "${BLUE}TEST 7: Get Canteen Menu${NC}"
echo "GET /api/menus/:canteenName"
echo "Retrieving menu for a canteen..."
echo ""

curl -X GET "$BASE_URL/api/menus/Captain%20Cuisine" \
  -H "Content-Type: application/json" | json_pp

echo ""
echo -e "${GREEN}✓ Get menu test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 8: PROCESS PAYMENT
# ============================================
echo -e "${BLUE}TEST 8: Process Payment${NC}"
echo "POST /api/payment/process"
echo "Processing a payment (mock)..."
echo ""

# First, get an order ID from previous test
echo "Note: Replace ORD-ID with actual order ID from create order test"
echo ""

curl -X POST "$BASE_URL/api/payment/process" \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "ORD-1694532210000",
    "amount": 740,
    "method": "upi"
  }' | json_pp

echo ""
echo -e "${GREEN}✓ Payment processing test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 9: UPDATE ORDER STATUS
# ============================================
echo -e "${BLUE}TEST 9: Update Order Status${NC}"
echo "PUT /api/orders/:orderId"
echo "Updating order status..."
echo ""

echo "Note: Replace ORD-ID with actual order ID"
echo ""

curl -X PUT "$BASE_URL/api/orders/ORD-1694532210000" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "confirmed"
  }' | json_pp

echo ""
echo -e "${GREEN}✓ Update order status test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 10: GET ORDER ANALYTICS
# ============================================
echo -e "${BLUE}TEST 10: Get Order Analytics${NC}"
echo "GET /api/analytics/orders"
echo "Retrieving order statistics..."
echo ""

curl -X GET "$BASE_URL/api/analytics/orders" \
  -H "Content-Type: application/json" | json_pp

echo ""
echo -e "${GREEN}✓ Order analytics test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 11: GET USER ANALYTICS
# ============================================
echo -e "${BLUE}TEST 11: Get User Analytics${NC}"
echo "GET /api/analytics/users"
echo "Retrieving user statistics..."
echo ""

curl -X GET "$BASE_URL/api/analytics/users" \
  -H "Content-Type: application/json" | json_pp

echo ""
echo -e "${GREEN}✓ User analytics test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 12: GET ALL USERS (ADMIN)
# ============================================
echo -e "${BLUE}TEST 12: Get All Users (Admin)${NC}"
echo "GET /api/admin/users"
echo "Retrieving all users..."
echo ""

curl -X GET "$BASE_URL/api/admin/users" \
  -H "Content-Type: application/json" | json_pp

echo ""
echo -e "${GREEN}✓ Get all users test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 13: ERROR TEST - Invalid Email
# ============================================
echo -e "${BLUE}TEST 13: Error Handling - Invalid Login${NC}"
echo "POST /api/auth/login"
echo "Testing with invalid credentials..."
echo ""

curl -X POST "$BASE_URL/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "wrong@example.com",
    "password": "wrongpassword"
  }' | json_pp

echo ""
echo -e "${GREEN}✓ Error handling test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 14: ERROR TEST - Missing Fields
# ============================================
echo -e "${BLUE}TEST 14: Error Handling - Missing Fields${NC}"
echo "POST /api/orders"
echo "Testing with missing required fields..."
echo ""

curl -X POST "$BASE_URL/api/orders" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com"
  }' | json_pp

echo ""
echo -e "${GREEN}✓ Missing fields error test completed${NC}"
echo "---"
echo ""

# ============================================
# TEST 15: 404 NOT FOUND
# ============================================
echo -e "${BLUE}TEST 15: Error Handling - 404 Not Found${NC}"
echo "GET /api/invalid-endpoint"
echo "Testing non-existent route..."
echo ""

curl -X GET "$BASE_URL/api/invalid-endpoint" \
  -H "Content-Type: application/json" | json_pp

echo ""
echo -e "${GREEN}✓ 404 error test completed${NC}"
echo "---"
echo ""

# ============================================
# SUMMARY
# ============================================
echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║   API Test Suite Completed                               ║"
echo "║   All 15 tests executed                                  ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""
echo "Next Steps:"
echo "1. Check the JSON responses above"
echo "2. Verify data is stored in data/ folder"
echo "3. Test with Postman or Thunder Client GUI"
echo "4. Integration test with frontend (index.html)"
echo ""
