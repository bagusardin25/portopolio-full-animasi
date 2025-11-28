/* global particlesJS, Typed, gsap */

// Initialize portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
            
            // Toggle icon between hamburger and X
            if (isOpen) {
                menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            } else {
                menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            }
        });
        
        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            });
        });
    }

    // Initialize Particles.js - lightweight particle effects
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 100,
                    density: { enable: true, value_area: 900 }
                },
                color: { value: ['#00ff88', '#00d4ff', '#00ff88'] },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: { enable: true, speed: 0.8, opacity_min: 0.2, sync: false }
                },
                size: {
                    value: 3.5,
                    random: true,
                    anim: { enable: true, speed: 1.5, size_min: 0.5, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00ff88',
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: { enable: true, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 180, line_linked: { opacity: 0.6 } },
                    push: { particles_nb: 5 },
                    repulse: { distance: 100, duration: 0.4 }
                }
            },
            retina_detect: true
        });
    }
    
    // Enhanced cursor interaction with trail effect
    const cursorGlow = document.getElementById('cursor-glow');
    const cursorRing = document.getElementById('cursor-ring');
    const cursorDot = document.getElementById('cursor-dot');
    const trails = [
        document.getElementById('trail-1'),
        document.getElementById('trail-2'),
        document.getElementById('trail-3'),
        document.getElementById('trail-4'),
        document.getElementById('trail-5')
    ];
    
    if (cursorGlow && cursorDot && cursorRing && window.matchMedia('(hover: hover)').matches) {
        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;
        let ringX = 0, ringY = 0;
        let trailPositions = trails.map(() => ({ x: 0, y: 0 }));
        let lastMoveTime = Date.now();
        let isMoving = false;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            lastMoveTime = Date.now();
            isMoving = true;
            
            // Immediate dot follow
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });
        
        // Smooth animation loop
        function animateCursor() {
            // Glow follows with slow lerp
            glowX += (mouseX - glowX) * 0.08;
            glowY += (mouseY - glowY) * 0.08;
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
            
            // Ring follows with medium lerp
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
            
            // Trail particles with cascading delay
            trails.forEach((trail, i) => {
                if (trail) {
                    const delay = (i + 1) * 0.06;
                    const targetX = i === 0 ? mouseX : trailPositions[i - 1].x;
                    const targetY = i === 0 ? mouseY : trailPositions[i - 1].y;
                    
                    trailPositions[i].x += (targetX - trailPositions[i].x) * (0.3 - delay);
                    trailPositions[i].y += (targetY - trailPositions[i].y) * (0.3 - delay);
                    
                    trail.style.left = trailPositions[i].x + 'px';
                    trail.style.top = trailPositions[i].y + 'px';
                    
                    // Fade based on movement
                    if (isMoving && Date.now() - lastMoveTime < 100) {
                        trail.style.opacity = (1 - i * 0.15).toString();
                        trail.style.transform = `translate(-50%, -50%) scale(${1 - i * 0.1})`;
                    } else {
                        trail.style.opacity = '0';
                    }
                }
            });
            
            // Check if stopped moving
            if (Date.now() - lastMoveTime > 100) {
                isMoving = false;
            }
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Click effect
        document.addEventListener('mousedown', function() {
            cursorDot.classList.add('clicking');
            cursorRing.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });
        
        document.addEventListener('mouseup', function() {
            cursorDot.classList.remove('clicking');
            cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
        });
        
        // Hover effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .skill-tag, .project-card, .photo-frame');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                cursorRing.classList.add('hovering');
            });
            el.addEventListener('mouseleave', function() {
                cursorRing.classList.remove('hovering');
            });
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', function() {
            cursorGlow.style.opacity = '0';
            cursorDot.style.opacity = '0';
            cursorRing.style.opacity = '0';
            trails.forEach(t => { if(t) t.style.opacity = '0'; });
        });
        
        document.addEventListener('mouseenter', function() {
            cursorGlow.style.opacity = '0.8';
            cursorDot.style.opacity = '1';
            cursorRing.style.opacity = '1';
        });
    }
    
    // Initialize Typed.js for hero typing effect
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Performance Engineer',
                'NeoVim Ricer',
                'Git Rebaser',
                'Developer Advocate',
                'System Optimizer',
                'Open Source Contributor'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
    
    // Initialize GSAP animations
    if (typeof gsap !== 'undefined') {
        // Fade in animations for sections
        gsap.registerPlugin();
        
        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                }
            });
        }, observerOptions);
        
        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
        
        // Hero section animation
        gsap.timeline()
            .from('.hero-section h1', { opacity: 0, y: 50, duration: 1, delay: 0.5 })
            .from('.hero-section .code-block', { opacity: 0, x: 50, duration: 0.8 }, '-=0.5')
            .from('.hero-section .cta-button', { opacity: 0, y: 30, duration: 0.6, stagger: 0.2 }, '-=0.3');
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background opacity on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const scrolled = window.pageYOffset;
        const opacity = Math.min(scrolled / 100, 1);
        navbar.style.background = `rgba(10, 10, 10, ${0.9 + (opacity * 0.1)})`;
    });
    
    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, { scale: 1.02, duration: 0.3, ease: "power2.out" });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, { scale: 1, duration: 0.3, ease: "power2.out" });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data using name attributes
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
        
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
        
            // Simulate form submission
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
        });
    }
    
    // Skill tag click interactions
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const skill = this.textContent;
            showNotification(`Exploring ${skill} projects and resources...`, 'info');
            
            // Add a subtle animation
            if (typeof gsap !== 'undefined') {
                gsap.to(this, { 
                    scale: 1.1, 
                    duration: 0.2, 
                    yoyo: true, 
                    repeat: 1,
                    ease: "power2.inOut"
                });
            }
        });
    });
    
    // Stats counter animation
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const finalValue = stat.textContent;
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));
            const suffix = finalValue.replace(/[\d,]/g, '');
            
            if (typeof gsap !== 'undefined') {
                let counter = { val: 0 };
                gsap.to(counter, {
                    val: numericValue,
                    duration: 2,
                    ease: "power2.out",
                    onUpdate: function() {
                        stat.textContent = Math.floor(counter.val) + suffix;
                    }
                });
            }
        });
    }
    
    // Trigger stats animation when about section is visible
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        aboutObserver.observe(aboutSection);
    }
    
    // Utility functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 p-4 rounded-lg text-white z-50 transition-all duration-300 transform translate-x-full`;
        
        // Set background color based on type
        switch(type) {
            case 'success':
                notification.classList.add('bg-green-600');
                break;
            case 'error':
                notification.classList.add('bg-red-600');
                break;
            case 'info':
            default:
                notification.classList.add('bg-blue-600');
                break;
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Press '1' to scroll to home
        if (e.key === '1' && !e.ctrlKey && !e.altKey) {
            e.preventDefault();
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Press '2' to scroll to about
        if (e.key === '2' && !e.ctrlKey && !e.altKey) {
            e.preventDefault();
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Press '3' to scroll to skills
        if (e.key === '3' && !e.ctrlKey && !e.altKey) {
            e.preventDefault();
            document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Press '4' to scroll to projects
        if (e.key === '4' && !e.ctrlKey && !e.altKey) {
            e.preventDefault();
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Press '5' to scroll to contact
        if (e.key === '5' && !e.ctrlKey && !e.altKey) {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Optimized scroll handler
    const optimizedScrollHandler = debounce(function() {
        // Add any scroll-based animations here
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.vanta-canvas');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }, 10);
    
    window.addEventListener('scroll', optimizedScrollHandler);
    
    // Preload critical resources
    function preloadResources() {
        const criticalImages = [
            // Add any critical images here
        ];
        
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    preloadResources();
    
    // Console easter egg
    console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║                    ThePrimeagen Portfolio                    ║
    ║                                                              ║
    ║  Performance Engineer • Developer Advocate • NeoVim Ricer   ║
    ║                                                              ║
    ║  Try pressing 1-5 to navigate between sections!             ║
    ║                                                              ║
    ║  Built with:                                               ║
    ║  • Particles.js for animated backgrounds                  ║
    ║  • Typed.js for typewriter effects                        ║
    ║  • GSAP for smooth animations                             ║
    ║  • Tailwind CSS for styling                               ║
    ║  • Custom cursor interactions                             ║
    ╚══════════════════════════════════════════════════════════════╝
    `);
});

// Error handling for missing libraries
window.addEventListener('error', function(e) {
    console.warn('Some features may be limited due to missing dependencies:', e.message);
});

// Fallback for when libraries fail to load
window.addEventListener('load', function() {
    // Check if critical libraries loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded, using CSS animations as fallback');
        // Add CSS-based fade-in as fallback
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }
    
    if (typeof Typed === 'undefined') {
        console.warn('Typed.js not loaded, using static text');
        document.getElementById('typed-text').textContent = 'Performance Engineer';
    }
    
    if (typeof particlesJS === 'undefined') {
        console.warn('Particles.js not loaded, using gradient background');
        const particlesBg = document.getElementById('particles-js');
        if (particlesBg) {
            particlesBg.style.background = 'linear-gradient(135deg, #0f1419 0%, #1a2332 30%, #0d1117 70%, #161b22 100%)';
        }
    }
});