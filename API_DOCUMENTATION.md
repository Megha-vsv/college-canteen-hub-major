# College Canteen Hub - Backend API Documentation

## Overview
Complete backend server for the College Canteen Hub ordering system built with Node.js and Express.

**Version:** 1.0.0  
**Server Port:** 3000  
**Base URL:** `http://localhost:3000`

---

## Table of Contents
1. [Installation & Setup](#installation--setup)
2. [Authentication](#authentication)
3. [Orders](#orders)
4. [Menus](#menus)
5. [Analytics](#analytics)
6. [Payments](#payments)
7. [Admin](#admin)
8. [Data Models](#data-models)
9. [Error Handling](#error-handling)

---

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation Steps
```bash
# Navigate to project directory
cd hardware

# Install dependencies
npm install

# Start the server
npm start

# For development with auto-reload
npm run dev
```

The server will start on `http://localhost:3000`

---

## Authentication

### 1. User Registration
**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe",
  "role": "customer"
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "1234567890",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "customer"
  }
}
```

**Response (Error - 400):**
```json
{
  "success": false,
  "message": "Email already registered"
}
```

**Roles:** customer | shopkeeper | admin

---

### 2. User Login
**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "dXNlckBleGFtcGxlLmNvbToxNjk0NTMyMjEwMDA=",
  "user": {
    "id": "1234567890",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "customer"
  }
}
```

---

## Orders

### 1. Create New Order
**Endpoint:** `POST /api/orders`

**Request Body:**
```json
{
  "userId": "1234567890",
  "email": "user@example.com",
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
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "Order placed successfully",
  "order": {
    "orderId": "ORD-1694532210000",
    "userId": "1234567890",
    "email": "user@example.com",
    "phone": "9876543210",
    "items": [...],
    "totalPrice": 740,
    "deliveryAddress": "Room 123, Hostel A, Campus",
    "status": "pending",
    "orderTime": "2024-01-28T10:30:10.000Z",
    "estimatedDeliveryTime": "2024-01-28T11:00:10.000Z"
  }
}
```

---

### 2. Get User Orders
**Endpoint:** `GET /api/orders/:email`

**URL Parameters:**
- `email` (required): User's email address

**Response (Success - 200):**
```json
{
  "success": true,
  "orders": [
    {
      "orderId": "ORD-1694532210000",
      "email": "user@example.com",
      "status": "pending",
      "totalPrice": 740,
      "orderTime": "2024-01-28T10:30:10.000Z"
    }
  ]
}
```

---

### 3. Get All Orders (Admin Only)
**Endpoint:** `GET /api/orders`

**Response (Success - 200):**
```json
{
  "success": true,
  "totalOrders": 150,
  "orders": [...]
}
```

---

### 4. Update Order Status
**Endpoint:** `PUT /api/orders/:orderId`

**URL Parameters:**
- `orderId` (required): Order ID

**Request Body:**
```json
{
  "status": "confirmed"
}
```

**Status Options:** pending | confirmed | preparing | ready | delivered | cancelled

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Order updated successfully",
  "order": {
    "orderId": "ORD-1694532210000",
    "status": "confirmed",
    "updatedAt": "2024-01-28T10:35:00.000Z"
  }
}
```

---

### 5. Cancel Order
**Endpoint:** `DELETE /api/orders/:orderId`

**URL Parameters:**
- `orderId` (required): Order ID

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Order cancelled successfully",
  "order": {
    "orderId": "ORD-1694532210000",
    "status": "cancelled",
    "cancelledAt": "2024-01-28T10:40:00.000Z"
  }
}
```

---

## Menus

### 1. Get Canteen Menu
**Endpoint:** `GET /api/menus/:canteenName`

**URL Parameters:**
- `canteenName` (required): Name of the canteen

**Response (Success - 200):**
```json
{
  "success": true,
  "menu": [
    {
      "id": 1,
      "name": "Butter Chicken",
      "price": 280,
      "description": "Tender chicken in rich tomato and butter gravy",
      "nutrition": {
        "protein": "22g",
        "carbs": "12g",
        "fat": "18g"
      }
    }
  ]
}
```

---

### 2. Add Menu Item (Shopkeeper Only)
**Endpoint:** `POST /api/menus/:canteenName/items`

**URL Parameters:**
- `canteenName` (required): Name of the canteen

**Request Body:**
```json
{
  "name": "New Dish",
  "price": 250,
  "description": "A delicious new dish",
  "nutrition": {
    "protein": "20g",
    "carbs": "30g",
    "fat": "15g"
  }
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "Menu item added successfully",
  "item": {
    "id": 1694532210000,
    "name": "New Dish",
    "price": 250,
    "description": "A delicious new dish",
    "nutrition": {
      "protein": "20g",
      "carbs": "30g",
      "fat": "15g"
    }
  }
}
```

---

### 3. Update Menu (Shopkeeper Only)
**Endpoint:** `PUT /api/menus/:canteenName`

**Request Body:**
```json
{
  "items": [
    {
      "id": 1,
      "name": "Butter Chicken",
      "price": 300,
      "description": "Updated description"
    }
  ]
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Menu updated successfully",
  "menu": {
    "canteenName": "Captain Cuisine",
    "items": [...],
    "updatedAt": "2024-01-28T10:30:00.000Z"
  }
}
```

---

### 4. Delete Menu Item (Shopkeeper Only)
**Endpoint:** `DELETE /api/menus/:canteenName/items/:itemId`

**URL Parameters:**
- `canteenName` (required): Name of the canteen
- `itemId` (required): Item ID to delete

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Menu item deleted successfully",
  "item": {
    "id": 1,
    "name": "Butter Chicken",
    "price": 280
  }
}
```

---

## Analytics

### 1. Order Statistics
**Endpoint:** `GET /api/analytics/orders`

**Response (Success - 200):**
```json
{
  "success": true,
  "stats": {
    "totalOrders": 150,
    "totalRevenue": 45000,
    "ordersToday": 25,
    "ordersByStatus": {
      "pending": 5,
      "confirmed": 8,
      "preparing": 7,
      "ready": 3,
      "delivered": 120,
      "cancelled": 7
    },
    "averageOrderValue": 300
  }
}
```

---

### 2. User Statistics
**Endpoint:** `GET /api/analytics/users`

**Response (Success - 200):**
```json
{
  "success": true,
  "stats": {
    "totalUsers": 500,
    "customerCount": 450,
    "shopkeeperCount": 40,
    "adminCount": 10
  }
}
```

---

## Payments

### 1. Process Payment
**Endpoint:** `POST /api/payment/process`

**Request Body:**
```json
{
  "orderId": "ORD-1694532210000",
  "amount": 740,
  "method": "upi"
}
```

**Payment Methods:** upi | card | netbanking | wallet

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Payment processed successfully",
  "paymentId": "PAY-1694532215000",
  "orderId": "ORD-1694532210000",
  "amount": 740,
  "method": "upi",
  "timestamp": "2024-01-28T10:30:15.000Z"
}
```

**Response (Error - 400):**
```json
{
  "success": false,
  "message": "Payment failed. Please try again.",
  "error": "PAYMENT_DECLINED"
}
```

---

## Admin

### 1. Get All Users (Admin Only)
**Endpoint:** `GET /api/admin/users`

**Response (Success - 200):**
```json
{
  "success": true,
  "totalUsers": 500,
  "users": [
    {
      "id": "1234567890",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "customer",
      "createdAt": "2024-01-28T10:00:00.000Z",
      "status": "active"
    }
  ]
}
```

---

### 2. Update User Status (Admin Only)
**Endpoint:** `PUT /api/admin/users/:userId`

**URL Parameters:**
- `userId` (required): User ID

**Request Body:**
```json
{
  "status": "inactive",
  "role": "shopkeeper"
}
```

**Status Options:** active | inactive | suspended

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "User updated successfully",
  "user": {
    "id": "1234567890",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "shopkeeper",
    "status": "inactive"
  }
}
```

---

## Data Models

### User Model
```json
{
  "id": "string (unique timestamp-based)",
  "email": "string (required)",
  "password": "string (required)",
  "name": "string (required)",
  "role": "string (customer|shopkeeper|admin)",
  "createdAt": "ISO 8601 timestamp",
  "status": "string (active|inactive|suspended)"
}
```

### Order Model
```json
{
  "orderId": "string (unique ORD-timestamp)",
  "userId": "string (optional)",
  "email": "string (required)",
  "phone": "string",
  "items": [
    {
      "id": "number",
      "name": "string",
      "price": "number",
      "quantity": "number",
      "canteen": "string"
    }
  ],
  "totalPrice": "number",
  "deliveryAddress": "string",
  "status": "string (pending|confirmed|preparing|ready|delivered|cancelled)",
  "orderTime": "ISO 8601 timestamp",
  "estimatedDeliveryTime": "ISO 8601 timestamp",
  "updatedAt": "ISO 8601 timestamp (optional)",
  "cancelledAt": "ISO 8601 timestamp (optional)"
}
```

### Menu Item Model
```json
{
  "id": "number (unique timestamp-based)",
  "name": "string (required)",
  "price": "number (required)",
  "description": "string",
  "nutrition": {
    "protein": "string",
    "carbs": "string",
    "fat": "string"
  }
}
```

### Menu Model
```json
{
  "canteenName": "string (unique)",
  "items": "[Menu Item Model]",
  "updatedAt": "ISO 8601 timestamp"
}
```

---

## Error Handling

### Common Error Responses

**400 Bad Request:**
```json
{
  "success": false,
  "message": "Email and password are required"
}
```

**401 Unauthorized:**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

**404 Not Found:**
```json
{
  "success": false,
  "message": "Order not found"
}
```

**500 Internal Server Error:**
```json
{
  "success": false,
  "message": "Server error during registration",
  "error": "Error details"
}
```

---

## File Structure

```
hardware/
├── server.js              # Main backend server
├── package.json           # Dependencies and scripts
├── API_DOCUMENTATION.md   # This file
├── data/                  # Data storage (created automatically)
│   ├── users.json         # User accounts
│   ├── orders.json        # Order history
│   └── menus.json         # Canteen menus
├── index.html             # Home page
├── login.html             # Login/Register
├── admin.html             # Admin dashboard
├── shopkeeper.html        # Shopkeeper dashboard
├── script.js              # Frontend JavaScript
├── style.css              # Frontend styles
└── CONNECTED_SYSTEM.md    # System documentation
```

---

## Integration with Frontend

### Example JavaScript Fetch Calls

**Register User:**
```javascript
fetch('http://localhost:3000/api/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123',
    name: 'John Doe',
    role: 'customer'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

**Place Order:**
```javascript
fetch('http://localhost:3000/api/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    items: cart,
    totalPrice: totalAmount,
    deliveryAddress: 'Room 123, Hostel A'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

---

## Security Notes

⚠️ **Important:** This is a development backend. For production:
1. Hash passwords using bcrypt
2. Implement JWT authentication
3. Add rate limiting
4. Implement database (MongoDB, PostgreSQL, etc.)
5. Add input validation and sanitization
6. Use HTTPS only
7. Implement proper error logging
8. Add request logging middleware

---

## Testing the API

You can test the API using tools like:
- **Postman** - GUI API testing tool
- **cURL** - Command-line tool
- **Insomnia** - Alternative API client
- **Thunder Client** - VS Code extension

---

## Support & Contact

For issues, questions, or contributions:
- Check the CONNECTED_SYSTEM.md for system overview
- Review error messages and HTTP status codes
- Ensure all required fields are provided in requests

---

**Last Updated:** January 28, 2024  
**Version:** 1.0.0
