import { OpenClose } from './openClose';

(() => {
  //   franchise
  const refsFranchise = {
    openModalBtn: document.querySelector('[data-modal-open="franchise-modal"]'),
    closeModalBtn: document.querySelector(
      '#franchise-modal [data-modal-close]'
    ),
    modal: document.querySelector('#franchise-modal'),
  };
  refsFranchise.openModalBtn.addEventListener('click', toggleModalFranchise);
  refsFranchise.closeModalBtn.addEventListener('click', toggleModalFranchise);
  function toggleModalFranchise() {
    document.body.classList.toggle('modal-open');
    refsFranchise.modal.classList.toggle('is_hidden');
    OpenClose();
  }
})();
