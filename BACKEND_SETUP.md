# College Canteen Hub - Setup & Quick Start Guide

## 📋 Project Overview

This is a **complete college canteen ordering system** with:
- ✅ Frontend (HTML, CSS, JavaScript) - Already built
- ✅ Backend (Node.js + Express) - **Now added**
- ✅ Database (JSON-based file storage) - Auto-created
- ✅ Admin Dashboard - Ready to use
- ✅ Shopkeeper Panel - Ready to use
- ✅ API Documentation - Complete

---

## 🚀 Quick Start (5 minutes)

### Step 1: Install Node.js
Download from [nodejs.org](https://nodejs.org/) (v14 or higher)

### Step 2: Install Dependencies
```bash
cd c:\Users\vivek\OneDrive\hardware
npm install
```

### Step 3: Start the Backend Server
```bash
npm start
```

You should see:
```
╔═══════════════════════════════════════════════╗
║  College Canteen Hub - Backend Server         ║
║  Server running on http://localhost:3000      ║
║  Version 1.0.0                                ║
╚═══════════════════════════════════════════════╝
```

### Step 4: Open Frontend
Open `index.html` in your browser (or run a local server)

---

## 📁 What's New (Backend Files)

| File | Purpose |
|------|---------|
| **server.js** | Main backend server with all API endpoints |
| **package.json** | Node.js dependencies and scripts |
| **api-helper.js** | Frontend integration helper class |
| **API_DOCUMENTATION.md** | Complete API reference |
| **BACKEND_SETUP.md** | This file - Quick start guide |
| **data/** (auto-created) | Folder containing JSON data files |

---

## 🔧 Backend Architecture

```
Backend (Node.js + Express)
├── Authentication (Login/Register)
├── Order Management (Create, Update, Cancel)
├── Menu Management (Add, Edit, Delete items)
├── Payment Processing (Mock payment)
├── Analytics (Orders & Users stats)
└── Admin Features (User management)

Data Storage (JSON Files)
├── users.json (User accounts)
├── orders.json (Order history)
└── menus.json (Canteen menus)
```

---

## 📡 Available Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/:email` - Get user orders
- `GET /api/orders` - Get all orders (Admin)
- `PUT /api/orders/:orderId` - Update order status
- `DELETE /api/orders/:orderId` - Cancel order

### Menus
- `GET /api/menus/:canteenName` - Get menu
- `POST /api/menus/:canteenName/items` - Add item
- `PUT /api/menus/:canteenName` - Update menu
- `DELETE /api/menus/:canteenName/items/:itemId` - Delete item

### Analytics
- `GET /api/analytics/orders` - Order statistics
- `GET /api/analytics/users` - User statistics

### Payments
- `POST /api/payment/process` - Process payment

### Admin
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:userId` - Update user

---

## 💻 Using the API in Frontend

### Option 1: Using the Helper Class (Recommended)

Include in your HTML:
```html
<script src="api-helper.js"></script>
```

Use in your JavaScript:
```javascript
// Login
const loginResult = await api.login('user@example.com', 'password123');

// Create Order
const orderResult = await api.createOrder(
    'user@example.com',
    cart,
    totalPrice,
    'delivery address',
    'phone number'
);

// Get Orders
const orders = await api.getUserOrders('user@example.com');
```

### Option 2: Direct Fetch API

```javascript
fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email: 'user@example.com',
        password: 'password123'
    })
})
.then(r => r.json())
.then(data => console.log(data));
```

---

## 🧪 Testing the API

### Using cURL (Command Line)

**Test Login:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@example.com\",\"password\":\"password123\"}"
```

**Test Create Order:**
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d "{
    \"email\":\"test@example.com\",
    \"items\":[{\"id\":1,\"name\":\"Butter Chicken\",\"price\":280,\"quantity\":2}],
    \"totalPrice\":560,
    \"deliveryAddress\":\"Room 123\",
    \"phone\":\"9876543210\"
  }"
```

### Using Postman

1. Download [Postman](https://postman.com/downloads/)
2. Create a new request
3. Set URL to `http://localhost:3000/api/auth/login`
4. Set method to `POST`
5. Add JSON body and send

### Using VS Code REST Client

Install "REST Client" extension, create `test.rest`:
```
### Login
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}

### Create Order
POST http://localhost:3000/api/orders
Content-Type: application/json

{
  "email": "test@example.com",
  "items": [{"id": 1, "name": "Butter Chicken", "price": 280, "quantity": 2}],
  "totalPrice": 560,
  "deliveryAddress": "Room 123",
  "phone": "9876543210"
}
```

---

## 📊 Database Structure

### Users (data/users.json)
```json
{
  "id": "timestamp",
  "email": "user@example.com",
  "password": "password",
  "name": "John Doe",
  "role": "customer",
  "createdAt": "2024-01-28T10:00:00Z",
  "status": "active"
}
```

### Orders (data/orders.json)
```json
{
  "orderId": "ORD-1694532210000",
  "email": "user@example.com",
  "items": [...],
  "totalPrice": 560,
  "status": "pending",
  "orderTime": "2024-01-28T10:00:00Z"
}
```

### Menus (data/menus.json)
```json
{
  "canteenName": "Captain Cuisine",
  "items": [
    {
      "id": 1,
      "name": "Butter Chicken",
      "price": 280,
      "description": "...",
      "nutrition": {...}
    }
  ],
  "updatedAt": "2024-01-28T10:00:00Z"
}
```

---

## 🔐 Security Notes

⚠️ **Development Mode Only!** This backend is for development/learning.

For **Production**, you need:
1. **Password Hashing** - Use bcrypt
2. **JWT Tokens** - Replace token system
3. **Real Database** - MongoDB, PostgreSQL, etc.
4. **HTTPS** - SSL/TLS encryption
5. **Validation** - Input validation & sanitization
6. **Rate Limiting** - Prevent abuse
7. **Error Logging** - Sentry, LogRocket, etc.
8. **CORS Security** - Proper origin verification

Example bcrypt integration:
```javascript
const bcrypt = require('bcrypt');

// Hash password
const hashedPassword = await bcrypt.hash(password, 10);

// Verify password
const isValid = await bcrypt.compare(password, hashedPassword);
```

---

## 🐛 Troubleshooting

### Issue: "Port 3000 already in use"
**Solution:** Change port in `server.js`:
```javascript
const PORT = 3001; // Change to another port
```

### Issue: CORS errors in browser
**Solution:** Ensure backend is running and headers are correct:
```javascript
// In api-helper.js, check the baseURL
const API_CONFIG = {
    baseURL: 'http://localhost:3000'  // Must match your server
};
```

### Issue: Data files not created
**Solution:** The backend creates them automatically. Check permissions in the `hardware` folder.

### Issue: "Cannot find module 'express'"
**Solution:** Run `npm install` again:
```bash
npm install
```

---

## 📖 Integration Checklist

- [ ] Backend server is running (`npm start`)
- [ ] `api-helper.js` is included in HTML
- [ ] Frontend loads without CORS errors
- [ ] Can register a new user
- [ ] Can login with credentials
- [ ] Can place an order
- [ ] Can view order history
- [ ] Admin dashboard shows data
- [ ] Shopkeeper can update menu

---

## 🎯 Next Steps

### For Development:
1. Modify `server.js` to add custom features
2. Update `api-helper.js` if adding new endpoints
3. Test with Postman or REST Client
4. Update frontend to use new features

### For Production:
1. Set up MongoDB/PostgreSQL
2. Implement JWT authentication
3. Add password hashing with bcrypt
4. Deploy to Heroku, AWS, or Azure
5. Set up HTTPS/SSL
6. Add rate limiting & validation
7. Implement error logging

### Adding New Features:
1. Add new route in `server.js`
2. Add helper method in `api-helper.js`
3. Update frontend to call the API
4. Test thoroughly
5. Update documentation

---

## 📞 Need Help?

1. Check **API_DOCUMENTATION.md** for endpoint details
2. Review example code in **api-helper.js**
3. Check browser console for errors
4. Check server logs in terminal
5. Verify `data/` folder has JSON files

---

## 📝 Project Files Summary

```
hardware/
├── index.html                    # Home page
├── login.html                    # Login/Register page
├── admin.html                    # Admin dashboard
├── shopkeeper.html               # Shopkeeper dashboard
├── script.js                     # Frontend logic (existing)
├── style.css                     # Frontend styles (existing)
│
├── server.js                     # ⭐ BACKEND SERVER (NEW)
├── api-helper.js                 # ⭐ API HELPER (NEW)
├── package.json                  # ⭐ DEPENDENCIES (NEW)
│
├── API_DOCUMENTATION.md          # ⭐ API DOCS (NEW)
├── BACKEND_SETUP.md              # ⭐ THIS FILE (NEW)
│
├── data/                         # ⭐ AUTO-CREATED
│   ├── users.json
│   ├── orders.json
│   └── menus.json
│
├── CONNECTED_SYSTEM.md           # System overview (existing)
├── QUICKSTART.md                 # Quick start (existing)
└── README.md                     # General README (existing)
```

---

## ✅ Verification Checklist

After setup, verify everything works:

1. **Backend Running:**
   ```bash
   curl http://localhost:3000/api/analytics/orders
   # Should return JSON response
   ```

2. **User Registration:**
   ```bash
   curl -X POST http://localhost:3000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"test123","name":"Test User","role":"customer"}'
   ```

3. **Data Persistence:**
   - Check `data/users.json` - should contain the user
   - Check `data/orders.json` - should contain orders
   - Check `data/menus.json` - should contain menus

4. **Frontend Integration:**
   - Open `index.html` in browser
   - Check browser console - no CORS errors
   - Test login functionality
   - Test placing an order

---

**Version:** 1.0.0  
**Last Updated:** January 28, 2024  
**Status:** ✅ Ready for Development

For complete API details, see **API_DOCUMENTATION.md**
