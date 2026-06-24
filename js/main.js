const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const btn = document.querySelector('.menu-toggle');
const menu = document.getElementById('mobileMenu');

btn?.addEventListener('click', () => {
    menu.classList.toggle('active');
});
