(function ($) {

    $.fn.countdown = function( options ) {
      var settings = $.extend({
          date: new Date("Oct 02, 2013").getTime()
      }, options );

      var days, hours, minutes, seconds;
      var that = $(this);
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
        that.html($('<div>', {class: 'days', text: addZerro(days)}))
          .append($('<div>', {class: 'hours colons', text: addZerro(hours)}))
          .append($('<div>', {class: 'minutes colons', text: addZerro(minutes)}))
          .append($('<div>', {class: 'seconds colons', text: addZerro(seconds)}));
      }, 1000);
    };
}( jQuery ));

$(function() {
  $('#countdown_container').countdown();
});