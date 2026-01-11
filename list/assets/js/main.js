// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('.header');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            header.classList.toggle('menu-open');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Button hover animation
    const buttons = document.querySelectorAll('.contact-btn, .contact-btn-large, .methodology-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const bg = this.querySelector('.btn-bg, .btn-bg-white, .btn-bg-red');
            if (bg) {
                bg.style.left = '-0.05px';
                bg.style.right = '-0.05px';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            const bg = this.querySelector('.btn-bg, .btn-bg-white, .btn-bg-red');
            if (bg) {
                bg.style.left = '-170.61px';
                bg.style.right = '172.61px';
            }
        });
    });
    
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.transition = 'opacity 0.3s';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});