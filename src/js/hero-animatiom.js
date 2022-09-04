const element = document.querySelector('.hero__title');
const element2 = document.querySelector('.hero__main-img');

element.classList.add('animate__animated', 'animate__zoomInDown');
element.style.setProperty('--animate-duration', '0.1s');

element.addEventListener('animationend', () => {
  // element2.classList.add('visible');

  element2.classList.add('animate__animated', 'animate__fadeInUp'); //'animate__zoomIn');
  element2.style.setProperty('--animate-duration', '0.3s');
});
