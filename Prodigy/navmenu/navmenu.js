window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#333'; // Change background color when scrolled
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});
