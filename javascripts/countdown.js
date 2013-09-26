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

        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left  / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        var addZerro = function(time) {
          if (time < 10) {
            return '0'+time;
          }
          return time;
        }
        $days.text(addZerro(days));
        $hours.text(addZerro(hours));
        $minutes.text(addZerro(minutes));
        $seconds.text(addZerro(seconds));
      }, 1000);
    };
}( jQuery ));

$(function() {
  $('#countdown_container').countdown();
});