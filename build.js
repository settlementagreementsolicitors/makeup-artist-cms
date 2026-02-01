/**
 * Build script for Anastasia Rose Portfolio
 *
 * This script scans the _data folders for JSON files created by Netlify CMS
 * and generates index files that the frontend can read.
 *
 * Run with: node build.js
 */

const fs = require('fs');
const path = require('path');

const categories = ['editorial', 'beauty', 'hair-campaigns', 'fashion-week', 'bridal'];

function buildCategoryIndex(category) {
    const folderPath = path.join(__dirname, '_data', category);
    const indexPath = path.join(__dirname, '_data', `${category}-index.json`);

    // Create folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    // Read all JSON files in the category folder
    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.json'));

    const images = [];

    for (const file of files) {
        try {
            const filePath = path.join(folderPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const data = JSON.parse(content);

            if (data.image) {
                images.push({
                    image: data.image,
                    alt: data.alt || `${category} makeup look by Anastasia Rose`,
                    order: data.order || 0,
                    file: file
                });
            }
        } catch (error) {
            console.error(`Error reading ${file}:`, error.message);
        }
    }

    // Sort by order
    images.sort((a, b) => (a.order || 0) - (b.order || 0));

    // Write index file
    fs.writeFileSync(indexPath, JSON.stringify(images, null, 2));

    console.log(`Built ${category}: ${images.length} images`);

    return images.length;
}

function main() {
    console.log('Building portfolio indexes...\n');

    let totalImages = 0;

    for (const category of categories) {
        totalImages += buildCategoryIndex(category);
    }

    console.log(`\nTotal: ${totalImages} images across ${categories.length} categories`);
    console.log('Done!');
}

main();
