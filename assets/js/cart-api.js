/**
 * Unified Cart API for Aramane Sweets
 * Centralized cart management with localStorage persistence
 * Used across all pages: index, products, gifts, cart
 */

const CART_CONFIG = {
  STORAGE_KEY: 'aramane_cart_v2',
  MAX_ITEMS: 100,
  EVENTS: {
    ITEM_ADDED: 'cart:item-added',
    ITEM_REMOVED: 'cart:item-removed',
    QUANTITY_CHANGED: 'cart:quantity-changed',
    CART_CLEARED: 'cart:cleared',
    CART_UPDATED: 'cart:updated'
  }
};

class CartAPI {
  constructor() {
    this.cart = this.loadCart();
    this.listeners = {};
  }

  /**
   * Load cart from localStorage
   * @returns {Array} Cart items
   */
  loadCart() {
    try {
      const saved = localStorage.getItem(CART_CONFIG.STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error loading cart:', e);
      return [];
    }
  }

  /**
   * Save cart to localStorage
   */
  saveCart() {
    try {
      localStorage.setItem(CART_CONFIG.STORAGE_KEY, JSON.stringify(this.cart));
      this.emit(CART_CONFIG.EVENTS.CART_UPDATED, { cart: this.cart });
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }

  /**
   * Add item to cart
   * @param {Object} item - { id, name, price, weight, image, category }
   * @param {Number} quantity - Quantity to add (default 1)
   * @returns {Object} Item added with quantity
   */
  addItem(item, quantity = 1) {
    if (!item || !item.id || !item.name || !item.price) {
      console.error('Invalid item:', item);
      return null;
    }

    const existingIndex = this.cart.findIndex(i => i.id === item.id);

    if (existingIndex > -1) {
      // Item exists, update quantity
      this.cart[existingIndex].qty += quantity;
    } else {
      // New item
      if (this.cart.length >= CART_CONFIG.MAX_ITEMS) {
        console.warn('Cart is full');
        return null;
      }
      this.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        weight: item.weight || '',
        image: item.image || 'https://via.placeholder.com/180',
        category: item.category || 'sweets',
        qty: quantity,
        addedAt: new Date().toISOString()
      });
    }

    this.saveCart();
    this.emit(CART_CONFIG.EVENTS.ITEM_ADDED, { item: this.cart[existingIndex > -1 ? existingIndex : this.cart.length - 1] });
    return this.cart[existingIndex > -1 ? existingIndex : this.cart.length - 1];
  }

  /**
   * Remove item from cart
   * @param {String} itemId - Product ID
   * @returns {Boolean} Success status
   */
  removeItem(itemId) {
    const index = this.cart.findIndex(i => i.id === itemId);
    if (index > -1) {
      const removed = this.cart.splice(index, 1)[0];
      this.saveCart();
      this.emit(CART_CONFIG.EVENTS.ITEM_REMOVED, { item: removed });
      return true;
    }
    return false;
  }

  /**
   * Update item quantity
   * @param {String} itemId - Product ID
   * @param {Number} quantity - New quantity (0 = remove)
   * @returns {Object|null} Updated item or null if removed
   */
  updateQuantity(itemId, quantity) {
    const index = this.cart.findIndex(i => i.id === itemId);
    if (index === -1) return null;

    if (quantity <= 0) {
      return this.removeItem(itemId) ? null : this.cart[index];
    }

    this.cart[index].qty = quantity;
    this.saveCart();
    this.emit(CART_CONFIG.EVENTS.QUANTITY_CHANGED, { item: this.cart[index] });
    return this.cart[index];
  }

  /**
   * Get cart items
   * @returns {Array} Cart items
   */
  getCart() {
    return [...this.cart];
  }

  /**
   * Get single item from cart
   * @param {String} itemId - Product ID
   * @returns {Object|null} Item or null
   */
  getItem(itemId) {
    return this.cart.find(i => i.id === itemId) || null;
  }

  /**
   * Get cart totals
   * @returns {Object} { subtotal, itemCount, uniqueItems }
   */
  getTotals() {
    return {
      subtotal: this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0),
      itemCount: this.cart.reduce((sum, item) => sum + item.qty, 0),
      uniqueItems: this.cart.length
    };
  }

  /**
   * Clear entire cart
   */
  clearCart() {
    this.cart = [];
    localStorage.removeItem(CART_CONFIG.STORAGE_KEY);
    this.emit(CART_CONFIG.EVENTS.CART_CLEARED);
  }

  /**
   * Check if item is in cart
   * @param {String} itemId - Product ID
   * @returns {Boolean}
   */
  hasItem(itemId) {
    return this.cart.some(i => i.id === itemId);
  }

  /**
   * Event listener system
   */
  on(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  off(eventName, callback) {
    if (this.listeners[eventName]) {
      this.listeners[eventName] = this.listeners[eventName].filter(cb => cb !== callback);
    }
  }

  emit(eventName, data = {}) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach(callback => {
        try {
          callback(data);
        } catch (e) {
          console.error(`Error in ${eventName} listener:`, e);
        }
      });
    }
  }

  /**
   * Listen for storage changes from other tabs
   */
  syncAcrossTabs(callback) {
    window.addEventListener('storage', (e) => {
      if (e.key === CART_CONFIG.STORAGE_KEY) {
        this.cart = this.loadCart();
        if (callback) callback(this.cart);
        this.emit(CART_CONFIG.EVENTS.CART_UPDATED, { cart: this.cart });
      }
    });
  }

  /**
   * Export cart as formatted message for WhatsApp
   * @returns {String} Formatted message
   */
  exportToWhatsApp() {
    if (this.cart.length === 0) {
      return 'I would like to place an order with Aramane Sweets!';
    }

    let message = 'Hello Aramane Sweets!%0A%0A📦 Order Items:%0A';
    this.cart.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name} x${item.qty}${item.weight ? ` (${item.weight})` : ''} - ₹${(item.price * item.qty).toLocaleString('en-IN')}%0A`;
    });

    const totals = this.getTotals();
    message += `%0ASubtotal: ₹${totals.subtotal.toLocaleString('en-IN')}%0A%0APlease confirm availability and delivery options.`;
    return message;
  }
}

// Export as global singleton
const cartAPI = new CartAPI();

// Auto-sync across tabs on load
cartAPI.syncAcrossTabs();
