// Plancton App Icon Studio - Engine, i18n & Data URI Download Engine

document.addEventListener('DOMContentLoaded', () => {
  const cropCanvas = document.getElementById('cropCanvas');
  const ctx = cropCanvas.getContext('2d');
  const canvasWrapper = document.getElementById('canvasWrapper');
  
  // UI Controls
  const fileInput = document.getElementById('fileInput');
  const dropzone = document.getElementById('dropzone');
  const btnLoadSample = document.getElementById('btnLoadSample');
  const zoomRange = document.getElementById('zoomRange');
  const zoomValue = document.getElementById('zoomValue');
  const bgTypeSelect = document.getElementById('bgTypeSelect');
  const bgColorPicker = document.getElementById('bgColorPicker');
  const btnRotate = document.getElementById('btnRotate');
  const btnReset = document.getElementById('btnReset');
  const btnFit = document.getElementById('btnFit');
  const btnExportZip = document.getElementById('btnExportZip');
  const btnExportSingle = document.getElementById('btnExportSingle');

  // FX Controls
  const chkGloss = document.getElementById('chkGloss');
  const chkBorder = document.getElementById('chkBorder');
  const borderOptions = document.getElementById('borderOptions');
  const borderColorPicker = document.getElementById('borderColorPicker');
  const borderWidthRange = document.getElementById('borderWidthRange');

  // i18n Language Controls
  const btnLangToggle = document.getElementById('btnLangToggle');
  const langFlag = document.getElementById('langFlag');
  const langLabel = document.getElementById('langLabel');

  // Previews
  const previewIos = document.getElementById('previewIos');
  const previewMac = document.getElementById('previewMac');
  const previewAndroid = document.getElementById('previewAndroid');
  const previewWeb = document.getElementById('previewWeb');

  // Official iOS Squircle SVG Path String (viewBox 793.4 604.5 300 300)
  const iosSquircleD = "M1093.4,698.4c0-3.6,0-7.2,0-10.7c0-3-0.1-6-0.1-9.1c-0.2-6.6-0.6-13.2-1.7-19.7c-1.2-6.6-3.1-12.7-6.2-18.7c-3-5.9-6.9-11.3-11.6-16c-4.7-4.7-10.1-8.6-16-11.6c-6-3.1-12.1-5-18.7-6.2c-6.5-1.2-13.1-1.6-19.7-1.7c-3-0.1-6-0.1-9.1-0.1c-3.6,0-7.2,0-10.7,0H887.3c-3.6,0-7.2,0-10.7,0c-3,0-6,0.1-9.1,0.1c-6.6,0.2-13.2,0.6-19.7,1.7c-6.6,1.2-12.7,3.1-18.7,6.2c-5.9,3-11.3,6.9-16,11.6c-4.7,4.7-8.6,10.1-11.6,16c-3.1,6-5,12.1-6.2,18.7c-1.2,6.5-1.6,13.1-1.7,19.7c-0.1,3-0.1,6-0.1,9.1c0,3.6,0,7.2,0,10.7v112.3c0,3.6,0,7.2,0,10.7c0,3,0.1,6,0.1,9.1c0.2,6.6,0.6,13.2,1.7,19.7c1.2,6.6,3.1,12.7,6.2,18.7c3,5.9,6.9,11.3,11.6,16c4.7,4.7,10.1,8.6,16,11.6c6,3.1,12.1,5,18.7,6.2c6.5,1.2,13.1,1.6,19.7,1.7c3,0.1,6,0.1,9.1,0.1c3.6,0,7.2,0,10.7,0h112.3c3.6,0,7.2,0,10.7,0c3,0,6-0.1,9.1-0.1c6.6-0.2,13.2-0.6,19.7-1.7c6.6-1.2,12.7-3.1,18.7-6.2c5.9-3,11.3-6.9,16-11.6s8.6-10.1,11.6-16c3.1-6,5-12.1,6.2-18.7c1.2-6.5,1.6-13.1,1.7-19.7c0.1-3,0.1,6-0.1,9.1c0-3.6,0-7.2,0-10.7V698.4z";

  // i18n Translations Dictionary
  const translations = {
    fr: {
      btnCoffee: "Soutenir",
      loadSample: "Charger l'image modèle",
      titleImport: "Importation & Forme",
      dropLabel: "Déposer votre image",
      dropText: "Glissez une image ici",
      dropSub: "ou cliquez pour parcourir (PNG, JPG, SVG)",
      shapeLabel: "Format de masque",
      shapeCircle: "Cercle",
      shapeRounded: "Arrondi",
      shapeSquare: "Carré Plein",
      fxTitle: "Effets & Finitions",
      fxGloss: "Reflet / Gloss Apple",
      fxBorder: "Bordure métallique",
      zoomLabel: "Zoom & Échelle",
      bgLabel: "Remplissage de fond",
      bgTrans: "Transparent",
      bgColor: "Couleur Unie",
      bgBlur: "Flou de l'image",
      toolsLabel: "Ajustements",
      btnFit: "Ajuster",
      btnRotate: "Pivoter",
      btnZero: "Zero",
      cropHeader: "Zone de rognage interactive (Glissez pour ajuster)",
      cropHint: "💡 Astuce : Déplacez à la souris et utilisez la molette pour zoomer en direct",
      titleExport: "Prévisualisation & Exporter",
      previewTitle: "Aperçu Multi-Écrans",
      zipFormatsTitle: "Choix des Formats à exporter (Pack ZIP)",
      iosDesc: "Inclus Contents.json + 12 tailles (1024, 180, 120, 167, 87...)",
      androidDesc: "Inclus res/mipmap (hdpi, xhdpi, xxhdpi...) + 512x512",
      webDesc: "Favicons 16/32, Apple-Touch-Icon, PWA 192/512, site.webmanifest",
      macDesc: "Fichiers iconset de 16x16 jusqu'à 1024x1024",
      btnZip: "Télécharger le pack ZIP (Tous les formats)",
      btnPng: "Télécharger PNG haute résolution (1024x1024)"
    },
    en: {
      btnCoffee: "Support",
      loadSample: "Load sample image",
      titleImport: "Import & Shape",
      dropLabel: "Drop your image",
      dropText: "Drag an image here",
      dropSub: "or click to browse (PNG, JPG, SVG)",
      shapeLabel: "Mask Shape",
      shapeCircle: "Circle",
      shapeRounded: "Rounded",
      shapeSquare: "Square Fill",
      fxTitle: "Effects & Styling",
      fxGloss: "Glossy Reflet / Apple Gloss",
      fxBorder: "Metallic Border",
      zoomLabel: "Zoom & Scale",
      bgLabel: "Background Fill",
      bgTrans: "Transparent",
      bgColor: "Solid Color",
      bgBlur: "Image Blur",
      toolsLabel: "Adjustments",
      btnFit: "Fit",
      btnRotate: "Rotate",
      btnZero: "Reset",
      cropHeader: "Interactive Crop Zone (Drag to position)",
      cropHint: "💡 Tip: Drag with mouse & scroll wheel to zoom live",
      titleExport: "Preview & Export",
      previewTitle: "Multi-Screen Preview",
      zipFormatsTitle: "Export Target Formats (ZIP Pack)",
      iosDesc: "Includes Contents.json + 12 sizes (1024, 180, 120, 167, 87...)",
      androidDesc: "Includes res/mipmap (hdpi, xhdpi, xxhdpi...) + 512x512",
      webDesc: "Favicons 16/32, Apple-Touch-Icon, PWA 192/512, site.webmanifest",
      macDesc: "Iconset files from 16x16 up to 1024x1024",
      btnZip: "Download ZIP Pack (All Formats)",
      btnPng: "Download High-Res PNG (1024x1024)"
    }
  };

  let currentLang = 'fr';

  function applyLanguage(lang) {
    currentLang = lang;
    if (lang === 'fr') {
      langFlag.textContent = '🇫🇷';
      langLabel.textContent = 'FR';
    } else {
      langFlag.textContent = '🇬🇧';
      langLabel.textContent = 'EN';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  btnLangToggle?.addEventListener('click', () => {
    applyLanguage(currentLang === 'fr' ? 'en' : 'fr');
  });

  // State Variables
  let loadedImage = new Image();
  let isImageLoaded = false;
  let zoom = 1.0;
  let panX = 0;
  let panY = 0;
  let rotation = 0;
  let currentShape = 'ios';
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  
  let initialPinchDistance = null;
  let initialPinchZoom = 1.0;

  const SIZE = 1024;
  cropCanvas.width = SIZE;
  cropCanvas.height = SIZE;

  // Load Default Image
  function loadDefaultImage() {
    loadedImage.onload = () => {
      isImageLoaded = true;
      resetTransform();
      render();
    };
    loadedImage.src = 'assets/default-icon.jpg';
  }

  loadDefaultImage();
  btnLoadSample?.addEventListener('click', loadDefaultImage);

  // FX Event Listeners
  chkGloss?.addEventListener('change', render);
  chkBorder?.addEventListener('change', () => {
    borderOptions.style.display = chkBorder.checked ? 'flex' : 'none';
    render();
  });
  borderColorPicker?.addEventListener('input', render);
  borderWidthRange?.addEventListener('input', render);

  // Drag and Drop Upload Handlers
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  });

  function handleFile(file) {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      loadedImage = new Image();
      loadedImage.onload = () => {
        isImageLoaded = true;
        resetTransform();
        render();
      };
      loadedImage.src = evt.target.result;
    };
    reader.readAsDataURL(file);
  }

  function getCanvasScaleFactor() {
    const rect = canvasWrapper.getBoundingClientRect();
    return SIZE / (rect.width || 360);
  }

  // Mouse Drag Events
  canvasWrapper.addEventListener('mousedown', (e) => {
    if (!isImageLoaded) return;
    isDragging = true;
    const factor = getCanvasScaleFactor();
    dragStartX = e.clientX * factor - panX;
    dragStartY = e.clientY * factor - panY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const factor = getCanvasScaleFactor();
    panX = e.clientX * factor - dragStartX;
    panY = e.clientY * factor - dragStartY;
    render();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  canvasWrapper.addEventListener('wheel', (e) => {
    if (!isImageLoaded) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    updateZoom(zoom + delta);
  }, { passive: false });

  // Touch Drag & Pinch-to-Zoom
  canvasWrapper.addEventListener('touchstart', (e) => {
    if (!isImageLoaded) return;
    const factor = getCanvasScaleFactor();
    
    if (e.touches.length === 1) {
      isDragging = true;
      dragStartX = e.touches[0].clientX * factor - panX;
      dragStartY = e.touches[0].clientY * factor - panY;
    } else if (e.touches.length === 2) {
      isDragging = false;
      initialPinchDistance = getTouchDistance(e.touches);
      initialPinchZoom = zoom;
    }
  }, { passive: true });

  canvasWrapper.addEventListener('touchmove', (e) => {
    if (!isImageLoaded) return;
    const factor = getCanvasScaleFactor();

    if (e.touches.length === 1 && isDragging) {
      panX = e.touches[0].clientX * factor - dragStartX;
      panY = e.touches[0].clientY * factor - dragStartY;
      render();
    } else if (e.touches.length === 2 && initialPinchDistance) {
      e.preventDefault();
      const currentDist = getTouchDistance(e.touches);
      const zoomRatio = currentDist / initialPinchDistance;
      updateZoom(initialPinchZoom * zoomRatio);
    }
  }, { passive: false });

  canvasWrapper.addEventListener('touchend', (e) => {
    if (e.touches.length === 0) {
      isDragging = false;
      initialPinchDistance = null;
    } else if (e.touches.length === 1) {
      const factor = getCanvasScaleFactor();
      isDragging = true;
      dragStartX = e.touches[0].clientX * factor - panX;
      dragStartY = e.touches[0].clientY * factor - panY;
      initialPinchDistance = null;
    }
  });

  function getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function updateZoom(newZoom) {
    zoom = Math.min(Math.max(0.2, newZoom), 5.0);
    zoomRange.value = zoom;
    zoomValue.textContent = zoom.toFixed(2) + 'x';
    render();
  }

  zoomRange.addEventListener('input', (e) => {
    updateZoom(parseFloat(e.target.value));
  });

  bgTypeSelect.addEventListener('change', render);
  bgColorPicker.addEventListener('input', render);

  btnRotate.addEventListener('click', () => {
    rotation = (rotation + 90) % 360;
    render();
  });

  btnReset.addEventListener('click', () => {
    resetTransform();
    render();
  });

  btnFit.addEventListener('click', () => {
    fitToFrame();
    render();
  });

  // Shape Selector Buttons
  document.querySelectorAll('.shape-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.shape-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentShape = btn.dataset.shape;
      render();
    });
  });

  function resetTransform() {
    panX = 0;
    panY = 0;
    rotation = 0;
    fitToFrame();
  }

  function fitToFrame() {
    if (!isImageLoaded) return;
    const maxDim = Math.max(loadedImage.width, loadedImage.height);
    zoom = SIZE / maxDim;
    zoomRange.value = zoom;
    zoomValue.textContent = zoom.toFixed(2) + 'x';
  }

  window.addEventListener('resize', render);

  function getShapeBounds(size) {
    const hasBorder = chkBorder && chkBorder.checked;
    const bWidth = hasBorder ? parseFloat(borderWidthRange.value) * (size / 360.0) : 0;
    const inset = bWidth / 2.0;
    const innerSize = size - bWidth;
    return { bWidth, inset, innerSize };
  }

  // Master Render Engine
  function render() {
    ctx.clearRect(0, 0, SIZE, SIZE);

    // 1. Draw Background
    const bgType = bgTypeSelect.value;
    if (bgType === 'color') {
      ctx.fillStyle = bgColorPicker.value;
      ctx.fillRect(0, 0, SIZE, SIZE);
    } else if (bgType === 'blur' && isImageLoaded) {
      ctx.save();
      ctx.filter = 'blur(40px)';
      ctx.drawImage(loadedImage, -SIZE/2, -SIZE/2, SIZE*2, SIZE*2);
      ctx.restore();
    }

    if (!isImageLoaded) return;

    const bounds = getShapeBounds(SIZE);

    // 2. Apply Shape Clip
    ctx.save();
    applyShapeClip(ctx, currentShape, SIZE, bounds);

    // 3. Draw Image with Transform inside clipped shape
    ctx.save();
    ctx.translate(SIZE / 2 + panX, SIZE / 2 + panY);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(zoom, zoom);
    
    ctx.drawImage(
      loadedImage,
      -loadedImage.width / 2,
      -loadedImage.height / 2,
      loadedImage.width,
      loadedImage.height
    );
    ctx.restore();

    // 4. Draw Reflet / Gloss Sheen FX
    if (chkGloss && chkGloss.checked) {
      const glossGrad = ctx.createLinearGradient(0, bounds.inset, 0, bounds.inset + bounds.innerSize * 0.55);
      glossGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      glossGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      glossGrad.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

      ctx.save();
      ctx.fillStyle = glossGrad;
      ctx.beginPath();
      ctx.rect(0, 0, SIZE, SIZE * 0.5);
      ctx.fill();
      ctx.restore();
    }

    ctx.restore();

    // 5. Draw Border FX
    if (chkBorder && chkBorder.checked && bounds.bWidth > 0) {
      ctx.save();
      ctx.lineWidth = bounds.bWidth;
      ctx.strokeStyle = borderColorPicker.value;
      strokeShape(ctx, currentShape, SIZE, bounds);
      ctx.restore();
    }

    // 6. Update Previews
    updatePreviews();
  }

  function applyShapeClip(context, shape, size, bounds) {
    const { inset, innerSize } = bounds;
    context.beginPath();
    if (shape === 'ios') {
      if (window.Path2D) {
        const path = new Path2D(iosSquircleD);
        context.save();
        context.translate(inset, inset);
        context.scale(innerSize / 300.0, innerSize / 300.0);
        context.translate(-793.4, -604.5);
        context.clip(path);
        context.restore();
        return;
      }
      roundedRect(context, inset, inset, innerSize, innerSize, innerSize * 0.22);
    } else if (shape === 'circle') {
      context.arc(size / 2, size / 2, innerSize / 2, 0, Math.PI * 2);
    } else if (shape === 'rounded') {
      roundedRect(context, inset, inset, innerSize, innerSize, innerSize * 0.15);
    } else if (shape === 'macos') {
      roundedRect(context, inset + innerSize * 0.05, inset + innerSize * 0.05, innerSize * 0.9, innerSize * 0.9, innerSize * 0.2);
    } else if (shape === 'square') {
      context.rect(inset, inset, innerSize, innerSize);
    }
    context.clip();
  }

  function strokeShape(context, shape, size, bounds) {
    const { inset, innerSize } = bounds;
    context.beginPath();
    if (shape === 'ios') {
      if (window.Path2D) {
        const path = new Path2D(iosSquircleD);
        context.save();
        context.translate(inset, inset);
        context.scale(innerSize / 300.0, innerSize / 300.0);
        context.translate(-793.4, -604.5);
        context.stroke(path);
        context.restore();
        return;
      }
      roundedRect(context, inset, inset, innerSize, innerSize, innerSize * 0.22);
    } else if (shape === 'circle') {
      context.arc(size / 2, size / 2, innerSize / 2, 0, Math.PI * 2);
    } else if (shape === 'rounded') {
      roundedRect(context, inset, inset, innerSize, innerSize, innerSize * 0.15);
    } else if (shape === 'macos') {
      roundedRect(context, inset + innerSize * 0.05, inset + innerSize * 0.05, innerSize * 0.9, innerSize * 0.9, innerSize * 0.2);
    } else if (shape === 'square') {
      context.rect(inset, inset, innerSize, innerSize);
    }
    context.stroke();
  }

  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }

  function updatePreviews() {
    const dataUrl = cropCanvas.toDataURL('image/png');
    if (previewIos) previewIos.src = dataUrl;
    if (previewMac) previewMac.src = dataUrl;
    if (previewAndroid) previewAndroid.src = dataUrl;
    if (previewWeb) previewWeb.src = dataUrl;
  }

  // Trigger Download via Direct Data URI (100% Preserves Extension in Chrome/Edge/Firefox)
  function triggerDownload(dataUrl, filename) {
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      if (link.parentNode) link.parentNode.removeChild(link);
    }, 200);
  }

  // Single High-Res PNG Download
  btnExportSingle?.addEventListener('click', () => {
    const dataUrl = cropCanvas.toDataURL('image/png');
    triggerDownload(dataUrl, 'plancton-icon-1024x1024.png');
  });

  // ZIP Multi-Format Exporter with Base64 Data URI Trigger
  btnExportZip?.addEventListener('click', async () => {
    if (typeof JSZip === 'undefined') {
      alert("Erreur: La bibliothèque JSZip n'est pas disponible.");
      return;
    }

    const zip = new JSZip();

    const chkIos = document.getElementById('chkIos').checked;
    const chkAndroid = document.getElementById('chkAndroid').checked;
    const chkWeb = document.getElementById('chkWeb').checked;
    const chkMac = document.getElementById('chkMac').checked;

    if (!chkIos && !chkAndroid && !chkWeb && !chkMac) {
      alert(currentLang === 'fr' ? "Veuillez sélectionner au moins une plateforme à exporter." : "Please select at least one platform to export.");
      return;
    }

    btnExportZip.textContent = currentLang === 'fr' ? 'Génération du ZIP...' : 'Generating ZIP...';
    btnExportZip.disabled = true;

    const getResizedBlob = (targetWidth, targetHeight) => {
      return new Promise((resolve) => {
        const offscreen = document.createElement('canvas');
        offscreen.width = targetWidth;
        offscreen.height = targetHeight;
        const oCtx = offscreen.getContext('2d');
        oCtx.imageSmoothingEnabled = true;
        oCtx.imageSmoothingQuality = 'high';
        oCtx.drawImage(cropCanvas, 0, 0, targetWidth, targetHeight);
        offscreen.toBlob((blob) => resolve(blob), 'image/png');
      });
    };

    try {
      // 🍏 1. iOS AppIconset Bundle
      if (chkIos) {
        const iosFolder = zip.folder("iOS/AppIcon.appiconset");
        const iosSizes = [
          { size: 1024, name: "icon-1024x1024.png" },
          { size: 180, name: "icon-180x180.png" },
          { size: 120, name: "icon-120x120.png" },
          { size: 167, name: "icon-167x167.png" },
          { size: 152, name: "icon-152x152.png" },
          { size: 87, name: "icon-87x87.png" },
          { size: 80, name: "icon-80x80.png" },
          { size: 60, name: "icon-60x60.png" },
          { size: 58, name: "icon-58x58.png" },
          { size: 40, name: "icon-40x40.png" },
          { size: 29, name: "icon-29x29.png" },
          { size: 20, name: "icon-20x20.png" }
        ];

        for (const item of iosSizes) {
          const blob = await getResizedBlob(item.size, item.size);
          iosFolder.file(item.name, blob, { binary: true });
        }

        const contentsJson = {
          "images": [
            { "idiom": "universal", "platform": "ios", "size": "1024x1024", "filename": "icon-1024x1024.png" },
            { "idiom": "iphone", "size": "60x60", "scale": "3x", "filename": "icon-180x180.png" },
            { "idiom": "iphone", "size": "60x60", "scale": "2x", "filename": "icon-120x120.png" },
            { "idiom": "ipad", "size": "83.5x83.5", "scale": "2x", "filename": "icon-167x167.png" },
            { "idiom": "ipad", "size": "76x76", "scale": "2x", "filename": "icon-152x152.png" },
            { "idiom": "iphone", "size": "29x29", "scale": "3x", "filename": "icon-87x87.png" },
            { "idiom": "iphone", "size": "40x40", "scale": "2x", "filename": "icon-80x80.png" },
            { "idiom": "iphone", "size": "20x20", "scale": "3x", "filename": "icon-60x60.png" },
            { "idiom": "iphone", "size": "29x29", "scale": "2x", "filename": "icon-58x58.png" },
            { "idiom": "iphone", "size": "20x20", "scale": "2x", "filename": "icon-40x40.png" }
          ],
          "info": { "version": 1, "author": "plancton" }
        };

        iosFolder.file("Contents.json", JSON.stringify(contentsJson, null, 2));
      }

      // 🤖 2. Android Mipmap & Play Store
      if (chkAndroid) {
        const androidFolder = zip.folder("Android");
        const androidSizes = [
          { folder: "mipmap-mdpi", size: 48 },
          { folder: "mipmap-hdpi", size: 72 },
          { folder: "mipmap-xhdpi", size: 96 },
          { folder: "mipmap-xxhdpi", size: 144 },
          { folder: "mipmap-xxxhdpi", size: 192 }
        ];

        for (const item of androidSizes) {
          const blob = await getResizedBlob(item.size, item.size);
          const f = androidFolder.folder(`res/${item.folder}`);
          f.file("ic_launcher.png", blob, { binary: true });
          f.file("ic_launcher_round.png", blob, { binary: true });
        }

        const storeBlob = await getResizedBlob(512, 512);
        androidFolder.file("playstore-icon-512x512.png", storeBlob, { binary: true });
      }

      // 🌐 3. Web, PWA & Favicon Bundle
      if (chkWeb) {
        const webFolder = zip.folder("Web-PWA");
        const web16 = await getResizedBlob(16, 16);
        const web32 = await getResizedBlob(32, 32);
        const web180 = await getResizedBlob(180, 180);
        const web192 = await getResizedBlob(192, 192);
        const web512 = await getResizedBlob(512, 512);

        webFolder.file("favicon.ico", web32, { binary: true });
        webFolder.file("favicon-16x16.png", web16, { binary: true });
        webFolder.file("favicon-32x32.png", web32, { binary: true });
        webFolder.file("apple-touch-icon.png", web180, { binary: true });
        webFolder.file("android-chrome-192x192.png", web192, { binary: true });
        webFolder.file("android-chrome-512x512.png", web512, { binary: true });

        const manifest = {
          "name": "Plancton App",
          "short_name": "Plancton",
          "icons": [
            { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
            { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
          ],
          "theme_color": "#0a0b0e",
          "background_color": "#0a0b0e",
          "display": "standalone"
        };
        webFolder.file("site.webmanifest", JSON.stringify(manifest, null, 2));
        webFolder.file("manifest.json", JSON.stringify(manifest, null, 2));
      }

      // 💻 4. macOS Iconset Bundle
      if (chkMac) {
        const macFolder = zip.folder("macOS/AppIcon.iconset");
        const macSizes = [
          { name: "icon_16x16.png", size: 16 },
          { name: "icon_32x32.png", size: 32 },
          { name: "icon_64x64.png", size: 64 },
          { name: "icon_128x128.png", size: 128 },
          { name: "icon_256x256.png", size: 256 },
          { name: "icon_512x512.png", size: 512 },
          { name: "icon_1024x1024.png", size: 1024 }
        ];

        for (const item of macSizes) {
          const blob = await getResizedBlob(item.size, item.size);
          macFolder.file(item.name, blob, { binary: true });
        }
      }

      // Generate Base64 Data URI for 100% Reliable File Naming in Chrome/Edge
      const base64Zip = await zip.generateAsync({
        type: "base64",
        compression: "DEFLATE",
        compressionOptions: { level: 6 }
      });
      const dataUrl = "data:application/zip;base64," + base64Zip;
      triggerDownload(dataUrl, "Plancton-AppIcons.zip");

    } catch (err) {
      console.error("ZIP Generation error:", err);
      alert("Erreur lors de la génération du fichier ZIP.");
    } finally {
      btnExportZip.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> <span data-i18n="btnZip">${translations[currentLang].btnZip}</span>`;
      btnExportZip.disabled = false;
    }
  });

});
