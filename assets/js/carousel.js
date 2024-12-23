let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const newTransformValue = -currentIndex * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
}

setInterval(() => {
  moveSlide(1);
}, 3000);
