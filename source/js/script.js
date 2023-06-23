/* в этот файл добавляет скрипты*/
const menuToggle = document.querySelector('.main-header__toggle');
const header = document.querySelector('.main-header');

menuToggle.addEventListener('click', () => {
  header.classList.toggle('main-header--closed');
  header.classList.toggle('main-header--open');
});
