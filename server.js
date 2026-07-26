// ============================================
// COLLEGE CANTEEN HUB - BACKEND SERVER
// ============================================
// Node.js + Express Backend for Canteen Ordering System
// Version: 1.0.0

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// MIDDLEWARE SETUP
// ============================================
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname)));

// ============================================
// DATABASE (JSON Files for Storage)
// ============================================

const USERS_FILE = path.join(__dirname, 'data', 'users.json');
const ORDERS_FILE = path.join(__dirname, 'data', 'orders.json');
const MENUS_FILE = path.join(__dirname, 'data', 'menus.json');

// Create data folder if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}

// Helper function to read JSON files
function readFile(filePath, defaultData = []) {
    try {
        if (fs.existsSync(filePath)) {
            return JSON.parse(fs.readFileSync(filePath, 'utf8'));
        }
        return defaultData;
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return defaultData;
    }
}

// Helper function to write JSON files
function writeFile(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error(`Error writing to ${filePath}:`, error);
        return false;
    }
}

// ============================================
// AUTHENTICATION ROUTES
// ============================================

// User Registration
app.post('/api/auth/register', (req, res) => {
    try {
        const { email, password, name, role } = req.body;

        // Validation
        if (!email || !password || !name) {
            return res.status(400).json({
                success: false,
                message: 'Email, password, and name are required'
            });
        }

        // Read existing users
        let users = readFile(USERS_FILE);

        // Check if user already exists
        if (users.some(user => user.email === email)) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered'
            });
        }

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            email,
            password, // Note: In production, hash passwords using bcrypt
            name,
            role: role || 'customer', // customer, shopkeeper, admin
            createdAt: new Date().toISOString(),
            status: 'active'
        };

        users.push(newUser);
        writeFile(USERS_FILE, users);

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name,
                role: newUser.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error during registration',
            error: error.message
        });
    }
});

// User Login
app.post('/api/auth/login', (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            });
        }

        // Find user
        let users = readFile(USERS_FILE);
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // In production, generate JWT token here
        const token = Buffer.from(`${email}:${Date.now()}`).toString('base64');

        res.json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error during login',
            error: error.message
        });
    }
});

// ============================================
// ORDER ROUTES
// ============================================

// Create new order
app.post('/api/orders', (req, res) => {
    try {
        const { userId, email, items, totalPrice, deliveryAddress, phone } = req.body;

        // Validation
        if (!email || !items || items.length === 0 || !totalPrice) {
            return res.status(400).json({
                success: false,
                message: 'Email, items, and total price are required'
            });
        }

        // Read existing orders
        let orders = readFile(ORDERS_FILE);

        // Create new order
        const newOrder = {
            orderId: 'ORD-' + Date.now(),
            userId: userId || null,
            email,
            phone,
            items,
            totalPrice,
            deliveryAddress,
            status: 'pending', // pending, confirmed, preparing, ready, delivered, cancelled
            orderTime: new Date().toISOString(),
            estimatedDeliveryTime: new Date(Date.now() + 30 * 60000).toISOString()
        };

        orders.push(newOrder);
        writeFile(ORDERS_FILE, orders);

        res.status(201).json({
            success: true,
            message: 'Order placed successfully',
            order: newOrder
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while creating order',
            error: error.message
        });
    }
});

// Get orders by email
app.get('/api/orders/:email', (req, res) => {
    try {
        const { email } = req.params;

        // Read orders
        let orders = readFile(ORDERS_FILE);

        // Filter orders by email
        const userOrders = orders.filter(order => order.email === email);

        res.json({
            success: true,
            orders: userOrders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while fetching orders',
            error: error.message
        });
    }
});

// Get all orders (Admin)
app.get('/api/orders', (req, res) => {
    try {
        let orders = readFile(ORDERS_FILE);
        
        res.json({
            success: true,
            totalOrders: orders.length,
            orders: orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while fetching orders',
            error: error.message
        });
    }
});

