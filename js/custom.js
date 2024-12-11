document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    
    // Handle sticky header on scroll
    window.addEventListener('scroll', function () {
        const screenWidth = window.innerWidth;
        if (screenWidth > 991) {
            if (window.scrollY > 50) {
                header?.classList.add('sticky');
            } else {
                header?.classList.remove('sticky');
            }
        } else {
            header?.classList.remove('sticky');
        }
    });

    // Handle active class for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Initialize Owl Carousel
    if ($('.owl-carousel').length) {
        $(".owl-carousel").owlCarousel({
            items: 4,
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 },
                1200: { items: 4 }
            }
        });
    }

    // Animate progress bars
    document.querySelectorAll('.progress-done').forEach(progress => {
        progress.style.width = progress.getAttribute('data-done') + '%';
        progress.style.opacity = 1;
    });

    // Function to animate custom progress bars
    const animateProgress = (progressElement, percentageElement, targetPercentage) => {
        let progress = 0;
        const interval = setInterval(() => {
            if (progress <= targetPercentage) {
                progressElement.style.width = `${progress}%`;
                percentageElement.textContent = `${progress}%`;
                progress++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    };

    const progress1 = document.getElementById("progress1");
    const progress2 = document.getElementById("progress2");
    const percentage1 = document.getElementById("percentage1");
    const percentage2 = document.getElementById("percentage2");

    if (progress1 && percentage1) {
        animateProgress(progress1, percentage1, 90);
    }
    if (progress2 && percentage2) {
        animateProgress(progress2, percentage2, 80);
    }

    // WOW.js Initialization
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }
});
