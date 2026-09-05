# 🍴 College Canteen Hub

> A full-stack smart college canteen management and online food ordering system designed to reduce queues, simplify canteen operations, enable online ordering, and provide data-driven insights for canteen management.

---

## 📌 Project Overview

**College Canteen Hub** is a web-based canteen management and food ordering platform developed as a major project.

The system connects **students, shopkeepers, and administrators** through a centralized platform.

Students can browse multiple campus canteens, view menus, add food items to their cart, provide delivery details, select their location, complete a demo payment, place orders, and track order status.

Shopkeepers can manage their canteen menus, view incoming orders, and update order statuses.

Administrators can monitor canteens, users, menus, orders, analytics, food waste information, and system activity.

The project also includes **Machine Learning-based food demand prediction** to support better food preparation and reduce food wastage.

---

## 🎯 Problem Statement

Traditional college canteen systems often face:

* Long queues during peak hours
* Manual order processing
* Difficulty managing multiple canteens
* Lack of centralized menu management
* Limited visibility of order status
* Inefficient communication between students and shopkeepers
* Food over-preparation and wastage
* Lack of data-driven decision making
* Manual tracking of canteen performance

### 💡 Proposed Solution

College Canteen Hub digitizes the complete canteen workflow by providing:

**Student → Online Ordering → Payment Simulation → Order Processing → Order Tracking → Delivery**

along with:

**Shopkeeper → Menu Management → Order Management → Status Updates**

and:

**Admin → Monitoring → Analytics → Food Waste Analysis → Demand Prediction**

---

# ✨ Key Features

## 👨‍🎓 Student / Customer

* 🔐 User registration and login
* 🏪 Browse multiple college canteens
* 🔎 Search and filter canteens
* 🍔 View canteen menus
* 🛒 Add food items to cart
* 💰 Automatic order total calculation
* 📍 Select delivery location using an interactive map
* 🗺️ TomTom-based map integration
* 📌 Draggable delivery location marker
* 📍 Use current browser location
* 🏠 Reverse geocoding for readable addresses
* 📱 Enter delivery phone number and details
* 💳 Demo online payment
* 🧾 Generate payment ID for demo transactions
* 🎫 Automatic order token generation
* 📦 Place orders
* 🚚 Track orders
* 🔄 View order status history
* 🕒 View order timestamps
* 💵 View payment information
* 📋 View previous orders

---

## 👨‍🍳 Shopkeeper

* 🔐 Shopkeeper authentication
* 🏪 Select assigned canteen
* 🍽️ View canteen menu
* ➕ Add menu items
* ✏️ Update menu items
* 🗑️ Delete menu items
* 📊 View order statistics
* 📦 View incoming orders
* 🎫 View customer order tokens
* 🔄 Update order status
* 🚚 Mark orders as out for delivery
* ✅ Mark orders as delivered
* ❌ Cancel orders
* 📈 Monitor canteen activity

### Order Status Flow

```text
Pending
   ↓
Confirmed
   ↓
Preparing
   ↓
Ready
   ↓
Out for Delivery
   ↓
Delivered
```

Orders can also be marked as:

```text
Cancelled
```

---

## 👨‍💼 Administrator

* 🔐 Admin authentication
* 👥 Monitor registered users
* 🏪 Monitor available canteens
* 🍔 View canteen menus
* 📦 Monitor orders
* 📊 View order analytics
* 📈 View system statistics
* 🗑️ Monitor food waste analytics
* 🤖 View demand prediction information
* 📋 Generate/monitor reports
* 🔍 Track system activity

---

# 🤖 Machine Learning

The project includes a Machine Learning component for **food demand prediction**.

### Purpose

The demand prediction module helps estimate future food requirements using historical order information.

This can help canteen operators:

* Prepare appropriate quantities of food
* Reduce over-preparation
* Reduce food wastage
* Avoid shortages
* Understand demand patterns
* Make better preparation decisions

### ML Module

```text
ml/
└── demand_prediction.py
```

Prediction output is stored in:

```text
data/
└── demand_predictions.json
```

---

# 📊 Analytics

The system provides analytics for understanding canteen operations.

### Analytics include:

* Order statistics
* User statistics
* Food waste analytics
* Order trends
* Canteen activity
* Demand prediction information

The admin dashboard provides a centralized view of the available analytics.

---

# 💳 Demo Payment System

The project uses a **free built-in demo payment simulation** instead of a real payment gateway.

Supported demo methods:

