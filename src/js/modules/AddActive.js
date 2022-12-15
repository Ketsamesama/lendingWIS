function AddActive() {
  const allContainer = document.querySelectorAll('.main-container'),
    allMenuElement = document.querySelectorAll('.menu .menu__list-item a');

  const ACTIVE = 'active';

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  function delActiveAllElement() {
    allMenuElement.forEach((item) => {
      item.classList.remove(ACTIVE);
    });
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.dataset.id;
        delActiveAllElement();
        allMenuElement[id].classList.add(ACTIVE);
      }
    });
  }, options);

  allContainer.forEach((item) => {
    observer.observe(item);
  });
}

export default AddActive;
