const burger = document?.querySelector('.burger');
const header__nav = document?.querySelector('.header__nav');
const body = document.body;
const header__navItems = header__nav?.querySelectorAll('a');

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  header__nav.classList.toggle('nav--visible');

  if (header__nav.classList.contains('nav--visible')) {
    header__nav.style.transition = 'transform .5s ease-in-out';
  }
});

header__nav.addEventListener('transitionend', function () {
  if (!header__nav.classList.contains('nav--visible')) {
    header__nav.style.transition = '';
  }
})

header__navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    header__nav.classList.remove('nav--visible');
  });
});
