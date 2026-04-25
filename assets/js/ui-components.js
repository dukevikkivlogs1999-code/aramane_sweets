/**
 * UI Components for Aramane Sweets
 * Modal system, dialogs, and shared UI utilities
 */

// ===== MODAL MANAGER =====
class ModalManager {
  constructor() {
    this.modals = {};
    this.createBaseStyles();
  }

  /**
   * Inject base modal styles
   */
  createBaseStyles() {
    if (document.getElementById('modal-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'modal-styles';
    styles.textContent = `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.2s ease-out;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .modal-content {
        background: #fbf9f1;
        border-radius: 12px;
        padding: 32px 24px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        animation: slideUp 0.3s ease-out;
        font-family: 'Inter', sans-serif;
      }

      .modal-title {
        font-size: 24px;
        font-weight: 600;
        color: #570013;
        margin-bottom: 16px;
        font-family: 'Noto Serif', serif;
      }

      .modal-description {
        font-size: 14px;
        color: #584141;
        margin-bottom: 24px;
        line-height: 1.6;
      }

      .modal-form-group {
        margin-bottom: 20px;
      }

      .modal-form-group label {
        display: block;
        font-size: 12px;
        font-weight: 600;
        color: #570013;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .modal-form-group input,
      .modal-form-group select {
        width: 100%;
        padding: 12px;
        border: 1px solid #e0bfbf;
        border-radius: 6px;
        font-size: 16px;
        font-family: inherit;
        color: #1b1c17;
        box-sizing: border-box;
        transition: all 0.2s;
      }

      .modal-form-group input:focus,
      .modal-form-group select:focus {
        outline: none;
        border-color: #570013;
        box-shadow: 0 0 0 3px rgba(87, 0, 19, 0.1);
      }

      .modal-buttons {
        display: flex;
        gap: 12px;
        margin-top: 32px;
      }

      .modal-btn {
        flex: 1;
        padding: 12px 16px;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        cursor: pointer;
        transition: all 0.2s;
        font-family: inherit;
      }

      .modal-btn-primary {
        background: #570013;
        color: #ffffff;
      }

      .modal-btn-primary:hover {
        background: #800020;
      }

      .modal-btn-secondary {
        background: #f0eee6;
        color: #570013;
        border: 1px solid #e0bfbf;
      }

      .modal-btn-secondary:hover {
        background: #e4e3db;
      }

      .modal-success {
        text-align: center;
        padding: 20px;
      }

      .modal-success-icon {
        font-size: 48px;
        margin-bottom: 16px;
      }

      .modal-close {
        position: absolute;
        top: 12px;
        right: 12px;
        background: none;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: #584141;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.2s;
      }

      .modal-close:hover {
        color: #570013;
      }
    `;
    document.head.appendChild(styles);
  }

  /**
   * Open a modal
   * @param {String} modalId
   * @param {Function} onClose - Callback when modal closes
   */
  open(modalId, onClose = null) {
    const modal = this.modals[modalId];
    if (!modal) return;

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = `overlay-${modalId}`;

    const container = document.createElement('div');
    container.innerHTML = modal.content;
    container.style.position = 'relative';

    overlay.appendChild(container);
    document.body.appendChild(overlay);

    this.attachEventListeners(overlay, modalId, onClose);
  }

  /**
   * Close a modal
   * @param {String} modalId
   */
  close(modalId) {
    const overlay = document.getElementById(`overlay-${modalId}`);
    if (overlay) {
      overlay.remove();
    }
  }

  /**
   * Register a modal
   * @param {String} modalId - Unique ID
   * @param {Object} config - { content, onSubmit }
   */
  register(modalId, config) {
    this.modals[modalId] = {
      content: config.content,
      onSubmit: config.onSubmit || (() => {})
    };
  }

  /**
   * Attach event listeners to modal
   */
  attachEventListeners(overlay, modalId, onClose) {
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.close(modalId);
        if (onClose) onClose(null);
      }
    });

    // Close button
    const closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.close(modalId);
        if (onClose) onClose(null);
      });
    }

    // Cancel button
    const cancelBtn = overlay.querySelector('[data-action="cancel"]');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        this.close(modalId);
        if (onClose) onClose(null);
      });
    }

    // Submit button
    const submitBtn = overlay.querySelector('[data-action="submit"]');
    if (submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const formData = this.extractFormData(overlay);
        this.modals[modalId].onSubmit(formData);
        this.close(modalId);
        if (onClose) onClose(formData);
      });
    }
  }

  /**
   * Extract form data from modal
   */
  extractFormData(overlay) {
    const data = {};
    const inputs = overlay.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (input.name) {
        data[input.name] = input.value;
      }
    });
    return data;
  }
}

