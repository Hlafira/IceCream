const lockPaddingValue =
  window.innerWidth - document.querySelector('.hero').offsetWidth + 'px';
const transformationDuration = 250;
function open() {
  document.body.style.setProperty('padding-right', lockPaddingValue);
  if (document.querySelector('.header')) {
    document
      .querySelector('.header')
      .style.setProperty('padding-right', lockPaddingValue);
  }
}

function close(backdrop) {
  document.body.style.setProperty('padding-right', 0);
  if (document.querySelector('.header')) {
    document.querySelector('.header').style.setProperty('padding-right', 0);
  }
  if (backdrop) {
    backdrop.style.setProperty('padding-right', 0);
  }
}

export function OpenClose(backdrop) {
  document.body.classList.contains('modal-open') ? open() : close(backdrop);
}
