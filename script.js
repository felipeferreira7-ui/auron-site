// ========================================
// Auron Negócios — Landing Page Scripts
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initDealsToggle();
    initConfidentialIntake();
});

// --- Deals Page Expansion ---
function initDealsToggle() {
    const btn = document.getElementById('toggle-deals');
    const hiddenDeals = document.querySelectorAll('.hidden-deal');

    if (!btn || hiddenDeals.length === 0) return;

    // Language detection
    const isEnglish = document.documentElement.lang.startsWith('en');
    const textShow = isEnglish ? 'View all deals' : 'Ver todos os negócios';
    const textHide = isEnglish ? 'View less' : 'Ver menos';

    btn.addEventListener('click', () => {
        const isOpening = !hiddenDeals[0].classList.contains('show');

        hiddenDeals.forEach(deal => {
            deal.classList.toggle('show');
            if (isOpening) {
                // Small delay to trigger reveal animation properly
                setTimeout(() => {
                    deal.classList.add('revealed');
                }, 10);
            }
        });

        btn.textContent = isOpening ? textHide : textShow;

        if (!isOpening) {
            document.getElementById('negocios').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// --- Confidential intake ---
function initConfidentialIntake() {
    const form = document.getElementById('intakeForm');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const data = new FormData(form);
        const message = [
            'Olá, Auron. Gostaria de iniciar uma conversa confidencial.',
            '',
            `Nome: ${data.get('name')}`,
            `Objetivo: ${data.get('role')}`,
            `Setor: ${data.get('sector')}`,
            `Cidade/UF: ${data.get('city')}`,
            `Porte: ${data.get('size')}`,
            `Contexto: ${data.get('message')}`
        ].join('\n');

        window.open(`https://wa.me/5511947684604?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
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
