const Jimp = require('jimp');

async function processImg() {
    const img = await Jimp.read('C:\\Users\\Aryan\\.gemini\\antigravity\\brain\\221db440-c382-4d9c-8bb0-a6c2c4634464\\media__1774221545152.png');
    
    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        
        const avg = (r + g + b) / 3;
        
        // For pure white borders
        if (r > 235 && g > 235 && b > 235) {
            this.bitmap.data[idx + 3] = 0;
        } else if (r > 200 && g > 200 && b > 200 && Math.abs(r-g) < 15 && Math.abs(g-b) < 15) {
            // Anti-aliasing soft edges (mostly gray/white)
            const opacity = Math.max(0, 255 - ((avg - 200) * (255 / 35)));
            this.bitmap.data[idx + 3] = opacity;
        }
    });
    
    // Enhance it slightly
    img.contrast(0.15);
    img.color([{ apply: 'saturate', params: [10] }]);
    
    await img.writeAsync('C:\\Users\\Aryan\\OneDrive\\Desktop\\GK Website\\public\\assets\\logo_transparent.png');
    console.log('Processed securely.');
}

processImg().catch(console.error);
