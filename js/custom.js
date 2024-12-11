document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        const screenWidth = window.innerWidth;
        screenWidth > 991 ? (window.scrollY > 50 ? header.classList.add('sticky') : header.classList.remove('sticky')) : header.classList.remove('sticky');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4, loop: true, margin: 10, nav: false, dots: true, autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 }, 1200: { items: 4 } }
    });

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.progress-done').forEach(progress => {
            progress.style.width = progress.getAttribute('data-done') + '%';
            progress.style.opacity = 1;
        });
    });
});
