const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.menu');
const btnBurger = document.querySelector('#burger-menu');

ipad.addListener(validation);

function validation(event) {
    if (event.matches) {
        btnBurger.addEventListener('click', hideShow);
    }
}
validation(ipad);

function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}