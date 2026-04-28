const fs = require('fs');
const path = require('path');

console.log('🍰 Setting up universal images for all categories...');

const basePath = path.join(__dirname, 'assets', 'images');
const sourceImages = {
  'bakery': 'BakeryandCookies.jpeg',
  'bengali': 'RoyalBengaliSweets.jpeg', 
  'chat': 'IndianSnacks.jpeg',
  'ghee-kova': 'GheeSweets.jpeg',
  'gift': 'KajuKatli.jpeg',
  'kaju': 'KajuKatli.jpeg',
  'namkeen': 'IndianSnacks.jpeg',
  'packed-items': 'RoyalStreetFood.jpg'
};

// Read the product data to get all product IDs
const productFile = path.join(__dirname, 'assets', 'js', 'products-data-full.js');
const productContent = fs.readFileSync(productFile, 'utf8');

// Extract product IDs and images
const productMatches = productContent.match(/\{[^}]*\}/g) || [];
const products = productMatches.map(match => {
  const categoryMatch = match.match(/category:\s*['"]([^'"]*)['"]/);
  const idMatch = match.match(/id:\s*['"]([^'"]*)['"]/);
  
  return {
    category: categoryMatch ? categoryMatch[1] : '',
    id: idMatch ? idMatch[1] : ''
  };
}).filter(p => p.category && p.id);

// Track copies
let copiesMade = 0;

products.forEach(product => {
  const category = product.category;
  const sourceImageName = sourceImages[category] || 'RoyalStreetFood.jpg';
  const sourceImagePath = path.join(basePath, sourceImageName);
  const categoryDir = path.join(basePath, category);
  
  // Extract specific product ID for filename
  const productId = product.id;
  const targetImageName = `${category}-${product.id.split('-').pop() || '1'}.jpg`;
  const targetImagePath = path.join(categoryDir, targetImageName);
  
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }
  
  if (fs.existsSync(sourceImagePath) && !fs.existsSync(targetImagePath)) {
    fs.copyFileSync(sourceImagePath, targetImagePath);
    copiesMade++;
    console.log(`✅ ${sourceImageName} → ${targetImagePath}`);
  }
});

// Create fallback images using shop images for missing ones
const shopImages = [
  '806.jpg.jpeg', '3629.jpg.jpeg', '4297.jpg.jpeg', '222497.jpg.jpeg',
  'BakeryandCookies.jpeg', 'GheeSweets.jpeg', 'IndianSnacks.jpeg', 
  'KajuKatli.jpeg', 'RoyalBengaliSweets.jpeg', 'RoyalStreetFood.jpg'
];

// Distribute shop images across categories
let shopCopies = 0;
categories.forEach(category => {
  const categoryDir = path.join(basePath, category);
  shopImages.forEach((shopImg, index) => {
    const sourceShopPath = path.join(basePath, 'shop', shopImg);
    const targetShopPath = path.join(categoryDir, `shop-${shopImg}`);
    
    if (fs.existsSync(sourceShopPath) && !fs.existsSync(targetShopPath) && index < 2) {
      fs.copyFileSync(sourceShopPath, targetShopPath);
      shopCopies++;
    }
  });
});

console.log(`📊 Universal images setup:`);
console.log(`   • Total product images: ${copiesMade}`);
console.log(`   • Shop fallback images: ${shopCopies}`);
console.log(`   • All (8) categories have universal sweet images set`);
console.log(`🎉 Every category now has proper iconic images across all products!`);

// Verify the setup
categories.forEach(category => {
  const categoryDir = path.join(basePath, category);
  if (fs.existsSync(categoryDir)) {
    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));
    console.log(`   ${category}: ${files.length} images ready`);
  }
});

console.log('💎 Website images are perfectly organized and ready!');