document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.carousel-inner img');
  let current = 0;

  setInterval(() => {
    images[current].classList.remove('visible');
    current = (current + 1) % images.length;
    images[current].classList.add('visible');
  }, 5000);
});
