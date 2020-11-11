const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');

let currentPhoto;
let movingPhoto;
const MAX = -2060;
const MIN = 0;
const WIDTH = 1030;
let i_move = null;
let doubleclike = true;
nextBtn.addEventListener('click', function() {
  if(doubleclike){
    doubleclike = false;
    if (currentPhoto > MAX) {
      moveSlieNext();
    }
    doubleclike = true;
}
});

function moveSlieNext() {
  let movingPhoto = currentPhoto;
  i_move = setInterval(function() {
    if (currentPhoto == movingPhoto - WIDTH) {
      clearInterval(i_move);
    } else {
      currentPhoto = currentPhoto - 10;
      slider.style.left = currentPhoto + "px";
    }

  }, 1);
}

prevBtn.addEventListener('click', function() {

  if(doubleclike){
    doubleclike = false;
    if (currentPhoto < MIN) {
      moveSliePrev();
    }
    doubleclike = true;
}
});

function moveSliePrev() {
  movingPhoto = currentPhoto;
  i_move = setInterval(function() {
    if (currentPhoto == movingPhoto + WIDTH) {
      clearInterval(i_move);
    } else {
      currentPhoto = currentPhoto + 10;
      slider.style.left = currentPhoto + "px";
    }

  }, 1);
}

function init() {
  currentPhoto = 0;
  slider.style.left = currentPhoto + "px";

}
init();
