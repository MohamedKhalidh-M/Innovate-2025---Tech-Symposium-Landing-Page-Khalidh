# 🚀 Innovate 2025 - Tech Symposium Landing Page# Khalidh

A modern, responsive event landing page for the Innovate 2025 Technology Symposium featuring an interactive navigation menu with scroll effects, dynamic content sections, and a sleek dark & red theme.

![Innovate 2025](https://img.shields.io/badge/Event-Innovate%202025-dc143c?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Interactive Navigation Menu](#interactive-navigation-menu)
- [Sections](#sections)
- [Installation](#installation)
- [Usage](#usage)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [Contact](#contact)

## 🎯 Overview

**Innovate 2025** is a fully responsive landing page designed for a tech symposium event. The page features a fixed interactive navigation menu that changes style when scrolled and provides smooth hover effects. Built with pure HTML, CSS, and JavaScript, this project demonstrates modern web development practices with a focus on user experience and visual appeal.

### Event Details
- **Date:** March 15-17, 2025
- **Location:** Grand Tech Convention Center, San Francisco
- **Attendees:** 5000+ tech leaders and innovators
- **Speakers:** 50+ industry experts
- **Sessions:** 100+ workshops and presentations

## ✨ Features

### 🎨 Interactive Navigation Menu
- **Fixed Position:** Navigation stays visible at the top while scrolling
- **Scroll Effects:** Background color and style change dynamically on scroll
- **Hover Animations:** Smooth gradient transitions on menu items
- **Active State:** Highlights current section in navigation
- **Mobile Responsive:** Hamburger menu for mobile devices
- **Smooth Scrolling:** Animated scroll to sections on click

### 🌟 Additional Features
- 📱 **Fully Responsive:** Works seamlessly on desktop, tablet, and mobile
- 🎭 **Animated Hero Section:** Eye-catching hero with statistics and CTAs
- 👥 **Speaker Showcase:** Grid layout featuring expert speakers
- 📅 **Interactive Schedule:** Tab-based 3-day event schedule
- 🎫 **Ticket Pricing:** Three-tier pricing cards with features
- 📧 **Contact Form:** Functional contact section with form validation
- ✨ **Scroll Animations:** Elements reveal on scroll with smooth transitions
- 🔢 **Animated Counters:** Statistics animate when scrolling into view
- 🎨 **Dark & Red Theme:** Professional crimson color scheme
- ⚡ **Floating Particles:** Animated background particles for depth

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
  - CSS Variables for theming
  - Keyframe animations
  - Media queries for responsiveness
  - Gradient effects
  - Transform and transition properties
- **JavaScript (ES6+)** - Interactive functionality
  - DOM manipulation
  - Event listeners
  - Intersection Observer API
  - Smooth scroll behavior
  - Dynamic class management
- **Font Awesome 6.4.0** - Icon library for visual elements

## 📁 Project Structure

```
PRODIGY_WD_TASK1/
│
├── index.html              # Main HTML file
├── styles.css              # Complete CSS styling
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
└── PRODIGY_WD_TASK1.html  # Original task file
```

## 🧭 Interactive Navigation Menu

The navigation menu is the centerpiece of this project, featuring:

### Navigation Features

1. **Fixed Positioning**
   - Stays at the top of the viewport
   - Always accessible while browsing

2. **Scroll-Triggered Style Changes**
   - Initial state: Semi-transparent with subtle border
   - Scrolled state: Darker background with red glow shadow
   - Smooth transition between states

3. **Hover Effects**
   - Gradient background appears on hover
   - Smooth color transitions
   - Upward lift animation
   - Red glow shadow effect

4. **Active State Highlighting**
   - Current section is highlighted in navigation
   - Updates automatically while scrolling
   - Visual feedback for user location

5. **Mobile Menu**
   - Hamburger icon for small screens
   - Slide-down animation
   - Full-width menu items
   - Animated icon transformation

### CSS Implementation

```css
/* Navigation changes on scroll */
nav.scrolled {
    background: rgba(10, 10, 10, 0.98);
    box-shadow: 0 5px 30px rgba(220, 20, 60, 0.3);
    border-bottom: 1px solid rgba(220, 20, 60, 0.3);
}

/* Hover effects */
.nav-links a:hover {
    color: #ffffff;
    background: linear-gradient(135deg, var(--dark-red) 0%, var(--primary-red) 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(220, 20, 60, 0.4);
}
```

## 📑 Sections

### 1. Hero Section
- Large title with gradient text effect
- Event date badge
- Compelling subtitle and description
- Two prominent CTA buttons
- Statistics grid (Speakers, Attendees, Days, Sessions)
- Scroll indicator with bounce animation

### 2. About Section
- Event overview and description
- Three feature cards (Innovation, Networking, Learning)
- Visual placeholder with rocket icon
- Two-column layout

### 3. Speakers Section
- Grid of 4 featured speakers
- Speaker cards with hover effects
- Social media links
- Professional titles and companies

### 4. Schedule Section
- Tab-based day selector (Day 1, 2, 3)
- Time-based event listing
- Session details with speakers
- Hover animations on schedule items

### 5. Tickets Section
- Three pricing tiers (Standard, Premium, VIP)
- Feature comparison lists
- "Most Popular" badge on Premium
- Interactive ticket selection buttons

### 6. Contact Section
- Contact information with icons
- Social media links
- Contact form with validation
- Two-column layout

### 7. Footer
- Branding with rocket icon
- Copyright information
- Legal links (Privacy, Terms, Cookies)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohammedrafiullah1928/PRODIGY_WD_TASK1.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd PRODIGY_WD_TASK1
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server:
   
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **View the website**
   - Open `http://localhost:8000` in your browser
   - Or directly open `index.html`

## 💻 Usage

### Running the Project

1. Open `index.html` in any modern web browser
2. No build process or dependencies required
3. Works offline after initial load (Font Awesome CDN required for icons)

### Customization

#### Change Color Scheme
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-red: #dc143c;      /* Main accent color */
    --dark-red: #8b0000;         /* Darker shade */
    --light-red: #ff6b6b;        /* Lighter shade */
    --dark-bg: #0a0a0a;          /* Background */
    --dark-gray: #1a1a1a;        /* Section backgrounds */
}
```

#### Update Event Content
Modify the HTML in `index.html`:
- Event dates and location
- Speaker information
- Schedule details
- Ticket pricing
- Contact information

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Desktop:** 1024px and above - Full layout with all features
- **Tablet:** 768px - 1023px - Adjusted grid layouts
- **Mobile:** 767px and below - Single column, hamburger menu
- **Small Mobile:** 480px and below - Optimized for small screens

### Responsive Features
- Flexible grid layouts (4 → 2 → 1 columns)
- Mobile-friendly navigation menu
- Touch-optimized buttons and links
- Readable font sizes on all devices
- Optimized images and animations

## 🎓 Learning Outcomes

This project demonstrates:

1. **HTML5 Semantic Structure**
   - Proper use of semantic tags
   - Accessibility considerations
   - SEO-friendly markup

2. **CSS3 Advanced Techniques**
   - Flexbox and Grid layouts
   - CSS animations and transitions
   - Gradient effects
   - Responsive design patterns
   - CSS variables for theming

3. **JavaScript Fundamentals**
   - DOM manipulation
   - Event handling
   - Scroll detection
   - Class toggling
   - Intersection Observer API

4. **Web Design Principles**
   - Visual hierarchy
   - Color theory
   - Typography
   - User experience

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created as part of the Prodigy InfoTech Web Development Internship.

## 👤 Contact

**Mohammed Rafiullah**

- GitHub: [@Mohammedrafiullah1928](https://github.com/Mohammedrafiullah1928)
- Repository: [PRODIGY_WD_TASK1](https://github.com/Mohammedrafiullah1928/PRODIGY_WD_TASK1)

## 🙏 Acknowledgments

- Prodigy InfoTech for the internship opportunity
- Font Awesome for the icon library
- Inspiration from modern event landing pages

---

**⭐ If you found this project helpful, please consider giving it a star!**

---

Made with ❤️ by Mohammed Rafiullah | © 2025 Innovate Symposium
