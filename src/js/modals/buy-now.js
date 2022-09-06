// Buy now
import { OpenClose } from './openClose';
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open="modal-buy-now"]'),
    openModalBtnMenu: document.querySelector('[data-modal-open-menu]'),
    closeModalBtn: document.querySelector('#modal-buy-now [data-modal-close]'),
    modal: document.querySelector('#modal-buy-now'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMenu.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is_hidden');
    OpenClose();
  }
})();