// Update order status
app.put('/api/orders/:orderId', (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        let orders = readFile(ORDERS_FILE);
        const order = orders.find(o => o.orderId === orderId);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        order.status = status;
        order.updatedAt = new Date().toISOString();

        writeFile(ORDERS_FILE, orders);

        res.json({
            success: true,
            message: 'Order updated successfully',
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while updating order',
            error: error.message
        });
    }
});

// Cancel order
app.delete('/api/orders/:orderId', (req, res) => {
    try {
        const { orderId } = req.params;

        let orders = readFile(ORDERS_FILE);
        const order = orders.find(o => o.orderId === orderId);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        order.status = 'cancelled';
        order.cancelledAt = new Date().toISOString();

        writeFile(ORDERS_FILE, orders);

        res.json({
            success: true,
            message: 'Order cancelled successfully',
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while cancelling order',
            error: error.message
        });
    }
});

// ============================================
// MENU ROUTES (Shopkeeper)
// ============================================

// Get menu for a specific canteen
app.get('/api/menus/:canteenName', (req, res) => {
    try {
        const { canteenName } = req.params;

        let menus = readFile(MENUS_FILE);
        const menu = menus.find(m => m.canteenName === canteenName);

        if (!menu) {
            return res.status(404).json({
                success: false,
                message: 'Menu not found for this canteen'
            });
        }

        res.json({
            success: true,
            menu: menu.items
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while fetching menu',
            error: error.message
        });
    }
});

// Update menu (Shopkeeper)
app.put('/api/menus/:canteenName', (req, res) => {
    try {
        const { canteenName } = req.params;
        const { items } = req.body;

        if (!items || !Array.isArray(items)) {
            return res.status(400).json({
                success: false,
                message: 'Items array is required'
            });
        }

        let menus = readFile(MENUS_FILE);
        let menu = menus.find(m => m.canteenName === canteenName);

        if (!menu) {
            menu = {
                canteenName,
                items: [],
                updatedAt: new Date().toISOString()
            };
            menus.push(menu);
        }

        menu.items = items;
        menu.updatedAt = new Date().toISOString();

        writeFile(MENUS_FILE, menus);

        res.json({
            success: true,
            message: 'Menu updated successfully',
            menu: menu
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while updating menu',
            error: error.message
        });
    }
});

// Add menu item
app.post('/api/menus/:canteenName/items', (req, res) => {
    try {
        const { canteenName } = req.params;
        const { name, price, description, nutrition } = req.body;

        if (!name || !price) {
            return res.status(400).json({
                success: false,
                message: 'Name and price are required'
            });
        }

        let menus = readFile(MENUS_FILE);
        let menu = menus.find(m => m.canteenName === canteenName);

        if (!menu) {
            menu = {
                canteenName,
                items: [],
                updatedAt: new Date().toISOString()
            };
            menus.push(menu);
        }

        const newItem = {
            id: Date.now(),
            name,
            price,
            description: description || '',
            nutrition: nutrition || { protein: 'N/A', carbs: 'N/A', fat: 'N/A' }
        };

        menu.items.push(newItem);
        menu.updatedAt = new Date().toISOString();

        writeFile(MENUS_FILE, menus);

        res.status(201).json({
            success: true,
            message: 'Menu item added successfully',
            item: newItem
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while adding menu item',
            error: error.message
        });
    }
});

// Delete menu item
app.delete('/api/menus/:canteenName/items/:itemId', (req, res) => {
    try {
        const { canteenName, itemId } = req.params;

        let menus = readFile(MENUS_FILE);
        const menu = menus.find(m => m.canteenName === canteenName);

        if (!menu) {
            return res.status(404).json({
                success: false,
                message: 'Menu not found'
            });
        }

        const itemIndex = menu.items.findIndex(item => item.id === parseInt(itemId));
        if (itemIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Item not found'
            });
        }

        const deletedItem = menu.items.splice(itemIndex, 1);
        menu.updatedAt = new Date().toISOString();

        writeFile(MENUS_FILE, menus);

        res.json({
            success: true,
            message: 'Menu item deleted successfully',
            item: deletedItem[0]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while deleting menu item',
            error: error.message
        });
    }
});

