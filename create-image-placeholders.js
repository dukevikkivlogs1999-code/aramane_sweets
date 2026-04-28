const fs = require('fs');
const path = require('path');

// Read the products catalog
catalogPath = path.join(__dirname, 'assets', 'js', 'products-data-full.js');
let catalogContent = fs.readFileSync(catalogPath, 'utf8');

// Extract product data using regex
const productEntries = catalogContent.match(/\{[^}]*image: ['`]([^'`]*)['`][^}]*\}/g) || [];

const imagesDir = path.join(__dirname, 'assets', 'images');

console.log('🍰 Creating image placeholders for Aramane Sweets products...\n');

const processed = new Set();
let createdCount = 0;

productEntries.forEach(entry => {
  // Parse individual product properties
  const product = {};
  
  const nameMatch = entry.match(/name:\s*['"]([^'"]*)['"]/);
  const categoryMatch = entry.match(/category:\s*['"]([^'"]*)['"]/);
  const imageMatch = entry.match(/image:\s*['"]([^'"]*)['"]/);
  
  if (nameMatch && categoryMatch && imageMatch) {
    const name = nameMatch[1];
    const category = categoryMatch[1];
    const imagePath = imageMatch[1];
    
    // Skip SVG placeholders and focus on JPG files
    if (imagePath.endsWith('.svg') || imagePath.includes('placeholder')) {
      console.log(`Skipping: ${name} (has SVG placeholder)`);
      return;
    }
    
    const resolvedPath = imagePath.startsWith('assets/') ? imagePath : `assets/images/${imagePath}`;
    const fullImagePath = path.join(__dirname, resolvedPath);
    const fsDir = path.dirname(fullImagePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(fsDir)) {
      fs.mkdirSync(fsDir, { recursive: true });
      console.log(`Created directory: ${fsDir.replace(__dirname, '')}`);
    }
    
    // Create a 400x300 placeholder image if it doesn't exist
    if (!fs.existsSync(fullImagePath) && !processed.has(resolvedPath)) {
      processed.add(resolvedPath);
      
      const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFE0B2"/>
      <stop offset="100%" style="stop-color:#FFCC02"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#bg)"/>
  <text x="200" y="150" text-anchor="middle" dominant-baseline="middle" font-size="16" fill="#570013" font-family="serif">
    ${name}
  </text>
  <text x="200" y="175" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="#666" font-family="sans-serif">
    ${category}
  </text>
  <rect x="50" y="80" width="300" height="120" stroke="#FFE082" stroke-width="3" fill="none" rx="20"/>
</svg>`;

      const jpgPath = fullImagePath.replace(/\.(jpg|jpeg)$/i, '.jpg');
      fs.writeFileSync(jpgPath.replace('.jpg', '.svg'), svgContent);
      console.log(`✅ Created placeholder: ${path.relative(__dirname, jpgPath)}`);
      createdCount++;
    }
  }
});

console.log(`\n📊 Summary: Created ${createdCount} placeholder images`);
console.log('🎉 Image structure setup complete!');

// Copy generic images from shop to use as product images
const shopImages = fs.readdirSync(path.join(__dirname, 'assets', 'images', 'shop'));
const categories = ['packed-items', 'namkeen', 'kaju', 'ghee-kova', 'chat', 'bengali', 'bakery', 'gift'];

shopImages.forEach(sourceImg => {
  if (sourceImg.endsWith('.jpg') || sourceImg.endsWith('.jpeg')) {
    categories.forEach(category => {
      const categoryDir = path.join(__dirname, 'assets', 'images', category);
      if (fs.existsSync(categoryDir)) {
        const targetPath = path.join(categoryDir, `generic-${sourceImg}`);
        if (!fs.existsSync(targetPath)) {
          try {
            // Create a symbolic link instead of copy to save space
            const sourcePath = path.join(__dirname, 'assets', 'images', 'shop', sourceImg);
            fs.copyFileSync(sourcePath, targetPath);
            console.log(`📸 Copied generic image for ${category}: ${sourceImg}`);
          } catch (err) {
            // Silent fail - may already exist
          }
        }
      }
    });
  }
});

console.log('\n🚀 Next steps:');
console.log('1. Check localhost:8080 in browser');
console.log('2. Verify images load without 404 errors');
console.log('3. Replace placeholder images with real product photos as needed');