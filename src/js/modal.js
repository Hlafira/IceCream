(() => {
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

  function OpenClose(backdrop) {
    document.body.classList.contains('modal-open') ? open() : close(backdrop);
  }

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
    OpenClose();
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
    OpenClose();
  }

  // about

  const refsAbout = {
    openModalBtn: document.querySelector('[about-modal__open-btn]'),

    closeModalBtn: document.querySelector('[about-modal__close-button]'),
    modal: document.querySelector('[about-modal]'),
  };

  refsAbout.openModalBtn.addEventListener('click', toggleModalAbout);
  refsAbout.closeModalBtn.addEventListener('click', toggleModalAbout);

  function toggleModalAbout() {
    document.body.classList.toggle('modal-open');
    refsAbout.modal.classList.toggle('is_hidden');
    OpenClose();
  }

  // franchise

  const refsFranchise = {
    openModalBtn: document.querySelector('[franchise-modal__open-btn]'),

    closeModalBtn: document.querySelector('[franchise-modal__close-button]'),
    modal: document.querySelector('[franchise-modal]'),
  };

  refsFranchise.openModalBtn.addEventListener('click', toggleModalFranchise);
  refsFranchise.closeModalBtn.addEventListener('click', toggleModalFranchise);

  function toggleModalFranchise() {
    document.body.classList.toggle('modal-open');
    refsFranchise.modal.classList.toggle('is_hidden');
    OpenClose();
  }
})();
