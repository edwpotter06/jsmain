const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
