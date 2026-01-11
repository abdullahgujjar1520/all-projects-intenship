
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        
        if (mobileMenuToggle && mobileNav) {
            mobileMenuToggle.addEventListener('click', function() {
                mobileNav.classList.toggle('active');
                
                // Change menu icon
                if (mobileNav.classList.contains('active')) {
                    mobileMenuToggle.innerHTML = '✕';
                } else {
                    mobileMenuToggle.innerHTML = '☰';
                }
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!event.target.closest('.header-container') && 
                    !event.target.closest('.mobile-nav') &&
                    mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    mobileMenuToggle.innerHTML = '☰';
                }
            });
            
            // Close menu when clicking on a link
            const mobileLinks = mobileNav.querySelectorAll('li');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileNav.classList.remove('active');
                    mobileMenuToggle.innerHTML = '☰';
                });
            });
        }
    });