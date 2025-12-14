// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const menuToggleSpans = mobileMenu ? mobileMenu.querySelectorAll('span') : [];
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

// Create floating particles in background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(220, 20, 60, ${Math.random() * 0.5})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Scroll event - Change navbar style
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
    
    // Update active nav item based on scroll position
    updateActiveNavItem();
});

// Toggle mobile menu
if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu to X
        if (navLinks.classList.contains('active')) {
            menuToggleSpans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            menuToggleSpans[1].style.opacity = '0';
            menuToggleSpans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            resetHamburgerMenu();
        }
    });
}

// Reset hamburger menu animation
function resetHamburgerMenu() {
    if (menuToggleSpans.length > 0) {
        menuToggleSpans[0].style.transform = 'none';
        menuToggleSpans[1].style.opacity = '1';
        menuToggleSpans[2].style.transform = 'none';
    }
}

// Close mobile menu when a link is clicked
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        resetHamburgerMenu();
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update active state in navigation based on scroll position
function updateActiveNavItem() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
}

// Schedule tabs functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const daySchedules = document.querySelectorAll('.day-schedule');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const day = button.getAttribute('data-day');
        
        // Remove active class from all tabs and schedules
        tabButtons.forEach(btn => btn.classList.remove('active'));
        daySchedules.forEach(schedule => schedule.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding schedule
        button.classList.add('active');
        document.getElementById(day).classList.add('active');
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message (you can customize this)
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Ticket button handlers
const ticketButtons = document.querySelectorAll('.btn-ticket');
ticketButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const ticketType = this.closest('.ticket-card').querySelector('h3').textContent;
        alert(`You selected: ${ticketType}\n\nThis would redirect to the payment page in a live website.`);
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.speaker-card, .ticket-card, .schedule-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = entry.target.textContent.replace('+', '');
            animateCounter(entry.target, parseInt(target));
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    createParticles();
    
    // Check if page is already scrolled on load
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
    
    // Update active nav item
    updateActiveNavItem();
    
    console.log('🚀 Innovate 2025 - Landing Page Loaded Successfully!');
});

// Smooth reveal for hero content on load
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});
