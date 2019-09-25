var popup = document.querySelector('.popup');
var openPopupButton = document.querySelector('.hot_sale');
var closePopupButton = popup.querySelector('.close_popup');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('active');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('active');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('active');
  }
});
