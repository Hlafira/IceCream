import { OpenClose } from './openClose';

(() => {
  // about

  const refsAbout = {
    openModalBtn: document.querySelector('[data-modal-open="modal-about"]'),
    closeModalBtn: document.querySelector('#modal-about [data-modal-close]'),
    modal: document.querySelector('#modal-about'),
  };

  refsAbout.openModalBtn.addEventListener('click', toggleModalAbout);
  refsAbout.closeModalBtn.addEventListener('click', toggleModalAbout);

  function toggleModalAbout() {
    document.body.classList.toggle('modal-open');
    refsAbout.modal.classList.toggle('is_hidden');
    OpenClose();
  }
})();
