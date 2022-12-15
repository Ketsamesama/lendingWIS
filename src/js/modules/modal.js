function Modal(modalSelector, backgroundDiv) {
  const modalDiv = document.querySelector(modalSelector);
  const backDiv = document.querySelector(backgroundDiv);
  const btnModal = document.querySelectorAll('.btn');
  const licenseWrapper = document.querySelector('.license__img-wrapper');
  const modalImg = document.querySelectorAll('.modal img');

  function openModal(i) {
    modalDiv.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    backDiv.classList.add('darken');
    modalImg[i].classList.remove('hide');
  }

  function closeModal() {
    modalDiv.classList.add('hide');
    document.body.style.overflow = '';
    backDiv.classList.remove('darken');
    modalImg.forEach((item) => item.classList.add('hide'));
  }

  ModalEvent();
  function ModalEvent() {
    document.body.addEventListener('click', (e) => {
      //проверяем что клик не по изображению с лицензией, и не  по модальному окну
      if (!modalDiv.contains(e.target) && !licenseWrapper.contains(e.target)) {
        //проверяем открыто ли модальное окно
        if (!modalDiv.classList.contains('hide')) {
          closeModal();
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && !modalDiv.classList.contains('hide')) {
        closeModal();
      }
    });

    btnModal.forEach((item, i) => {
      item.addEventListener('click', () => {
        if (modalDiv.classList.contains('hide')) {
          openModal(i);
        }
      });
    });
  }
}

export default Modal;
