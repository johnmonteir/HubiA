// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animação do botão hamburger
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// =============================================
// ANIMAÇÃO DO MENU AO ROLAR (NOVO CÓDIGO)
// =============================================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;
const scrollThreshold = 50; // Quantos pixels rolar para ativar

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Só executa se não estiver no topo
    if (currentScroll > scrollThreshold) {
        if (currentScroll > lastScrollTop) {
            // ROLANDO PARA BAIXO → esconde o menu
            navbar.classList.add('hide');
            navbar.classList.remove('show');
        } else {
            // ROLANDO PARA CIMA → mostra o menu
            navbar.classList.add('show');
            navbar.classList.remove('hide');
        }
    } else {
        // No topo da página, sempre mostra
        navbar.classList.remove('hide');
        navbar.classList.add('show');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });

// Garantir que o menu apareça quando passar o mouse perto do topo
// (útil se o menu estiver escondido e o usuário levar o mouse ao topo)
document.addEventListener('mousemove', (e) => {
    if (e.clientY < 50) { // Se o mouse estiver nos primeiros 50px do topo
        navbar.classList.add('show');
        navbar.classList.remove('hide');
    }
});

// =============================================
// RESTO DO CÓDIGO (mantido igual)
// =============================================

// Intersection Observer para animações
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observar elementos
document.querySelectorAll('.service-card, .process-step, .benefit-card, .differential-item').forEach(el => {
    observer.observe(el);
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active menu based on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id') || '';
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// WhatsApp button
document.querySelector('.btn-whatsapp')?.addEventListener('click', (e) => {
    e.preventDefault();
    // Substitua pelo seu número real
    const phoneNumber = '5585921502744';
    const message = encodeURIComponent('Olá, vim pelo site hubia.dev e gostaria de saber mais detalhes sobre os serviços.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});

// Social links (exemplo)
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (link.textContent.includes('Instagram')) {
            window.open('https://instagram.com/seuperfil', '_blank');
        } else if (link.textContent.includes('WhatsApp')) {
            window.open('https://wa.me/5585999999999', '_blank');
        }
    });
});

// Console message
console.log('%c📱 HubBio - Páginas profissionais para sua bio', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%c🚀 Links organizados em um único lugar', 'color: #7c3aed; font-size: 12px;');