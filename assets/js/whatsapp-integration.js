// WhatsApp Integration Utilities
// This script provides functions for WhatsApp integration across the website

class WhatsAppIntegration {
  constructor(config) {
    this.config = config;
  }

  /**
   * Generate WhatsApp link with message
   * @param {string} message - Custom message for WhatsApp
   * @param {string} number - Optional custom number
   * @returns {string} WhatsApp link
   */
  generateLink(message = null, number = null) {
    const msg = message || this.config.whatsappMessage;
    const num = number || this.config.whatsappNumber;
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  }

  /**
   * Open WhatsApp with preset message
   * @param {string} message - Message to send
   */
  openChat(message = null) {
    const link = this.generateLink(message);
    window.location.href = link;
  }

  /**
   * Create order message
   * @param {object} items - Order items
   * @returns {string} Formatted message
   */
  createOrderMessage(items = []) {
    const itemsList = items.length > 0 
      ? items.map(item => `• ${item.name} (x${item.qty})`).join('\n')
      : '';
    
    return `Hello Aramane Sweets!\n\nI would like to place an order:\n${itemsList}\n\nPlease confirm availability and delivery time.`;
  }

  /**
   * Create inquiry message
   * @param {string} inquiry - Inquiry text
   * @returns {string} Formatted message
   */
  createInquiryMessage(inquiry = 'I have a question') {
    return `Hello Aramane Sweets!\n\n${inquiry}\n\nLooking forward to your response.`;
  }

  /**
   * Create store visit message
   * @param {string} storeName - Store location name
   * @returns {string} Formatted message
   */
  createStoreMessage(storeName) {
    return `Hi! I'm interested in visiting your ${storeName} store. Could you share details about timings and current availability?`;
  }

  /**
   * Create corporate inquiry message
   * @param {object} details - Corporate details
   * @returns {string} Formatted message
   */
  createCorporateMessage(details = {}) {
    return `Hello Aramane Sweets!\n\nI'm interested in corporate gifting for:\n• Company: ${details.company || 'TBD'}\n• Event: ${details.event || 'TBD'}\n• Qty: ${details.quantity || 'TBD'}\n\nPlease share custom gifting options.`;
  }

  /**
   * Submit form data via WhatsApp
   * @param {HTMLFormElement} form - Form element
   * @param {string} messagePrefix - Optional message prefix
   */
  submitForm(form, messagePrefix = 'New Inquiry:') {
    const formData = new FormData(form);
    let message = `${messagePrefix}\n\n`;
    
    for (let [key, value] of formData.entries()) {
      const label = key.replace(/([A-Z])/g, ' $1').trim();
      message += `${label}: ${value}\n`;
    }
    
    this.openChat(message);
  }

  /**
   * Track WhatsApp clicks for analytics
   * @param {string} source - Source of click (e.g., 'hero', 'contact', 'store')
   */
  trackClick(source) {
    if (window.gtag) {
      gtag('event', 'whatsapp_click', {
        'source': source
      });
    }
    console.log(`WhatsApp click tracked from: ${source}`);
  }

  /**
   * Create rich text message with emoji
   * @param {object} data - Data for rich message
   * @returns {string} Rich formatted message
   */
  createRichMessage(data = {}) {
    return `
Hello Aramane Sweets! 🙏

${data.greeting || 'Namaste!'}

${data.products ? `🛍️ Products:\n${data.products.map(p => `  • ${p}`).join('\n')}\n` : ''}
${data.occasion ? `🎉 Occasion: ${data.occasion}\n` : ''}
${data.quantity ? `📦 Quantity: ${data.quantity}\n` : ''}
${data.notes ? `📝 Special Notes: ${data.notes}\n` : ''}

Please let me know availability and pricing.

Thank you! 🌟
    `.trim();
  }
}

// Initialize global instance
const whatsappService = new WhatsAppIntegration(BUSINESS_CONFIG);

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WhatsAppIntegration;
}
