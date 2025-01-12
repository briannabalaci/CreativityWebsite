let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide) => (slide.style.display = 'none'));
    dots.forEach((dot) => dot.classList.remove('active'));

    slides[currentSlide].style.display = 'block';
    dots[currentSlide].classList.add('active');
}

function setSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function initCarousel() {
    showSlide(currentSlide);
    slideInterval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});

const creativeIdeas = [
    "Write a poem about your favorite memory.",
    "Invent a new board game and describe its rules.",
    "Design your dream house and sketch it out.",
    "Create a story about an adventurous cat.",
    "Come up with a new recipe for a dessert.",
    "Think of a unique way to recycle old items.",
    "Draw your ideal city and its landmarks.",
    "Write a letter to your future self.",
    "Make a list of ten things you’re grateful for.",
    "Compose a jingle for your favorite product.",
    "Invent a gadget that solves a common problem.",
    "Design a new cover for your favorite book.",
    "Create a superhero and describe their powers.",
    "Imagine a new color and give it a name.",
    "Write a short play set on a spaceship.",
    "Think of three ways to make mornings more fun.",
    "Draw a map of an imaginary island.",
    "Describe what your dream garden would look like.",
    "Come up with a new holiday and its traditions.",
    "Write a story about a talking tree.",
    "Think of a unique theme for a party.",
    "Design a logo for a company you’d create.",
    "Create a character based on your pet.",
    "Make up a game that only uses paper and pencils.",
    "Imagine what it would be like to live underwater.",
    "Write a poem about your favorite food.",
    "Design a futuristic vehicle.",
    "Write a story where animals take over the world.",
    "Think of five alternative uses for a shoe.",
    "Draw your favorite place in the world.",
    "Create a dance routine to a song you like.",
    "Imagine a day where everything goes backward.",
    "Write a story about a world with no gravity.",
    "Invent a new app and describe how it works.",
    "Think of a way to make school more exciting.",
    "Describe what life would be like on another planet.",
    "Make up a recipe for a magic potion.",
    "Imagine you could talk to animals—what would they say?",
    "Write a story about a hidden treasure.",
    "Invent a new sport and explain the rules.",
    "Draw a picture of the perfect treehouse.",
    "Come up with a name for a band and their first album.",
    "Write a story about a robot who wants to be human.",
    "Create a design for a futuristic shoe.",
    "Imagine you’re invisible for a day—what would you do?",
    "Describe what it would be like to shrink to the size of an ant.",
    "Write a letter to someone who inspires you.",
    "Design a new currency for a fictional country.",
    "Think of ten ways to reuse a cardboard box.",
    "Imagine a world where everyone could fly."
];

function generateIdea() {
    const randomIndex = Math.floor(Math.random() * creativeIdeas.length);
    const dialogText = document.getElementById("dialog-text");
    dialogText.textContent = creativeIdeas[randomIndex];
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

