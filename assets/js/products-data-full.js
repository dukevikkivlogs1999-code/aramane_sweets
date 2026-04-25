/**
 * Complete Product Catalog for Aramane Sweets (235+ items)
 * Organized by 7 main categories with full metadata from PDF menus
 */

const PRODUCTS_FULL_CATALOG = [
  // ============ PACKED ITEMS (32 items) ============
  { id: 'packed-1', name: 'Onion Murkh 150gm', price: 60, weight: '150gm', category: 'packed-items', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Onion+Murkh' },
  { id: 'packed-2', name: 'Garlic Murkh 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '4 Days', image: 'https://via.placeholder.com/300x300?text=Garlic+Murkh' },
  { id: 'packed-3', name: 'Agra Mixture 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Agra+Mixture' },
  { id: 'packed-4', name: 'Masala Kodabale 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Masala+Kodabale' },
  { id: 'packed-5', name: 'Corn Flakes Mixture 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Corn+Flakes+Mixture' },
  { id: 'packed-6', name: 'Raagi Ribbon Pakoda 150gm', price: 50, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Raagi+Ribbon+Pakoda' },
  { id: 'packed-7', name: 'Ribbon Pakoda 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Ribbon+Pakoda' },
  { id: 'packed-8', name: 'Shankarpouli 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Shankarpouli' },
  { id: 'packed-9', name: 'Beetroot Murkh 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Beetroot+Murkh' },
  { id: 'packed-10', name: 'Palak Murkh 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Palak+Murkh' },
  { id: 'packed-11', name: 'Butter Murkh 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Butter+Murkh' },
  { id: 'packed-12', name: 'Masala Peanut 150gm', price: 80, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Masala+Peanut' },
  { id: 'packed-13', name: 'Aramane Special Mixture 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Aramane+Special+Mixture' },
  { id: 'packed-14', name: 'Baby Murkh 150gm', price: 90, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Baby+Murkh' },
  { id: 'packed-15', name: 'Baby Palak Murkh 150gm', price: 90, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Baby+Palak+Murkh' },
  { id: 'packed-16', name: 'Ragi Baby Murkh 150gm', price: 90, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Ragi+Baby+Murkh' },
  { id: 'packed-17', name: 'Banana Chips 150gm', price: 100, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Banana+Chips' },
  { id: 'packed-18', name: 'Masala Banana 150gm', price: 100, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Masala+Banana' },
  { id: 'packed-19', name: 'Pepper Banana Chips 150gm', price: 100, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Pepper+Banana+Chips' },
  { id: 'packed-20', name: 'Bendi 50gm', price: 100, weight: '50gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Bendi' },
  { id: 'packed-21', name: 'Tomato Murkh 150gm', price: 90, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Tomato+Murkh' },
  { id: 'packed-22', name: 'Green Peas Fry 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Green+Peas+Fry' },
  { id: 'packed-23', name: 'Potato Masala Chips 100gm', price: 60, weight: '100gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Potato+Masala+Chips' },
  { id: 'packed-24', name: 'Potato Salted Chips 100gm', price: 60, weight: '100gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Potato+Salted+Chips' },
  { id: 'packed-25', name: 'Potato Peri Peri Chips 100gm', price: 70, weight: '100gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Potato+Peri+Peri+Chips' },
  { id: 'packed-26', name: 'Cream & Onion Chips 100gm', price: 60, weight: '100gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Cream+Onion+Chips' },
  { id: 'packed-27', name: 'Kabul Channa 150gm', price: 40, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Kabul+Channa' },
  { id: 'packed-28', name: 'Splitted Masala Peanut 150gm', price: 90, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Splitted+Masala+Peanut' },
  { id: 'packed-29', name: 'Roasted Peanut 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Roasted+Peanut' },
  { id: 'packed-30', name: 'Channa Dall 150gm', price: 70, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Channa+Dall' },
  { id: 'packed-31', name: 'Moong Dall 150gm', price: 40, weight: '150gm', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Moong+Dall' },
  { id: 'packed-32', name: 'Ghee Peni 3pc', price: 100, weight: '3pc', category: 'packed-items', shelf_life: '20 Days', image: 'https://via.placeholder.com/300x300?text=Ghee+Peni' },

  // ============ NAMKEEN (29 items) ============
  { id: 'namkeen-1', name: 'Cashew Pakoda', price: 780, weight: '500gm', category: 'namkeen', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Cashew+Pakoda' },
  { id: 'namkeen-2', name: 'Onion Pakoda', price: 400, weight: '500gm', category: 'namkeen', shelf_life: '4 Days', image: 'https://via.placeholder.com/300x300?text=Onion+Pakoda' },
  { id: 'namkeen-3', name: 'Onion Murkh', price: 400, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Onion+Murkh' },
  { id: 'namkeen-4', name: 'Garlic Murkh', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Garlic+Murkh' },
  { id: 'namkeen-5', name: 'Small Kara Boondi', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Kara+Boondi' },
  { id: 'namkeen-6', name: 'Bombay Mixture', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Bombay+Mixture' },
  { id: 'namkeen-7', name: 'Special Sada Mixture', price: 620, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Special+Sada+Mixture' },
  { id: 'namkeen-8', name: 'Aar Cut Mixture', price: 540, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Aar+Cut+Mixture' },
  { id: 'namkeen-9', name: 'Andhra Murkh', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Andhra+Murkh' },
  { id: 'namkeen-10', name: 'Agra Mixture', price: 540, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Agra+Mixture' },
  { id: 'namkeen-11', name: 'Masala Kodabale', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Masala+Kodabale' },
  { id: 'namkeen-12', name: 'Corn Flakes Mixture', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Corn+Flakes+Mixture' },
  { id: 'namkeen-13', name: 'Golden Mixture', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Golden+Mixture' },
  { id: 'namkeen-14', name: 'Raagi Ribbon Pakoda', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Raagi+Ribbon+Pakoda' },
  { id: 'namkeen-15', name: 'Ribbon Pakoda', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Ribbon+Pakoda' },
  { id: 'namkeen-16', name: 'Shankarpouli', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Shankarpouli' },
  { id: 'namkeen-17', name: 'Beetroot Murkh', price: 460, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Beetroot+Murkh' },
  { id: 'namkeen-18', name: 'Palak Murkh', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Palak+Murkh' },
  { id: 'namkeen-19', name: 'SPL Kara Sev', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=SPL+Kara+Sev' },
  { id: 'namkeen-20', name: 'Butter Khara Sev', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Butter+Khara+Sev' },
  { id: 'namkeen-21', name: 'Serai Pokoda', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Serai+Pokoda' },
  { id: 'namkeen-22', name: 'Ellu Murukh', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Ellu+Murukh' },
  { id: 'namkeen-23', name: 'Masala Peanut', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Masala+Peanut' },
  { id: 'namkeen-24', name: 'South Indian Mixture', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=South+Indian+Mixture' },
  { id: 'namkeen-25', name: 'Sweet Potato Mixture', price: 440, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Sweet+Potato+Mixture' },
  { id: 'namkeen-26', name: 'Khatta Meetha Mixture', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Khatta+Meetha+Mixture' },
  { id: 'namkeen-27', name: 'Aramane Special Mixture', price: 480, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Aramane+Special+Mixture' },
  { id: 'namkeen-28', name: 'Butter Murkh', price: 520, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Butter+Murkh' },
  { id: 'namkeen-29', name: 'Sweet Boondi', price: 340, weight: '500gm', category: 'namkeen', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Sweet+Boondi' },

  // ============ KAJU SWEETS (34 items) ============
  { id: 'kaju-1', name: 'Kaju Modaka', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Modaka' },
  { id: 'kaju-2', name: 'Kaju Pineapple', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Pineapple' },
  { id: 'kaju-3', name: 'Kaju Strawberry', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Strawberry' },
  { id: 'kaju-4', name: 'Kaju Bisfom Burfi', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Bisfom+Burfi' },
  { id: 'kaju-5', name: 'Kaju Apple', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Apple' },
  { id: 'kaju-6', name: 'Kaju Water Apple', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Water+Apple' },
  { id: 'kaju-7', name: 'Kaju Chocolate Bites', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Chocolate+Bites' },
  { id: 'kaju-8', name: 'Kaju Mango Bites', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Mango+Bites' },
  { id: 'kaju-9', name: 'Kaju Vanilla Bites', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Vanilla+Bites' },
  { id: 'kaju-10', name: 'Kaju Anjeer Katori', price: 1440, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Anjeer+Katori' },
  { id: 'kaju-11', name: 'Kaju Boat', price: 1340, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Boat' },
  { id: 'kaju-12', name: 'Kaju Chandra Mukhi', price: 1340, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Chandra+Mukhi' },
  { id: 'kaju-13', name: 'Kaju Sunflower', price: 1400, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Sunflower' },
  { id: 'kaju-14', name: 'Kaju Magic Ball', price: 1340, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Magic+Ball' },
  { id: 'kaju-15', name: 'Kaju Coconut Laddu', price: 1100, weight: '500gm', category: 'kaju', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Coconut+Laddu' },
  { id: 'kaju-16', name: 'Kaju Badam Patodi', price: 1440, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Badam+Patodi' },
  { id: 'kaju-17', name: 'Kaju Candy', price: 1340, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Candy' },
  { id: 'kaju-18', name: 'Badam Burfi', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Badam+Burfi' },
  { id: 'kaju-19', name: 'Crystal Pista Laddu', price: 1440, weight: '500gm', category: 'kaju', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Crystal+Pista+Laddu' },
  { id: 'kaju-20', name: 'Crystal Rose Laddu', price: 1440, weight: '500gm', category: 'kaju', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Crystal+Rose+Laddu' },
  { id: 'kaju-21', name: 'Kaju Cone', price: 1440, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Cone' },
  { id: 'kaju-22', name: 'Kaju Katli', price: 1200, weight: '500gm', category: 'kaju', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Katli' },
  { id: 'kaju-23', name: 'Sugar Free Kaju Katli', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Sugar+Free+Kaju+Katli' },
  { id: 'kaju-24', name: 'Kaju Sithapal', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Sithapal' },
  { id: 'kaju-25', name: 'Kaju Jaggery Katli', price: 1200, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Jaggery+Katli' },
  { id: 'kaju-26', name: 'Kaju Anjeer Sandwich', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Anjeer+Sandwich' },
  { id: 'kaju-27', name: 'Kaju Pista Roll', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Pista+Roll' },
  { id: 'kaju-28', name: 'Kaju Chocolate Ball', price: 1340, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Chocolate+Ball' },
  { id: 'kaju-29', name: 'Kaju 2 in 1', price: 1400, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+2+in+1' },
  { id: 'kaju-30', name: 'Kaju Anjeer Roll', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Anjeer+Roll' },
  { id: 'kaju-31', name: 'Watermelon Kaju', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Watermelon+Kaju' },
  { id: 'kaju-32', name: 'Kaju Dholi', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Dholi' },
  { id: 'kaju-33', name: 'Kaju Rajkamal', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Rajkamal' },
  { id: 'kaju-34', name: 'Kaju Bahar', price: 1240, weight: '500gm', category: 'kaju', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Bahar' },

  // ============ GHEE & KOVA SWEETS (48 items) ============
  { id: 'ghee-1', name: 'Dry Fruit Halwa', price: 740, weight: '500gm', category: 'ghee-kova', shelf_life: '2 Days', image: 'https://via.placeholder.com/300x300?text=Dry+Fruit+Halwa' },
  { id: 'ghee-2', name: 'Milk Cake', price: 740, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Milk+Cake' },
  { id: 'ghee-3', name: 'Besan Laddu', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'https://via.placeholder.com/300x300?text=Besan+Laddu' },
  { id: 'ghee-4', name: 'Kalakand Burfi', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kalakand+Burfi' },
  { id: 'ghee-5', name: 'Coconut Burfi', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Coconut+Burfi' },
  { id: 'ghee-6', name: 'Doodh Peda', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Doodh+Peda' },
  { id: 'ghee-7', name: 'Dharwad Peda', price: 620, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Dharwad+Peda' },
  { id: 'ghee-8', name: 'Fruit Cake', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Fruit+Cake' },
  { id: 'ghee-9', name: 'Kova Badam Roll', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kova+Badam+Roll' },
  { id: 'ghee-10', name: 'Kova Kesar Roll', price: 660, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kova+Kesar+Roll' },
  { id: 'ghee-11', name: 'Ice Burfi', price: 700, weight: '500gm', category: 'ghee-kova', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Ice+Burfi' },
  { id: 'ghee-12', name: 'Mango Burfi', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Mango+Burfi' },
  { id: 'ghee-13', name: 'Kova Katli', price: 600, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kova+Katli' },
  { id: 'ghee-14', name: 'Horlicks Burfi', price: 760, weight: '500gm', category: 'ghee-kova', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Horlicks+Burfi' },
  { id: 'ghee-15', name: 'Tutti Fruity Cake', price: 740, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Tutti+Fruity+Cake' },
  { id: 'ghee-16', name: 'Boost Burfi', price: 880, weight: '500gm', category: 'ghee-kova', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Boost+Burfi' },
  { id: 'ghee-17', name: 'Orange Kali', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Orange+Kali' },
  { id: 'ghee-18', name: 'Kalakand Rose Gulkand Burfi', price: 800, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kalakand+Rose+Gulkand' },
  { id: 'ghee-19', name: 'Moong Dal Burfi', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Moong+Dal+Burfi' },
  { id: 'ghee-20', name: 'Sweet Boondi', price: 440, weight: '500gm', category: 'ghee-kova', shelf_life: '5 Days', image: 'https://via.placeholder.com/300x300?text=Sweet+Boondi' },
  { id: 'ghee-21', name: 'Vanilla Burfi', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Vanilla+Burfi' },
  { id: 'ghee-22', name: 'Karjur Burfi', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Karjur+Burfi' },
  { id: 'ghee-23', name: 'Karjur Roll', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'https://via.placeholder.com/300x300?text=Karjur+Roll' },
  { id: 'ghee-24', name: 'Belgaum Kunda', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Belgaum+Kunda' },
  { id: 'ghee-25', name: 'Karadantu', price: 840, weight: '500gm', category: 'ghee-kova', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Karadantu' },
  { id: 'ghee-26', name: 'Boondi Laddu', price: 580, weight: '500gm', category: 'ghee-kova', shelf_life: '5 Days', image: 'https://via.placeholder.com/300x300?text=Boondi+Laddu' },
  { id: 'ghee-27', name: 'Maharaja Mysore Pak', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Maharaja+Mysore+Pak' },
  { id: 'ghee-28', name: 'Kova Chocolate Roll', price: 640, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Kova+Chocolate+Roll' },
  { id: 'ghee-29', name: 'Badam Milk', price: 340, weight: '500gm', category: 'ghee-kova', shelf_life: '2 Days', image: 'https://via.placeholder.com/300x300?text=Badam+Milk' },
  { id: 'ghee-30', name: 'Aramane Special Hot Mysore Pak', price: 880, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'https://via.placeholder.com/300x300?text=Aramane+Hot+Mysore+Pak' },
  { id: 'ghee-31', name: 'Badam Mysore Pak', price: 880, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'https://via.placeholder.com/300x300?text=Badam+Mysore+Pak' },
  { id: 'ghee-32', name: 'Kaju Mysore Pak', price: 1000, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'https://via.placeholder.com/300x300?text=Kaju+Mysore+Pak' },
  { id: 'ghee-33', name: 'Chandrakala', price: 620, weight: '500gm', category: 'ghee-kova', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Chandrakala' },
  { id: 'ghee-34', name: 'Suryakala', price: 620, weight: '500gm', category: 'ghee-kova', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Suryakala' },
  { id: 'ghee-35', name: 'Motichur Laddu', price: 800, weight: '500gm', category: 'ghee-kova', shelf_life: '5 Days', image: 'https://via.placeholder.com/300x300?text=Motichur+Laddu' },
  { id: 'ghee-36', name: 'Badusha', price: 620, weight: '500gm', category: 'ghee-kova', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Badusha' },
  { id: 'ghee-37', name: 'Gulab Jamun', price: 360, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Gulab+Jamun' },
  { id: 'ghee-38', name: 'Ghee Soan Papdi', price: 800, weight: '500gm', category: 'ghee-kova', shelf_life: '2 Days', image: 'https://via.placeholder.com/300x300?text=Ghee+Soan+Papdi' },
  // Items 39-48 from Ghee PDF page 2
  { id: 'ghee-39', name: 'Ghee Jalebi', price: 440, weight: '500gm', category: 'ghee-kova', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=Ghee+Jalebi' },
  { id: 'ghee-40', name: 'Jangiri', price: 560, weight: '500gm', category: 'ghee-kova', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=Jangiri' },
  { id: 'ghee-41', name: 'Ghee Peni', price: 40, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'https://via.placeholder.com/300x300?text=Ghee+Peni' },
  { id: 'ghee-42', name: 'Chiroti', price: 440, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'https://via.placeholder.com/300x300?text=Chiroti' },
  { id: 'ghee-43', name: 'Angoori Jamoon', price: 670, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Angoori+Jamoon' },
  { id: 'ghee-44', name: 'Ghee Mysore Pak', price: 840, weight: '500gm', category: 'ghee-kova', shelf_life: '30 Days', image: 'https://via.placeholder.com/300x300?text=Ghee+Mysore+Pak' },
  { id: 'ghee-45', name: 'Beetroot Mysore Pak', price: 840, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Beetroot+Mysore+Pak' },
  { id: 'ghee-46', name: 'Dry Fruit Laddu', price: 1200, weight: '500gm', category: 'ghee-kova', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Dry+Fruit+Laddu' },
  { id: 'ghee-47', name: 'Grape Dry Fruit Halwa', price: 740, weight: '500gm', category: 'ghee-kova', shelf_life: '10 Days', image: 'https://via.placeholder.com/300x300?text=Grape+Dry+Fruit+Halwa' },
  { id: 'ghee-48', name: 'Chiroti with Badam Milk', price: 60, weight: '1pc', category: 'ghee-kova', shelf_life: '2 Days', image: 'https://via.placeholder.com/300x300?text=Chiroti+with+Badam+Milk' },

  // ============ CHAT ITEMS (23 items) ============
  { id: 'chat-1', name: 'Pani Puri', price: 50, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Pani+Puri' },
  { id: 'chat-2', name: 'Masala Puri', price: 50, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Masala+Puri' },
  { id: 'chat-3', name: 'Dahi Puri', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Dahi+Puri' },
  { id: 'chat-4', name: 'Bhel Puri', price: 50, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Bhel+Puri' },
  { id: 'chat-5', name: 'Sev Puri', price: 50, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Sev+Puri' },
  { id: 'chat-6', name: 'Raj Kachori', price: 70, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Raj+Kachori' },
  { id: 'chat-7', name: 'Dahi Bhalla', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Dahi+Bhalla' },
  { id: 'chat-8', name: 'Papdi Chat', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Papdi+Chat' },
  { id: 'chat-9', name: 'Samosa Masala', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Samosa+Masala' },
  { id: 'chat-10', name: 'Kachori Masala', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Kachori+Masala' },
  { id: 'chat-11', name: 'Katori Chat', price: 70, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Katori+Chat' },
  { id: 'chat-12', name: 'Veg Cutlet 2pc', price: 60, weight: '2pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Veg+Cutlet' },
  { id: 'chat-13', name: 'Cutlet Chat', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Cutlet+Chat' },
  { id: 'chat-14', name: 'Vada Pav 1pc', price: 40, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Vada+Pav' },
  { id: 'chat-15', name: 'Pav Bhaji', price: 70, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Pav+Bhaji' },
  { id: 'chat-16', name: 'Chole Bhatura', price: 70, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Chole+Bhatura' },
  { id: 'chat-17', name: 'Paneer Chole Bhatura', price: 110, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Paneer+Chole+Bhatura' },
  { id: 'chat-18', name: 'Samosa', price: 25, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Samosa' },
  { id: 'chat-19', name: 'Dal Kachori', price: 25, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Dal+Kachori' },
  { id: 'chat-20', name: 'Onion Kachori', price: 30, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Onion+Kachori' },
  { id: 'chat-21', name: 'Dahi Kachori', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Dahi+Kachori' },
  { id: 'chat-22', name: 'Dahi Bhel Puri', price: 60, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Dahi+Bhel+Puri' },
  { id: 'chat-23', name: 'Noodles Samosa', price: 40, weight: '1pc', category: 'chat', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Noodles+Samosa' },

  // ============ BENGALI SWEETS (20 items) ============
  { id: 'bengali-1', name: 'Kala Jamun 1pc', price: 40, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Kala+Jamun' },
  { id: 'bengali-2', name: 'Chamcham 1pc', price: 35, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Chamcham' },
  { id: 'bengali-3', name: 'Champakali 1pc', price: 40, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Champakali' },
  { id: 'bengali-4', name: 'Malai Sandwich 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Malai+Sandwich' },
  { id: 'bengali-5', name: 'Rasmalai 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Rasmalai' },
  { id: 'bengali-6', name: 'Rasgulla 1pc', price: 35, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Rasgulla' },
  { id: 'bengali-7', name: 'Angoor Rasgulla', price: 520, weight: '500gm', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Angoor+Rasgulla' },
  { id: 'bengali-8', name: 'Angoor Rasmalai', price: 620, weight: '500gm', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Angoor+Rasmalai' },
  { id: 'bengali-9', name: 'Malai Roll 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Malai+Roll' },
  { id: 'bengali-10', name: 'Mango Malai Roll 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Mango+Malai+Roll' },
  { id: 'bengali-11', name: 'Raj Bhog 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Raj+Bhog' },
  { id: 'bengali-12', name: 'Rabdi 100gm', price: 65, weight: '100gm', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Rabdi' },
  { id: 'bengali-13', name: 'Pan Petha 1pc', price: 30, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Pan+Petha' },
  { id: 'bengali-14', name: 'Malai Kesar Sandwich 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Malai+Kesar+Sandwich' },
  { id: 'bengali-15', name: 'Jamoon Roll 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Jamoon+Roll' },
  { id: 'bengali-16', name: 'Pink Sandwich 1pc', price: 45, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Pink+Sandwich' },
  { id: 'bengali-17', name: 'Petha Sandwich 1pc', price: 55, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Petha+Sandwich' },
  { id: 'bengali-18', name: 'Paneer Jamoon', price: 650, weight: '500gm', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Paneer+Jamoon' },
  { id: 'bengali-19', name: 'Bhasundi 100ml', price: 65, weight: '100ml', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Bhasundi' },
  { id: 'bengali-20', name: 'Malpua 1pc', price: 35, weight: '1pc', category: 'bengali', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Malpua' },

  // ============ BAKERY ITEMS (40 items) ============
  { id: 'bakery-1', name: 'Milk Bread', price: 50, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=Milk+Bread' },
  { id: 'bakery-2', name: 'Wheat Bread', price: 60, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=Wheat+Bread' },
  { id: 'bakery-3', name: 'Veg Puff', price: 25, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Veg+Puff' },
  { id: 'bakery-4', name: 'Sweet Lachha', price: 20, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Sweet+Lachha' },
  { id: 'bakery-5', name: 'Italian Sweet Corn', price: 50, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Italian+Sweet+Corn' },
  { id: 'bakery-6', name: 'Pizza Roll', price: 50, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Pizza+Roll' },
  { id: 'bakery-7', name: 'Paneer Internet', price: 80, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Paneer+Internet' },
  { id: 'bakery-8', name: 'Sweet Corn Paneer Manchurian', price: 80, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Sweet+Corn+Paneer+Manchurian' },
  { id: 'bakery-9', name: 'Almond Sticks 200gm', price: 160, weight: '200gm', category: 'bakery', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Almond+Sticks' },
  { id: 'bakery-10', name: 'Pista Sticks 200gm', price: 200, weight: '200gm', category: 'bakery', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Pista+Sticks' },
  { id: 'bakery-11', name: 'Choco Almond Sticks 200gm', price: 160, weight: '200gm', category: 'bakery', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Choco+Almond+Sticks' },
  { id: 'bakery-12', name: 'Shezwan Paneer', price: 80, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Shezwan+Paneer' },
  { id: 'bakery-13', name: 'Mix Veg', price: 35, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Mix+Veg' },
  { id: 'bakery-14', name: 'Garlic Bread', price: 35, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Garlic+Bread' },
  { id: 'bakery-15', name: 'Italian Focaccia Bread', price: 80, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Italian+Focaccia+Bread' },
  { id: 'bakery-16', name: 'Italian Paneer Hot Dog', price: 70, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Italian+Paneer+Hot+Dog' },
  { id: 'bakery-17', name: 'Italian Veg Hot Dog', price: 50, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Italian+Veg+Hot+Dog' },
  { id: 'bakery-18', name: 'Paneer Puff', price: 35, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Paneer+Puff' },
  { id: 'bakery-19', name: 'Multigrain Wheat Bread', price: 80, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=Multigrain+Wheat+Bread' },
  { id: 'bakery-20', name: 'Roasted Honey Almond 125gm', price: 200, weight: '125gm', category: 'bakery', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Roasted+Honey+Almond' },
  { id: 'bakery-21', name: 'Roasted Honey Almond 250gm', price: 400, weight: '250gm', category: 'bakery', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Roasted+Honey+Almond+250' },
  { id: 'bakery-22', name: 'Maska Bun', price: 60, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=Maska+Bun' },
  { id: 'bakery-23', name: 'Chocolava Cup Cake', price: 60, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=Chocolava+Cup+Cake' },
  { id: 'bakery-24', name: 'Milk Chocolate Donut', price: 40, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=Milk+Chocolate+Donut' },
  { id: 'bakery-25', name: 'Dark Chocolate Donut', price: 40, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=Dark+Chocolate+Donut' },
  { id: 'bakery-26', name: 'White Chocolate Donut', price: 40, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=White+Chocolate+Donut' },
  { id: 'bakery-27', name: 'Pav', price: 60, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Pav' },
  { id: 'bakery-28', name: 'Aloo Bun', price: 30, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Aloo+Bun' },
  { id: 'bakery-29', name: 'Sweet Bun', price: 35, weight: '1pc', category: 'bakery', shelf_life: 'Fresh', image: 'https://via.placeholder.com/300x300?text=Sweet+Bun' },
  { id: 'bakery-30', name: 'Milk Butterscotch Pastry', price: 70, weight: '1pc', category: 'bakery', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=Milk+Butterscotch+Pastry' },
  { id: 'bakery-31', name: 'Nankhatai 200gm', price: 100, weight: '200gm', category: 'bakery', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Nankhatai' },
  { id: 'bakery-32', name: 'Garlic Butter Rusk 80gm', price: 60, weight: '80gm', category: 'bakery', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Garlic+Butter+Rusk' },
  { id: 'bakery-33', name: 'Coconut Crunch 150gm', price: 75, weight: '150gm', category: 'bakery', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Coconut+Crunch' },
  { id: 'bakery-34', name: 'Cashew Cookies 150gm', price: 80, weight: '150gm', category: 'bakery', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Cashew+Cookies' },
  { id: 'bakery-35', name: 'Dry Fruit Cookies 150gm', price: 80, weight: '150gm', category: 'bakery', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Dry+Fruit+Cookies' },
  // Items 36-40 from Bakery PDF page 2
  { id: 'bakery-36', name: 'Choco Walnuts 1pc', price: 110, weight: '1pc', category: 'bakery', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Choco+Walnuts' },
  { id: 'bakery-37', name: 'Nutella Hazelnut 1pc', price: 130, weight: '1pc', category: 'bakery', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Nutella+Hazelnut' },
  { id: 'bakery-38', name: 'Caramel Butterscotch 1pc', price: 110, weight: '1pc', category: 'bakery', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Caramel+Butterscotch' },
  { id: 'bakery-39', name: 'Biscoff Lotus 1pc', price: 130, weight: '1pc', category: 'bakery', shelf_life: '7 Days', image: 'https://via.placeholder.com/300x300?text=Biscoff+Lotus' },
  { id: 'bakery-40', name: 'Fruit Bun 3pc', price: 50, weight: '3pc', category: 'bakery', shelf_life: '3 Days', image: 'https://via.placeholder.com/300x300?text=Fruit+Bun' },

  // ============ GIFT COLLECTIONS ============
  { id: 'gift-premium-500', name: 'Premium Assorted Box', price: 1200, weight: '1kg', category: 'gift', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Premium+Assorted+Box', description: 'Curated selection of bestselling sweets in premium packaging.' },
  { id: 'gift-royal-deluxe', name: 'Royal Deluxe Collection', price: 2500, weight: '2kg', category: 'gift', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Royal+Deluxe', description: 'Exclusive assortment of premium sweets in luxurious gift packaging.' },
  { id: 'gift-festival', name: 'Festival Celebration Pack', price: 1800, weight: '1.5kg', category: 'gift', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Festival+Pack', description: 'Perfect collection for festivals with assorted traditional sweets.' },
  { id: 'gift-wedding', name: 'Wedding Favor Pack', price: 800, weight: '500gm', category: 'gift', shelf_life: '15 Days', image: 'https://via.placeholder.com/300x300?text=Wedding+Favor', description: 'Elegant wedding favor with premium sweets and custom packaging.' }
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
