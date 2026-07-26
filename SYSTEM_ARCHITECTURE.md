# System Architecture Overview

## Complete System Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     COLLEGE CANTEEN HUB - FULL SYSTEM                   │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│                          FRONTEND (Browser)                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐        │
│  │  index.html│  │ login.html │  │ admin.html │  │ shopkeeper │        │
│  │  (Home)    │  │ (Auth)     │  │(Dashboard) │  │  (Menu)    │        │
│  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘        │
│        │                │                │               │               │
│        └────────────────┼────────────────┼───────────────┘               │
│                         │                                                 │
│  ┌──────────────────────────────────────────────────────────────┐        │
│  │  JavaScript (script.js)                                      │        │
│  │  - DOM Manipulation                                          │        │
│  │  - Event Handling                                            │        │
│  │  - Local Storage Management                                  │        │
│  │  - API Helper Integration (api-helper.js)                    │        │
│  └───────────┬────────────────────────────────────────┬─────────┘        │
│              │                                        │                   │
│        ┌─────▼────────┐                   ┌──────────▼──────┐            │
│        │ Data Objects │                   │ API Calls via   │            │
│        │ - cart[]     │                   │ Fetch API       │            │
│        │ - canteens[] │                   │ - auth/register │            │
│        │ - menus{}    │                   │ - auth/login    │            │
│        │ - orders[]   │                   │ - orders/*      │            │
│        └──────────────┘                   │ - menus/*       │            │
│                                           │ - analytics/*   │            │
│                                           │ - payment/*     │            │
│                                           └────────┬────────┘            │
│                                                    │                      │
│  ┌─────────────────────────────────────────────────┼──────────────────┐  │
│  │ CSS (style.css)                                │                  │  │
│  │ - Layout & Styling                            │                  │  │
│  │ - Responsive Design                           │                  │  │
│  │ - Color Themes                                │                  │  │
│  └───────────────────────────────────────────────┬──────────────────┘  │
│                                                  │                       │
└──────────────────────────────────────────────────┼───────────────────────┘
                                                   │
                                    ┌──────────────▼───────────────┐
                                    │                              │
                                    │  HTTP REQUESTS               │
                                    │  (Fetch API / CORS)          │
                                    │                              │
                                    └──────────────┬───────────────┘
                                                   │
┌──────────────────────────────────────────────────┼───────────────────────┐
│                  BACKEND (Node.js + Express)     │                       │
│                                                  ▼                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    Express.js Server (server.js)                 │   │
│  │  ┌──────────────────────────────────────────────────────────┐   │   │
│  │  │ MIDDLEWARE                                               │   │   │
│  │  │ - CORS (Cross-Origin)                                    │   │   │
│  │  │ - Body Parser (JSON)                                     │   │   │
│  │  │ - Express Static                                         │   │   │
│  │  └──────────────────────────────────────────────────────────┘   │   │
│  │                                                                   │   │
│  │  ┌─────────────────────┐  ┌──────────────────┐                  │   │
│  │  │  ROUTE HANDLERS     │  │  BUSINESS LOGIC  │                  │   │
│  │  │  ┌──────────────┐   │  │  ┌────────────┐  │                  │   │
│  │  │  │ POST /auth/  │   │  │  │ Validation │  │                  │   │
│  │  │  │ register     │   │  │  │ Processing │  │                  │   │
│  │  │  │              │   │  │  │ Formatting │  │                  │   │
│  │  │  │ POST /auth/  │   │  │  └────────────┘  │                  │   │
│  │  │  │ login        │   │  │                   │                  │   │
│  │  │  │              │   │  │  ┌────────────┐  │                  │   │
│  │  │  │ POST /orders │   │  │  │ File I/O   │  │                  │   │
│  │  │  │              │   │  │  │ Operations │  │                  │   │
│  │  │  │ GET /orders/ │   │  │  │ (readFile, │  │                  │   │
│  │  │  │ :email       │   │  │  │  writeFile)│  │                  │   │
│  │  │  │              │   │  │  └────────────┘  │                  │   │
│  │  │  │ PUT /orders/ │   │  │                   │                  │   │
│  │  │  │ :id          │   │  │                   │                  │   │
│  │  │  │              │   │  │                   │                  │   │
│  │  │  │ GET /menus/  │   │  │                   │                  │   │
│  │  │  │ :canteen     │   │  │                   │                  │   │
│  │  │  │              │   │  │                   │                  │   │
│  │  │  │ POST /menus/ │   │  │                   │                  │   │
│  │  │  │ :canteen/    │   │  │                   │                  │   │
│  │  │  │ items        │   │  │                   │                  │   │
│  │  │  │              │   │  │                   │                  │   │
│  │  │  │ GET /        │   │  │                   │                  │   │
│  │  │  │ analytics/*  │   │  │                   │                  │   │
│  │  │  │              │   │  │                   │                  │   │
│  │  │  │ POST /       │   │  │                   │                  │   │
│  │  │  │ payment/     │   │  │                   │                  │   │
│  │  │  │ process      │   │  │                   │                  │   │
│  │  │  │              │   │  │                   │                  │   │
│  │  │  │ GET /admin/  │   │  │                   │                  │   │
│  │  │  │ users        │   │  │                   │                  │   │
│  │  │  │              │   │  │                   │                  │   │
│  │  │  │ PUT /admin/  │   │  │                   │                  │   │
│  │  │  │ users/:id    │   │  │                   │                  │   │
│  │  │  └──────────────┘   │  │                   │                  │   │
│  │  │                      │  └────────────────┘                    │   │
│  │  └──────────────────────────────────────────────────────────────┘   │
│  │                             │                                        │
│  │                             ▼                                        │
│  │  ┌──────────────────────────────────────────────────────────┐   │   │
│  │  │ DATA PERSISTENCE LAYER (File-based JSON Storage)         │   │   │
│  │  │                                                          │   │   │
│  │  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │   │   │
│  │  │  │ users.json   │  │ orders.json  │  │ menus.json   │  │   │   │
│  │  │  │              │  │              │  │              │  │   │   │
│  │  │  │ {            │  │ {            │  │ {            │  │   │   │
│  │  │  │  id,         │  │  orderId,    │  │  canteenName,│  │   │   │
│  │  │  │  email,      │  │  email,      │  │  items[],    │  │   │   │
│  │  │  │  password,   │  │  items[],    │  │  updatedAt   │  │   │   │
│  │  │  │  name,       │  │  status,     │  │ }            │  │   │   │
│  │  │  │  role,       │  │  totalPrice, │  │              │  │   │   │
│  │  │  │  status      │  │  orderTime   │  │              │  │   │   │
│  │  │  │ }            │  │ }            │  │              │  │   │   │
│  │  │  └──────────────┘  └──────────────┘  └──────────────┘  │   │   │
│  │  │                                                          │   │   │
│  │  └──────────────────────────────────────────────────────────┘   │   │
│  │                                                                   │   │
│  │  ┌──────────────────────────────────────────────────────────┐   │   │
│  │  │ ERROR HANDLING & LOGGING                                 │   │   │
│  │  │ - 404 Not Found                                          │   │   │
│  │  │ - 400 Bad Request                                        │   │   │
│  │  │ - 401 Unauthorized                                       │   │   │
│  │  │ - 500 Server Error                                       │   │   │
│  │  │ - Console Logging                                        │   │   │
│  │  └──────────────────────────────────────────────────────────┘   │   │
│  │                                                                   │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  PORT: 3000                                                             │
│  NODE_MODULES: express, cors, body-parser                              │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagrams

### 1. User Registration Flow
```
┌─────────────┐
│   User      │
│ (Frontend)  │
└──────┬──────┘
       │ 1. Fill Form
       │ (name, email, password, role)
       ▼
┌──────────────────┐
│ api.register()   │
│ (api-helper.js)  │
└──────┬───────────┘
       │ 2. POST /api/auth/register
       │ (JSON body)
       ▼
┌──────────────────────────────┐
│ /api/auth/register Handler   │
│ (server.js)                  │
└──────┬───────────────────────┘
       │ 3. Validate Input
       ▼
┌──────────────────────────────┐
│ Read existing users.json     │
│ Check if email exists        │
└──────┬───────────────────────┘
       │ 4. Email not found?
       │ Yes ▼
┌──────────────────────────────┐
│ Create new user object       │
│ Add to users array           │
│ Write to users.json          │
└──────┬───────────────────────┘
       │ 5. Send response
       │ (200 OK + user data)
       ▼
┌──────────────────┐
│ Frontend Handler │
│ Show success msg │
└──────────────────┘
```

### 2. Place Order Flow
```
┌─────────────┐
│   User      │
│ (Frontend)  │
└──────┬──────┘
       │ 1. Click Checkout
       │ (cart, address, phone)
       ▼
┌──────────────────────────────┐
│ api.createOrder()            │
│ (api-helper.js)              │
└──────┬───────────────────────┘
       │ 2. POST /api/orders
       │ (email, items, totalPrice, etc)
       ▼
┌──────────────────────────────┐
│ POST /api/orders Handler     │
│ (server.js)                  │
└──────┬───────────────────────┘
       │ 3. Validate Request
       ▼
┌──────────────────────────────┐
│ Read orders.json             │
│ Create new order object      │
│ Generate orderId (ORD-...)   │
│ Set status = "pending"       │
│ Write to orders.json         │
└──────┬───────────────────────┘
       │ 4. Send order details
       │ (201 Created)
       ▼
┌──────────────────────────────┐
│ Frontend Handler             │
│ Show order confirmation      │
│ Option to pay                │
└──────────────────────────────┘
       │
       │ 5. Click Pay
       ▼
┌──────────────────────────────┐
│ api.processPayment()         │
│ (api-helper.js)              │
└──────┬───────────────────────┘
       │ 6. POST /api/payment/process
       │ (orderId, amount, method)
       ▼
┌──────────────────────────────┐
│ POST /payment/process        │
│ (server.js)                  │
└──────┬───────────────────────┘
       │ 7. Mock payment processing
       │ 90% success rate
       ▼
┌──────────────────────────────┐
│ Send response                │
│ (success or failure)         │
└──────┬───────────────────────┘
       │ 8. Update UI
       ▼
┌──────────────────────────────┐
│ Show payment status          │
│ Clear cart                   │
│ Redirect to orders           │
└──────────────────────────────┘
```

### 3. Menu Update Flow (Shopkeeper)
```
┌──────────────┐
│  Shopkeeper  │
│  (Frontend)  │
└──────┬───────┘
       │ 1. Click Edit Menu
       │ (add/edit/delete items)
       ▼
┌──────────────────────────────┐
│ Shopkeeper Dashboard         │
│ (shopkeeper.html)            │
└──────┬───────────────────────┘
       │ 2. Modify items
       │ (name, price, description)
       ▼
┌──────────────────────────────┐
│ api.updateMenu()             │
│ or                           │
│ api.addMenuItem()            │
│ (api-helper.js)              │
└──────┬───────────────────────┘
       │ 3. PUT /api/menus/:canteen
       │ or POST /api/menus/.../items
       ▼
┌──────────────────────────────┐
│ Menu Handler (server.js)     │
│ - Add: /menus/:name/items    │
│ - Update: /menus/:name       │
│ - Delete: /menus/:name/items │
└──────┬───────────────────────┘
       │ 4. Read menus.json
       │ Find canteen
       │ Update items array
       │ Write to menus.json
       ▼
┌──────────────────────────────┐
│ Send response                │
│ (200 OK + updated menu)      │
└──────┬───────────────────────┘
       │ 5. Show confirmation
       ▼
┌──────────────────────────────┐
│ Menu updated successfully    │
│ Changes visible to customers │
└──────────────────────────────┘
```

---

## API Endpoint Categories

```
AUTHENTICATION ENDPOINTS
├── POST /api/auth/register
└── POST /api/auth/login

ORDER MANAGEMENT ENDPOINTS
├── POST /api/orders (Create)
├── GET /api/orders/:email (User Orders)
├── GET /api/orders (All Orders - Admin)
├── PUT /api/orders/:id (Update Status)
└── DELETE /api/orders/:id (Cancel)

MENU MANAGEMENT ENDPOINTS
├── GET /api/menus/:canteen
├── POST /api/menus/:canteen/items (Add Item)
├── PUT /api/menus/:canteen (Update Menu)
└── DELETE /api/menus/:canteen/items/:id (Delete Item)

ANALYTICS ENDPOINTS
├── GET /api/analytics/orders
└── GET /api/analytics/users

PAYMENT ENDPOINTS
└── POST /api/payment/process

ADMIN ENDPOINTS
├── GET /api/admin/users
└── PUT /api/admin/users/:id
```

---

## Technology Stack

```
FRONTEND
├── HTML5 (Structure)
├── CSS3 (Styling & Responsive)
├── JavaScript ES6+ (Logic)
│   ├── DOM Manipulation
│   ├── Event Handling
│   ├── Local Storage API
│   ├── Fetch API (HTTP Requests)
│   └── Array/Object Methods
└── Font Awesome Icons

BACKEND
├── Node.js (Runtime)
├── Express.js (Framework)
│   ├── Routing
│   ├── Middleware
│   ├── Error Handling
│   └── Static File Serving
├── CORS (Cross-Origin Requests)
├── Body Parser (JSON Parsing)
└── File System (Data Storage)

DATA STORAGE
├── JSON Files
│   ├── users.json
│   ├── orders.json
│   └── menus.json
└── localStorage (Browser)
    ├── cart
    ├── userEmail
    ├── authToken
    └── UI preferences
```

---

## File Dependencies

```
HTML FILES (Frontend)
├── index.html
│   ├── style.css
│   ├── script.js
│   └── api-helper.js
├── login.html
│   ├── style.css
│   ├── script.js
│   └── api-helper.js
├── admin.html
│   ├── style.css
│   ├── script.js
│   └── api-helper.js
└── shopkeeper.html
    ├── style.css
    ├── script.js
    └── api-helper.js

BACKEND FILES
├── server.js
│   ├── express
│   ├── cors
│   ├── body-parser
│   ├── path
│   └── fs (file system)
├── package.json
│   ├── express ^4.18.2
│   ├── cors ^2.8.5
│   └── body-parser ^1.20.2
└── api-helper.js
    └── Standalone (No dependencies)

DOCUMENTATION
├── API_DOCUMENTATION.md
├── BACKEND_SETUP.md
├── SYSTEM_ARCHITECTURE.md (This file)
├── CONNECTED_SYSTEM.md
├── QUICKSTART.md
└── README.md
```

---

## Security Layers

```
FRONTEND SECURITY
├── Input Validation (Client-side)
├── CORS Headers Check
├── LocalStorage XSS Protection
└── Form Validation

BACKEND SECURITY (Current - Development)
├── CORS Middleware
├── JSON Body Parsing
├── Basic Input Validation
└── Error Handling

PRODUCTION SECURITY (To Implement)
├── Password Hashing (bcrypt)
├── JWT Token Authentication
├── HTTPS/SSL Encryption
├── Rate Limiting
├── Input Sanitization
├── SQL Injection Prevention
├── CSRF Protection
├── Security Headers
├── Logging & Monitoring
└── Database Encryption
```

---

## Scalability Roadmap

```
CURRENT (JSON-based)
├── Single Server
├── File Storage
├── No Load Balancing
├── Manual Scaling
└── Suitable for: 100-1000 concurrent users

PHASE 1 (Database Migration)
├── MongoDB/PostgreSQL
├── Session Management
├── Caching Layer (Redis)
├── Basic Load Balancing
└── Suitable for: 1000-10k users

PHASE 2 (Microservices)
├── Authentication Service
├── Order Service
├── Menu Service
├── Payment Service
├── Notification Service
└── Suitable for: 10k-100k users

PHASE 3 (Cloud Infrastructure)
├── Kubernetes Orchestration
├── Auto-scaling
├── CDN for Assets
├── API Gateway
├── Message Queue (RabbitMQ/Kafka)
└── Suitable for: 100k+ users
```

---

## Deployment Architecture

```
CURRENT (Local Development)
localhost:3000
    ↓
Express Server
    ↓
JSON Files (data/)

PRODUCTION OPTIONS:

Option 1: Heroku
heroku.com → Git Push → Dyno → App

Option 2: AWS
Route53 → CloudFront → EC2/AppRunner → RDS

Option 3: Azure
Azure App Service ← Backend
Azure SQL Database ← Data
Azure Blob Storage ← Assets

Option 4: Docker Container
Docker Image → Registry → Kubernetes/Docker Swarm
```

---

## Performance Metrics

```
RESPONSE TIMES (Expected)
├── Auth Requests: 50-100ms
├── Order Operations: 100-200ms
├── Menu Operations: 50-150ms
├── Analytics: 200-500ms
└── Payment: 500-2000ms (External API)

STORAGE (Current Limits)
├── Per User: ~500 bytes
├── Per Order: ~1KB
├── Per Menu Item: ~200 bytes
├── 1000 Users: ~500KB
├── 10000 Orders: ~10MB

RECOMMENDED LIMITS
├── Max concurrent requests: 100
├── Max file size: 50MB
├── Max request body: 10MB
└── Request timeout: 30s
```

---

**Version:** 1.0.0  
**Last Updated:** January 28, 2024  
**Status:** ✅ Complete System Architecture
