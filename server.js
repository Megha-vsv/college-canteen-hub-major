// ============================================
// COLLEGE CANTEEN HUB - BACKEND SERVER
// ============================================
// Node.js + Express Backend for Canteen Ordering System
// Version: 1.2.0
// Added:
// 1. Food Waste Analytics
// 2. Token / Queue Management
// ============================================

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

function seedDemoUsers() {
    let users = readFile(USERS_FILE);
    const demoUsers = [
        { email: 'customer@college.com', password: 'customer123', name: 'Customer', role: 'customer' },
        { email: 'shopkeeper@college.com', password: 'shopkeeper123', name: 'Utopia', role: 'shopkeeper', shop: 'Utopia' },
        { email: 'captain@college.com', password: 'captain123', name: 'Captain Cuisine', role: 'shopkeeper', shop: 'Captain Cuisine' },
        { email: 'farki@college.com', password: 'farki123', name: 'Farki', role: 'shopkeeper', shop: 'Farki' },
        { email: 'belgian@college.com', password: 'belgian123', name: 'Belgian Waffle', role: 'shopkeeper', shop: 'Belgian Waffle' },
        { email: 'lapinoz@college.com', password: 'lapinoz123', name: 'La Pinoz Pizza', role: 'shopkeeper', shop: 'La Pinoz Pizza' },
        { email: 'admin@college.com', password: 'admin123', name: 'Admin', role: 'admin' }
    ];
    let changed = false;
    for (const demo of demoUsers) {
        if (!users.some(u => String(u.email).toLowerCase() === demo.email)) {
            users.push({ id: Date.now().toString() + Math.random().toString(36).slice(2,7), ...demo, createdAt: new Date().toISOString(), status: 'active' });
            changed = true;
        }
    }
    if (changed) writeFile(USERS_FILE, users);
}


// Create data folder if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}

// ============================================
// HELPER FUNCTIONS
// ============================================

// Helper function to read JSON files
function readFile(filePath, defaultData = []) {
    try {
        if (fs.existsSync(filePath)) {
            return JSON.parse(
                fs.readFileSync(filePath, 'utf8')
            );
        }

        return defaultData;

    } catch (error) {

        console.error(
            `Error reading ${filePath}:`,
            error
        );

        return defaultData;
    }
}

// Helper function to write JSON files
function writeFile(filePath, data) {
    try {

        fs.writeFileSync(
            filePath,
            JSON.stringify(data, null, 2),
            'utf8'
        );

        return true;

    } catch (error) {

        console.error(
            `Error writing to ${filePath}:`,
            error
        );

        return false;
    }
}

seedDemoUsers();

// ============================================
// TOKEN / QUEUE HELPER
// ============================================

// Generate daily sequential token
// Example:
// T001
// T002
// T003
//
// Token numbering starts from T001 each day.

function generateDailyToken(orders) {

    const today =
        new Date().toDateString();

    let highestTokenNumber = 0;

    orders.forEach(order => {

        if (!order.orderTime) {
            return;
        }

        const orderDate =
            new Date(order.orderTime);

        if (
            isNaN(
                orderDate.getTime()
            )
        ) {
            return;
        }

        // Only consider today's orders
        if (
            orderDate.toDateString() !== today
        ) {
            return;
        }

        // Support new orders
        // that have tokenNumber
        if (
            typeof order.tokenNumber === 'number'
        ) {

            if (
                order.tokenNumber >
                highestTokenNumber
            ) {

                highestTokenNumber =
                    order.tokenNumber;
            }

            return;
        }

        // Also support token values
        // from existing data if available
        if (order.token) {

            const tokenMatch =
                String(order.token)
                    .match(/\d+/);

            if (tokenMatch) {

                const number =
                    parseInt(
                        tokenMatch[0],
                        10
                    );

                if (
                    number >
                    highestTokenNumber
                ) {

                    highestTokenNumber =
                        number;
                }
            }
        }
    });

    const nextTokenNumber =
        highestTokenNumber + 1;

    const token =
        'T' +
        String(nextTokenNumber)
            .padStart(3, '0');

    return {
        tokenNumber:
            nextTokenNumber,

        token
    };
}

