"use strict";

$(document).ready(function () {
  $('a.header__link').click(function () {
    $(this).addClass('isActive');
    $('a.isCurrent').removeClass('isCurrent');
    $('a.isActive').addClass('isCurrent');
    $('a.isCurrent').removeClass('isActive');
  });
  $('li.gallery__item').click(function () {
    $(this).addClass('isActive');
    $('li.activeOption').removeClass('activeOption');
    $('li.isActive').addClass('activeOption');
    $('li.activeOption').removeClass('isActive');

    if ($(this).attr('id') == "big") {
      $('div.images a.big').removeClass('noActive').css('data-fancybox', 'gallery');
      $('div.images a.little').addClass('noActive');
    }

    if ($(this).attr('id') == "little") {
      $('div.images a.little').removeClass('noActive').css('data-fancybox', 'gallery');
      $('div.images a.big').addClass('noActive');
    }

    if ($(this).attr('id') == "all") {
      $('div.images a').removeClass('noActive');
    }
  });
  $('li.dot').click(function () {
    $(this).addClass('isActive');
    $('li.activeSlide').removeClass('activeSlide');
    $('li.isActive').addClass('activeSlide');
    $('li.activeSlide').removeClass('isActive');

    if ($(this).attr('id') == "slide1") {
      $(".main").css('background-image', "linear-gradient(45deg, rgba(85,183,255,0.94), rgba(126,90,255,0.9)), url('source/img/bgHeaderMuar.png')");
    }

    if ($(this).attr('id') == "slide2") {
      $(".main").css({
        'background-image': "linear-gradient(180deg, rgba(245,232,22,0.83) 0%, rgba(36,120,252,1) 100%), url('source/img/3.jpg')",
        'transition': 'all 0.5s ease 0s'
      });
    }

    if ($(this).attr('id') == "slide3") {
      $(".main").css('background-image', "linear-gradient(30deg, rgba(12,173,15,0.8), rgba(115,46,205,0.9)), url('source/img/4.jpg')");
    }

    if ($(this).attr('id') == "slide4") {
      $(".main").css('background-image', "linear-gradient(330deg, rgba(245,232,22,0.85) 0%, rgba(121,9,86,0.86) 35%, rgba(36,252,46,1) 100%), url('source/img/1.jpg')");
    }

    if ($(this).attr('id') == "slide5") {
      $(".main").css('background-image', "linear-gradient(306deg, rgba(34,195,117,0.88) 0%, rgba(253,45,213,0.95) 100%), url('source/img/2.jpg')");
    }
  });
  $("a.link__down").click(function () {
    $('html, body').animate({
      scrollTop: $("#gallery").offset().top
    }, 1000);
  });
  $("a.header__link").click(function (event) {
    event.preventDefault();
    var link = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(link).offset().top
    }, 1000);
  });
  $('.header__burger').click(function () {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__menu').click(function () {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});
var form = document.querySelector('.form__callback');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var name = form.querySelector('.form__name');
  var email = form.querySelector('.form__email');
  var noFill = form.querySelectorAll('.fill');
  var errors = form.querySelectorAll('.error');
  var reqEmail = /.+@.+\..+/i;

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  for (var i = 0; i < noFill.length; i++) {
    if (!noFill[i].value) {
      console.log('field is blank', noFill[i]);
      var error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.innerHTML = 'Enter valid data';
      form[i].parentElement.insertBefore(error, noFill[i]);
    }
  }

  if (reqEmail.test(email.value) == false) {
    event.preventDefault();
    console.log(email.value);
    var error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = "Email isn't correct";
    email.parentElement.insertBefore(error, email);
  }
});
$('[data-fancybox="gallery"]').fancybox({
  loop: true,
  buttons: ["close"]
});
var map = new ol.Map({
  target: 'map',
  layers: [new ol.layer.Tile({
    source: new ol.source.OSM()
  })],
  view: new ol.View({
    center: ol.proj.fromLonLat([-73.87, 40.66]),
    zoom: 12
  })
});