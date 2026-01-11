// Mobile menu toggle
(function() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    
    if (burger && nav) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                burger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!burger.contains(event.target) && !nav.contains(event.target)) {
                burger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }
})();

// FAQ Accordion
(function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-item__question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isExpanded = item.getAttribute('aria-expanded') === 'true';
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.setAttribute('aria-expanded', 'false');
                    }
                });
                
                // Toggle current item
                item.setAttribute('aria-expanded', !isExpanded);
            });
        }
    });
})();

// Smooth scroll for anchor links
(function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#' || href === '#go') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
})();

// Header scroll effect
(function() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    if (header) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            }
            
            lastScroll = currentScroll;
        });
    }
})();