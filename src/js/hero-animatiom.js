const element = document.querySelector('.hero__title');
const element2 = document.querySelector('.hero__main-img');

element2.style.setProperty('opacity', '0');

element.classList.add('animate__animated', 'animate__zoomInDown');
element.style.setProperty('--animate-duration', '0.1s');

element.addEventListener('animationend', () => {
  // do something
  //   const element2 = document.querySelector('.hero__main-img');
  element2.style.setProperty('opacity', '1');
  element2.classList.add('animate__animated', 'animate__zoomIn');
  element2.style.setProperty('--animate-duration', '0.3s');
});
