(() => {
  // Buy now
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnMenu: document.querySelector('[data-modal-open-menu]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMenu.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is_hidden');
  }

  // Our location
  const refsOurLocation = {
    openModalBtn: document.querySelector('[location-modal__open-btn]'),

    closeModalBtn: document.querySelector('[location-modal__close-button]'),
    modal: document.querySelector('[location-modal]'),
  };

  refsOurLocation.openModalBtn.addEventListener('click', toggleModalLocation);
  refsOurLocation.closeModalBtn.addEventListener('click', toggleModalLocation);

  function toggleModalLocation() {
    document.body.classList.toggle('modal-open');
    refsOurLocation.modal.classList.toggle('is_hidden');
  }
})();
