let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function cloneSlides() {
    const firstSlide = slides.children[0].cloneNode(true);
    const lastSlide = slides.children[totalSlides - 1].cloneNode(true);
    slides.appendChild(firstSlide);
    slides.insertBefore(lastSlide, slides.children[0]);
}

function updateSlidePosition() {
    const offset = -(currentSlide + 1) * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function showSlide(index) {
    currentSlide = index;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
        slides.style.transition = 'none';
        updateSlidePosition();
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            currentSlide++;
            updateSlidePosition();
        }, 50);
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
        slides.style.transition = 'none';
        updateSlidePosition();
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            currentSlide--;
            updateSlidePosition();
        }, 50);
    } else {
        updateSlidePosition();
    }
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    cloneSlides();
    showSlide(currentSlide);
});
