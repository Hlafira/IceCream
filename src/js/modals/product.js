import { OpenClose } from './openClose';

(() => {
  // Product

  const refsProduct = {
    openModalBtnS: document.querySelectorAll(
      '[data-modal-open="product-modal"]'
    ),
    closeModalBtn: document.querySelector('#product-modal [data-modal-close]'),
    modal: document.querySelector('#product-modal'),
  };
  refsProduct.openModalBtnS.forEach(element => {
    const name = element.parentElement.querySelector('h4').innerText;

    element.addEventListener('click', () => {
      toggleModalProduct(name);
    });
  });
  //refsProduct.openModalBtnS.addEventListener('click', toggleModalProduct);
  refsProduct.closeModalBtn.addEventListener('click', toggleModalProduct);

  function toggleModalProduct(some) {
    alert(some);
    document.body.classList.toggle('modal-open');
    refsProduct.modal.classList.toggle('is_hidden');
    refsProduct.modal.querySelector('p').innerHTML = some;
    OpenClose();
  }
})();