// ============================================
// AUTHENTICATION ROUTES
// ============================================

// User Registration
app.post('/api/auth/register', (req, res) => {

    try {

        const {
            email,
            password,
            name,
            role
        } = req.body;

        // Validation
        const normalizedEmail = String(email || '').trim().toLowerCase();

        if (!normalizedEmail || !password || !name) {

            return res.status(400).json({
                success: false,
                message:
                    'Email, password, and name are required'
            });
        }

        // Read existing users
        let users = readFile(USERS_FILE);

        // Check if user already exists
        if (
            users.some(
                user => String(user.email).toLowerCase() === normalizedEmail
            )
        ) {

            return res.status(400).json({
                success: false,
                message:
                    'Email already registered'
            });
        }

        // Create new user
        const newUser = {

            id:
                Date.now().toString(),

            email: normalizedEmail,

            password,
            // Note:
            // In production, hash passwords
            // using bcrypt

            name,

            role: 'customer',

            createdAt:
                new Date().toISOString(),

            status:
                'active'
        };

        users.push(newUser);

        writeFile(
            USERS_FILE,
            users
        );

        res.status(201).json({

            success:
                true,

            message:
                'User registered successfully',

            user: {

                id:
                    newUser.id,

                email:
                    newUser.email,

                name:
                    newUser.name,

                role:
                    newUser.role
            }
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error during registration',

            error:
                error.message
        });
    }
});

// User Login
app.post('/api/auth/login', (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;

        // Validation
        const normalizedEmail = String(email || '').trim().toLowerCase();

        if (!normalizedEmail || !password) {

            return res.status(400).json({

                success:
                    false,

                message:
                    'Email and password are required'
            });
        }

        // Find user
        let users =
            readFile(
                USERS_FILE
            );

        const user =
            users.find(
                u =>
                    String(u.email).toLowerCase() === normalizedEmail &&
                    u.password === password
            );

        if (!user) {

            return res.status(401).json({

                success:
                    false,

                message:
                    'Invalid email or password'
            });
        }

        // In production,
        // generate JWT token here
        const token =
            Buffer
                .from(
                    `${normalizedEmail}:${Date.now()}`
                )
                .toString('base64');

        res.json({

            success:
                true,

            message:
                'Login successful',

            token,

            user: {

                id:
                    user.id,

                email:
                    user.email,

                name:
                    user.name,

                role:
                    user.role,

                shop:
                    user.shop || null
            }
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error during login',

            error:
                error.message
        });
    }
});

// ============================================
// ORDER ROUTES
// ============================================

