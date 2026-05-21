document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer para las animaciones cinematic-fade
    const fadeElements = document.querySelectorAll('.cinematic-fade');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: Descomentar la línea de abajo para que la animación solo suceda una vez
                // fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // 2. Efecto sutil en el Navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '20px 48px';
            // En mobile ajustar
            if(window.innerWidth <= 768) navbar.style.padding = '15px 20px';
        } else {
            navbar.style.padding = '32px 48px';
            if(window.innerWidth <= 768) navbar.style.padding = '20px 20px';
        }
    });
    // Control del menú desplegable (Overlay) en móvil
const menuToggle = document.querySelector('.menu-toggle');
const navbarElement = document.querySelector('.navbar');

if (menuToggle && navbarElement) {
    menuToggle.addEventListener('click', () => {
        // Alterna la clase para abrir o cerrar la pantalla completa
        navbarElement.classList.toggle('menu-active');
        
        // Cambia el indicador de forma interactiva con estética de etiqueta
        if (navbarElement.classList.contains('menu-active')) {
            menuToggle.textContent = ' Cerrar ';
        } else {
            menuToggle.textContent = ' Menu ';
        }
    });
}
});
