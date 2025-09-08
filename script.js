// Wait for DOM to load

document.addEventListener('DOMContentLoaded', function() {

    // Initialize animations and functionality

    initMenuToggle();

    initScrollAnimations();

    initSkillBars();

    initSmoothScrolling();

    initProjectHover();

    initFormValidation();

});

// Menu toggle functionality

function initMenuToggle() {

    const menuToggle = document.querySelector('.menu-toggle');

    const navLinks = document.querySelector('.nav-links');

    

    if (menuToggle && navLinks) {

        menuToggle.addEventListener('click', function() {

            navLinks.classList.toggle('active');

        });

    }

}

// Scroll animations

function initScrollAnimations() {

    const observerOptions = {

        root: null,

        rootMargin: '0px',

        threshold: 0.1

    };

    const observer = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add('animate');

            }

        });

    }, observerOptions);

    // Observe sections for animation

    const sections = document.querySelectorAll('section');

    sections.forEach(function(section) {

        observer.observe(section);

    });

}

// Animate skill bars

function initSkillBars() {

    const skillBars = document.querySelectorAll('.skill-progress');

    

    const skillObserver = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                const width = entry.target.getAttribute('data-width');

                entry.target.style.width = width;

            }

        });

    }, { threshold: 0.5 });

    

    skillBars.forEach(function(bar) {

        skillObserver.observe(bar);

    });

}

// Smooth scrolling for navigation links

function initSmoothScrolling() {

    const navLinks = document.querySelectorAll('.nav-links a');

    

    navLinks.forEach(function(link) {

        link.addEventListener('click', function(e) {

            e.preventDefault();

            

            const targetId = this.getAttribute('href');

            const targetSection = document.querySelector(targetId);

            

            if (targetSection) {

                // Close mobile menu if open

                const navMenu = document.querySelector('.nav-links');

                if (navMenu.classList.contains('active')) {

                    navMenu.classList.remove('active');

                }

                

                // Scroll to section

                window.scrollTo({

                    top: targetSection.offsetTop - 80,

                    behavior: 'smooth'

                });

            }

        });

    });

    

    // Smooth scroll for CTA button

    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {

        ctaButton.addEventListener('click', function() {

            const projectsSection = document.querySelector('#projects');

            if (projectsSection) {

                window.scrollTo({

                    top: projectsSection.offsetTop - 80,

                    behavior: 'smooth'

                });

            }

        });

    }

}

// Project card hover effect

function initProjectHover() {

    const projectCards = document.querySelectorAll('.project-card');

    

    projectCards.forEach(function(card) {

        card.addEventListener('mouseenter', function() {

            this.style.background = 'linear-gradient(45deg, #6c63ff, #4a44c9)';

            this.style.color = 'white';

            

            const icon = this.querySelector('.project-icon i');

            if (icon) {

                icon.style.color = 'white';

            }

        });

        

        card.addEventListener('mouseleave', function() {

            this.style.background = 'rgba(255, 255, 255, 0.9)';

            this.style.color = '#333';

            

            const icon = this.querySelector('.project-icon i');

            if (icon) {

                icon.style.color = '#6c63ff';

            }

        });

    });

}

// Form validation

function initFormValidation() {

    const contactForm = document.querySelector('.contact-form');

    

    if (contactForm) {

        contactForm.addEventListener('submit', function(e) {

            e.preventDefault();

            

            const nameInput = this.querySelector('input[type="text"]');

            const emailInput = this.querySelector('input[type="email"]');

            const messageInput = this.querySelector('textarea');

            

            let isValid = true;

            

            // Simple validation

            if (!nameInput.value.trim()) {

                highlightError(nameInput);

                isValid = false;

            } else {

                removeErrorHighlight(nameInput);

            }

            

            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {

                highlightError(emailInput);

                isValid = false;

            } else {

                removeErrorHighlight(emailInput);

            }

            

            if (!messageInput.value.trim()) {

                highlightError(messageInput);

                isValid = false;

            } else {

                removeErrorHighlight(messageInput);

            }

            

            if (isValid) {

                // Simulate form submission

                const submitButton = this.querySelector('button');

                submitButton.textContent = 'Sending...';

                submitButton.disabled = true;

                

                setTimeout(function() {

                    alert('Thank you for your message! I will get back to you soon.');

                    contactForm.reset();

                    submitButton.textContent = 'Send Message';

                    submitButton.disabled = false;

                }, 1500);

            }

        });

    }

}

// Helper function to validate email

function isValidEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);

}

// Helper function to highlight error

function highlightError(input) {

    input.style.boxShadow = '0 0 0 2px #ff4757';

}

// Helper function to remove error highlight

function removeErrorHighlight(input) {

    input.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';

}

// Additional animation for elements on scroll

window.addEventListener('scroll', function() {

    const scrollPosition = window.scrollY;

    

    // Parallax effect for shapes

    const shapes = document.querySelectorAll('.shape');

    shapes.forEach(function(shape, index) {

        const speed = 0.05 + (index * 0.01);

        shape.style.transform = `translateY(${scrollPosition * speed}px) rotate(${scrollPosition * 0.02}deg)`;

    });

    

    // Navbar background on scroll

    const navbar = document.querySelector('.navbar');

    if (scrollPosition > 100) {

        navbar.style.background = 'rgba(255, 255, 255, 0.95)';

        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';

    } else {

        navbar.style.background = 'rgba(255, 255, 255, 0.9)';

        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';

    }

});