// Create new order
app.post('/api/orders', (req, res) => {

    try {

        const {
            userId,
            email,
            customerName,
            items,
            totalPrice,
            deliveryAddress,
            phone,
            latitude,
            longitude,
            paymentStatus,
            paymentId,
            razorpayOrderId,
            paymentMethod,
            status
        } = req.body;

        // Validation
        if (
            !email ||
            !items ||
            items.length === 0 ||
            !totalPrice
        ) {

            return res.status(400).json({

                success: false,

                message:
                    'Email, items, and total price are required'
            });
        }

        // Read existing orders
        let orders =
            readFile(
                ORDERS_FILE
            );

        // ----------------------------------------
        // GENERATE DAILY TOKEN
        // ----------------------------------------

        const tokenData =
            generateDailyToken(
                orders
            );

        // ----------------------------------------
        // CREATE NEW ORDER
        // ----------------------------------------

        const newOrder = {

            orderId:
                'ORD-' + Date.now(),

            // Token / Queue Information
            tokenNumber:
                tokenData.tokenNumber,

            token:
                tokenData.token,

            // Customer Information
            userId:
                userId || null,

            email:
                email,

            customerName:
                customerName || 'Not provided',

            phone:
                phone || 'Not provided',

            // Delivery Information
            deliveryAddress:
                deliveryAddress || 'Not provided',

            latitude:
                latitude !== undefined &&
                latitude !== null &&
                latitude !== ''
                    ? Number(latitude)
                    : null,

            longitude:
                longitude !== undefined &&
                longitude !== null &&
                longitude !== ''
                    ? Number(longitude)
                    : null,

            // Order Items
            items:
                items,

            totalPrice:
                Number(totalPrice),

            // Payment Information
            paymentStatus:
                paymentStatus || 'pending',

            paymentId:
                paymentId || null,

            razorpayOrderId:
                razorpayOrderId || null,

            paymentMethod:
                paymentMethod || 'demo',

            // Order Status
            status:
                status || 'pending',

            statusHistory: [
                {
                    status:
                        status || 'pending',

                    updatedAt:
                        new Date().toISOString()
                }
            ],

            // Timestamps
            orderTime:
                new Date().toISOString(),

            updatedAt:
                new Date().toISOString(),

            estimatedDeliveryTime:
                new Date(
                    Date.now() +
                    30 * 60000
                ).toISOString()
        };

        // ----------------------------------------
        // SAVE ORDER
        // ----------------------------------------

        orders.push(
            newOrder
        );

        const saved =
            writeFile(
                ORDERS_FILE,
                orders
            );

        if (!saved) {

            return res.status(500).json({

                success: false,

                message:
                    'Unable to save order'
            });
        }

        // ----------------------------------------
        // RESPONSE
        // ----------------------------------------

        res.status(201).json({

            success: true,

            message:
                'Order placed successfully',

            order:
                newOrder
        });

    } catch (error) {

        console.error(
            'Create order error:',
            error
        );

        res.status(500).json({

            success: false,

            message:
                'Server error while creating order',

            error:
                error.message
        });
    }
});

// Get orders by email
app.get('/api/orders/:email', (req, res) => {

    try {

        const {
            email
        } = req.params;

        // Read orders
        let orders =
            readFile(
                ORDERS_FILE
            );

        // Filter orders by email
        const userOrders =
            orders.filter(
                order =>
                    order.email === email
            );

        res.json({

            success:
                true,

            orders:
                userOrders
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error while fetching orders',

            error:
                error.message
        });
    }
});

// Get all orders (Admin)
app.get('/api/orders', (req, res) => {

    try {

        let orders =
            readFile(
                ORDERS_FILE
            );

        res.json({

            success:
                true,

            totalOrders:
                orders.length,

            orders
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error while fetching orders',

            error:
                error.message
        });
    }
});

