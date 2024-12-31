// script.js

// Toggle the menu when the burger icon is clicked
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('open'); // Toggle the 'open' class to show/hide the menu
}

// Close the menu if you click outside of the navigation or burger menu
function closeMenuOutsideClick(event) {
    const menu = document.getElementById('nav-menu');
    const burgerMenu = document.querySelector('.burger-menu');

    // Check if the clicked element is not the menu or the burger menu
    if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
        menu.classList.remove('open'); // Close the menu if clicked outside
    }
}

// Add the event listener to detect clicks outside the menu
document.addEventListener('click', closeMenuOutsideClick);

// Initial index of the carousel
let currentIndex = 0;

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const items = document.querySelectorAll('.carousel-item');

// Function to update the carousel position
function updateCarousel() {
    // Make sure currentIndex is within the bounds of the items array
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    // Move the carousel by the appropriate amount
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next button click event
nextButton.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
});

// Previous button click event
prevButton.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex++;
    updateCarousel();
}, 5000);
