//$(document).ready(function() {
  // $('.header__burger').click(function() {
  //   console.log(123);
  //   $('.header__burger, .header__menu').toggleClass('active');
  //   console.log(456);
  // });
//})
$('.header__burger').click(function(){
  $('.header__burger, .header__menu').toggleClass('active');
$('body').toggleClass('lock');
});

$('.header__menu').click(function(){
 $('.header__burger, .header__menu').removeClass('active');
 $('body').removeClass('lock');
});

// $(document).ready(function(){
//   $('.wrapper').slick({
//     //setting-name: setting-value
//     dots: true,
//     infinite: false,
//     speed: 1000,
//     vertical:true,
//     verticalswiping: true,

//   });
// });



$('[data-fancybox="gallery"]').fancybox({
	loop: true,
  buttons: [
    "close"
  ],
});


// // Initialize the platform object:
// var platform = new H.service.Platform({
//   'apikey': '{BLcoALoeXiUexjUAjjA7KQre5GlOqMRtSQMlXPuYS0Y}'
// });

// // Obtain the default map types from the platform object
// var maptypes = platform.createDefaultLayers();

// // Instantiate (and display) a map object:
// var map = new H.Map(
//   document.getElementById('mapContainer'),
//   maptypes.vector.normal.map,
//   {
//     zoom: 15,
//     center: { lng: 10.4, lat: 10.51 }
//   });

// document.addEventListener
// $('.header__link.isCurrent::before').

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-73.87, 40.66]),
    zoom: 12
  })
});