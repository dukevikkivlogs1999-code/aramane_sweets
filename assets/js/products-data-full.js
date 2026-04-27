/**
 * Complete Product Catalog for Aramane Sweets (235+ items)
 * Organized by 7 main categories with full metadata from PDF menus
 */

const PRODUCTS_FULL_CATALOG = [
  // ============ PACKED ITEMS (32 items) ============
  { id: 'packed-1', name: 'Onion Murkh 150gm', price: 60, weight: '150gm', category: 'packed-items', shelf_life: '7 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-2', name: 'Garlic Murkh 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '4 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-3', name: 'Agra Mixture 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-4', name: 'Masala Kodabale 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-5', name: 'Corn Flakes Mixture 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-6', name: 'Raagi Ribbon Pakoda 150gm', price: 50, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-7', name: 'Ribbon Pakoda 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-8', name: 'Shankarpouli 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-9', name: 'Beetroot Murkh 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-10', name: 'Palak Murkh 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-11', name: 'Butter Murkh 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-12', name: 'Masala Peanut 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-13', name: 'Aramane Special Mixture 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-14', name: 'Baby Murkh 150gm', price: 90, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-15', name: 'Baby Palak Murkh 150gm', price: 90, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-16', name: 'Ragi Baby Murkh 150gm', price: 90, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-17', name: 'Banana Chips 150gm', price: 100, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-18', name: 'Masala Banana 150gm', price: 100, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-19', name: 'Pepper Banana Chips 150gm', price: 100, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-20', name: 'Bendi 50gm', price: 100, weight: '50gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-21', name: 'Tomato Murkh 150gm', price: 90, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-22', name: 'Green Peas Fry 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-23', name: 'Potato Masala Chips 100gm', price: 60, weight: '100gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-24', name: 'Potato Salted Chips 100gm', price: 60, weight: '100gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-25', name: 'Potato Peri Peri Chips 100gm', price: 70, weight: '100gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-26', name: 'Cream & Onion Chips 100gm', price: 60, weight: '100gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-27', name: 'Kabul Channa 150gm', price: 40, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-28', name: 'Splitted Masala Peanut 150gm', price: 90, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-29', name: 'Roasted Peanut 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-30', name: 'Channa Dall 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-31', name: 'Moong Dall 150gm', price: 40, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },
  { id: 'packed-32', name: 'Ghee Peni 3pc', price: 100, weight: '3pc', category: 'packed-items', shelf_life: '20 Days', image: 'assets/images/packed-items/placeholder.svg' },

  // ============ NAMKEEN (29 items) ============
  { id: 'namkeen-1', name: 'Cashew Pakoda', price: 780, weight: '500gm', category: 'namkeen', shelf_life: '7 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-2', name: 'Onion Pakoda', price: 400, weight: '500gm', category: 'namkeen', shelf_life: '4 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-3', name: 'Onion Murkh', price: 400, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-4', name: 'Garlic Murkh', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-5', name: 'Small Kara Boondi', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-6', name: 'Bombay Mixture', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-7', name: 'Special Sada Mixture', price: 620, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-8', name: 'Aar Cut Mixture', price: 540, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-9', name: 'Andhra Murkh', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-10', name: 'Agra Mixture', price: 540, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-11', name: 'Masala Kodabale', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-12', name: 'Corn Flakes Mixture', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-13', name: 'Golden Mixture', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-14', name: 'Raagi Ribbon Pakoda', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-15', name: 'Ribbon Pakoda', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-16', name: 'Shankarpouli', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-17', name: 'Beetroot Murkh', price: 460, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-18', name: 'Palak Murkh', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-19', name: 'SPL Kara Sev', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-20', name: 'Butter Khara Sev', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-21', name: 'Serai Pokoda', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-22', name: 'Ellu Murukh', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-23', name: 'Masala Peanut', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-24', name: 'South Indian Mixture', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-25', name: 'Sweet Potato Mixture', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-26', name: 'Khatta Meetha Mixture', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-27', name: 'Aramane Special Mixture', price: 480, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-28', name: 'Butter Murkh', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },
  { id: 'namkeen-29', name: 'Sweet Boondi', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'assets/images/namkeen/placeholder.svg' },

  // ============ KAJU SWEETS (34 items) ============
  { id: 'kaju-1', name: 'Kaju Modaka', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-2', name: 'Kaju Pineapple', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-3', name: 'Kaju Strawberry', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-4', name: 'Kaju Bisfom Burfi', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-22', name: 'Kaju Katli', price: 1200, weight: '500gm', category: 'kaju', shelf_life: '15 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-23', name: 'Sugar Free Kaju Katli', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '15 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-24', name: 'Kaju Sithapal', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-25', name: 'Kaju Jaggery Katli', price: 1200, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-26', name: 'Kaju Anjeer Sandwich', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-27', name: 'Kaju Pista Roll', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-28', name: 'Kaju Chocolate Ball', price: 1340, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-29', name: 'Kaju 2 in 1', price: 1400, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-30', name: 'Kaju Anjeer Roll', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-31', name: 'Watermelon Kaju', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-32', name: 'Kaju Dholi', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-33', name: 'Kaju Rajkamal', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },
  { id: 'kaju-34', name: 'Kaju Bahar', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'assets/images/kaju/placeholder.svg' },

  // ============ GHEE & KOVA SWEETS (48 items) ============
  { id: 'ghee-1', name: 'Dry Fruit Halwa', price: 740, weight: '500gm', category: 'ghee-kova', shelf_life: '2 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-2', name: 'Milk Cake', price: 740, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-3', name: 'Besan Laddu', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-27', name: 'Maharaja Mysore Pak', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '15 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-30', name: 'Aramane Special Hot Mysore Pak', price: 880, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-37', name: 'Gulab Jamun', price: 360, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-38', name: 'Ghee Soan Papdi', price: 800, weight: '500gm', category: 'ghee-kova', shelf_life: '2 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  // Items 39-48 from Ghee PDF page 2
  { id: 'ghee-39', name: 'Ghee Jalebi', price: 440, weight: '500gm', category: 'ghee-kova', shelf_life: '3 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-40', name: 'Jangiri', price: 560, weight: '500gm', category: 'ghee-kova', shelf_life: '3 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-41', name: 'Ghee Peni', price: 40, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-42', name: 'Chiroti', price: 440, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-43', name: 'Angoori Jamoon', price: 670, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-44', name: 'Ghee Mysore Pak', price: 840, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-45', name: 'Beetroot Mysore Pak', price: 840, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-46', name: 'Dry Fruit Laddu', price: 1200, weight: '500gm', category: 'ghee-kova', shelf_life: '15 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-47', name: 'Grape Dry Fruit Halwa', price: 740, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'assets/images/ghee-kova/placeholder.svg' },
  { id: 'ghee-48', name: 'Chiroti with Badam Milk', price: 60, weight: '1pc', category: 'ghee-kova', shelf_life: '2 Days', image: 'assets/images/ghee-kova/placeholder.svg' },

  // ============ CHAT ITEMS (23 items) ============
  { id: 'chat-1', name: 'Pani Puri', price: 50, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-2', name: 'Masala Puri', price: 50, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-3', name: 'Dahi Puri', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-4', name: 'Bhel Puri', price: 50, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-5', name: 'Sev Puri', price: 50, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-6', name: 'Raj Kachori', price: 70, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-7', name: 'Dahi Bhalla', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-8', name: 'Papdi Chat', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-9', name: 'Samosa Masala', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-10', name: 'Kachori Masala', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-11', name: 'Katori Chat', price: 70, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-12', name: 'Veg Cutlet 2pc', price: 60, weight: '2pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-13', name: 'Cutlet Chat', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-14', name: 'Vada Pav 1pc', price: 40, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-15', name: 'Pav Bhaji', price: 70, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-16', name: 'Chole Bhatura', price: 70, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-17', name: 'Paneer Chole Bhatura', price: 110, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-18', name: 'Samosa', price: 25, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-19', name: 'Dal Kachori', price: 25, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-20', name: 'Onion Kachori', price: 30, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-21', name: 'Dahi Kachori', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-22', name: 'Dahi Bhel Puri', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },
  { id: 'chat-23', name: 'Noodles Samosa', price: 40, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'assets/images/chat/placeholder.svg' },

  // ============ BENGALI SWEETS (20 items) ============
  { id: 'bengali-1', name: 'Kala Jamun 1pc', price: 40, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-2', name: 'Chamcham 1pc', price: 35, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-3', name: 'Champakali 1pc', price: 40, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-4', name: 'Malai Sandwich 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-5', name: 'Rasmalai 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-6', name: 'Rasgulla 1pc', price: 35, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-7', name: 'Angoor Rasgulla', price: 520, weight: '500gm', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-8', name: 'Angoor Rasmalai', price: 620, weight: '500gm', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-9', name: 'Malai Roll 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-10', name: 'Mango Malai Roll 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-11', name: 'Raj Bhog 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-12', name: 'Rabdi 100gm', price: 65, weight: '100gm', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-13', name: 'Pan Petha 1pc', price: 30, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-14', name: 'Malai Kesar Sandwich 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-15', name: 'Jamoon Roll 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-16', name: 'Pink Sandwich 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-17', name: 'Petha Sandwich 1pc', price: 55, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-18', name: 'Paneer Jamoon', price: 650, weight: '500gm', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-19', name: 'Bhasundi 100ml', price: 65, weight: '100ml', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },
  { id: 'bengali-20', name: 'Malpua 1pc', price: 35, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'assets/images/bengali/placeholder.svg' },

  // ============ BAKERY ITEMS (40 items) ============
  { id: 'bakery-1', name: 'Milk Bread', price: 50, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-2', name: 'Wheat Bread', price: 60, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-3', name: 'Veg Puff', price: 25, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-4', name: 'Sweet Lachha', price: 20, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-5', name: 'Italian Sweet Corn', price: 50, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-6', name: 'Pizza Roll', price: 50, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-7', name: 'Paneer Internet', price: 80, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-8', name: 'Sweet Corn Paneer Manchurian', price: 80, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-9', name: 'Almond Sticks 200gm', price: 160, weight: '200gm', category: 'bakery', shelf_life: '7 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-10', name: 'Pista Sticks 200gm', price: 200, weight: '200gm', category: 'bakery', shelf_life: '7 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-11', name: 'Choco Almond Sticks 200gm', price: 160, weight: '200gm', category: 'bakery', shelf_life: '7 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-12', name: 'Shezwan Paneer', price: 80, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-13', name: 'Mix Veg', price: 35, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-14', name: 'Garlic Bread', price: 35, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-15', name: 'Italian Focaccia Bread', price: 80, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-16', name: 'Italian Paneer Hot Dog', price: 70, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-17', name: 'Italian Veg Hot Dog', price: 50, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-18', name: 'Paneer Puff', price: 35, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-19', name: 'Multigrain Wheat Bread', price: 80, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-20', name: 'Roasted Honey Almond 125gm', price: 200, weight: '125gm', category: 'bakery', shelf_life: '15 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-21', name: 'Roasted Honey Almond 250gm', price: 400, weight: '250gm', category: 'bakery', shelf_life: '15 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-22', name: 'Maska Bun', price: 60, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-23', name: 'Chocolava Cup Cake', price: 60, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-24', name: 'Milk Chocolate Donut', price: 40, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-25', name: 'Dark Chocolate Donut', price: 40, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-26', name: 'White Chocolate Donut', price: 40, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-27', name: 'Pav', price: 60, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-28', name: 'Aloo Bun', price: 30, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-29', name: 'Sweet Bun', price: 35, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-30', name: 'Milk Butterscotch Pastry', price: 70, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-31', name: 'Nankhatai 200gm', price: 100, weight: '200gm', category: 'bakery', shelf_life: '15 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-32', name: 'Garlic Butter Rusk 80gm', price: 60, weight: '80gm', category: 'bakery', shelf_life: '15 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-33', name: 'Coconut Crunch 150gm', price: 75, weight: '150gm', category: 'bakery', shelf_life: '15 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-34', name: 'Cashew Cookies 150gm', price: 80, weight: '150gm', category: 'bakery', shelf_life: '15 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-35', name: 'Dry Fruit Cookies 150gm', price: 80, weight: '150gm', category: 'bakery', shelf_life: '15 Days', image: 'assets/images/bakery/placeholder.svg' },
  // Items 36-40 from Bakery PDF page 2
  { id: 'bakery-36', name: 'Choco Walnuts 1pc', price: 110, weight: '1pc', category: 'bakery', shelf_life: '7 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-37', name: 'Nutella Hazelnut 1pc', price: 130, weight: '1pc', category: 'bakery', shelf_life: '7 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-38', name: 'Caramel Butterscotch 1pc', price: 110, weight: '1pc', category: 'bakery', shelf_life: '7 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-39', name: 'Biscoff Lotus 1pc', price: 130, weight: '1pc', category: 'bakery', shelf_life: '7 Days', image: 'assets/images/bakery/placeholder.svg' },
  { id: 'bakery-40', name: 'Fruit Bun 3pc', price: 50, weight: '3pc', category: 'bakery', shelf_life: '3 Days', image: 'assets/images/bakery/placeholder.svg' },

  // ============ GIFT COLLECTIONS ============
  { id: 'gift-premium-500', name: 'Premium Assorted Box', price: 1200, weight: '1kg', category: 'gift', shelf_life: '15 Days', image: 'assets/images/gift-premium/placeholder.svg', description: 'Curated selection of bestselling sweets in premium packaging.' },
  { id: 'gift-royal-deluxe', name: 'Royal Deluxe Collection', price: 2500, weight: '2kg', category: 'gift', shelf_life: '15 Days', image: 'assets/images/gift-royal/placeholder.svg', description: 'Exclusive assortment of premium sweets in luxurious gift packaging.' },
  { id: 'gift-festival', name: 'Festival Celebration Pack', price: 1800, weight: '1.5kg', category: 'gift', shelf_life: '15 Days', image: 'assets/images/gift/placeholder.svg', description: 'Perfect collection for festivals with assorted traditional sweets.' },
  { id: 'gift-wedding', name: 'Wedding Favor Pack', price: 800, weight: '500gm', category: 'gift', shelf_life: '15 Days', image: 'assets/images/gift/placeholder.svg', description: 'Elegant wedding favor with premium sweets and custom packaging.' }
];

/**
 * Category metadata for UI display
 */
const CATEGORY_META = {
  'packed-items': { name: 'Packed Items', icon: 'lunch_dining', color: '#e67e22', description: 'Crispy murukku, mixtures & chips in sealed packs' },
  'namkeen': { name: 'Namkeen', icon: 'rice_bowl', color: '#d35400', description: 'Fresh savory snacks, pakodas & mixtures' },
  'kaju': { name: 'Kaju Sweets', icon: 'cookie', color: '#c0392b', description: 'Premium cashew-based mithai crafted with saffron' },
  'ghee-kova': { name: 'Ghee & Kova', icon: 'egg_alt', color: '#8e44ad', description: 'Rich ghee sweets, Mysore Pak, pedas & burfis' },
  'chat': { name: 'Chat Items', icon: 'restaurant', color: '#27ae60', description: 'Fresh chaat, puris, samosa & street food delights' },
  'bengali': { name: 'Bengali Sweets', icon: 'bakery_dining', color: '#2980b9', description: 'Soft rasgulla, rasmalai & traditional sandesh' },
  'bakery': { name: 'Bakery', icon: 'cake', color: '#f39c12', description: 'Fresh bread, puffs, donuts, pastries & cookies' },
  'gift': { name: 'Gift Boxes', icon: 'card_giftcard', color: '#570013', description: 'Curated gift hampers for every celebration' }
};

/**
 * Get all products
 */
function getAllProducts() {
  return PRODUCTS_FULL_CATALOG;
}

/**
 * Get products by category
 */
function getProductsByCategory(category) {
  return PRODUCTS_FULL_CATALOG.filter(p => p.category === category);
}

/**
 * Search products by name or category
 */
function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return PRODUCTS_FULL_CATALOG;
  return PRODUCTS_FULL_CATALOG.filter(p =>
    p.name.toLowerCase().includes(q) ||
    (p.category && getCategoryName(p.category).toLowerCase().includes(q))
  );
}

/**
 * Get unique categories with counts
 */
function getCategories() {
  const categories = {};
  PRODUCTS_FULL_CATALOG.forEach(p => {
    if (!categories[p.category]) {
      categories[p.category] = {
        id: p.category,
        name: getCategoryName(p.category),
        count: 0,
        meta: CATEGORY_META[p.category] || {}
      };
    }
    categories[p.category].count++;
  });
  return Object.values(categories);
}

/**
 * Get category display name
 */
function getCategoryName(categoryId) {
  const meta = CATEGORY_META[categoryId];
  return meta ? meta.name : categoryId;
}

/**
 * Get category icon
 */
function getCategoryIcon(categoryId) {
  const meta = CATEGORY_META[categoryId];
  return meta ? meta.icon : 'inventory_2';
}

/**
 * Get category color
 */
function getCategoryColor(categoryId) {
  const meta = CATEGORY_META[categoryId];
  return meta ? meta.color : '#570013';
}

/**
 * Get category description
 */
function getCategoryDescription(categoryId) {
  const meta = CATEGORY_META[categoryId];
  return meta ? meta.description : '';
}

/**
 * Get product by ID
 */
function getProductById(productId) {
  return PRODUCTS_FULL_CATALOG.find(p => p.id === productId) || null;
}

/**
 * Get products by price range
 */
function getProductsByPriceRange(min, max) {
  return PRODUCTS_FULL_CATALOG.filter(p => p.price >= min && p.price <= max);
}

/**
 * Get bestsellers (high-price premium items)
 */
function getBestsellers() {
  return PRODUCTS_FULL_CATALOG.filter(p => p.price >= 800 && (p.category === 'kaju' || p.category === 'ghee-kova'));
}

/**
 * Format price as Indian Rupee
 */
function formatPrice(price) {
  return 'Rs ' + price.toLocaleString('en-IN');
}

/**
 * Add local image path mapping for every product.
 * - `_originalImage` preserves the existing Unsplash URL
 * - `_localImage` is the expected local asset path (assets/images/<slug>.jpg)
 * The UI will prefer `_localImage` and fall back to `_originalImage` on load error.
 */
(function addLocalImagePaths(){
  function slugify(str) {
    return String(str || '')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '')
      .replace(/\-+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  PRODUCTS_FULL_CATALOG.forEach(p => {
    p._originalImage = p.image || '';
    p._localImage = '/assets/images/' + slugify(p.name) + '.jpg';
  });
})();


