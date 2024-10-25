//Begin Code
let currentIndex = 0;

const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first item
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop back to the last item
    updateCarousel();
});

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const offset = -currentIndex * 100; // Calculate the offset
    carouselInner.style.transform = `translateX(${offset}%)`;
}
