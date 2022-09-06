const hero__title = document.querySelector('.hero__title');
const hero__img = document.querySelector('.hero__main-img');

hero__title.classList.add('animate__animated', 'animate__zoomInDown');
hero__title.style.setProperty('--animate-duration', '1.5s');

hero__title.addEventListener('animationend', () => {
  hero__img.classList.add('visible');

  hero__img.classList.add('animate__animated', 'animate__zoomIn'); //'animate__zoomIn');
  hero__img.style.setProperty('--animate-duration', '0.5s');
});
