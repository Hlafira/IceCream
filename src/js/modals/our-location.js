import { OpenClose } from './openClose';

(() => {
  // Our location
  const refsOurLocation = {
    openModalBtn: document.querySelector('[data-modal-open="location-modal"]'),
    closeModalBtn: document.querySelector('#location-modal [data-modal-close]'),
    modal: document.querySelector('#location-modal'),
  };

  refsOurLocation.openModalBtn.addEventListener('click', toggleModalLocation);
  refsOurLocation.closeModalBtn.addEventListener('click', toggleModalLocation);

  function toggleModalLocation() {
    document.body.classList.toggle('modal-open');
    refsOurLocation.modal.classList.toggle('is_hidden');
    OpenClose();
  }
})();
