# Image Assets Guide for FarTacToe

## Created SVG Files (Ready to Use!)

I've created all the required image assets as SVG files with a **hand-drawn, human-made aesthetic**. These can be used directly or converted to PNG if needed.

### Hand-Drawn Design Features:
- ✏️ Sketchy, wobbly lines (not perfect straight lines)
- 🎨 Organic, imperfect shapes
- 📝 Hand-drawn borders using curved paths
- 🖌️ Varying stroke widths
- ⭐ Decorative doodles and embellishments
- 🌟 Textured, natural appearance
- 💫 Less symmetry = more human feel

### Files Created:

1. **icon.png.svg** (1024×1024px)
   - Hand-drawn app icon with FarTacToe branding
   - Sketchy game board with wobbly grid lines
   - X's and O's with imperfect curves
   - Purple gradient with paper texture
   - Star doodles for decoration

2. **splash.png.svg** (200×200px)
   - Hand-sketched splash screen
   - Simplified board with organic lines
   - Casual, approachable design
   - Purple background

3. **hero.png.svg** (1200×630px)
   - Hand-drawn hero image
   - Sketchy game board with imperfect grid
   - Curved borders instead of rectangles
   - "Play Now" button with hand-drawn outline
   - Decorative stars and doodles

4. **og-image.png.svg** (1200×630px)
   - Social sharing image with sketchy style
   - Hand-drawn card with organic borders
   - Feature list with hand-drawn bullets
   - Game preview with wobbly lines
   - Star decorations

5. **screenshot1.png.svg** (1284×2778px)
   - Active gameplay with hand-drawn elements
   - Sketchy grid lines and organic shapes
   - Hand-drawn score cards
   - Curved borders on all elements
   - Score: You 3, CPU 2, Draws 1

6. **screenshot2.png.svg** (1284×2778px)
   - Winning state with celebration
   - Hand-drawn winning diagonal line
   - "You Win! 🎉" banner with curved border
   - Confetti doodles
   - Organic shapes throughout

7. **screenshot3.png.svg** (1284×2778px)
   - Fresh start screen
   - Empty board with sketchy grid
   - Hand-drawn welcome message banner
   - Decorative star doodle
   - Clean slate with score 0-0-0

## Using SVG Files Directly

SVG files work great for web! You can:
- Use them directly in your web app
- Let browsers render them (they look perfect at any size)
- Keep file sizes small

## Converting to PNG (If Needed)

If you need PNG files, here are your options:

### Option 1: Online Converter (Easiest)
1. Go to [CloudConvert](https://cloudconvert.com/svg-to-png)
2. Upload each .svg file
3. Set the target width (e.g., 1024 for icon)
4. Download as PNG

### Option 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick
brew install imagemagick  # macOS
# sudo apt-get install imagemagick  # Linux

# Convert with specific dimensions
convert icon.png.svg -resize 1024x1024 icon.png
convert splash.png.svg -resize 200x200 splash.png
convert hero.png.svg -resize 1200x630 hero.png
convert og-image.png.svg -resize 1200x630 og-image.png
convert screenshot1.png.svg -resize 1284x2778 screenshot1.png
convert screenshot2.png.svg -resize 1284x2778 screenshot2.png
convert screenshot3.png.svg -resize 1284x2778 screenshot3.png
```

### Option 3: Using Figma/Design Tools
1. Open Figma (free account)
2. Import SVG files
3. Export as PNG with desired dimensions

### Option 4: Using Node.js Script (Automated)
```bash
npm install sharp
```

Create `convert-images.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs');

const conversions = [
  { input: 'public/icon.png.svg', output: 'public/icon.png', width: 1024, height: 1024 },
  { input: 'public/splash.png.svg', output: 'public/splash.png', width: 200, height: 200 },
  { input: 'public/hero.png.svg', output: 'public/hero.png', width: 1200, height: 630 },
  { input: 'public/og-image.png.svg', output: 'public/og-image.png', width: 1200, height: 630 },
  { input: 'public/screenshot1.png.svg', output: 'public/screenshot1.png', width: 1284, height: 2778 },
  { input: 'public/screenshot2.png.svg', output: 'public/screenshot2.png', width: 1284, height: 2778 },
  { input: 'public/screenshot3.png.svg', output: 'public/screenshot3.png', width: 1284, height: 2778 },
];

conversions.forEach(({ input, output, width, height }) => {
  sharp(input)
    .resize(width, height)
    .png()
    .toFile(output)
    .then(() => console.log(`✓ Created ${output}`))
    .catch(err => console.error(`✗ Error with ${input}:`, err));
});
```

Run: `node convert-images.js`

## Image Specifications (from Farcaster Docs)

As per [Farcaster MiniApps Publishing Guidelines](https://miniapps.farcaster.xyz/docs/guides/publishing):

| Image | Size | Format | Notes |
|-------|------|--------|-------|
| iconUrl | 1024×1024px | PNG, no alpha | Required |
| splashImageUrl | 200×200px | PNG/SVG | Optional |
| heroImageUrl | 1200×630px (1.91:1) | PNG/JPG | Optional, for app listing |
| ogImageUrl | 1200×630px (1.91:1) | PNG | Optional, for social sharing |
| screenshotUrls | 1284×2778px | PNG | Optional, max 3, portrait |

## Next Steps

1. **Keep SVG files** - They work great for web!
2. **Or convert to PNG** - Use any method above if you need PNG
3. **Upload to hosting** - Put them where your app is hosted
4. **Update URLs** - Edit `farcaster.json` with actual URLs
5. **Test** - Verify images load correctly

## Renaming Files

If you want to use PNG files, rename them:
```bash
mv icon.png.svg icon.svg
mv splash.png.svg splash.svg
# ... or convert them to actual PNG files
```

All images are designed with:
- ✨ FarTacToe branding
- 🎨 Purple/violet gradient theme (#7b68ee → #ba55d3)
- 🎮 Hand-drawn game elements (X's and O's)
- 📱 Mobile-optimized layouts
- ✏️ Sketchy, human-made aesthetic
- 💫 Organic shapes and wobbly lines
- ⭐ Decorative doodles and imperfections
- 💎 Approachable, friendly design

