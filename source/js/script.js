//------Переключение меню--------

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

//------Вызов всплывающего окна-------

var cartButton = document.querySelectorAll('.cart-button');
var popupCart = document.querySelector('.popup-cart');
var cartFormButton = document.querySelector('.cart-form__button');

for (var i = 0; i < cartButton.length; i++) {
  cartButton[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    popupCart.classList.add('popup-cart--opened');
  })
}

cartFormButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupCart.classList.remove('popup-cart--opened');
})
