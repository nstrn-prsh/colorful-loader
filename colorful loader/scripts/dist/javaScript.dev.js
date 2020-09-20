"use strict";

var background = document.querySelector('body');
background.addEventListener('mousemove', function (e) {
  var clr = (e.clientX + e.clientY) / 10;
  background.style.backgroundColor = "rgba(".concat(e.clientX, ",").concat(clr, ",").concat(e.clientY, ",0.5)");
});
var r = 100,
    g = 100,
    b = 100,
    a = 1;
var color = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")"); //main circle for changing color

var circleUp = document.querySelector('#head1');
circleUp.style.borderColor = color;
var circleDown = document.querySelector('#head2');
circleDown.style.borderColor = color; //right inputs

var first = document.querySelector('#now1');
first.addEventListener('input', function (e) {
  var color = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
  r = e.target.value;

  if (r.length <= 3 && 0 <= r && r <= 255) {
    circleUp.style.borderColor = color;
    circleDown.style.borderColor = color;
  } else {
    alert('incorrect number');
    e.target.value = "";
  }
});
var second = document.querySelector('#now2');
second.addEventListener('input', function (e) {
  var color = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
  g = e.target.value;

  if (g.length <= 3 && 0 <= g && g <= 255) {
    circleUp.style.borderColor = color;
    circleDown.style.borderColor = color;
  } else {
    alert('incorrect number');
    e.target.value = "";
  }
});
var third = document.querySelector('#now3');
third.addEventListener('input', function (e) {
  var color = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
  b = e.target.value;

  if (b.length <= 3 && 0 <= b && b <= 255) {
    circleUp.style.borderColor = color;
    circleDown.style.borderColor = color;
  } else {
    alert('incorrect number');
    e.target.value = "";
  }
});
var fourth = document.querySelector('#now4');
fourth.addEventListener('input', function (e) {
  var color = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
  a = e.target.value;

  if (a.length <= 1 && 0 <= a && a <= 1) {
    circleUp.style.borderColor = color;
    circleDown.style.borderColor = color;
  } else {
    alert('incorrect number');
    e.target.value = "";
  }
});
var button = document.querySelector('#color-set');
button.addEventListener('click', function (e) {
  var color = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
  first.value = Math.round(Math.random() * 255);
  r = first.value;
  second.value = Math.round(Math.random() * 255);
  g = second.value;
  third.value = Math.round(Math.random() * 255);
  b = second.value;
  fourth.value = Math.round(Math.random() * 1);
  a = second.value;
  circleUp.style.borderColor = color;
  circleDown.style.borderColor = color;
});