* UPI
* Card
* Net Banking
* Cashless Demo

### Important

> This is a college project simulation. No real money is charged.

A demo payment generates a unique payment ID such as:

```text
DEMO-PAY-XXXXXXXXXX-XXXX
```

The payment information is then stored with the order.

No Razorpay business account or payment gateway credentials are required.

---

# 📍 Location & Map Integration

The project uses **TomTom Maps** for delivery location functionality.

### Features

* Interactive map
* Delivery location marker
* Marker dragging
* Map click location selection
* Browser geolocation
* Reverse geocoding
* Automatic readable address detection
* Latitude and longitude storage

The selected location is saved with the order.

---

# 🔐 Authentication & Roles

The system provides role-based authentication.

### Available Roles

| Role             | Main Responsibilities        |
| ---------------- | ---------------------------- |
| 👨‍🎓 Customer   | Browse, order, pay, track    |
| 👨‍🍳 Shopkeeper | Manage menu and orders       |
| 👨‍💼 Admin      | Monitor system and analytics |

The backend provides authentication APIs for registration and login.

---

# 🏗️ System Architecture

```text
                    ┌──────────────────┐
                    │     Customer     │
                    └────────┬─────────┘
                             │
                    Browse / Order / Pay
                             │
                             ▼
┌──────────────┐      ┌──────────────────┐
│  Shopkeeper  │◄────►│  Express Server  │
└──────────────┘      │    REST APIs     │
                      └────────┬─────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
         Users Data       Orders Data       Menu Data
              │                │                │
              └────────────────┼────────────────┘
                               │
                     ┌─────────▼─────────┐
                     │      Admin        │
                     │    Dashboard      │
                     └───────────────────┘

                               │
                               ▼
                     ┌───────────────────┐
                     │ Machine Learning  │
                     │ Demand Prediction │
                     └───────────────────┘

                               │
                               ▼
                     ┌───────────────────┐
                     │ Analytics & Food  │
                     │ Waste Monitoring  │
                     └───────────────────┘
```

---

# 🛠️ Technology Stack

## Frontend

* HTML5
* CSS3
* JavaScript
* Font Awesome
* Leaflet.js
* TomTom Maps

## Backend

* Node.js
* Express.js
* REST APIs
* CORS
* Body Parser

## Data Storage

* JSON-based persistence

Main data files:

```text
data/
├── users.json
├── orders.json
└── demand_predictions.json
```

## Machine Learning

* Python
* Machine Learning demand prediction
* JSON prediction output

## Development Tools

* Visual Studio Code
* Git
* GitHub
* Node.js
* npm

---

# 📁 Project Structure

```text
college-canteen-hub-major/
│
├── data/
│   ├── demand_predictions.json
│   ├── orders.json
│   └── users.json
│
├── images/
│
├── ml/
│   └── demand_prediction.py
│
├── admin.html
├── api-helper.js
├── index.html
├── login.html
├── shopkeeper.html
│
├── script.js
├── style.css
├── server.js
│
├── package.json
├── package-lock.json
│
├── .env.example
├── .gitignore
│
├── API_DOCUMENTATION.md
├── BACKEND_INTEGRATION.md
├── BACKEND_SETUP.md
├── CONNECTED_SYSTEM.md
├── QUICKSTART.md
├── QUICK_REFERENCE.md
└── SYSTEM_ARCHITECTURE.md
```

---

# 🚀 Installation & Setup

## 1. Clone the repository

```bash
git clone https://github.com/Megha-vsv/college-canteen-hub-major.git
```

## 2. Open the project

```bash
cd college-canteen-hub-major
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the server

```bash
npm start
```

If the project is configured for development with nodemon:

```bash
npm run dev
```

## 5. Open the application

```text
http://localhost:3000
```

Start from:

```text
http://localhost:3000/login.html
```

---

# 🔑 Demo Accounts

The project contains demo accounts for testing.

### Customer

```text
Email: customer@college.com
Password: customer123
```

### Shopkeeper

```text
Email: shopkeeper@college.com
Password: shopkeeper123
```

Additional shopkeeper demo accounts are available for different canteens.

### Admin

```text
Email: admin@college.com
Password: admin123
```

> Demo credentials are intended only for local/project demonstration.

---

# 🔄 Complete User Flow

## Customer Flow

```text
Login
  ↓
Browse Canteens
  ↓
Select Canteen
  ↓
View Menu
  ↓
Add Food to Cart
  ↓
Checkout
  ↓
Enter Delivery Details
  ↓
