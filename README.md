<p align="center">
  <img src="assets/icon.png" width="128" height="128" alt="Plancton Logo">
</p>

<h1 align="center">Plancton</h1>

<p align="center">
  A modern app icon cropper, mask editor, and multi-format asset packager for mobile, web, and desktop developers.
</p>

<p align="center">
  <a href="https://github.com/infinition/plancton"><img src="https://img.shields.io/github/stars/infinition/plancton?style=flat-square&color=ccff00" alt="GitHub Stars"></a>
  <a href="https://github.com/infinition/plancton/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License"></a>
</p>

---

## Overview

Plancton is a client-side web application designed to prepare, crop, mask, and export app icon sets. It processes images in real time and packages complete icon bundles for iOS, Android, Web, and macOS without external dependencies or cloud uploads.

## Key Features

- **Interactive Canvas Cropper**: Drag to position and scroll mouse wheel or pinch to zoom.
- **Masking Options**: Continuous curvature iOS squircle, circle, rounded rectangle, macOS tile, and full square.
- **Visual Effects**: Apple-style glossy sheen and metallic border stroke overlays.
- **Multi-Screen Previews**: Real-time previews for iOS home screen, macOS dock, Android launcher, and browser tab.
- **Multi-Platform ZIP Exporter**:
  - **iOS**: `AppIcon.appiconset` with valid `Contents.json` and 12 icon sizes.
  - **Android**: `res/mipmap-*` folders (`ic_launcher.png`, `ic_launcher_round.png`) and 512x512 Play Store graphic.
  - **Web & PWA**: Favicons, Apple Touch Icon, PWA Chrome icons, `site.webmanifest`, and `manifest.json`.
  - **macOS**: `AppIcon.iconset` resolutions from 16x16 to 1024x1024.
- **Multilingual Support**: Instant toggle between French and English.
- **Offline Capable**: Fully functional standalone client-side engine.

## Usage

1. Open `index.html` in any web browser.
2. Drag and drop an image or click **Load sample image**.
3. Select your target mask shape and adjust zoom and position.
4. Select desired export formats and click **Download ZIP Pack**.

## Tech Stack

- HTML5 Canvas & Vanilla JavaScript
- Modern CSS (Custom Properties, Glassmorphism, Responsive Grid)
- [JSZip](https://stuk.github.io/jszip/) for client-side ZIP archive generation

## License

MIT License. See [LICENSE](LICENSE) for details.