// Update order status
app.put('/api/orders/:orderId', (req, res) => {

    try {

        const { orderId } = req.params;
        const { status } = req.body;

        let orders = readFile(ORDERS_FILE);

        const order = orders.find(
            o => o.orderId === orderId
        );

        if (!order) {

            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        // Allowed order statuses
        const allowedStatuses = [
            'pending',
            'confirmed',
            'preparing',
            'ready',
            'out_for_delivery',
            'delivered',
            'cancelled'
        ];

        if (!allowedStatuses.includes(status)) {

            return res.status(400).json({
                success: false,
                message: 'Invalid order status'
            });
        }

        // Update current status
        order.status = status;

        order.updatedAt =
            new Date().toISOString();

        // Create status history if it doesn't exist
        if (!Array.isArray(order.statusHistory)) {

            order.statusHistory = [];
        }

        // Add status history entry
        order.statusHistory.push({

            status: status,

            updatedAt:
                new Date().toISOString()
        });

        // Add timestamps for queue/order tracking

        if (
            status === 'confirmed' &&
            !order.confirmedAt
        ) {

            order.confirmedAt =
                new Date().toISOString();
        }

        if (
            status === 'preparing' &&
            !order.preparingAt
        ) {

            order.preparingAt =
                new Date().toISOString();
        }

        if (
            status === 'ready' &&
            !order.readyAt
        ) {

            order.readyAt =
                new Date().toISOString();
        }

        if (
            status === 'out_for_delivery' &&
            !order.outForDeliveryAt
        ) {

            order.outForDeliveryAt =
                new Date().toISOString();
        }

        if (
            status === 'delivered' &&
            !order.deliveredAt
        ) {

            order.deliveredAt =
                new Date().toISOString();
        }

        writeFile(
            ORDERS_FILE,
            orders
        );

        res.json({

            success: true,

            message:
                'Order status updated successfully',

            order
        });

    } catch (error) {

        console.error(
            'Update order status error:',
            error
        );

        res.status(500).json({

            success: false,

            message:
                'Server error while updating order',

            error:
                error.message
        });
    }
});

// Cancel order
app.delete('/api/orders/:orderId', (req, res) => {

    try {

        const {
            orderId
        } = req.params;

        let orders =
            readFile(
                ORDERS_FILE
            );

        const order =
            orders.find(
                o =>
                    o.orderId === orderId
            );

        if (!order) {

            return res.status(404).json({

                success:
                    false,

                message:
                    'Order not found'
            });
        }

        order.status =
            'cancelled';

        order.cancelledAt =
            new Date().toISOString();

        writeFile(
            ORDERS_FILE,
            orders
        );

        res.json({

            success:
                true,

            message:
                'Order cancelled successfully',

            order
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error while cancelling order',

            error:
                error.message
        });
    }
});

// ============================================
// MENU ROUTES (SHOPKEEPER)
// ============================================

// Get menu for a specific canteen
app.get('/api/menus/:canteenName', (req, res) => {

    try {

        const {
            canteenName
        } = req.params;

        let menus =
            readFile(
                MENUS_FILE
            );

        const menu =
            menus.find(
                m =>
                    m.canteenName ===
                    canteenName
            );

        if (!menu) {

            return res.status(404).json({

                success:
                    false,

                message:
                    'Menu not found for this canteen'
            });
        }

        res.json({

            success:
                true,

            menu:
                menu.items
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error while fetching menu',

            error:
                error.message
        });
    }
});

// Update menu (Shopkeeper)
app.put('/api/menus/:canteenName', (req, res) => {

    try {

        const {
            canteenName
        } = req.params;

        const {
            items
        } = req.body;

        if (
            !items ||
            !Array.isArray(items)
        ) {

            return res.status(400).json({

                success:
                    false,

                message:
                    'Items array is required'
            });
        }

        let menus =
            readFile(
                MENUS_FILE
            );

        let menu =
            menus.find(
                m =>
                    m.canteenName ===
                    canteenName
            );

        if (!menu) {

            menu = {

                canteenName,

                items: [],

                updatedAt:
                    new Date().toISOString()
            };

            menus.push(
                menu
            );
        }

        menu.items =
            items;

        menu.updatedAt =
            new Date().toISOString();

        writeFile(
            MENUS_FILE,
            menus
        );

        res.json({

            success:
                true,

            message:
                'Menu updated successfully',

            menu
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error while updating menu',

            error:
                error.message
        });
    }
});

// Add menu item
app.post('/api/menus/:canteenName/items', (req, res) => {

    try {

        const {
            canteenName
        } = req.params;

        const {
            name,
            price,
            description,
            nutrition
        } = req.body;

        if (!name || !price) {

            return res.status(400).json({

                success:
                    false,

                message:
                    'Name and price are required'
            });
        }

        let menus =
            readFile(
                MENUS_FILE
            );

        let menu =
            menus.find(
                m =>
                    m.canteenName ===
                    canteenName
            );

        if (!menu) {

            menu = {

                canteenName,

                items: [],

                updatedAt:
                    new Date().toISOString()
            };

            menus.push(
                menu
            );
        }

        const newItem = {

            id:
                Date.now(),

            name,

            price,

            description:
                description || '',

            nutrition:
                nutrition ||
                {
                    protein:
                        'N/A',

                    carbs:
                        'N/A',

                    fat:
                        'N/A'
                }
        };

        menu.items.push(
            newItem
        );

        menu.updatedAt =
            new Date().toISOString();

        writeFile(
            MENUS_FILE,
            menus
        );

        res.status(201).json({

            success:
                true,

            message:
                'Menu item added successfully',

            item:
                newItem
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error while adding menu item',

            error:
                error.message
        });
    }
});

// Delete menu item
app.delete('/api/menus/:canteenName/items/:itemId', (req, res) => {

    try {

        const {
            canteenName,
            itemId
        } = req.params;

        let menus =
            readFile(
                MENUS_FILE
            );

        const menu =
            menus.find(
                m =>
                    m.canteenName ===
                    canteenName
            );

        if (!menu) {

            return res.status(404).json({

                success:
                    false,

                message:
                    'Menu not found'
            });
        }

        const itemIndex =
            menu.items.findIndex(
                item =>
                    item.id ===
                    parseInt(itemId)
            );

        if (itemIndex === -1) {

            return res.status(404).json({

                success:
                    false,

                message:
                    'Item not found'
            });
        }

        const deletedItem =
            menu.items.splice(
                itemIndex,
                1
            );

        menu.updatedAt =
            new Date().toISOString();

        writeFile(
            MENUS_FILE,
            menus
        );

        res.json({

            success:
                true,

            message:
                'Menu item deleted successfully',

            item:
                deletedItem[0]
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error while deleting menu item',

            error:
                error.message
        });
    }
});

// ============================================
// ADVANCED ORDER ANALYTICS
// ============================================

app.get('/api/analytics/orders', (req, res) => {

    try {

        const orders =
            readFile(
                ORDERS_FILE
            );

        // Only valid orders for sales calculations
        const validOrders =
            orders.filter(
                order =>
                    order.status !== 'cancelled'
            );

        // -----------------------------
        // BASIC STATISTICS
        // -----------------------------

        const totalOrders =
            validOrders.length;

        const totalRevenue =
            validOrders.reduce(
                (sum, order) =>
                    sum +
                    Number(
                        order.totalPrice || 0
                    ),
                0
            );

        const today =
            new Date();

        const ordersToday =
            validOrders.filter(
                order => {

                    const orderDate =
                        new Date(
                            order.orderTime
                        );

                    return (
                        orderDate.toDateString() ===
                        today.toDateString()
                    );
                }
            ).length;

        const averageOrderValue =
            totalOrders > 0
                ? totalRevenue / totalOrders
                : 0;

        // -----------------------------
        // ORDERS BY STATUS
        // -----------------------------

        const ordersByStatus = {

            pending:
                orders.filter(
                    o =>
                        o.status ===
                        'pending'
                ).length,

            confirmed:
                orders.filter(
                    o =>
                        o.status ===
                        'confirmed'
                ).length,

            preparing:
                orders.filter(
                    o =>
                        o.status ===
                        'preparing'
                ).length,

            ready:
                orders.filter(
                    o =>
                        o.status ===
                        'ready'
                ).length,

            delivered:
                orders.filter(
                    o =>
                        o.status ===
                        'delivered'
                ).length,

            cancelled:
                orders.filter(
                    o =>
                        o.status ===
                        'cancelled'
                ).length
        };

        // -----------------------------
        // TOP FOOD ITEMS
        // -----------------------------

        const itemSales = {};

        validOrders.forEach(order => {

            if (
                !Array.isArray(
                    order.items
                )
            ) {
                return;
            }

            order.items.forEach(item => {

                const itemName =
                    item.name ||
                    'Unknown Item';

                const quantity =
                    Number(
                        item.quantity || 1
                    );

                if (
                    !itemSales[itemName]
                ) {

                    itemSales[itemName] =
                        0;
                }

                itemSales[itemName] +=
                    quantity;
            });
        });

        const topItems =
            Object.entries(
                itemSales
            )
                .map(
                    ([name, quantity]) => ({
                        name,
                        quantity
                    })
                )
                .sort(
                    (a, b) =>
                        b.quantity -
                        a.quantity
                )
                .slice(
                    0,
                    10
                );

        // -----------------------------
        // REVENUE BY DAY
        // -----------------------------

        const revenueByDay = {};

        validOrders.forEach(order => {

            const date =
                new Date(
                    order.orderTime
                );

            if (
                isNaN(
                    date.getTime()
                )
            ) {
                return;
            }

            const dateKey =
                date
                    .toISOString()
                    .split('T')[0];

            if (
                !revenueByDay[dateKey]
            ) {

                revenueByDay[dateKey] =
                    0;
            }

            revenueByDay[dateKey] +=
                Number(
                    order.totalPrice || 0
                );
        });

        const dailyRevenue =
            Object.entries(
                revenueByDay
            )
                .map(
                    ([date, revenue]) => ({
                        date,

                        revenue:
                            Number(
                                revenue.toFixed(
                                    2
                                )
                            )
                    })
                )
                .sort(
                    (a, b) =>
                        a.date.localeCompare(
                            b.date
                        )
                );

        // -----------------------------
        // ORDERS BY DAY
        // -----------------------------

        const ordersByDay = {};

        validOrders.forEach(order => {

            const date =
                new Date(
                    order.orderTime
                );

            if (
                isNaN(
                    date.getTime()
                )
            ) {
                return;
            }

            const dateKey =
                date
                    .toISOString()
                    .split('T')[0];

            if (
                !ordersByDay[dateKey]
            ) {

                ordersByDay[dateKey] =
                    0;
            }

            ordersByDay[dateKey]++;
        });

        const dailyOrders =
            Object.entries(
                ordersByDay
            )
                .map(
                    ([date, orders]) => ({
                        date,
                        orders
                    })
                )
                .sort(
                    (a, b) =>
                        a.date.localeCompare(
                            b.date
                        )
                );

        // -----------------------------
        // PEAK ORDERING HOUR
        // -----------------------------

        const hourlyOrders = {};

        validOrders.forEach(order => {

            const date =
                new Date(
                    order.orderTime
                );

            if (
                isNaN(
                    date.getTime()
                )
            ) {
                return;
            }

            const hour =
                date.getHours();

            if (
                !hourlyOrders[hour]
            ) {

                hourlyOrders[hour] =
                    0;
            }

            hourlyOrders[hour]++;
        });

        let peakHour =
            null;

        let highestOrders =
            0;

        Object.entries(
            hourlyOrders
        ).forEach(
            ([hour, count]) => {

                if (
                    count >
                    highestOrders
                ) {

                    highestOrders =
                        count;

                    peakHour =
                        Number(
                            hour
                        );
                }
            }
        );

        // -----------------------------
        // FINAL RESPONSE
        // -----------------------------

        res.json({

            success:
                true,

            stats: {

                totalOrders,

                totalRevenue:
                    Number(
                        totalRevenue.toFixed(
                            2
                        )
                    ),

                ordersToday,

                averageOrderValue:
                    Number(
                        averageOrderValue.toFixed(
                            2
                        )
                    ),

                ordersByStatus,

                topItems,

                dailyRevenue,

                dailyOrders,

                peakHour,

                peakHourOrders:
                    highestOrders
            }
        });

    } catch (error) {

        console.error(
            'Analytics Error:',
            error
        );

        res.status(500).json({

            success:
                false,

            message:
                'Server error while fetching analytics',

            error:
                error.message
        });
    }
});

// ============================================
// FOOD WASTE / DEMAND ANALYTICS
// ============================================

app.get('/api/analytics/food-waste', (req, res) => {

    try {

        const orders =
            readFile(
                ORDERS_FILE
            );

        // Ignore cancelled orders
        const validOrders =
            orders.filter(
                order =>
                    order.status !==
                    'cancelled'
            );

        // ----------------------------------------
        // FOOD SALES CALCULATION
        // ----------------------------------------

        const foodData = {};

        validOrders.forEach(order => {

            if (
                !Array.isArray(
                    order.items
                )
            ) {
                return;
            }

            order.items.forEach(item => {

                const name =
                    item.name ||
                    'Unknown Item';

                const quantity =
                    Number(
                        item.quantity || 1
                    );

                const price =
                    Number(
                        item.price || 0
                    );

                const canteen =
                    item.canteen ||
                    'Unknown Canteen';

                if (
                    !foodData[name]
                ) {

                    foodData[name] = {

                        name,

                        quantitySold:
                            0,

                        revenue:
                            0,

                        orders:
                            0,

                        canteens:
                            {}
                    };
                }

                foodData[name]
                    .quantitySold +=
                    quantity;

                foodData[name]
                    .revenue +=
                    quantity *
                    price;

                foodData[name]
                    .orders +=
                    1;

                if (
                    !foodData[name]
                        .canteens[canteen]
                ) {

                    foodData[name]
                        .canteens[canteen] =
                        0;
                }

                foodData[name]
                    .canteens[canteen] +=
                    quantity;
            });
        });

        // ----------------------------------------
        // TOTAL QUANTITY
        // ----------------------------------------

        const totalQuantitySold =
            Object.values(
                foodData
            )
                .reduce(
                    (sum, item) =>
                        sum +
                        item.quantitySold,
                    0
                );

        // ----------------------------------------
        // SORT FOOD ITEMS
        // ----------------------------------------

        const foodItems =
            Object.values(
                foodData
            )
                .map(item => {

                    let demandLevel =
                        'Low';

                    if (
                        item.quantitySold >=
                        10
                    ) {

                        demandLevel =
                            'High';

                    } else if (
                        item.quantitySold >=
                        5
                    ) {

                        demandLevel =
                            'Medium';
                    }

                    return {

                        name:
                            item.name,

                        quantitySold:
                            item.quantitySold,

                        revenue:
                            Number(
                                item.revenue.toFixed(
                                    2
                                )
                            ),

                        orders:
                            item.orders,

                        demandLevel,

                        canteens:
                            item.canteens
                    };

                })
                .sort(
                    (a, b) =>
                        b.quantitySold -
                        a.quantitySold
                );

        // ----------------------------------------
        // HIGH DEMAND ITEMS
        // ----------------------------------------

        const highDemand =
            foodItems.filter(
                item =>
                    item.demandLevel ===
                    'High'
            );

        // ----------------------------------------
        // MEDIUM DEMAND ITEMS
        // ----------------------------------------

        const mediumDemand =
            foodItems.filter(
                item =>
                    item.demandLevel ===
                    'Medium'
            );

        // ----------------------------------------
        // LOW DEMAND ITEMS
        // ----------------------------------------

        const lowDemand =
            foodItems.filter(
                item =>
                    item.demandLevel ===
                    'Low'
            );

        // ----------------------------------------
        // WASTE RISK
        // ----------------------------------------
        // Low-demand food items are considered
        // higher risk for over-preparation.
        // This is an estimated risk,
        // not actual measured food waste.

        const wasteRiskItems =
            lowDemand.map(item => ({

                name:
                    item.name,

                quantitySold:
                    item.quantitySold,

                demandLevel:
                    item.demandLevel,

                recommendation:
                    'Prepare smaller quantities and monitor demand.'

            }));

        // ----------------------------------------
        // PREPARATION RECOMMENDATIONS
        // ----------------------------------------

        const preparationRecommendations =
            foodItems.map(item => {

                let recommendation;

                if (
                    item.demandLevel ===
                    'High'
                ) {

                    recommendation =
                        'Prepare more stock because demand is high.';

                } else if (
                    item.demandLevel ===
                    'Medium'
                ) {

                    recommendation =
                        'Maintain normal stock and monitor demand.';

                } else {

                    recommendation =
                        'Prepare limited stock to reduce possible waste.';
                }

                return {

                    name:
                        item.name,

                    quantitySold:
                        item.quantitySold,

                    demandLevel:
                        item.demandLevel,

                    recommendation
                };
            });

        // ----------------------------------------
        // FINAL RESPONSE
        // ----------------------------------------

        res.json({

            success:
                true,

            analytics: {

                totalFoodItems:
                    foodItems.length,

                totalQuantitySold,

                highDemandCount:
                    highDemand.length,

                mediumDemandCount:
                    mediumDemand.length,

                lowDemandCount:
                    lowDemand.length,

                foodItems,

                highDemand,

                mediumDemand,

                lowDemand,

                wasteRiskItems,

                preparationRecommendations
            }
        });

    } catch (error) {

        console.error(
            'Food Waste Analytics Error:',
            error
        );

        res.status(500).json({

            success:
                false,

            message:
                'Server error while calculating food waste analytics',

            error:
                error.message
        });
    }
});

// ============================================
// USER ANALYTICS
// ============================================

app.get('/api/analytics/users', (req, res) => {

    try {

        let users =
            readFile(
                USERS_FILE
            );

        const stats = {

            totalUsers:
                users.length,

            customerCount:
                users.filter(
                    u =>
                        u.role ===
                        'customer'
                ).length,

            shopkeeperCount:
                users.filter(
                    u =>
                        u.role ===
                        'shopkeeper'
                ).length,

            adminCount:
                users.filter(
                    u =>
                        u.role ===
                        'admin'
                ).length
        };

        res.json({

            success:
                true,

            stats
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error while fetching user stats',

            error:
                error.message
        });
    }
});

// ============================================
// PAYMENT ROUTES - FREE DEMO PAYMENT
// ============================================

// This is a college-project payment simulation.
// No real money is charged and no payment gateway account/API key is required.
app.post('/api/payment/demo', (req, res) => {
    try {
        const numericAmount = Number(req.body.amount);
        const method = String(req.body.method || 'UPI').trim();

        if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
            return res.status(400).json({
                success: false,
                message: 'A valid payment amount is required'
            });
        }

        const allowedMethods = ['UPI', 'Card', 'Net Banking', 'Cashless Demo'];
        const paymentMethod = allowedMethods.includes(method) ? method : 'UPI';
        const paymentId = 'DEMO-PAY-' + Date.now() + '-' + Math.floor(1000 + Math.random() * 9000);

        res.json({
            success: true,
            demo: true,
            message: 'Demo payment completed successfully',
            payment: {
                paymentId,
                amount: Number(numericAmount.toFixed(2)),
                currency: 'INR',
                method: paymentMethod,
                status: 'paid',
                paidAt: new Date().toISOString()
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Demo payment failed',
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

        let users =
            readFile(
                USERS_FILE
            );

        // Remove passwords for security
        const safeUsers =
            users.map(
                u => ({

                    id:
                        u.id,

                    email:
                        u.email,

                    name:
                        u.name,

                    role:
                        u.role,

                    createdAt:
                        u.createdAt,

                    status:
                        u.status
                })
            );

        res.json({

            success:
                true,

            totalUsers:
                safeUsers.length,

            users:
                safeUsers
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error while fetching users',

            error:
                error.message
        });
    }
});

// Update user status (Admin)
app.put('/api/admin/users/:userId', (req, res) => {

    try {

        const {
            userId
        } = req.params;

        const {
            status,
            role
        } = req.body;

        let users =
            readFile(
                USERS_FILE
            );

        const user =
            users.find(
                u =>
                    u.id ===
                    userId
            );

        if (!user) {

            return res.status(404).json({

                success:
                    false,

                message:
                    'User not found'
            });
        }

        if (status) {

            user.status =
                status;
        }

        if (role) {

            user.role =
                role;
        }

        writeFile(
            USERS_FILE,
            users
        );

        res.json({

            success:
                true,

            message:
                'User updated successfully',

            user: {

                id:
                    user.id,

                email:
                    user.email,

                name:
                    user.name,

                role:
                    user.role,

                status:
                    user.status
            }
        });

    } catch (error) {

        res.status(500).json({

            success:
                false,

            message:
                'Server error while updating user',

            error:
                error.message
        });
    }
});

// ============================================
// ERROR HANDLING
// ============================================

// 404 Not Found
app.use((req, res) => {

    res.status(404).json({

        success:
            false,

        message:
            'Route not found'
    });
});

// General Error Handler
app.use(
    (err, req, res, next) => {

        console.error(
            'Error:',
            err
        );

        res.status(500).json({

            success:
                false,

            message:
                'Internal server error',

            error:
                err.message
        });
    }
);

// ============================================
// START SERVER
// ============================================

app.listen(
    PORT,
    () => {

        console.log(`

    ╔═══════════════════════════════════════════════╗
    ║  College Canteen Hub - Backend Server        ║
    ║  Server running on http://localhost:${PORT}  ║
    ║  Version 1.2.0                                ║
    ╚═══════════════════════════════════════════════╝

        `);
    }
);

module.exports = app;