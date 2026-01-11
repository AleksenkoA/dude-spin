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

// Sidebar toggle
(function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    
    function toggleSidebar() {
        if (sidebar && sidebarOverlay) {
            const isActive = sidebar.classList.contains('active');
            if (isActive) {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                sidebar.classList.add('active');
                sidebarOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    }
    
    function closeSidebar() {
        if (sidebar && sidebarOverlay) {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    if (sidebarClose && sidebar) {
        sidebarClose.addEventListener('click', closeSidebar);
    }
    
    if (sidebarOverlay && sidebar) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar when clicking on links
    if (sidebar) {
        const sidebarLinks = sidebar.querySelectorAll('.sidebar__link');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                setTimeout(closeSidebar, 300); // Delay to allow smooth scroll
            });
        });
    }
    
    // Close sidebar on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
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
            if (href === '#') {
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

// Sidebar active link on scroll
(function() {
    const sidebarLinks = document.querySelectorAll('.sidebar__link');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                sidebarLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
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

// Registration Modal
(function() {
    const profileButton = document.getElementById('header-profile');
    const registrationModal = document.getElementById('registration-modal');
    const registrationModalOverlay = document.getElementById('registration-modal-overlay');
    const registrationModalClose = document.getElementById('registration-modal-close');
    const registrationForm = document.getElementById('registration-form');
    const passwordToggle = document.getElementById('password-toggle');
    const passwordInput = document.getElementById('password');
    const formTabs = document.querySelectorAll('.form-tab');

    function openRegistrationModal() {
        if (registrationModalOverlay) {
            registrationModalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeRegistrationModal() {
        if (registrationModalOverlay) {
            registrationModalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Open modal on profile button click
    if (profileButton) {
        profileButton.addEventListener('click', function(e) {
            e.preventDefault();
            openRegistrationModal();
        });
    }

    // Open modal on "Create Account & Play Now" button click
    const bigCtaRegisterButton = document.getElementById('big-cta-register');
    if (bigCtaRegisterButton) {
        bigCtaRegisterButton.addEventListener('click', function(e) {
            e.preventDefault();
            openRegistrationModal();
        });
    }

    // Close modal
    if (registrationModalClose) {
        registrationModalClose.addEventListener('click', closeRegistrationModal);
    }

    if (registrationModalOverlay) {
        registrationModalOverlay.addEventListener('click', function(e) {
            if (e.target === registrationModalOverlay) {
                closeRegistrationModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && registrationModalOverlay && registrationModalOverlay.classList.contains('active')) {
            closeRegistrationModal();
        }
    });

    // Password toggle
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
        });
    }

    // Form tabs
    if (formTabs.length > 0) {
        formTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                formTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Form submission
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Здесь можно добавить логику отправки формы
            alert('Registration form submitted! (This is a demo)');
            closeRegistrationModal();
        });
    }

    // Open modal on "Log in" link click (for demo purposes)
    const loginLink = document.getElementById('login-link');
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            closeRegistrationModal();
            // Здесь можно открыть форму входа
        });
    }
})();