var photos = [
  'photo/001.jpg',
  'photo/002.jpg',
  'photo/003.jpg',
  'photo/004.jpg',
  'photo/005.jpg'
];


var miniatures = document.querySelectorAll('.preview_photo');

var fullPhoto = document.querySelector('.photo_full');

var addClick = function (miniature, photo) {
  miniature.addEventListener('click', function () {
    addClass(miniature, photo);
  });
};

for (var i = 0; i < miniatures.length; i++) {
  addClick(miniatures[i], photos[i]);
};

var addClass = function (miniature, photo) {
  for (var j=0; j < miniatures.length; j++) {
      miniatures[j].classList.remove('active');
    }

    fullPhoto.src = photo;
    miniature.classList.add('active');
};

var defaultPhoto = addClass(miniatures[0], photos[0]);