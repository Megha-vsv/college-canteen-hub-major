// ============================================
// FRONTEND-BACKEND INTEGRATION HELPER
// ============================================
// Add this file to your project to easily integrate frontend with backend API
// Include this script in your HTML before script.js

// API Configuration
const API_CONFIG = {
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
};

// ============================================
// API HELPER CLASS
// ============================================

class CanteenAPI {
    constructor(baseURL = API_CONFIG.baseURL) {
        this.baseURL = baseURL;
        this.token = localStorage.getItem('authToken');
    }

    // Generic fetch wrapper
    async request(endpoint, method = 'GET', data = null) {
        try {
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...(this.token && { 'Authorization': `Bearer ${this.token}` })
                }
            };

            if (data) {
                options.body = JSON.stringify(data);
            }

            const response = await fetch(`${this.baseURL}${endpoint}`, options);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'API Error');
            }

            return result;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // ============================================
    // AUTHENTICATION ENDPOINTS
    // ============================================

    async register(email, password, name, role = 'customer') {
        return this.request('/api/auth/register', 'POST', {
            email,
            password,
            name,
            role
        });
    }

    async login(email, password) {
        const response = await this.request('/api/auth/login', 'POST', {
            email,
            password
        });

        // Save token
        if (response.token) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            this.token = response.token;
        }

        return response;
    }

    logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        this.token = null;
    }

    // ============================================
    // ORDER ENDPOINTS
    // ============================================

    async createOrder(email, items, totalPrice, deliveryAddress, phone) {
        return this.request('/api/orders', 'POST', {
            email,
            items,
            totalPrice,
            deliveryAddress,
            phone
        });
    }

    async getUserOrders(email) {
        return this.request(`/api/orders/${email}`);
    }

    async getAllOrders() {
        return this.request('/api/orders');
    }

    async updateOrderStatus(orderId, status) {
        return this.request(`/api/orders/${orderId}`, 'PUT', {
            status
        });
    }

    async cancelOrder(orderId) {
        return this.request(`/api/orders/${orderId}`, 'DELETE');
    }

    // ============================================
    // MENU ENDPOINTS
    // ============================================

    async getMenu(canteenName) {
        return this.request(`/api/menus/${canteenName}`);
    }

    async addMenuItem(canteenName, name, price, description, nutrition) {
        return this.request(`/api/menus/${canteenName}/items`, 'POST', {
            name,
            price,
            description,
            nutrition
        });
    }

    async updateMenu(canteenName, items) {
        return this.request(`/api/menus/${canteenName}`, 'PUT', {
            items
        });
    }

    async deleteMenuItem(canteenName, itemId) {
        return this.request(`/api/menus/${canteenName}/items/${itemId}`, 'DELETE');
    }

    // ============================================
    // ANALYTICS ENDPOINTS
    // ============================================

    async getOrderStats() {
        return this.request('/api/analytics/orders');
    }

    async getUserStats() {
        return this.request('/api/analytics/users');
    }

    // ============================================
    // PAYMENT ENDPOINTS
    // ============================================

    async processPayment(orderId, amount, method) {
        return this.request('/api/payment/process', 'POST', {
            orderId,
            amount,
            method
        });
    }

    // ============================================
    // ADMIN ENDPOINTS
    // ============================================

    async getAllUsers() {
        return this.request('/api/admin/users');
    }

    async updateUserStatus(userId, status, role) {
        return this.request(`/api/admin/users/${userId}`, 'PUT', {
            status,
            role
        });
    }
}

// Initialize API
const api = new CanteenAPI();

// ============================================
// EXAMPLE USAGE IN YOUR FRONTEND
// ============================================

/*

// 1. REGISTRATION
async function handleRegister() {
    try {
        const response = await api.register(
            'user@example.com',
            'password123',
            'John Doe',
            'customer'
        );
        console.log('Registration successful:', response);
    } catch (error) {
        console.error('Registration failed:', error);
    }
}

// 2. LOGIN
async function handleLogin() {
    try {
        const response = await api.login(
            'user@example.com',
            'password123'
        );
        console.log('Login successful:', response);
    } catch (error) {
        console.error('Login failed:', error);
    }
}

// 3. PLACE ORDER
async function handleCheckout() {
    try {
        const response = await api.createOrder(
            'user@example.com',
            [
                { id: 1, name: 'Butter Chicken', price: 280, quantity: 2, canteen: 'Captain Cuisine' },
                { id: 3, name: 'Veg Biryani', price: 180, quantity: 1, canteen: 'Captain Cuisine' }
            ],
            740,
            'Room 123, Hostel A',
            '9876543210'
        );
        console.log('Order placed:', response);
    } catch (error) {
        console.error('Order failed:', error);
    }
}

// 4. GET USER ORDERS
async function handleGetOrders() {
    try {
        const response = await api.getUserOrders('user@example.com');
        console.log('User orders:', response);
    } catch (error) {
        console.error('Failed to fetch orders:', error);
    }
}

// 5. PROCESS PAYMENT
async function handlePayment() {
    try {
        const response = await api.processPayment(
            'ORD-1694532210000',
            740,
            'upi'
        );
        console.log('Payment successful:', response);
    } catch (error) {
        console.error('Payment failed:', error);
    }
}

*/

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Get order status badge color
function getStatusColor(status) {
    const colors = {
        pending: '#FFC107',
        confirmed: '#2196F3',
        preparing: '#FF9800',
        ready: '#8BC34A',
        delivered: '#4CAF50',
        cancelled: '#F44336'
    };
    return colors[status] || '#757575';
}

// Get order status icon
function getStatusIcon(status) {
    const icons = {
        pending: 'fa-hourglass-start',
        confirmed: 'fa-check-circle',
        preparing: 'fa-utensils',
        ready: 'fa-clipboard-check',
        delivered: 'fa-check-double',
        cancelled: 'fa-ban'
    };
    return icons[status] || 'fa-info-circle';
}

// ============================================
// INTEGRATION WITH EXISTING CHECKOUT
// ============================================

/*
// Replace your existing checkout function with this:

async function improvedCheckout() {
    const userEmail = localStorage.getItem('userEmail'); // Get from login
    const deliveryAddress = prompt('Enter delivery address:');
    const phone = prompt('Enter phone number:');

    if (!deliveryAddress || !phone || !userEmail) {
        showToast('Please provide all required details', 'error');
        return;
    }

    try {
        // Create order
        const orderResponse = await api.createOrder(
            userEmail,
            cart,
            cartTotalPrice,
            deliveryAddress,
            phone
        );

        if (orderResponse.success) {
            const orderId = orderResponse.order.orderId;
            
            // Process payment
            const paymentResponse = await api.processPayment(
                orderId,
                cartTotalPrice,
                'upi' // or get from user selection
            );

            if (paymentResponse.success) {
                showToast('Order placed successfully! Order ID: ' + orderId, 'success');
                clearCart();
                // Redirect to order tracking page
            }
        }
    } catch (error) {
        showToast('Checkout failed: ' + error.message, 'error');
    }
}
*/
