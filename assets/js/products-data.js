/**
 * Product Database for Aramane Sweets
 * Complete product catalogue with metadata
 */

const PRODUCTS_CATALOG = [
  // Bestsellers - Core Products
  {
    id: 'mysore-pak',
    name: 'Royal Mysore Pak',
    price: 450,
    weight: '500g',
    category: 'bestseller',
    tags: ['Bestseller', 'Pure Ghee'],
    description: 'Authentic melt-in-mouth texture made with premium pure cow ghee and traditional besan.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPBhS1sy0eINqDXswU6qSgMpg5osZ20xZueC5CiFGN245qRjplT5k34WOXT5UaFrN9XTsydEu6YxSMzHKfKZ6bm_fgzD6iRR_rV0EPVqwNWrULDxLlWwzeDNxZ7jQ11ynbnVVTbYJZfpD-5B23xtn9h29Tz6Hx9V30c3hRhczx0VqjeTfuBfbyVs2dyjUHi6ILHx70ZsInV4ufX99Lvcq01NrEM2l9GqqMZiMpRM6rdTZEvtw948lWGBc95bggW7HgIEkEn_lH9g'
  },
  {
    id: 'kaju-katli',
    name: 'Saffron Kaju Katli',
    price: 680,
    weight: '500g',
    category: 'bestseller',
    tags: ['Bestseller', 'Premium'],
    description: 'Premium cashews infused with Kashmiri saffron strands and topped with pure edible silver leaf.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxyQwsZYI7JinB55r69BBTwys8ttXeLoAponhBSgAX5EFSXpPsaXsX0DdMICB90oyBlP8Knhximkivp-RLdyqfvR-N7mRN80_vR3EL2fGdh7Sqaa42gQ2UA98Z4dNbWhM_A9j8ybhVylEWPZIjj3nxuGf_drNR9Pr_4gOevKeMMVmA9lmi76uXKYeGPDY4UtbbGWz2jPwy_hIu0WUpf30td1Iqnw2zgy8Q0d7j2KlT0v2KKIGtfq3z4xFiE85tnJw_LbDw2W32Pw'
  },
  {
    id: 'motichoor-ladoo',
    name: 'Motichoor Ladoo',
    price: 380,
    weight: '500g',
    category: 'traditional',
    tags: ['Pure Ghee'],
    description: 'Delicate tiny boondi pearls fried in ghee, sweetened with aromatic syrup and cardamom.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxzi47VoUu9dUU60i0B_M64TrVVOkVlf9sHfSMYrpjjICneqkqgrt__k7xVpQH9Sj3nnnWuIh5zgyPAkIAdxxWgI-txaOmEoHZziY0a7qZT3W907UNlo2TvkKu2zOaIAXwvYhyzYd1JTfM6pb03sZTdgYTIuFSVtQy7W1lfWxm_wGgHlbxZADUUxXY2W6l4bpeLPUawnIudgbKwqtyk-fMmbt9oh2f3EG1995wXiYHtcNwvq0xqZ6mvMZfDU9MokSN3OMHY_Tiew'
  },
  {
    id: 'gulab-jamun',
    name: 'Royal Gulab Jamun',
    price: 320,
    weight: '500g',
    category: 'traditional',
    tags: [],
    description: 'Soft khoya dumplings deep-fried and soaked in a rose and cardamom flavored sugar syrup.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUzQnbTU0flXP5UwhQDHSh_8vBIYyOAYaD3u5fYh2a6ktCuhzd7tUrpL9NmrcrA_y1eOGjtpUISlmtMYRRRhPhQUTsKFeYMwSZAYG_DyI7dKvNm56XPQlk8ViSvJ6l0a4jj_y02cpc8xbwM3iWp_71WkhdlebW3vvUPG4fSw398lBr3uqKYyEVIAsW8RjE0iUhuCcg8ucK0dDtDVgnVxugF5OnM_Uqb7lPAbOaGPcqsEifyL0BRj26pwCMH4FLKKJLArvOvsRZwA'
  },

  // Extended Catalogue
  {
    id: 'barfi-assorted',
    name: 'Assorted Barfi Mix',
    price: 520,
    weight: '500g',
    category: 'traditional',
    tags: [],
    description: 'Mixture of coconut, chocolate, and milk barfi with almond toppings.'
  },
  {
    id: 'peda-kesar',
    name: 'Kesar Peda',
    price: 410,
    weight: '400g',
    category: 'traditional',
    tags: ['Saffron'],
    description: 'Delicate saffron-flavored milk solids with a melt-in-mouth texture.'
  },
  {
    id: 'jalebi-fresh',
    name: 'Golden Jalebi',
    price: 280,
    weight: '500g',
    category: 'traditional',
    tags: [],
    description: 'Spiral-shaped fried pastry soaked in warm sugar syrup, crispy outside and juicy inside.'
  },
  {
    id: 'halwa-carrot',
    name: 'Gajar Halwa',
    price: 350,
    weight: '500g',
    category: 'seasonal',
    tags: ['Winter Special'],
    description: 'Traditional carrot halwa with khoya, ghee, and garnished with dry fruits.'
  },
  {
    id: 'burfi-milk',
    name: 'Milk Barfi',
    price: 420,
    weight: '500g',
    category: 'traditional',
    tags: [],
    description: 'Pure milk solids cut into squares with a soft, melt-in-mouth texture.'
  },
  {
    id: 'laddu-besan',
    name: 'Besan Laddu',
    price: 340,
    weight: '500g',
    category: 'traditional',
    tags: [],
    description: 'Roasted gram flour laddus with ghee and jaggery, rolled in dry fruits.'
  },

  // Gift Collections
  {
    id: 'gift-premium-500',
    name: 'Premium Assorted Box',
    price: 1200,
    weight: '1kg',
    category: 'gift',
    tags: ['Gift Box'],
    description: 'Curated selection of bestselling sweets in premium packaging.'
  },
  {
    id: 'gift-royal-deluxe',
    name: 'Royal Deluxe Collection',
    price: 2500,
    weight: '2kg',
    category: 'gift',
    tags: ['Gift Box', 'Premium'],
    description: 'Exclusive assortment of premium sweets in luxurious gift packaging.'
  },
  {
    id: 'gift-festival',
    name: 'Festival Celebration Pack',
    price: 1800,
    weight: '1.5kg',
    category: 'gift',
    tags: ['Festival'],
    description: 'Perfect collection for festivals with assorted traditional sweets.'
  },
  {
    id: 'gift-wedding',
    name: 'Wedding Favor Pack',
    price: 800,
    weight: '500g',
    category: 'gift',
    tags: ['Wedding'],
    description: 'Elegant wedding favor with premium sweets and custom packaging.'
  },

  // Specialties
  {
    id: 'chikhalwali-kheer',
    name: 'Kheer - Rice Pudding',
    price: 280,
    weight: '300g',
    category: 'specialty',
    tags: [],
    description: 'Traditional rice cooked in milk with condensed milk and dry fruits.'
  },
  {
    id: 'payesh-bengali',
    name: 'Bengali Payesh',
    price: 320,
    weight: '300g',
    category: 'specialty',
    tags: [],
    description: 'Sweet rice with jaggery and coconut milk, a Bengali delicacy.'
  },
  {
    id: 'rasgulla',
    name: 'Sponge Rasgulla',
    price: 340,
    weight: '400g',
    category: 'specialty',
    tags: [],
    description: 'Soft spongy cheese balls immersed in sugar syrup.'
  },
  {
    id: 'sandesh-traditional',
    name: 'Traditional Sandesh',
    price: 380,
    weight: '400g',
    category: 'specialty',
    tags: [],
    description: 'Bengal\'s pride - soft paneer dessert with aromatic flavor.'
  }
];

/**
 * Helper: Get product by ID
 * @param {String} productId
 * @returns {Object|null}
 */
function getProduct(productId) {
  return PRODUCTS_CATALOG.find(p => p.id === productId) || null;
}

/**
 * Helper: Get products by category
 * @param {String} category
 * @returns {Array}
 */
function getProductsByCategory(category) {
  return PRODUCTS_CATALOG.filter(p => p.category === category);
}

/**
 * Helper: Search products
 * @param {String} query
 * @returns {Array}
 */
function searchProducts(query) {
  const q = query.toLowerCase();
  return PRODUCTS_CATALOG.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}

/**
 * Helper: Get bestsellers
 * @returns {Array}
 */
function getBestsellers() {
  return PRODUCTS_CATALOG.filter(p => p.tags && p.tags.includes('Bestseller'));
}

/**
 * Helper: Get gift collections
 * @returns {Array}
 */
function getGiftCollections() {
  return getProductsByCategory('gift');
}