// ===== ORDER MODAL BUILDER =====
function createOrderModal(stores = []) {
  const storeOptions = stores.length > 0
    ? stores.map(s => `<option value="${s.name}">${s.name}</option>`).join('')
    : `<option value="Bengaluru">Bengaluru</option>
       <option value="Davangere">Davangere</option>
       <option value="Chitradurga">Chitradurga</option>
       <option value="Hospet">Hospet</option>`;

  return `
    <button class="modal-close">×</button>
    <div class="modal-content">
      <h2 class="modal-title">Complete Your Order</h2>
      <p class="modal-description">Please provide your details to proceed with WhatsApp order</p>

      <div class="modal-form-group">
        <label for="customer-name">Your Name *</label>
        <input type="text" id="customer-name" name="name" required placeholder="Enter your full name" />
      </div>

      <div class="modal-form-group">
        <label for="customer-phone">Phone Number *</label>
        <input type="tel" id="customer-phone" name="phone" required placeholder="+91 XXXXX XXXXX" />
      </div>

      <div class="modal-form-group">
        <label for="customer-email">Email (Optional)</label>
        <input type="email" id="customer-email" name="email" placeholder="your@email.com" />
      </div>

      <div class="modal-form-group">
        <label for="customer-store">Preferred Store *</label>
        <select id="customer-store" name="store" required>
          ${storeOptions}
        </select>
      </div>

      <div class="modal-form-group">
        <label for="customer-notes">Special Instructions (Optional)</label>
        <input type="text" id="customer-notes" name="notes" placeholder="e.g., less sugar, delivery instructions..." />
      </div>

      <div class="modal-buttons">
        <button type="button" class="modal-btn modal-btn-secondary" data-action="cancel">Cancel</button>
        <button type="submit" class="modal-btn modal-btn-primary" data-action="submit">
          <span class="material-symbols-outlined" style="margin-right: 4px;">arrow_forward</span>
          Proceed to WhatsApp
        </button>
      </div>
    </div>
  `;
}

/**
 * Show confirmation modal
 */
function createConfirmModal(title, message) {
  return `
    <button class="modal-close">×</button>
    <div class="modal-content">
      <h2 class="modal-title">${title}</h2>
      <p class="modal-description">${message}</p>

      <div class="modal-buttons">
        <button type="button" class="modal-btn modal-btn-secondary" data-action="cancel">Cancel</button>
        <button type="button" class="modal-btn modal-btn-primary" data-action="submit">Confirm</button>
      </div>
    </div>
  `;
}

/**
 * Show success message
 */
function createSuccessModal(title, message) {
  return `
    <div class="modal-content modal-success">
      <div class="modal-success-icon">✓</div>
      <h2 class="modal-title">${title}</h2>
      <p class="modal-description">${message}</p>

      <div class="modal-buttons">
        <button type="button" class="modal-btn modal-btn-primary" data-action="submit">Done</button>
      </div>
    </div>
  `;
}

/**
 * Helper: Add item and show feedback
 */
function addToCartWithFeedback(product, quantity = 1, modalManager) {
  if (!product || !cartAPI) {
    alert('Error: Product not found');
    return;
  }

  const item = cartAPI.addItem(product, quantity);
  if (item) {
    // Update cart UI if available
    updateCartBadge();
    
    // Show toast notification
    showToastNotification(`✓ ${product.name} added to cart!`);
  }
}

/**
 * Toast notification
 */
function showToastNotification(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #570013;
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 14px;
    z-index: 10000;
    animation: slideInUp 0.3s ease-out;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, duration);
}

/**
 * Update cart badge in header
 */
function updateCartBadge() {
  if (!cartAPI) return;

  const totals = cartAPI.getTotals();
  const cartBadges = document.querySelectorAll('[data-cart-count], .cart-badge');

  cartBadges.forEach(badge => {
    if (totals.itemCount > 0) {
      badge.textContent = totals.itemCount;
      badge.style.display = 'inline';
    } else {
      badge.style.display = 'none';
    }
  });

  // Also try to update cart links
  const cartLinks = document.querySelectorAll('a[href="cart.html"]');
  cartLinks.forEach(link => {
    let badge = link.querySelector('.cart-badge');
    if (!badge && totals.itemCount > 0) {
      badge = document.createElement('span');
      badge.className = 'cart-badge';
      badge.style.cssText = `
        position: absolute;
        top: -8px;
        right: -8px;
        background: #ba1a1a;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 600;
      `;
      link.style.position = 'relative';
      link.appendChild(badge);
    }
    if (badge) {
      badge.textContent = totals.itemCount;
    }
  });
}

/**
 * Initialize modals on page load
 */
function initializeModals(stores = []) {
  window.modalManager = new ModalManager();

  // Register order modal
  window.modalManager.register('order-modal', {
    content: createOrderModal(stores),
    onSubmit: (data) => {
      if (!data.name || !data.phone || !data.store) {
        alert('Please fill in all required fields');
        return;
      }
      proceedToWhatsAppOrder(data);
    }
  });

  // Listen for cart changes to update badge
  if (cartAPI) {
    cartAPI.on(cartAPI.constructor.EVENTS?.CART_UPDATED || 'cart:updated', updateCartBadge);
    updateCartBadge();
  }
}

/**
 * Proceed to WhatsApp with order data
 */
function proceedToWhatsAppOrder(customerData) {
  if (!cartAPI) return;

  const message = cartAPI.exportToWhatsApp();
  const orderMessage = `${message}%0A%0ACustomer Details:%0AName: ${customerData.name}%0APhone: ${customerData.phone}%0AStore: ${customerData.store}${customerData.notes ? '%0ANotes: ' + customerData.notes : ''}`;

  window.open(`https://wa.me/919535455770?text=${encodeURIComponent(orderMessage)}`, '_blank');
  cartAPI.clearCart();
  showToastNotification('✓ Order sent to WhatsApp! We\'ll get back to you soon.');
}

// ===== AUTO-INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  initializeModals();
});
