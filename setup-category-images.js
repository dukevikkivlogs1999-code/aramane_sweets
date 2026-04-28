const fs = require('fs');
const path = require('path');

console.log('🎂 Setting up category images structure...');

const basePath = path.join(__dirname, 'assets', 'images');
const categories = ['bakery', 'bengali', 'chat', 'ghee-kova', 'gift', 'kaju', 'namkeen', 'packed-items'];

// Copy category images to proper locations
const imageMappings = {
  'bakery': ['BakeryandCookies.jpeg', 'GheeSweets.jpeg', 'IndianSnacks.jpeg'],
  'bengali': ['RoyalBengaliSweets.jpeg', 'GheeSweets.jpeg'],
  'kaju': ['KajuKatli.jpeg', 'RoyalBengaliSweets.jpeg'],
  'ghee-kova': ['GheeSweets.jpeg', 'RoyalBengaliSweets.jpeg'],
  'namkeen': ['IndianSnacks.jpeg', 'RoyalStreetFood.jpg'],
  'chat': ['RoyalStreetFood.jpg', 'IndianSnacks.jpeg'],
  'packed-items': ['RoyalStreetFood.jpg', 'IndianSnacks.jpeg'],
  'gift': ['RoyalBengaliSweets.jpeg', 'KajuKatli.jpeg']
};

let copyCount = 0;
categories.forEach(category => {
  const categoryPath = path.join(basePath, category);
  
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath, { recursive: true });
  }
  
  const images = imageMappings[category] || ['RoyalStreetFood.jpg'];
  
  images.forEach((source, index) => {
    const sourcePath = path.join(basePath, source);
    const targetPath = path.join(categoryPath, `${category}-${index + 1}.jpg`);
    
    if (fs.existsSync(sourcePath) && !fs.existsSync(targetPath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ Copied: ${targetPath}`);
      copyCount++;
    }
  });
});

// Copy shop images for product generic use
const shopImages = fs.readdirSync(path.join(basePath, 'shop')).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));

shopImages.forEach((source, index) => {
  categories.forEach(category => {
    const sourcePath = path.join(basePath, 'shop', source);
    const targetPath = path.join(basePath, category, `generic-${source}`);
    
    if (fs.existsSync(sourcePath) && index < 3) { // First 3 shop images only
      try {
        if (!fs.existsSync(targetPath)) {
          fs.copyFileSync(sourcePath, targetPath);
        }
      } catch (err) {
        // Silent ignore - file may exist
      }
    }
  });
});

console.log(`📊 Summary: Copied ${copyCount} images to category folders`);
console.log('🎉 Category image structure organized!');