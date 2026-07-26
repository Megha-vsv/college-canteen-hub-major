# 🚀 QUICK REFERENCE GUIDE

## ⚡ Start Backend (Copy & Paste)

### Windows PowerShell:
```powershell
cd c:\Users\vivek\OneDrive\hardware
npm install
npm start
```

### Git Bash / Terminal:
```bash
cd ~/OneDrive/hardware
npm install
npm start
```

---

## 📱 Test Backend

### Test 1: Check if server is running
```bash
curl http://localhost:3000/api/analytics/orders
```
Expected: JSON response with order stats

### Test 2: Register user
```bash
curl -X POST http://localhost:3000/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@example.com\",\"password\":\"test123\",\"name\":\"Test\",\"role\":\"customer\"}"
```

### Test 3: Create order
```bash
curl -X POST http://localhost:3000/api/orders ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@example.com\",\"items\":[{\"id\":1,\"name\":\"Item\",\"price\":100,\"quantity\":1}],\"totalPrice\":100,\"deliveryAddress\":\"Room 1\",\"phone\":\"9876543210\"}"
```

---

## 🔌 Use in Frontend

### Add to HTML (before </body>):
```html
<script src="api-helper.js"></script>
```

### Use in JavaScript:
```javascript
// Login
const result = await api.login('test@example.com', 'test123');

// Create order
await api.createOrder(email, cart, total, address, phone);

// Get orders
const orders = await api.getUserOrders(email);
```

---

## 📁 File Locations

| What | Where |
|------|-------|
| Backend Server | `server.js` |
| API Client | `api-helper.js` |
| Config | `package.json` |
| Data | `data/` folder |
| API Docs | `API_DOCUMENTATION.md` |
| Setup Guide | `BACKEND_SETUP.md` |
| Architecture | `SYSTEM_ARCHITECTURE.md` |

---

## 🎯 Common Commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Start server | `npm start` |
| Dev mode | `npm run dev` |
| Test API | `bash test-api.sh` |
| Check port 3000 | `netstat -ano \| findstr :3000` |
| Kill process | `taskkill /PID <PID> /F` |

---

## 🔑 Default Roles

```
customer   - Can order food
shopkeeper - Can manage menu
admin      - Can view all data
```

---

## 📊 Data Files (Auto-Created)

```
data/
├── users.json     - All registered users
├── orders.json    - All orders placed
└── menus.json     - All canteen menus
```

---

## 🛠️ API Methods (api-helper.js)

### Auth
```javascript
api.register(email, password, name, role)
api.login(email, password)
api.logout()
```

### Orders
```javascript
api.createOrder(email, items, totalPrice, address, phone)
api.getUserOrders(email)
api.getAllOrders()
api.updateOrderStatus(orderId, status)
api.cancelOrder(orderId)
```

### Menu
```javascript
api.getMenu(canteenName)
api.addMenuItem(canteenName, name, price, description, nutrition)
api.updateMenu(canteenName, items)
api.deleteMenuItem(canteenName, itemId)
```

### Analytics
```javascript
api.getOrderStats()
api.getUserStats()
```

### Payment
```javascript
api.processPayment(orderId, amount, method)
```

### Admin
```javascript
api.getAllUsers()
api.updateUserStatus(userId, status, role)
```

---

## ⚠️ Issues & Fixes

**Problem:** "Cannot find module express"
```bash
Solution: npm install
```

**Problem:** "Port 3000 already in use"
```
Solution: Change PORT in server.js or kill process
```

**Problem:** CORS errors in browser
```
Solution: Ensure backend is running at http://localhost:3000
```

**Problem:** Data not saving
```
Solution: Check write permissions in hardware folder
```

---

## 📍 URLs

| What | URL |
|------|-----|
| Backend | `http://localhost:3000` |
| Frontend | Open `index.html` in browser |
| Admin | Open `admin.html` in browser |
| Shopkeeper | Open `shopkeeper.html` in browser |

---

## 🔗 Endpoints Summary

**Auth:** `/api/auth/register`, `/api/auth/login`  
**Orders:** `/api/orders`, `/api/orders/:email`  
**Menu:** `/api/menus/:canteen`, `/api/menus/:canteen/items`  
**Analytics:** `/api/analytics/orders`, `/api/analytics/users`  
**Payment:** `/api/payment/process`  
**Admin:** `/api/admin/users`  

---

## 💾 Sample Data

**User:**
```json
{
  "id": "1234567890",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "customer"
}
```

**Order:**
```json
{
  "orderId": "ORD-1694532210000",
  "email": "user@example.com",
  "items": [{...}],
  "totalPrice": 740,
  "status": "pending"
}
```

---

## ✅ Checklist

- [ ] Backend running on port 3000
- [ ] Can register new user
- [ ] Can login with credentials
- [ ] Can create order
- [ ] Can view orders
- [ ] Can process payment
- [ ] Can update order status
- [ ] Admin can view all data
- [ ] Shopkeeper can edit menu

---

## 🎓 Learn More

- `API_DOCUMENTATION.md` - Full API reference
- `BACKEND_SETUP.md` - Detailed setup guide
- `SYSTEM_ARCHITECTURE.md` - System design
- `BACKEND_INTEGRATION.md` - Integration guide

---

## 📧 Support

1. Check documentation files
2. Review error messages
3. Check server logs
4. Verify port 3000 is free
5. Ensure npm modules installed

---

**Backend is Ready to Use! 🎉**

**Version:** 1.0.0  
**Last Updated:** January 28, 2024