// ============================================
// ANALYTICS ROUTES
// ============================================

// Get order statistics
app.get('/api/analytics/orders', (req, res) => {
    try {
        let orders = readFile(ORDERS_FILE);

        const stats = {
            totalOrders: orders.length,
            totalRevenue: orders.reduce((sum, order) => sum + order.totalPrice, 0),
            ordersToday: orders.filter(o => {
                const orderDate = new Date(o.orderTime);
                const today = new Date();
                return orderDate.toDateString() === today.toDateString();
            }).length,
            ordersByStatus: {
                pending: orders.filter(o => o.status === 'pending').length,
                confirmed: orders.filter(o => o.status === 'confirmed').length,
                preparing: orders.filter(o => o.status === 'preparing').length,
                ready: orders.filter(o => o.status === 'ready').length,
                delivered: orders.filter(o => o.status === 'delivered').length,
                cancelled: orders.filter(o => o.status === 'cancelled').length
            },
            averageOrderValue: (orders.reduce((sum, order) => sum + order.totalPrice, 0) / orders.length) || 0
        };

        res.json({
            success: true,
            stats
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while fetching analytics',
            error: error.message
        });
    }
});

// Get user statistics
app.get('/api/analytics/users', (req, res) => {
    try {
        let users = readFile(USERS_FILE);

        const stats = {
            totalUsers: users.length,
            customerCount: users.filter(u => u.role === 'customer').length,
            shopkeeperCount: users.filter(u => u.role === 'shopkeeper').length,
            adminCount: users.filter(u => u.role === 'admin').length
        };

        res.json({
            success: true,
            stats
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while fetching user stats',
            error: error.message
        });
    }
});

// ============================================
// PAYMENT ROUTES
// ============================================

// Process payment (Mock)
app.post('/api/payment/process', (req, res) => {
    try {
        const { orderId, amount, method } = req.body;

        if (!orderId || !amount || !method) {
            return res.status(400).json({
                success: false,
                message: 'Order ID, amount, and payment method are required'
            });
        }

        // Mock payment processing
        const paymentId = 'PAY-' + Date.now();
        const isSuccessful = Math.random() > 0.1; // 90% success rate

        if (isSuccessful) {
            res.json({
                success: true,
                message: 'Payment processed successfully',
                paymentId,
                orderId,
                amount,
                method,
                timestamp: new Date().toISOString()
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Payment failed. Please try again.',
                error: 'PAYMENT_DECLINED'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while processing payment',
            error: error.message
        });
    }
});

// ============================================
// ADMIN ROUTES
// ============================================

// Get all users (Admin)
app.get('/api/admin/users', (req, res) => {
    try {
        let users = readFile(USERS_FILE);

        // Remove passwords for security
        const safeUsers = users.map(u => ({
            id: u.id,
            email: u.email,
            name: u.name,
            role: u.role,
            createdAt: u.createdAt,
            status: u.status
        }));

        res.json({
            success: true,
            totalUsers: safeUsers.length,
            users: safeUsers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while fetching users',
            error: error.message
        });
    }
});

// Update user status (Admin)
app.put('/api/admin/users/:userId', (req, res) => {
    try {
        const { userId } = req.params;
        const { status, role } = req.body;

        let users = readFile(USERS_FILE);
        const user = users.find(u => u.id === userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        if (status) user.status = status;
        if (role) user.role = role;

        writeFile(USERS_FILE, users);

        res.json({
            success: true,
            message: 'User updated successfully',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                status: user.status
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while updating user',
            error: error.message
        });
    }
});

// ============================================
// ERROR HANDLING
// ============================================

// 404 Not Found
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// General Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message
    });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
    console.log(`
    ╔═══════════════════════════════════════════════╗
    ║  College Canteen Hub - Backend Server        ║
    ║  Server running on http://localhost:${PORT}      ║
    ║  Version 1.0.0                                ║
    ╚═══════════════════════════════════════════════╝
    `);
});

module.exports = app;
