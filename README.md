# ThePrimeagen Portfolio Website

A modern, performance-focused portfolio website for Michael "ThePrimeagen" Paulson, built with cutting-edge web technologies and smooth animations.

## 🚀 Features

- **Interactive Background**: Animated network visualization using Vanta.js
- **Typewriter Effects**: Dynamic text animation with Typed.js
- **Smooth Animations**: Powered by GSAP (GreenSock Animation Platform)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Fast loading with debounced events and lazy loading
- **Modern UI**: Dark theme with neon green accents and monospace fonts
- **Interactive Components**: Hover effects, form validation, and keyboard shortcuts

## 🛠️ Technologies Used

### Core Libraries
- **Vanta.js**: Animated background effects
- **Typed.js**: Typewriter text animations
- **GSAP**: High-performance animations
- **Tailwind CSS**: Utility-first CSS framework
- **Three.js**: 3D graphics (required by Vanta.js)

### Fonts
- **JetBrains Mono**: Monospace font for code blocks and terminal-style text
- **Inter**: Modern sans-serif font for body text

## 📁 Project Structure

```
/
├── index.html          # Main portfolio page
├── main.js            # All JavaScript functionality
├── README.md          # Project documentation
└── resources/         # Images and assets (if any)
```

## 🎨 Design Philosophy

The website follows a **dark cyberpunk aesthetic** with:
- **Color Palette**: Deep blacks (#0a0a0a) with neon green accents (#00ff88)
- **Typography**: Monospace fonts to reflect the developer/terminal theme
- **Layout**: Grid-based responsive design with smooth section transitions
- **Interactions**: Subtle hover effects and micro-animations
- **Performance**: Optimized for fast loading and smooth 60fps animations

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone or download** the project files
2. **Open** `index.html` in a web browser, or
3. **Serve locally** using Python:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

### Development

The project uses CDN-hosted libraries, so no package installation is required. Simply edit the files and refresh your browser to see changes.

## 🎯 Key Sections

### 1. Hero Section
- Animated background with network visualization
- Typewriter effect showcasing different roles
- Code block with NeoVim configuration
- Call-to-action buttons

### 2. About Section
- Professional background and experience
- Statistics with animated counters
- Personal interests and location

### 3. Skills Section
- Programming languages (Rust, C++, TypeScript, etc.)
- Tools and frameworks (NeoVim, Git, Docker, etc.)
- Performance optimization skills
- Teaching and content creation abilities

### 4. Projects Section
- Featured open-source projects
- Interactive project cards with hover effects
- Technology tags and project descriptions

### 5. Contact Section
- Contact form with validation
- Social media links
- Professional networking options

## 🎮 Interactive Features

### Keyboard Shortcuts
- **1**: Navigate to Home section
- **2**: Navigate to About section
- **3**: Navigate to Skills section
- **4**: Navigate to Projects section
- **5**: Navigate to Contact section

### Hover Effects
- Project cards lift and glow on hover
- Navigation links have animated underlines
- Buttons have 3D transform effects
- Skill tags pulse when clicked

### Form Features
- Real-time validation
- Success/error notifications
- Smooth transitions and feedback

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full layout with all animations
- **Tablet**: Adapted grid layouts
- **Mobile**: Single-column layout with touch-friendly interactions

## ⚡ Performance Optimizations

- **Debounced scroll events** for smooth performance
- **Intersection Observer** for scroll-triggered animations
- **CDN-hosted libraries** for fast loading
- **Optimized images** and assets
- **Fallbacks** for failed library loads
- **Console easter egg** for developers

## 🔧 Customization

### Colors
Update CSS custom properties in `index.html`:
```css
:root {
    --primary-dark: #0a0a0a;
    --secondary-dark: #1a1a1a;
    --accent-green: #00ff88;
    --accent-blue: #0088ff;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
}
```

### Content
- Update personal information in `index.html`
- Modify project details in the Projects section
- Add/remove skills as needed
- Update contact information and social links

### Animations
- Adjust timing in `main.js` GSAP configurations
- Modify Vanta.js background settings
- Customize Typed.js typewriter effects

## 🌐 Browser Compatibility

- **Chrome**: Full support for all features
- **Firefox**: Full support for all features
- **Safari**: Full support for all features
- **Edge**: Full support for all features
- **Mobile Browsers**: Responsive design with touch support

## 📄 License

This project is open source. Feel free to use as a template for your own portfolio.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across browsers
5. Submit a pull request

## 🆘 Support

If you encounter issues:
1. Check browser console for errors
2. Ensure all CDN libraries are loading
3. Verify file paths are correct
4. Try refreshing with cache cleared

---

**Built with ❤️ and optimized for performance**