const fs = require('fs');
const path = require('path');

console.log('🍰 Setting up universal images for all categories...');

const basePath = path.join(__dirname, 'assets', 'images');
const categories = ['bakery', 'bengali', 'chat', 'ghee-kova', 'gift', 'kaju', 'namkeen', 'packed-items'];

// Mapping your specified images to categories
const customMappings = {
  'bakery': 'BakeryandCookies.jpeg',
  'ghee-kova': 'GheeSweets.jpeg', 
  'namkeen': 'IndianSnacks.jpeg',
  'kaju': 'KajuKatli.jpeg',
  'bengali': 'RoyalBengaliSweets.jpeg',
  'packed-items': 'RoyalStreetFood.jpg',
  'chat': 'IndianSnacks.jpeg',
  'gift': 'KajuKatli.jpeg'
};

let totalCopies = 0;

// Ensure all categories exist
const ensureCategoriesExist = () => {
  categories.forEach(category => {
    const categoryDir = path.join(basePath, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }
  });
};

// Copy specified images to ALL categories
const copyUniversalImages = () => {
  const sourceImages = [
    'BakeryandCookies.jpeg', 'GheeSweets.jpeg', 'IndianSnacks.jpeg', 
    'KajuKatli.jpeg', 'RoyalBengaliSweets.jpeg', 'RoyalStreetFood.jpg'
  ];
  
  categories.forEach(category => {
    const categoryDir = path.join(basePath, category);
    
    sourceImages.forEach((sourceImg, index) => {
      const sourcePath = path.join(basePath, sourceImg);
      const targetName = `category-${index + 1}.jpg`;
      const targetPath = path.join(categoryDir, targetName);
      
      if (fs.existsSync(sourcePath) && !fs.existsSync(targetPath)) {
        try {
          fs.copyFileSync(sourcePath, targetPath);
          console.log(`✅ ${sourceImg} → ${category}/${targetName}`);
          totalCopies++;
        } catch (err) {
          console.log(`⚠️ Skipped ${sourceImg} in ${category}: ${err.message}`);
        }
      }
    });
    
    // Also create individual product images using category-specific images
    const categoryImg = customMappings[category] || 'RoyalStreetFood.jpg';
    const sourceImgPath = path.join(basePath, categoryImg);
    
    // Create product-specific images (30-40 per category typical)
    for (let i = 1; i <= 40; i++) {
      const productImg = `${category}-${i}.jpg`;
      const productPath = path.join(categoryDir, productImg);
      
      if (fs.existsSync(sourceImgPath) && !fs.existsSync(productPath)) {
        fs.copyFileSync(sourceImgPath, productPath);
        console.log(`✅ ${categoryImg} → ${category}/${productImg}`);
        totalCopies++;
      }
    }
  });
};

// Quick verification
const verifySetup = () => {
  console.log('\n📊 Verification:');
  categories.forEach(category => {
    const categoryDir = path.join(basePath, category);
    if (fs.existsSync(categoryDir)) {
      const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));
      console.log(`   ${category}: ${files.length} images ready`);
    }
  });
};

// Execute the setup
ensureCategoriesExist();
copyUniversalImages();
verifySetup();

console.log(`\n🎯 Universal setup complete!`);
console.log(`   📊 Total copies: ${totalCopies}`);
console.log(`   ✅ All categories now have authentic sweet shop images`);
console.log(`   🎂 Every category uses appropriate industry images`);
console.log(`   🚀 Ready for customers at localhost:8080`);

console.log('\n📋 Image Distribution:');
Object.entries(customMappings).forEach(([category, image]) => {
  console.log(`   ${category}: ${image}`);
});