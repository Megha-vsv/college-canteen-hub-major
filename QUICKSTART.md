# 🎓 College Canteen Hub - Quick Start Guide

## ✨ What's New

I've added **3 major features** to your college canteen system:

### 1. **Login Page** (`login.html`)
- Role-based login system
- Three roles: Customer, Shopkeeper, Admin
- Demo accounts built-in for testing

### 2. **Shopkeeper Menu Editor** (`shopkeeper.html`)
- Real-time menu management
- Add/Edit/Delete menu items
- Live menu updates with localStorage
- Dashboard with statistics
- Order tracking

### 3. **Admin Panel** (`admin.html`)
- Manage all canteens
- Track orders and revenue
- User management
- Generate reports
- Platform statistics

---

## 🔐 Demo Accounts

Use these credentials to test the system:

### Customer Account
```
Email: customer@college.com
Password: customer123
```
**Access:** Regular customer shopping interface

### Shopkeeper Account
```
Email: shopkeeper@college.com
Password: shopkeeper123
```
**Access:** Menu editing and management dashboard

### Admin Account
```
Email: admin@college.com
Password: admin123
```
**Access:** Platform administration and monitoring

---

## 🚀 How to Use

### Step 1: Start the Application
1. Open `login.html` in your browser
2. Select your role from the three options

### Step 2: Login
- Choose "Customer", "Shopkeeper", or "Admin"
- Auto-filled demo credentials appear
- Click Login

### Step 3: Explore
- **Customer**: Browse canteens, search menu items, add to cart
- **Shopkeeper**: Add menu items in real-time (saved to localStorage)
- **Admin**: Manage canteens, users, and view reports

---

## 📁 New Files Created

| File | Purpose |
|------|---------|
| `login.html` | Login page with role selection |
| `shopkeeper.html` | Shopkeeper menu editor dashboard |
| `admin.html` | Admin control panel |

---

## 🎨 Features Breakdown

### Shopkeeper Menu Editor
✅ Add menu items with:
- Item name
- Price
- Category (Main Course, Beverages, Snacks, Desserts, Breakfast)
- Description
- Availability status

✅ Real-time menu display
✅ Edit and delete items
✅ Dashboard statistics
✅ Data persists using browser localStorage

### Admin Panel
✅ Dashboard with 4 key metrics:
- Total Canteens (56)
- Total Orders (1,245)
- Revenue (₹1.2L)
- Active Users (5,432)

✅ Canteen management
✅ Order tracking
✅ User management
✅ Report generation

---

## 💾 Data Storage

All data is stored in your browser's **localStorage**:
```javascript
// Shopkeeper's menu items
localStorage.shopkeeperMenu // Array of items
```

This means:
✅ Data persists even after closing the browser
✅ No server needed
✅ Works completely offline

---

## 🔗 Navigation

**From home page (index.html):**
- Click "Login" button in header → `login.html`

**From login page:**
- Customer login → `index.html` (shopping)
- Shopkeeper login → `shopkeeper.html` (menu editor)
- Admin login → `admin.html` (admin panel)

---

## 🧪 Test Scenarios

### Scenario 1: Create a Menu
1. Go to `login.html`
2. Select "Shopkeeper" role
3. Click Login (demo creds auto-filled)
4. Click "Edit Menu" in sidebar
5. Add items:
   - Biryani (₹150, Main Course)
   - Coffee (₹50, Beverages)
   - Samosa (₹20, Snacks)
6. See items appear in real-time!

### Scenario 2: Order as Customer
1. Go to `login.html`
2. Select "Customer" role
3. Click Login
4. Search for items → Add to cart
5. View cart with total price

### Scenario 3: Admin Overview
1. Go to `login.html`
2. Select "Admin" role
3. Click Login
4. View dashboard with platform stats
5. Check canteens, orders, users

---

## 📱 Responsive Design

All pages work on:
✅ Desktop (1200px+)
✅ Tablet (768px - 1199px)
✅ Mobile (<768px)

---

## 🔧 How to Customize

### Change Demo Credentials
Edit `login.html` - Find the `CREDENTIALS` object:
```javascript
const CREDENTIALS = {
    customer: {
        email: 'customer@college.com',
        password: 'customer123'
    },
    // ... others
};
```

### Add More Menu Categories
In `shopkeeper.html`, find the category select:
```html
<select id="item-category">
    <option>Main Course</option>
    <option>Beverages</option>
    <!-- Add more here -->
</select>
```

### Change Colors
In `style.css` and HTML files, look for:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

---

## ⚡ Quick Tips

1. **Menu items auto-save** - When you add an item as a shopkeeper, it's saved to localStorage
2. **Refresh doesn't lose data** - Your menu persists across page refreshes
3. **Multiple browsers isolate data** - Each browser has separate localStorage
4. **Demo accounts are hardcoded** - You can change them in login.html

---

## 🐛 Troubleshooting

**Q: Items not saving?**
- Check if browser allows localStorage
- Try a different browser
- Clear browser cache and reload

**Q: Login not working?**
- Verify email matches exactly (case-sensitive)
- Check password is typed correctly
- Use demo credentials provided

**Q: Data disappeared?**
- Check you're on same browser/device
- Don't use private/incognito mode
- Try clearing cache (may lose data)

---

## 📞 What's Next?

You can extend this by:
1. Adding more menu categories
2. Creating customer order history
3. Adding payment integration
4. Building a backend API
5. Adding email notifications
6. Creating review system

---

## 🎉 Summary

You now have:
- ✅ Complete login system with 3 roles
- ✅ Real-time shopkeeper menu editor
- ✅ Admin panel for management
- ✅ Full customer ordering system
- ✅ Data persistence with localStorage
- ✅ Professional UI/UX

**Everything is ready to use!** 🚀

Open `login.html` and start exploring!
