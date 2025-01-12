let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateTestimonials() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    if (currentIndex === 0) {
        prevButton.classList.add('hidden');
    } else {
        prevButton.classList.remove('hidden');
    }

    if (currentIndex === totalSlides - 1) {
        nextButton.classList.add('hidden');
    } else {
        nextButton.classList.remove('hidden');
    }
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateTestimonials();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateTestimonials();
    }
});

updateTestimonials();
