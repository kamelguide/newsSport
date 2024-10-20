$(document).ready(function() {
    // Slider logic
    let currentSlide = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides.eq(currentSlide).addClass('active');
    }

    // Auto slide every 3 seconds
    setInterval(showNextSlide, 3000);
});



$(document).ready(function() {
    // Slider logic
    let currentSlide = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides.eq(currentSlide).addClass('active');
    }

    // Auto slide every 3 seconds
    setInterval(showNextSlide, 3000);

  // Open popup
  $('.nav-link').on('click', function(e) {
    e.preventDefault();

    // Close any currently open popups
    $('.popup').fadeOut(); // Close all popups

    // Open the selected popup
    const popupId = $(this).data('popup');
    $(popupId).fadeIn();
});

// Close popup when close button is clicked
$('.popup .close').on('click', function() {
    $(this).closest('.popup').fadeOut();
});

// Close popup when clicking outside the content
$('.popup').on('click', function(e) {
    if ($(e.target).is('.popup')) {
        $(this).fadeOut();
    }
});
});


/************************* caroussel teamoinyage *******************/
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });
});


/****************************  mini icon ***************/
document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');
    const bubble = document.getElementById('hover-bubble');
    let bubbleVisible = false;

    card.addEventListener('click', function() {
        // Toggle the display of the bubble
        if (bubbleVisible) {
            bubble.style.display = 'none';
            bubbleVisible = false;
        } else {
            bubble.style.display = 'block';
            bubbleVisible = true;
        }
    });

    // Optionally, add a function to close the bubble if clicked outside
    document.addEventListener('click', function(event) {
        if (!card.contains(event.target) && !bubble.contains(event.target)) {
            bubble.style.display = 'none';
            bubbleVisible = false;
        }
    });
});
