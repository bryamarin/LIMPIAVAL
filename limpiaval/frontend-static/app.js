document.addEventListener('DOMContentLoaded', () => {

    /**
     * Menú de navegación móvil
     */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            // Cambiar aria-expanded para accesibilidad
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navToggle.setAttribute('aria-label', !isExpanded ? 'Cerrar menú' : 'Abrir menú');
        });
    }

    // Cierra el menú al hacer clic en un enlace
    const linkAction = () => {
        navMenu.classList.remove('show-menu');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');
    };
    navLinks.forEach(n => n.addEventListener('click', linkAction));


    /**
     * Cambio de estilo del header al hacer scroll
     */
    const header = document.querySelector('.header');
    const scrollHeader = () => {
        if (window.scrollY >= 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', scrollHeader);


    /**
     * Animaciones de scroll con IntersectionObserver
     */
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Opciones para el observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% del elemento visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    };

    // Crear el observer si el navegador lo soporta y no se prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (window.IntersectionObserver && !prefersReducedMotion) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Si no hay soporte o se prefiere movimiento reducido, simplemente muestra los elementos
        animatedElements.forEach(el => el.classList.add('is-visible'));
    }


    /**
     * Mock de envío de formularios
     * En una aplicación real, aquí se haría una llamada a la API con fetch()
     */
    const newsletterForm = document.querySelector('.footer__newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert(`¡Gracias por suscribirte con ${emailInput.value}!`);
                emailInput.value = '';
            } else {
                alert('Por favor, introduce un email válido.');
            }
        });
    }

});
