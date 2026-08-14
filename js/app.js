// Plancton App Icon Studio - Complete Feature Engine with 360° Multi-Color Background & Text Gradients, 360° Text Rotation & Custom Font Importer

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
  const bgGradientSubpanel = document.getElementById('bgGradientSubpanel');
  const btnAddBgGradColor = document.getElementById('btnAddBgGradColor');
  const bgGradStopsContainer = document.getElementById('bgGradStopsContainer');
  const bgGradAngleRange = document.getElementById('bgGradAngleRange');
  const bgGradAngleVal = document.getElementById('bgGradAngleVal');
  const bgGradOpacityRange = document.getElementById('bgGradOpacityRange');
  const bgGradOpacityVal = document.getElementById('bgGradOpacityVal');

  const btnRotate = document.getElementById('btnRotate');
  const btnReset = document.getElementById('btnReset');
  const btnFit = document.getElementById('btnFit');
  const btnExportZip = document.getElementById('btnExportZip');
  const btnExportSingle = document.getElementById('btnExportSingle');

  // Text Layer Controls
  const chkText = document.getElementById('chkText');
  const textOptions = document.getElementById('textOptions');
  const textStringInput = document.getElementById('textStringInput');
  const fontFamilySelect = document.getElementById('fontFamilySelect');
  const fontFileInput = document.getElementById('fontFileInput');
  const btnTextBold = document.getElementById('btnTextBold');
  const btnTextItalic = document.getElementById('btnTextItalic');
  const textSizeRange = document.getElementById('textSizeRange');
  const textSizeVal = document.getElementById('textSizeVal');
  const textRotationRange = document.getElementById('textRotationRange');
  const textRotationVal = document.getElementById('textRotationVal');
  const textFillTypeSelect = document.getElementById('textFillTypeSelect');
  const textSolidOptions = document.getElementById('textSolidOptions');
  const textColorPicker = document.getElementById('textColorPicker');
  const textGradientOptions = document.getElementById('textGradientOptions');
  const btnAddTextGradColor = document.getElementById('btnAddTextGradColor');
  const textGradStopsContainer = document.getElementById('textGradStopsContainer');
  const textGradAngleRange = document.getElementById('textGradAngleRange');
  const textGradAngleVal = document.getElementById('textGradAngleVal');

  // Gloss Controls
  const chkGloss = document.getElementById('chkGloss');
  const glossOptions = document.getElementById('glossOptions');
  const glossColorPicker = document.getElementById('glossColorPicker');
  const glossOpacityRange = document.getElementById('glossOpacityRange');
  const glossOpacityVal = document.getElementById('glossOpacityVal');
  const glossAngleRange = document.getElementById('glossAngleRange');
  const glossAngleVal = document.getElementById('glossAngleVal');
  const chkGlossBehind = document.getElementById('chkGlossBehind');

  // Border Controls
  const chkBorder = document.getElementById('chkBorder');
  const borderOptions = document.getElementById('borderOptions');
  const borderColorPicker = document.getElementById('borderColorPicker');
  const borderWidthRange = document.getElementById('borderWidthRange');

  // Background Remover Controls
  const chkRemoveBg = document.getElementById('chkRemoveBg');
  const removeBgOptions = document.getElementById('removeBgOptions');
  const keyColorPicker = document.getElementById('keyColorPicker');
  const toleranceRange = document.getElementById('toleranceRange');
  const toleranceValue = document.getElementById('toleranceValue');

  // Badge Controls
  const chkBadge = document.getElementById('chkBadge');
  const badgeOptions = document.getElementById('badgeOptions');
  const badgeTextInput = document.getElementById('badgeTextInput');
  const badgeColorPicker = document.getElementById('badgeColorPicker');
  const badgeStyleSelect = document.getElementById('badgeStyleSelect');

  // Image Filter Controls
  const brightnessRange = document.getElementById('brightnessRange');
  const brightnessVal = document.getElementById('brightnessVal');
  const contrastRange = document.getElementById('contrastRange');
  const contrastVal = document.getElementById('contrastVal');
  const saturationRange = document.getElementById('saturationRange');
  const saturationVal = document.getElementById('saturationVal');

  // Snippets Modal Controls
  const btnOpenSnippets = document.getElementById('btnOpenSnippets');
  const snippetsModal = document.getElementById('snippetsModal');
  const btnCloseModal = document.getElementById('btnCloseModal');

  // i18n Language Controls
  const btnLangToggle = document.getElementById('btnLangToggle');
  const langFlag = document.getElementById('langFlag');
  const langLabel = document.getElementById('langLabel');

  // Previews
  const previewIos = document.getElementById('previewIos');
  const previewMac = document.getElementById('previewMac');
  const previewAndroid = document.getElementById('previewAndroid');
  const previewWeb = document.getElementById('previewWeb');

  // iOS Squircle SVG Path String
  const iosSquircleD = "M1093.4,698.4c0-3.6,0-7.2,0-10.7c0-3-0.1-6-0.1-9.1c-0.2-6.6-0.6-13.2-1.7-19.7c-1.2-6.6-3.1-12.7-6.2-18.7c-3-5.9-6.9-11.3-11.6-16c-4.7-4.7-10.1-8.6-16-11.6c-6-3.1-12.1-5-18.7-6.2c-6.5-1.2-13.1-1.6-19.7-1.7c-3-0.1-6-0.1-9.1-0.1c-3.6,0-7.2,0-10.7,0H887.3c-3.6,0-7.2,0-10.7,0c-3,0-6,0.1-9.1,0.1c-6.6,0.2-13.2,0.6-19.7,1.7c-6.6,1.2-12.7,3.1-18.7,6.2c-5.9,3-11.3,6.9-16,11.6c-4.7,4.7-8.6,10.1-11.6,16c-3.1,6-5,12.1-6.2,18.7c-1.2,6.5-1.6,13.1-1.7,19.7c-0.1,3-0.1,6-0.1,9.1c0,3.6,0,7.2,0,10.7v112.3c0,3.6,0,7.2,0,10.7c0,3,0.1,6,0.1,9.1c0.2,6.6,0.6,13.2,1.7,19.7c1.2,6.6,3.1,12.7,6.2,18.7c3,5.9,6.9,11.3,11.6,16c4.7,4.7,10.1-8.6,16-11.6c6,3.1,12.1,5,18.7,6.2c6.5,1.2,13.1,1.6,19.7,1.7c3,0.1,6,0.1,9.1,0.1c3.6,0,7.2,0,10.7,0h112.3c3.6,0,7.2,0,10.7,0c3,0,6-0.1,9.1-0.1c6.6-0.2,13.2-0.6,19.7-1.7c6.6-1.2,12.7-3.1,18.7-6.2c5.9-3,11.3-6.9,16-11.6s8.6-10.1,11.6-16c3.1-6,5-12.1,6.2-18.7c1.2-6.5,1.6-13.1,1.7-19.7c0.1-3,0.1,6-0.1,9.1c0-3.6,0-7.2,0-10.7V698.4z";

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
      textTitle: "✍️ Texte & Typographie",
      chkText: "Activer la couche texte",
      textSize: "Taille",
      textRotation: "Rotation Texte (360°)",
      textFillMode: "Remplissage du texte",
      textGradAngle: "Angle Dégradé (360°)",
      removeBgTitle: "🧪 Supprimer la couleur de fond",
      chkRemoveBg: "Activer le détourage par couleur",
      keyColor: "Couleur à retirer",
      tolerance: "Tolérance",
      badgeTitle: "🏷️ Badge & Ruban de Build",
      chkBadge: "Afficher un badge de version",
      fxTitle: "✨ Effets & Finitions",
      fxGloss: "Reflet / Gloss Apple",
      glossColor: "Couleur & Opacité",
      glossAngle: "Orientation Angle (360°)",
      glossBehind: "Affecter le fond uniquement (sous le PNG)",
      fxBorder: "Bordure métallique",
      filterTitle: "🎨 Ajustements d'image",
      brightness: "Luminosité",
      contrast: "Contraste",
      saturation: "Saturation",
      zoomLabel: "Zoom & Échelle",
      bgLabel: "Remplissage de fond",
      bgTrans: "Transparent",
      bgColor: "Couleur Unie",
      bgGrad: "Dégradé 360° Multi-Couleurs",
      bgGradAngle: "Orientation Angle (360°)",
      bgGradOpacity: "Transparence / Opacité",
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
      iosDesc: "Contents.json + 12 tailles + Variantes Dark/Tinted",
      androidDesc: "Inclus res/mipmap (hdpi, xhdpi, xxhdpi...) + 512x512",
      webDesc: "Favicons 16/32, Apple-Touch-Icon, PWA 192/512, site.webmanifest",
      macDesc: "Fichiers iconset de 16x16 jusqu'à 1024x1024",
      btnZip: "Télécharger le pack ZIP (Tous les formats)",
      btnSnippets: "Obtenir le code HTML / Config",
      btnPng: "Télécharger PNG haute résolution (1024x1024)",
      snippetsTitle: "Snippets & Code d'intégration"
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
      textTitle: "✍️ Text & Typography",
      chkText: "Enable text overlay",
      textSize: "Size",
      textRotation: "Text Rotation (360°)",
      textFillMode: "Text Fill Mode",
      textGradAngle: "Gradient Angle (360°)",
      removeBgTitle: "🧪 Remove Background Color",
      chkRemoveBg: "Enable color keying removal",
      keyColor: "Key color to remove",
      tolerance: "Tolerance",
      badgeTitle: "🏷️ Build Badge & Ribbon",
      chkBadge: "Display version badge",
      fxTitle: "✨ Effects & Styling",
      fxGloss: "Glossy Reflet / Apple Gloss",
      glossColor: "Color & Opacity",
      glossAngle: "Reflection Angle (360°)",
      glossBehind: "Apply to background only (behind PNG)",
      fxBorder: "Metallic Border",
      filterTitle: "🎨 Image Adjustments",
      brightness: "Brightness",
      contrast: "Contrast",
      saturation: "Saturation",
      zoomLabel: "Zoom & Scale",
      bgLabel: "Background Fill",
      bgTrans: "Transparent",
      bgColor: "Solid Color",
      bgGrad: "Multi-Color 360° Gradient",
      bgGradAngle: "Reflection Angle (360°)",
      bgGradOpacity: "Transparency / Opacity",
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
      iosDesc: "Contents.json + 12 sizes + Dark/Tinted Variants",
      androidDesc: "Includes res/mipmap (hdpi, xhdpi, xxhdpi...) + 512x512",
      webDesc: "Favicons 16/32, Apple-Touch-Icon, PWA 192/512, site.webmanifest",
      macDesc: "Iconset files from 16x16 up to 1024x1024",
      btnZip: "Download ZIP Pack (All Formats)",
      btnSnippets: "Get HTML / Config Code",
      btnPng: "Download High-Res PNG (1024x1024)",
      snippetsTitle: "Integration Code Snippets"
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

  // Master State Variables
  let loadedImage = new Image();
  let processedImageCanvas = document.createElement('canvas');
  let isImageLoaded = false;
  let zoom = 1.0;
  let panX = 0;
  let panY = 0;
  let rotation = 0;
  let currentShape = 'ios';

  // Text State Variables
  const SIZE = 1024;
  let textX = SIZE / 2;
  let textY = SIZE * 0.72;
  let isBold = true;
  let isItalic = false;
  let isDraggingText = false;
  let textDragOffsetX = 0;
  let textDragOffsetY = 0;

  // Image Drag State
  let isDraggingImage = false;
  let dragStartX = 0;
  let dragStartY = 0;
  
  let initialPinchDistance = null;
  let initialPinchZoom = 1.0;

  cropCanvas.width = SIZE;
  cropCanvas.height = SIZE;

  // Load Default Image
  function loadDefaultImage() {
    loadedImage.onload = () => {
      isImageLoaded = true;
      processSourceImage();
      resetTransform();
      render();
    };
    loadedImage.src = 'assets/default-icon.jpg';
  }

  loadDefaultImage();
  btnLoadSample?.addEventListener('click', loadDefaultImage);

  // Background Removal (Color Keying Process)
  function processSourceImage() {
    if (!isImageLoaded) return;
    processedImageCanvas.width = loadedImage.width;
    processedImageCanvas.height = loadedImage.height;
    const pCtx = processedImageCanvas.getContext('2d');
    pCtx.drawImage(loadedImage, 0, 0);

    if (chkRemoveBg && chkRemoveBg.checked) {
      const imgData = pCtx.getImageData(0, 0, loadedImage.width, loadedImage.height);
      const data = imgData.data;
      
      const keyHex = keyColorPicker.value;
      const kr = parseInt(keyHex.substr(1, 2), 16);
      const kg = parseInt(keyHex.substr(3, 2), 16);
      const kb = parseInt(keyHex.substr(5, 2), 16);
      
      const tol = (parseFloat(toleranceRange.value) / 100.0) * 255 * 1.732;

      for (let i = 0; i < data.length; i += 4) {
        const dr = data[i] - kr;
        const dg = data[i+1] - kg;
        const db = data[i+2] - kb;
        const dist = Math.sqrt(dr*dr + dg*dg + db*db);
        if (dist <= tol) {
          data[i+3] = 0;
        }
      }
      pCtx.putImageData(imgData, 0, 0);
    }
  }

  // Background Gradient Controls
  bgTypeSelect?.addEventListener('change', () => {
    const val = bgTypeSelect.value;
    bgColorPicker.style.display = (val === 'color') ? 'inline-block' : 'none';
    bgGradientSubpanel.style.display = (val === 'gradient') ? 'flex' : 'none';
    render();
  });

  bgGradAngleRange?.addEventListener('input', (e) => {
    bgGradAngleVal.textContent = e.target.value + '°';
    render();
  });
  bgGradOpacityRange?.addEventListener('input', (e) => {
    bgGradOpacityVal.textContent = e.target.value + '%';
    render();
  });

  btnAddBgGradColor?.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'color';
    input.className = 'bg-grad-stop';
    input.value = '#ff007f';
    input.style.cssText = 'width: 32px; height: 26px; border: 1px solid var(--border-color); background: var(--bg-input); border-radius: 4px; cursor: pointer;';
    input.addEventListener('input', render);
    bgGradStopsContainer.appendChild(input);
    render();
  });

  document.querySelectorAll('.bg-grad-stop').forEach(input => {
    input.addEventListener('input', render);
  });

  // Text Layer Controls & Event Listeners
  chkText?.addEventListener('change', () => {
    textOptions.style.display = chkText.checked ? 'flex' : 'none';
    render();
  });
  textStringInput?.addEventListener('input', render);
  fontFamilySelect?.addEventListener('change', render);

  btnTextBold?.addEventListener('click', () => {
    isBold = !isBold;
    btnTextBold.classList.toggle('active', isBold);
    render();
  });
  btnTextItalic?.addEventListener('click', () => {
    isItalic = !isItalic;
    btnTextItalic.classList.toggle('active', isItalic);
    render();
  });

  textSizeRange?.addEventListener('input', (e) => {
    textSizeVal.textContent = e.target.value + 'px';
    render();
  });

  textRotationRange?.addEventListener('input', (e) => {
    textRotationVal.textContent = e.target.value + '°';
    render();
  });

  textFillTypeSelect?.addEventListener('change', () => {
    const isGrad = textFillTypeSelect.value === 'gradient';
    textSolidOptions.style.display = isGrad ? 'none' : 'flex';
    textGradientOptions.style.display = isGrad ? 'flex' : 'none';
    render();
  });

  textColorPicker?.addEventListener('input', render);

  btnAddTextGradColor?.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'color';
    input.className = 'text-grad-stop';
    input.value = '#ff007f';
    input.style.cssText = 'width: 32px; height: 26px; border: 1px solid var(--border-color); background: var(--bg-input); border-radius: 4px; cursor: pointer;';
    input.addEventListener('input', render);
    textGradStopsContainer.appendChild(input);
    render();
  });

  document.querySelectorAll('.text-grad-stop').forEach(input => {
    input.addEventListener('input', render);
  });

  textGradAngleRange?.addEventListener('input', (e) => {
    textGradAngleVal.textContent = e.target.value + '°';
    render();
  });

  // Custom Font File Importer (.ttf, .otf, .woff)
  fontFileInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fontName = 'CustomFont_' + Date.now();
    const reader = new FileReader();
    reader.onload = (evt) => {
      const fontFace = new FontFace(fontName, evt.target.result);
      fontFace.load().then((loadedFace) => {
        document.fonts.add(loadedFace);
        
        const option = document.createElement('option');
        option.value = `'${fontName}', sans-serif`;
        option.textContent = `⭐ ${file.name.replace(/\.[^/.]+$/, "")}`;
        fontFamilySelect.appendChild(option);
        fontFamilySelect.value = option.value;
        render();
      }).catch(err => {
        alert("Erreur lors du chargement du fichier de police.");
        console.error("Font loading error:", err);
      });
    };
    reader.readAsArrayBuffer(file);
  });

  // Gloss Reflet Controls & Event Listeners
  chkGloss?.addEventListener('change', () => {
    glossOptions.style.display = chkGloss.checked ? 'flex' : 'none';
    render();
  });
  glossColorPicker?.addEventListener('input', render);
  glossOpacityRange?.addEventListener('input', (e) => {
    glossOpacityVal.textContent = e.target.value + '%';
    render();
  });
  glossAngleRange?.addEventListener('input', (e) => {
    glossAngleVal.textContent = e.target.value + '°';
    render();
  });
  chkGlossBehind?.addEventListener('change', render);

  // Border Controls
  chkBorder?.addEventListener('change', () => {
    borderOptions.style.display = chkBorder.checked ? 'flex' : 'none';
    render();
  });
  borderColorPicker?.addEventListener('input', render);
  borderWidthRange?.addEventListener('input', render);

  // Background Remover Controls
  chkRemoveBg?.addEventListener('change', () => {
    removeBgOptions.style.display = chkRemoveBg.checked ? 'flex' : 'none';
    processSourceImage();
    render();
  });
  keyColorPicker?.addEventListener('input', () => {
    processSourceImage();
    render();
  });
  toleranceRange?.addEventListener('input', (e) => {
    toleranceValue.textContent = e.target.value + '%';
    processSourceImage();
    render();
  });

  // Badge Controls
  chkBadge?.addEventListener('change', () => {
    badgeOptions.style.display = chkBadge.checked ? 'flex' : 'none';
    render();
  });
  badgeTextInput?.addEventListener('input', render);
  badgeColorPicker?.addEventListener('input', render);
  badgeStyleSelect?.addEventListener('change', render);

  // Filter Controls
  brightnessRange?.addEventListener('input', (e) => {
    brightnessVal.textContent = e.target.value + '%';
    render();
  });
  contrastRange?.addEventListener('input', (e) => {
    contrastVal.textContent = e.target.value + '%';
    render();
  });
  saturationRange?.addEventListener('input', (e) => {
    saturationVal.textContent = e.target.value + '%';
    render();
  });

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
        processSourceImage();
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

  function getCanvasCoords(clientX, clientY) {
    const rect = canvasWrapper.getBoundingClientRect();
    const factor = SIZE / rect.width;
    return {
      x: (clientX - rect.left) * factor,
      y: (clientY - rect.top) * factor
    };
  }

  function isPointerOverText(ptX, ptY) {
    if (!chkText || !chkText.checked) return false;
    const fontPx = parseFloat(textSizeRange.value);
    const dist = Math.hypot(ptX - textX, ptY - textY);
    return dist < fontPx * 1.5;
  }

  // Drag Events (Mouse)
  canvasWrapper.addEventListener('mousedown', (e) => {
    if (!isImageLoaded) return;
    const coords = getCanvasCoords(e.clientX, e.clientY);

    if (isPointerOverText(coords.x, coords.y)) {
      isDraggingText = true;
      textDragOffsetX = coords.x - textX;
      textDragOffsetY = coords.y - textY;
      canvasWrapper.style.cursor = 'move';
    } else {
      isDraggingImage = true;
      const factor = getCanvasScaleFactor();
      dragStartX = e.clientX * factor - panX;
      dragStartY = e.clientY * factor - panY;
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (isDraggingText) {
      const coords = getCanvasCoords(e.clientX, e.clientY);
      textX = coords.x - textDragOffsetX;
      textY = coords.y - textDragOffsetY;
      render();
    } else if (isDraggingImage) {
      const factor = getCanvasScaleFactor();
      panX = e.clientX * factor - dragStartX;
      panY = e.clientY * factor - dragStartY;
      render();
    }
  });

  window.addEventListener('mouseup', () => {
    isDraggingText = false;
    isDraggingImage = false;
    canvasWrapper.style.cursor = 'grab';
  });

  canvasWrapper.addEventListener('wheel', (e) => {
    if (!isImageLoaded) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    updateZoom(zoom + delta);
  }, { passive: false });

  // Touch Drag Events
  canvasWrapper.addEventListener('touchstart', (e) => {
    if (!isImageLoaded) return;
    const factor = getCanvasScaleFactor();
    
    if (e.touches.length === 1) {
      const coords = getCanvasCoords(e.touches[0].clientX, e.touches[0].clientY);
      if (isPointerOverText(coords.x, coords.y)) {
        isDraggingText = true;
        textDragOffsetX = coords.x - textX;
        textDragOffsetY = coords.y - textY;
      } else {
        isDraggingImage = true;
        dragStartX = e.touches[0].clientX * factor - panX;
        dragStartY = e.touches[0].clientY * factor - panY;
      }
    } else if (e.touches.length === 2) {
      isDraggingImage = false;
      isDraggingText = false;
      initialPinchDistance = getTouchDistance(e.touches);
      initialPinchZoom = zoom;
    }
  }, { passive: true });

  canvasWrapper.addEventListener('touchmove', (e) => {
    if (!isImageLoaded) return;
    const factor = getCanvasScaleFactor();

    if (e.touches.length === 1) {
      const coords = getCanvasCoords(e.touches[0].clientX, e.touches[0].clientY);
      if (isDraggingText) {
        textX = coords.x - textDragOffsetX;
        textY = coords.y - textDragOffsetY;
        render();
      } else if (isDraggingImage) {
        panX = e.touches[0].clientX * factor - dragStartX;
        panY = e.touches[0].clientY * factor - dragStartY;
        render();
      }
    } else if (e.touches.length === 2 && initialPinchDistance) {
      e.preventDefault();
      const currentDist = getTouchDistance(e.touches);
      const zoomRatio = currentDist / initialPinchDistance;
      updateZoom(initialPinchZoom * zoomRatio);
    }
  }, { passive: false });

  canvasWrapper.addEventListener('touchend', (e) => {
    if (e.touches.length === 0) {
      isDraggingImage = false;
      isDraggingText = false;
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
    textX = SIZE / 2;
    textY = SIZE * 0.72;
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

  // Authentic Smooth iOS Squircle Path Generator
  function drawSquirclePath(ctx, x, y, width, height) {
    const r = width * 0.225;
    const right = x + width;
    const bottom = y + height;
    const smooth = r * 1.52;

    ctx.beginPath();
    ctx.moveTo(x + smooth, y);
    ctx.lineTo(right - smooth, y);
    ctx.bezierCurveTo(right - r * 0.55, y, right, y + r * 0.55, right, y + smooth);
    ctx.lineTo(right, bottom - smooth);
    ctx.bezierCurveTo(right, bottom - r * 0.55, right - r * 0.55, bottom, right - smooth, bottom);
    ctx.lineTo(x + smooth, bottom);
    ctx.bezierCurveTo(x + r * 0.55, bottom, x, bottom - r * 0.55, x, bottom - smooth);
    ctx.lineTo(x, y + smooth);
    ctx.bezierCurveTo(x, y + r * 0.55, x + r * 0.55, y, x + smooth, y);
    ctx.closePath();
  }

  function applyShapeClip(context, shape, size, bounds) {
    const { inset, innerSize } = bounds;
    if (shape === 'ios') {
      drawSquirclePath(context, inset, inset, innerSize, innerSize);
    } else if (shape === 'circle') {
      context.beginPath();
      context.arc(size / 2, size / 2, innerSize / 2, 0, Math.PI * 2);
    } else if (shape === 'rounded') {
      context.beginPath();
      roundedRect(context, inset, inset, innerSize, innerSize, innerSize * 0.15);
    } else if (shape === 'macos') {
      context.beginPath();
      roundedRect(context, inset + innerSize * 0.05, inset + innerSize * 0.05, innerSize * 0.9, innerSize * 0.9, innerSize * 0.2);
    } else if (shape === 'square') {
      context.beginPath();
      context.rect(inset, inset, innerSize, innerSize);
    }
    context.clip();
  }

  function strokeShape(context, shape, size, bounds) {
    const { inset, innerSize } = bounds;
    if (shape === 'ios') {
      drawSquirclePath(context, inset, inset, innerSize, innerSize);
    } else if (shape === 'circle') {
      context.beginPath();
      context.arc(size / 2, size / 2, innerSize / 2, 0, Math.PI * 2);
    } else if (shape === 'rounded') {
      context.beginPath();
      roundedRect(context, inset, inset, innerSize, innerSize, innerSize * 0.15);
    } else if (shape === 'macos') {
      context.beginPath();
      roundedRect(context, inset + innerSize * 0.05, inset + innerSize * 0.05, innerSize * 0.9, innerSize * 0.9, innerSize * 0.2);
    } else if (shape === 'square') {
      context.beginPath();
      context.rect(inset, inset, innerSize, innerSize);
    }
    context.stroke();
  }

  // Draw 360° Rotatable Gloss Sheen FX
  function drawGlossEffect(context) {
    const angleDeg = parseFloat(glossAngleRange.value || 0);
    const opacity = parseFloat(glossOpacityRange.value || 40) / 100.0;
    const colorHex = glossColorPicker.value || '#ffffff';

    const r = parseInt(colorHex.substr(1, 2), 16);
    const g = parseInt(colorHex.substr(3, 2), 16);
    const b = parseInt(colorHex.substr(5, 2), 16);

    const rad = (angleDeg * Math.PI) / 180.0;
    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const len = SIZE / 2;

    const x1 = cx - len * Math.cos(rad);
    const y1 = cy - len * Math.sin(rad);
    const x2 = cx + len * Math.cos(rad);
    const y2 = cy + len * Math.sin(rad);

    const glossGrad = context.createLinearGradient(x1, y1, x2, y2);
    glossGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity})`);
    glossGrad.addColorStop(0.45, `rgba(${r}, ${g}, ${b}, ${opacity * 0.25})`);
    glossGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    context.save();
    context.fillStyle = glossGrad;
    context.beginPath();
    context.rect(0, 0, SIZE, SIZE);
    context.fill();
    context.restore();
  }

  function drawUploadedImage(context) {
    context.save();
    const bVal = brightnessRange.value;
    const cVal = contrastRange.value;
    const sVal = saturationRange.value;
    context.filter = `brightness(${bVal}%) contrast(${cVal}%) saturate(${sVal}%)`;

    context.translate(SIZE / 2 + panX, SIZE / 2 + panY);
    context.rotate((rotation * Math.PI) / 180);
    context.scale(zoom, zoom);
    
    context.drawImage(
      processedImageCanvas,
      -processedImageCanvas.width / 2,
      -processedImageCanvas.height / 2,
      processedImageCanvas.width,
      processedImageCanvas.height
    );
    context.restore();
  }

  // Draw Text Layer with 360° Rotation & 360° Multi-Color Gradient
  function drawTextOverlay(context) {
    const textStr = textStringInput.value || '';
    if (!textStr.trim()) return;

    const fontSize = parseFloat(textSizeRange.value || 64);
    const fontFamily = fontFamilySelect.value;
    const weightStr = isBold ? 'bold ' : '';
    const styleStr = isItalic ? 'italic ' : '';
    const textRot = parseFloat(textRotationRange.value || 0);

    context.save();

    // 360 Text Rotation
    context.translate(textX, textY);
    context.rotate((textRot * Math.PI) / 180.0);

    context.font = `${styleStr}${weightStr}${fontSize}px ${fontFamily}`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    const fillType = textFillTypeSelect.value;
    if (fillType === 'solid') {
      context.fillStyle = textColorPicker.value;
    } else {
      const metrics = context.measureText(textStr);
      const w = metrics.width || fontSize * textStr.length * 0.6;
      const h = fontSize;

      const angleDeg = parseFloat(textGradAngleRange.value || 90);
      const rad = (angleDeg * Math.PI) / 180.0;
      
      const x1 = - (w / 2) * Math.cos(rad);
      const y1 = - (h / 2) * Math.sin(rad);
      const x2 = (w / 2) * Math.cos(rad);
      const y2 = (h / 2) * Math.sin(rad);

      const textGrad = context.createLinearGradient(x1, y1, x2, y2);
      const stops = document.querySelectorAll('.text-grad-stop');
      const stopCount = stops.length || 1;

      stops.forEach((input, index) => {
        const offset = stopCount > 1 ? index / (stopCount - 1) : 0;
        textGrad.addColorStop(offset, input.value);
      });

      context.fillStyle = textGrad;
    }

    context.shadowColor = 'rgba(0,0,0,0.5)';
    context.shadowBlur = 10;
    context.shadowOffsetY = 4;

    context.fillText(textStr, 0, 0);

    // Draw Drag Outline & Bounding Box Indicator
    context.strokeStyle = 'rgba(204, 255, 0, 0.4)';
    context.lineWidth = 2;
    context.setLineDash([6, 6]);
    const metrics = context.measureText(textStr);
    const bw = metrics.width + 24;
    const bh = fontSize + 16;
    context.strokeRect(-bw/2, -bh/2, bw, bh);

    context.restore();
  }

  // Draw 360° Multi-Color Background Gradient
  function drawBackgroundFill(context) {
    const bgType = bgTypeSelect.value;

    if (bgType === 'color') {
      context.fillStyle = bgColorPicker.value;
      context.fillRect(0, 0, SIZE, SIZE);
    } else if (bgType === 'gradient') {
      const angleDeg = parseFloat(bgGradAngleRange.value || 135);
      const opacity = parseFloat(bgGradOpacityRange.value || 100) / 100.0;
      const rad = (angleDeg * Math.PI) / 180.0;

      const cx = SIZE / 2;
      const cy = SIZE / 2;
      const len = SIZE / 2;

      const x1 = cx - len * Math.cos(rad);
      const y1 = cy - len * Math.sin(rad);
      const x2 = cx + len * Math.cos(rad);
      const y2 = cy + len * Math.sin(rad);

      const bgGrad = context.createLinearGradient(x1, y1, x2, y2);
      const stops = document.querySelectorAll('.bg-grad-stop');
      const stopCount = stops.length || 1;

      stops.forEach((input, index) => {
        const offset = stopCount > 1 ? index / (stopCount - 1) : 0;
        const hex = input.value;
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);
        bgGrad.addColorStop(offset, `rgba(${r}, ${g}, ${b}, ${opacity})`);
      });

      context.save();
      context.fillStyle = bgGrad;
      context.fillRect(0, 0, SIZE, SIZE);
      context.restore();

    } else if (bgType === 'blur') {
      context.save();
      context.filter = 'blur(40px)';
      context.drawImage(processedImageCanvas, -SIZE/2, -SIZE/2, SIZE*2, SIZE*2);
      context.restore();
    }
  }

  // Master Render Engine with Layered Gloss & Clipped Background Fill
  function render() {
    ctx.clearRect(0, 0, SIZE, SIZE);

    if (!isImageLoaded) return;

    const bounds = getShapeBounds(SIZE);

    // 1. Apply Shape Clip FIRST so all background fills & images stay strictly inside icon shape
    ctx.save();
    applyShapeClip(ctx, currentShape, SIZE, bounds);

    // 2. Draw Background Fill inside clipped icon shape
    drawBackgroundFill(ctx);

    const isGlossActive = chkGloss && chkGloss.checked;
    const isGlossBehind = chkGlossBehind && chkGlossBehind.checked;

    // 3. Draw Layers (Order depends on chkGlossBehind)
    if (isGlossActive && isGlossBehind) {
      drawGlossEffect(ctx);
      drawUploadedImage(ctx);
    } else {
      drawUploadedImage(ctx);
      if (isGlossActive) {
        drawGlossEffect(ctx);
      }
    }

    // 4. Draw Text Layer
    if (chkText && chkText.checked) {
      drawTextOverlay(ctx);
    }

    // 5. Draw Badge / Ribbon Overlay
    if (chkBadge && chkBadge.checked) {
      drawBadgeOverlay(ctx, SIZE, bounds);
    }

    ctx.restore();

    // 6. Draw Border FX on outer path
    if (chkBorder && chkBorder.checked && bounds.bWidth > 0) {
      ctx.save();
      ctx.lineWidth = bounds.bWidth;
      ctx.strokeStyle = borderColorPicker.value;
      strokeShape(ctx, currentShape, SIZE, bounds);
      ctx.restore();
    }

    // 7. Update Previews
    updatePreviews();
  }

  function drawBadgeOverlay(context, size, bounds) {
    const text = (badgeTextInput.value || 'BETA').toUpperCase();
    const color = badgeColorPicker.value;
    const style = badgeStyleSelect.value;

    context.save();
    context.fillStyle = color;
    context.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    if (style === 'ribbon') {
      context.save();
      context.translate(size * 0.78, size * 0.22);
      context.rotate(Math.PI / 4);
      context.fillRect(-140, -22, 280, 44);
      context.fillStyle = '#ffffff';
      context.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
      context.fillText(text, 0, 2);
      context.restore();
    } else if (style === 'pill') {
      const rx = size * 0.65;
      const ry = size * 0.82;
      roundedRect(context, rx, ry, 260, 60, 30);
      context.fill();
      context.fillStyle = '#ffffff';
      context.fillText(text, rx + 130, ry + 32);
    } else if (style === 'banner') {
      context.fillRect(0, size * 0.82, size, size * 0.18);
      context.fillStyle = '#ffffff';
      context.fillText(text, size / 2, size * 0.91);
    }

    context.restore();
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

  // Modal Code Snippets Controls
  btnOpenSnippets?.addEventListener('click', () => {
    snippetsModal.style.display = 'flex';
  });
  btnCloseModal?.addEventListener('click', () => {
    snippetsModal.style.display = 'none';
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeEl = document.getElementById(btn.dataset.copy);
      if (codeEl) {
        navigator.clipboard.writeText(codeEl.textContent).then(() => {
          const originalText = btn.textContent;
          btn.textContent = '✓ Copié !';
          setTimeout(() => btn.textContent = originalText, 2000);
        });
      }
    });
  });

  // ZIP Multi-Format Exporter
  btnExportZip?.addEventListener('click', async () => {
    if (typeof JSZip === 'undefined') {
      alert("Erreur: La bibliothèque JSZip n'est pas disponible.");
      return;
    }

    const zip = new JSZip();

    const chkIos = document.getElementById('chkIos').checked;
    const chkAndroid = document.getElementById('chkAndroid').checked;
    const chkWeb = document.getElementById('chkWeb').checked;
    const chkExpo = document.getElementById('chkExpo').checked;
    const chkMac = document.getElementById('chkMac').checked;
    const chkChromeExt = document.getElementById('chkChromeExt').checked;

    if (!chkIos && !chkAndroid && !chkWeb && !chkExpo && !chkMac && !chkChromeExt) {
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

        const darkBlob = await getResizedBlob(1024, 1024);
        iosFolder.file("icon-1024x1024-dark.png", darkBlob, { binary: true });
        iosFolder.file("icon-1024x1024-tinted.png", darkBlob, { binary: true });

        const contentsJson = {
          "images": [
            { "idiom": "universal", "platform": "ios", "size": "1024x1024", "filename": "icon-1024x1024.png" },
            { "idiom": "universal", "platform": "ios", "size": "1024x1024", "appearances": [{"appearance": "luminosity", "value": "dark"}], "filename": "icon-1024x1024-dark.png" },
            { "idiom": "iphone", "size": "60x60", "scale": "3x", "filename": "icon-180x180.png" },
            { "idiom": "iphone", "size": "60x60", "scale": "2x", "filename": "icon-120x120.png" },
            { "idiom": "ipad", "size": "83.5x83.5", "scale": "2x", "filename": "icon-167x167.png" },
            { "idiom": "ipad", "size": "76x76", "scale": "2x", "filename": "icon-152x152.png" }
          ],
          "info": { "version": 1, "author": "plancton" }
        };

        iosFolder.file("Contents.json", JSON.stringify(contentsJson, null, 2));
      }

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
          f.file("ic_launcher_foreground.png", blob, { binary: true });
        }

        const storeBlob = await getResizedBlob(512, 512);
        androidFolder.file("playstore-icon-512x512.png", storeBlob, { binary: true });
      }

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

      if (chkExpo) {
        const expoFolder = zip.folder("Expo-ReactNative/assets");
        const icon1024 = await getResizedBlob(1024, 1024);
        const adapt1024 = await getResizedBlob(1024, 1024);
        const fav32 = await getResizedBlob(32, 32);

        expoFolder.file("icon.png", icon1024, { binary: true });
        expoFolder.file("adaptive-icon.png", adapt1024, { binary: true });
        expoFolder.file("favicon.png", fav32, { binary: true });
      }

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

      if (chkChromeExt) {
        const extFolder = zip.folder("Chrome-Extension/icons");
        const ext16 = await getResizedBlob(16, 16);
        const ext48 = await getResizedBlob(48, 48);
        const ext128 = await getResizedBlob(128, 128);

        extFolder.file("icon16.png", ext16, { binary: true });
        extFolder.file("icon48.png", ext48, { binary: true });
        extFolder.file("icon128.png", ext128, { binary: true });

        const extManifest = {
          "manifest_version": 3,
          "name": "My Extension",
          "version": "1.0",
          "action": { "default_popup": "popup.html" },
          "icons": {
            "16": "icons/icon16.png",
            "48": "icons/icon48.png",
            "128": "icons/icon128.png"
          }
        };
        zip.folder("Chrome-Extension").file("manifest.json", JSON.stringify(extManifest, null, 2));
      }

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
