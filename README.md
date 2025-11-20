# FarTacToe - Tic-Tac-Toe MiniApp for Farcaster

A fun and interactive tic-tac-toe game built as a Farcaster miniapp on Base. Challenge the CPU in medium difficulty!

## Features

- 🎮 Classic Tic-Tac-Toe gameplay
- 🤖 Play against CPU (medium difficulty with smart moves)
- 📊 Score tracking
- 🎨 Beautiful, modern UI with Lexend font
- 📱 Optimized for Base miniapp specifications (424x695px)
- 🔗 Full Farcaster integration

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Configuration

### Before Deployment

1. Update `public/.well-known/farcaster.json` with your domain URLs
2. Update meta tags in `index.html` with your domain URLs
3. Generate and host the following assets:
   - icon.png (256x256px)
   - splash.png (recommended size)
   - hero.png (for app listing)
   - og-image.png (1200x630px for social sharing)
   - screenshot1.png and screenshot2.png (for app store)

### Assets

You can generate required assets using:
- [Mini App Asset Generator](https://www.miniappassets.com/)

## Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service (Vercel, Netlify, etc.)
3. Ensure `farcaster.json` is accessible at `https://yourdomain.com/.well-known/farcaster.json`
4. Test your miniapp using Farcaster's embed tools

## Technical Specifications

- **Framework**: React 18 + Vite
- **Dimensions**: 424px × 695px (Base miniapp standard)
- **Font**: Lexend (with Arial fallback)
- **Platform**: Farcaster on Base

## How to Play

1. You play as **X**, the CPU plays as **O**
2. Click on any empty square to make your move
3. Get three in a row (horizontally, vertically, or diagonally) to win
4. Track your wins, losses, and draws on the scoreboard

## Documentation

- [Farcaster MiniApps Documentation](https://miniapps.farcaster.xyz/)
- [Base MiniApps Guide](https://docs.base.org/mini-apps/quickstart/migrate-existing-apps)

