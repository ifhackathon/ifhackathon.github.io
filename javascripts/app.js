//countdown
(function ($) {

    $.fn.countdown = function( options ) {
      var settings = $.extend({
          date: new Date("Oct 26, 2013 12:00").getTime()
      }, options );
      var days, hours, minutes, seconds;
      $(this).html($('<div>', {class: 'days', text: '00'}))
        .append($('<div>', {class: 'hours colons', text: '00'}))
        .append($('<div>', {class: 'minutes colons', text: '00'}))
        .append($('<div>', {class: 'seconds colons', text: '00'}));

        var $days = $('.days');
        var $hours = $('.hours');
        var $minutes = $('.minutes');
        var $seconds = $('.seconds');

      setInterval(function () {
        var current_date = new Date().getTime();
        var seconds_left = (settings.date - current_date) / 1000;

        days = parseInt((seconds_left / 86400),10);
        seconds_left = seconds_left % 86400;

        hours = parseInt((seconds_left  / 3600), 10);
        seconds_left = seconds_left % 3600;

        minutes = parseInt((seconds_left / 60),10);
        seconds = parseInt((seconds_left % 60), 10);

        var addZerro = function(time) {
          if (time < 10) {
            return '0'+time;
          }
          return time;
        };
        $days.text(addZerro(days));
        $hours.text(addZerro(hours));
        $minutes.text(addZerro(minutes));
        $seconds.text(addZerro(seconds));
      }, 1000);
    };
}( jQuery ));

//maps
var init = function(){
    var myOptions = {
        zoom: 14,
        scrollwheel: false,
        zoomControl: false,
        streetViewControl: false,
        scaleControl: false,
        disableDefaultUI: true,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
        var pinkParksStyles = [
            {
                featureType: "all",
                stylers: [
                    { hue: "#123fff" },
                    { saturation: "-100" },
                    { lightness: "0" },

                ]
            },
            {
                featureType: "road",
                stylers: [
                    { hue: "#123000" },
                    { saturation: "-100" }
                ]
            }
        ];
map.setOptions({styles: pinkParksStyles});
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': 'Івано-Франківськ, Січових Стрільців 34'}, function(results, status){
        if (status == google.maps.GeocoderStatus.OK){
            var conf ={
                map: map,
                position: results[0].geometry.location,
            };
            var centerLatLng;
            if ($(window).width() < 650) {
                centerLatLng = results[0].geometry.location;
            } else{
                centerLatLng = new google.maps.LatLng(48.917316, 24.727083);
                conf.icon = 'https://dl.dropboxusercontent.com/u/1189063/marker.png';
            }

            map.setCenter(centerLatLng);
            var marker = new google.maps.Marker(conf);
        }
    });
};
google.maps.event.addDomListener(window, 'load', init());


$(function() {
  $('#countdown_container').countdown();
  if ($(window).width() > 650) {
        var height = $('.slide4').height()/2 - 102 - 95;
        $('.map-data').css('top', height);
    }

  //regform
  $('#registration').on('submit', function(event){
      $('.btn-submit').prop('disabled', true);
      event.preventDefault();
      var values = $(this).serialize(),
          url    = $(this).attr('action'),
          jqxhr = $.post(url, values, function(){}, 'text');

      $('.btn-submit').prop('disabled','disabled').addClass('loading');

      jqxhr.always(function(jqXHR, textStatus, errorThrown){
        $('.slide3').addClass('success');
      });
  });

  //animations
  $('.slide2 h3, .slide2 .first-line, .slide2 .second-line, .slide2 .third-line, .slide2 .highlight, .slide2 .fifth-line, .slide2 .time-left-label').css('position', 'relative');

  TweenMax.fromTo($('.logo-wrapper'),2,{css:{opacity:0, right: '-100%', bottom: '-100%'}}, {css:{opacity:1, right: '0', bottom: '0'}});

  var controller = $.superscrollorama({
    // triggerAtCenter: false,
    // playoutAnimations: true
  });

  controller.addTween('.slide2 h3',
    TweenMax.from($('.slide2 h3'),1,{
      css:{right: '-200%', opacity: 0}}));
  controller.addTween('.slide2 h3',
    TweenMax.from($('.slide2 .first-line'),1.2,{
      css:{left: '-200%', opacity: 0}}));
  controller.addTween('.slide2 h3',
    TweenMax.from($('.slide2 .second-line'),1.4,{
      css:{right: '-200%', opacity: 0}}));
  controller.addTween('.slide2 h3',
    TweenMax.from($('.slide2 .third-line'),1.6,{
      css:{left: '-200%', opacity: 0}}));
  controller.addTween('.slide2 h3',
    TweenMax.from($('.slide2 .highlight'),1.8,{
      css:{right: '-200%', opacity: 0}}));
  controller.addTween('.slide2 h3',
    TweenMax.from($('.slide2 .fifth-line'),2,{
      css:{left: '-200%', opacity: 0}}));
  controller.addTween('.slide2 h3',
    TweenMax.from($('.slide2 .time-left-label'),2.2,{
      css:{right: '-200%', opacity: 0}}));

  controller.addTween('.mackbook',
    TweenMax.from($('.mackbook'),1,{
      css:{left: '-200%'}}));


  $(document).on('click', '.nav',
  function(e){
    e.preventDefault();
    var dataslide = $(this).attr('data-slide');
    $('html,body').animate({
      scrollTop: $('div[data-slide="' + dataslide + '"]').offset().top
    }, 1500, 'easeInOutQuint');
  });
});