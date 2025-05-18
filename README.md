# 📸 Image Gallery with Lightbox

A sleek, responsive image gallery that features a modern lightbox experience with smooth animations, keyboard navigation, and mobile swipe support. Built using **HTML**, **CSS**, **Bootstrap 5**, **JavaScript (jQuery)**, and powered by images from [Picsum.photos](https://picsum.photos).

![Gallery Preview](https://picsum.photos/id/120/800/400)

---

## 🌟 Features

- ⚡ Fast and responsive grid layout (Bootstrap 5)
- 🖼️ Lazy animated image loading
- 🔍 Lightbox with zoom-in animation
- 🔄 Previous / Next navigation
- 🖱️ Mouse click & ❌ close support
- ⌨️ Keyboard navigation (`←`, `→`, `Esc`)
- 📱 Mobile swipe navigation
- 🎨 Themed UI with subtle gradients and shadows

---

## 📁 Project Structure

```
image-gallery-lightbox/
│
├── index.html         # Main HTML structure
├── style.css          # Themed custom styles
├── script.js          # Dynamic image generation + lightbox logic
└── README.md          # This file
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/image-gallery-lightbox.git
cd image-gallery-lightbox
```

### 2. Open in Browser

Simply open `index.html` in your browser:

```bash
start index.html    # Windows
open index.html     # macOS
```

Or host with a simple server:

```bash
npx serve .
```

---

## 🛠️ How It Works

### 🧱 HTML

The layout uses Bootstrap's grid system inside a container to hold image cards.

```html
<div class="row g-3" id="gallery-container"></div>
```

### 🎨 CSS Theme

The theme (`style.css`) includes:

- Base styling with a soft light background
- Hover effects and shadows for a modern feel
- Responsive adjustments for mobile view
- Smooth keyframe animations (`fadeInZoom`, `zoomImage`, etc.)

### 📜 JavaScript

The script (`script.js`) does the following:

- Dynamically generates 32 image cards using `https://picsum.photos`
- Adds animation delays for staggered appearance
- Handles lightbox open/close with fade effects
- Enables navigation via arrows, keyboard, and mobile swipe

---

## 📷 Image Source

All images are fetched dynamically using:

```
https://picsum.photos/id/{id}/400/300
```

IDs range from 106 to 137 for variety.

---

## 🔧 Customization

- **Change total images:** Modify `totalImages` in `script.js`.
- **Image dimensions:** Update the dimensions in the image URL.
- **Add captions or tags:** Add `<figcaption>` or overlay text using CSS.
- **Change theme:** Modify colors in `style.css` (`background`, `box-shadow`, etc.)

---

## 💡 Example Enhancements (Ideas)

- Add categories or filters using buttons
- Use real photos or a backend API
- Add lazy loading or intersection observer
- Store favorite images in `localStorage`

---

## 🧑‍💻 Author

Built with 💙 by [@DevAT](https://github.com/DevAdvait)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
