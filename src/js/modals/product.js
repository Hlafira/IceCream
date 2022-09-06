import { OpenClose } from './openClose';

(() => {
  // Product
  const refsProduct = {
    openModalBtn: document.querySelector('[data-modal-open="product-modal"]'),
    closeModalBtn: document.querySelector('#product-modal [data-modal-close]'),
    modal: document.querySelector('#product-modal'),
  };

  refsProduct.openModalBtn.addEventListener('click', toggleModalProduct);
  refsProduct.closeModalBtn.addEventListener('click', toggleModalProduct);

  function toggleModalProduct() {
    document.body.classList.toggle('modal-open');
    refsOurLocation.modal.classList.toggle('is_hidden');
    OpenClose();
  }
})();
