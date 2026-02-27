// ========================================
// Auron Negócios — Landing Page Scripts
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initDealsToggle();
});

// --- Deals Page Expansion ---
function initDealsToggle() {
    const btn = document.getElementById('toggle-deals');
    const hiddenDeals = document.querySelectorAll('.hidden-deal');

    if (!btn) return;

    btn.addEventListener('click', () => {
        const isHidden = hiddenDeals[0].style.display !== 'block';

        hiddenDeals.forEach(deal => {
            deal.style.display = isHidden ? 'block' : 'none';
            // Re-trigger reveal if shown
            if (isHidden) {
                setTimeout(() => {
                    deal.classList.add('revealed');
                }, 10);
            }
        });

        btn.textContent = isHidden ? 'Ver menos' : 'Ver todos os negócios';

        // If closing, scroll back to head of section
        if (!isHidden) {
            document.getElementById('negocios').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// --- Navbar Scroll Effect ---
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// --- Mobile Menu ---
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// --- Smooth Scroll ---
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

// --- Scroll Reveal Animation ---
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}