Select Location
  ↓
Demo Payment
  ↓
Order Created
  ↓
Token Generated
  ↓
Track Order
  ↓
Delivered
```

## Shopkeeper Flow

```text
Login
  ↓
Select Canteen
  ↓
Manage Menu
  ↓
View Orders
  ↓
Accept Order
  ↓
Preparing
  ↓
Ready
  ↓
Out for Delivery
  ↓
Delivered
```

## Admin Flow

```text
Login
  ↓
Admin Dashboard
  ↓
Monitor Users
  ↓
Monitor Canteens
  ↓
Monitor Menus
  ↓
Monitor Orders
  ↓
View Analytics
  ↓
Food Waste Analysis
  ↓
Demand Prediction
```

---

# 🔌 Important API Endpoints

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

### Orders

```text
GET  /api/orders/:email
POST /api/orders
PUT  /api/orders/:orderId
```

### Demo Payment

```text
POST /api/payment/demo
```

### Menus

```text
GET  /api/menus
POST /api/menus
PUT  /api/menus/:id
DELETE /api/menus/:id
```

### Analytics

```text
GET /api/analytics/orders
GET /api/analytics/users
GET /api/analytics/food-waste
```

For complete API information, see:

```text
API_DOCUMENTATION.md
```

---

# 🧪 Testing

The major project can be tested through the following scenarios:

### Test 1 — Authentication

* Customer login
* Shopkeeper login
* Admin login
* Registration
* Invalid login handling

### Test 2 — Menu Management

* Shopkeeper adds item
* Updates item
* Deletes item
* Customer views updated menu

### Test 3 — Ordering

* Add items to cart
* Checkout
* Enter delivery information
* Generate order
* Generate token

### Test 4 — Demo Payment

* Select payment method
* Complete demo payment
* Verify payment ID
* Verify payment status

### Test 5 — Order Tracking

```text
Pending → Confirmed → Preparing → Ready
→ Out for Delivery → Delivered
```

### Test 6 — Location

* Select location on map
* Drag marker
* Use current location
* Verify latitude/longitude
* Verify address

### Test 7 — Admin Analytics

* Verify users
* Verify orders
* Verify food waste analytics
* Verify demand prediction output

---

# 🔒 Security & Configuration

Sensitive configuration should not be committed to GitHub.

Use:

```text
.env
```

for environment-specific secrets.

A sample configuration is provided in:

```text
.env.example
```

Never commit real API keys or passwords to a public repository.

---

# ⚠️ Project Limitations

This project is designed as an academic major-project prototype.

Current limitations include:

* JSON files are used for data persistence instead of a production database.
* Payment functionality is a demo simulation and does not process real money.
* Order tracking is application-based rather than GPS vehicle tracking.
* Machine Learning predictions are intended for academic demonstration.
* Production deployment would require stronger authentication, database infrastructure, payment gateway integration, and additional security controls.

---

# 🔮 Future Enhancements

Possible future improvements include:

* Real payment gateway integration
* MySQL/MongoDB database
* Real-time WebSocket notifications
* Delivery partner module
* Live delivery vehicle tracking
* Push notifications
* Email/SMS notifications
* Advanced demand forecasting
* Inventory management
* Automated food-waste recommendations
* Mobile application
* Cloud database
* Production-grade authentication and authorization

---

# 🎓 Academic Project

**Project:** College Canteen Hub
**Type:** Major Project
**Domain:** Web Development + Machine Learning + Data Analytics
**Architecture:** Full-Stack Web Application
**Backend:** Node.js + Express.js
**Frontend:** HTML + CSS + JavaScript
**ML:** Python
**Maps:** TomTom Maps + Leaflet.js
**Payment:** Demo Payment Simulation
**Repository:** `college-canteen-hub-major`

---

# 👩‍💻 Developer

**Megha Vasava**

B.Tech – Computer Science Engineering
Parul Institute of Technology, Parul University

---

## ⭐ Project Highlights

```text
🔐 Role-Based Authentication
🏪 Multiple Canteens
🍔 Online Food Ordering
🛒 Shopping Cart
📍 Location & Map Integration
💳 Demo Payment
🎫 Token-Based Ordering
🚚 Order Tracking
📦 Order Status Management
📊 Admin Analytics
🗑️ Food Waste Analytics
🤖 ML Demand Prediction
🔗 Connected Customer–Shopkeeper–Admin System
```

---

## 📜 License

This project is developed for **academic and educational purposes**.
