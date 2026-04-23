// Aramane Sweets Configuration
const BUSINESS_CONFIG = {
  // Business Info
  name: "Aramane Sweets",
  tagline: "Heritage Indian Sweets, Redefined for the World",
  
  // Contact Information
  phone: "+91 95354 55770",
  phoneShort: "9535455770",
  email: "concierge@aramanesweets.com",
  
  // WhatsApp
  whatsappNumber: "919535455770", // Format for WhatsApp API
  whatsappLink: "https://wa.me/919535455770",
  whatsappMessage: "Hello Aramane Sweets! I would like to place an order.",
  
  // Store Locations
  stores: [
    {
      id: 1,
      name: "Bengaluru",
      title: "Bengaluru Heritage Outlet",
      address: "Heritage Square, 100 Feet Rd, Indiranagar, Bengaluru, KA 560038",
      phone: "+91 98765 43210",
      hours: "10:00 AM - 11:00 PM",
      coordinates: { lat: 12.9716, lng: 77.6412 }
    },
    {
      id: 2,
      name: "Davangere",
      title: "Davangere Royal Store",
      address: "Palace Cross, Old Court Rd, Davangere, KA 577001",
      phone: "+91 98765 43211",
      hours: "9:00 AM - 10:00 PM",
      coordinates: { lat: 14.4667, lng: 75.9167 }
    },
    {
      id: 3,
      name: "Chitradurga",
      title: "Chitradurga Heritage Hub",
      address: "Fort Road, Near Chitradurga Fort, Chitradurga, KA 577501",
      phone: "+91 98765 43212",
      hours: "8:30 AM - 9:30 PM",
      coordinates: { lat: 14.2267, lng: 75.2336 }
    },
    {
      id: 4,
      name: "Hospet",
      title: "Hospet Signature Boutique",
      address: "Main Road, Near Hampi Circle, Hospet, KA 583201",
      phone: "+91 98765 43213",
      hours: "9:00 AM - 10:00 PM",
      coordinates: { lat: 15.2708, lng: 76.3895 }
    }
  ],
  
  // Social Media
  social: {
    instagram: "https://instagram.com/aramanesweets",
    facebook: "https://facebook.com/aramanesweets",
    twitter: "https://twitter.com/aramanesweets",
    pinterest: "https://pinterest.com/aramanesweets"
  }
};

// Utility Functions
function getWhatsAppLink(customMessage = null) {
  const message = customMessage || BUSINESS_CONFIG.whatsappMessage;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getPhoneLink() {
  return `tel:${BUSINESS_CONFIG.phone}`;
}

function getEmailLink() {
  return `mailto:${BUSINESS_CONFIG.email}`;
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BUSINESS_CONFIG, getWhatsAppLink, getPhoneLink, getEmailLink };
}
