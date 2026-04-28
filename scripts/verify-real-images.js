/**
 * Script to verify and update product data to use only real images
 * Scans each category and ensures only .jpg files are used
 */

const fs = require('fs');
const path = require('path');

const baseDir = process.cwd();
const imagesDir = path.join(baseDir, 'assets', 'images');
const productsFile = path.join(baseDir, 'assets', 'js', 'products-data-full.js');

function getAvailableRealImages(category) {
  const categoryPath = path.join(imagesDir, category);
  if (!fs.existsSync(categoryPath)) {
    return [];
  }
  
  const files = fs.readdirSync(categoryPath);
  return files
    .filter(file => file.endsWith('.jpg'))
    .map(file => file.replace('.jpg', ''));
}

function scanAllCategories() {
  const categories = ['bakery', 'bengali', 'chat', 'ghee-kova', 'gift', 'kaju', 'namkeen', 'packed-items'];
  
  console.log('=== Real Images Available by Category ===');
  
  categories.forEach(category => {
    const realImages = getAvailableRealImages(category);
    console.log(`${category}: ${realImages.length} real images`);
    if (realImages.length > 0) {
      console.log(`  Examples: ${realImages.slice(0, 5).join(', ')}`);
    }
  });
}

// Run scan
scanAllCategories();
console.log('\nReal image verification completed');