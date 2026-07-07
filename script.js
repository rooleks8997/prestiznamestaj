// Hamburger meni
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Zatvori meni kada se klikne na link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Promena aktivnog linka pri skrolovanju (opciono)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (navLink && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
            navLinks.forEach(l => l.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
});

// Dugme "Nazad na vrh"
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Jednostavna validacija kontakt forme (samo sprečavanje praznog slanja)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Ovde možeš dodati AJAX slanje podataka
    alert('Hvala na poruci! Uskoro ćemo vas kontaktirati.');
    contactForm.reset();
});
