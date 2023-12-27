document.addEventListener('DOMContentLoaded', function () {
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');

    const homeButton = document.getElementById('home-btn');
    const aboutButton = document.getElementById('about-btn');
    const contactButton = document.getElementById('contact-btn');

    homeButton.addEventListener('click', function () {
        homeSection.style.display = 'block';
        aboutSection.style.display = 'none';
        contactSection.style.display = 'none';
    });

    aboutButton.addEventListener('click', function () {
        homeSection.style.display = 'none';
        aboutSection.style.display = 'block';
        contactSection.style.display = 'none';
    });

    contactButton.addEventListener('click', function () {
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        contactSection.style.display = 'block';
    });
});
