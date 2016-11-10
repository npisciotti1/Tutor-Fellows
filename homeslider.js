'use strict';
/* This was found on the W3 website, http://www.w3schools.com/w3css/w3css_slideshow.asp, I understand the mechanics behind the slideshow */

var captions = ['Our Main Area', 'Student Workplace', 'Private Rooms', 'Whiteboarding', 'Hangout Area', 'Common Room'];
var left = document.getElementById('display-left');
var right = document.getElementById('display-right');
var slideIndex = 1;
showDivs(slideIndex);

left.addEventListener('click', onClick);
right.addEventListener('click', onClick);

function onClick(event) {
  if (event.target === left) {
    plusDivs(-1);
  }
  if (event.target === right) {
    plusDivs(1);
  }
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('mySlides');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}
