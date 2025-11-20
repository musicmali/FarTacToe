# FarTacToe Deployment Checklist

## ✅ Completed

### 1. Core Application
- [x] React + Vite setup
- [x] Tic-Tac-Toe game logic
- [x] **Medium difficulty CPU** (60% strategic, 40% random)
  - Tries to win when possible
  - Blocks player from winning
  - Prefers center and corners
  - Adds randomness for medium difficulty
- [x] Score tracking (wins/losses/draws)
- [x] Modern UI with Lexend font
- [x] Base miniapp dimensions (424×695px)

### 2. Farcaster Integration
- [x] `farcaster.json` manifest created
- [x] Proper file location: `public/.well-known/farcaster.json`
- [x] All required fields populated
- [x] Embed metadata in `index.html`
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Farcaster Frame metadata

### 3. Image Assets Created
- [x] icon.png.svg (1024×1024px)
- [x] splash.png.svg (200×200px)
- [x] hero.png.svg (1200×630px)
- [x] og-image.png.svg (1200×630px)
- [x] screenshot1.png.svg (1284×2778px) - Active game
- [x] screenshot2.png.svg (1284×2778px) - Win state
- [x] screenshot3.png.svg (1284×2778px) - Fresh start

All images feature:
- FarTacToe branding
- Purple gradient theme (#667eea to #764ba2)
- Game elements (X's and O's)
- Professional, attractive design

### 4. Documentation
- [x] README.md with instructions
- [x] IMAGE_ASSETS_GUIDE.md for asset management
- [x] DEPLOYMENT_CHECKLIST.md (this file)

## 📋 Before Deployment

### Required Actions:

#### 1. Choose Your Domain
```
Example: fartactoe.yourdomain.com
or: yourdomain.com/fartactoe
```

#### 2. Update All URLs
Replace `https://yourdomain.com` in these files:

**File: `public/.well-known/farcaster.json`**
```json
"homeUrl": "https://YOUR-ACTUAL-DOMAIN.com",
"iconUrl": "https://YOUR-ACTUAL-DOMAIN.com/icon.png",
"splashImageUrl": "https://YOUR-ACTUAL-DOMAIN.com/splash.png",
"heroImageUrl": "https://YOUR-ACTUAL-DOMAIN.com/hero.png",
"ogImageUrl": "https://YOUR-ACTUAL-DOMAIN.com/og-image.png",
"screenshotUrls": [
  "https://YOUR-ACTUAL-DOMAIN.com/screenshot1.png",
  "https://YOUR-ACTUAL-DOMAIN.com/screenshot2.png",
  "https://YOUR-ACTUAL-DOMAIN.com/screenshot3.png"
]
```

**File: `index.html`**
Update all meta tags with your domain.

#### 3. Prepare Image Files

**Option A: Use SVG files directly (Recommended)**
```bash
# Rename files to remove .png extension
mv public/icon.png.svg public/icon.svg
mv public/splash.png.svg public/splash.svg
# Update URLs in farcaster.json to use .svg
```

**Option B: Convert to PNG**
See `IMAGE_ASSETS_GUIDE.md` for conversion methods.

#### 4. Verify Account Association

1. Go to [Warpcast Mini App Manifest Tool](https://warpcast.com/~/developers/mini-apps/manifest)
2. Enter your domain
3. Generate account association signature
4. Update `farcaster.json` with the generated `accountAssociation` object

Example structure:
```json
{
  "accountAssociation": {
    "header": "...",
    "payload": "...",
    "signature": "..."
  },
  "miniapp": {
    ...
  }
}
```

## 🚀 Deployment Steps

### 1. Build Production Version
```bash
npm run build
```

### 2. Deploy to Hosting

**Recommended Hosts:**
- Vercel (easiest for Vite)
- Netlify
- Cloudflare Pages
- Any static hosting

**Vercel Deployment:**
```bash
npm install -g vercel
vercel
```

**Netlify Deployment:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### 3. Verify Manifest Accessibility

After deployment, verify:
```bash
curl https://your-domain.com/.well-known/farcaster.json
```

Should return your manifest JSON.

### 4. Test in Farcaster

1. Open Warpcast
2. Go to [Embed Tool](https://warpcast.com/~/developers/embeds)
3. Enter your domain
4. Test the miniapp

## 🎮 Testing Checklist

### Local Testing
- [ ] Run `npm run dev`
- [ ] Test game functionality
- [ ] Verify medium difficulty (CPU blocks and attacks)
- [ ] Check all buttons work
- [ ] Test score tracking
- [ ] Verify responsive design at 424×695px

### Production Testing
- [ ] Manifest loads at `/.well-known/farcaster.json`
- [ ] All images load correctly
- [ ] Open Graph preview works
- [ ] Game functions in Farcaster client
- [ ] Account verification shows in Warpcast

## 📊 Post-Deployment

### Monitor & Improve
- [ ] Check Warpcast Developer Rewards eligibility
- [ ] Monitor usage analytics
- [ ] Gather user feedback
- [ ] Consider adding features:
  - Hard difficulty mode
  - Multiplayer support
  - Custom themes
  - Sound effects
  - Animations

### Maintenance
- [ ] Keep dependencies updated
- [ ] Monitor for security updates
- [ ] Update screenshots if UI changes
- [ ] Refresh manifest if domain changes

## 🔧 Troubleshooting

### Manifest Not Found
- Check file location: `public/.well-known/farcaster.json`
- Verify hosting serves hidden directories
- Check build output includes the file

### Images Not Loading
- Verify image URLs are absolute (not relative)
- Check CORS headers on hosting
- Ensure images are in `public/` folder

### Account Not Verified
- Regenerate signature with exact domain
- No protocol (http://) or trailing slashes
- Domain must match hosting exactly

## 📚 Resources

- [Farcaster MiniApps Docs](https://miniapps.farcaster.xyz/)
- [Base MiniApps Guide](https://docs.base.org/mini-apps/quickstart/migrate-existing-apps)
- [Warpcast Developer Tools](https://warpcast.com/~/developers)
- [Mini App Asset Generator](https://www.miniappassets.com/)

## 🎯 Quick Deploy Commands

```bash
# Update dependencies
npm install

# Test locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy (example with Vercel)
npx vercel --prod
```

---

**Ready to deploy!** Follow the checklist above and your FarTacToe miniapp will be live on Farcaster! 🚀

