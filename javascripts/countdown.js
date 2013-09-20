$(document).ready(function(){
  // set the date we're counting down to
  var target_date = new Date("Oct 02, 2013").getTime();

  // variables for time units
  var days, hours, minutes, seconds;

  // get tag element
  var countdown = $('#countdown_container');
  // update the tag with id "countdown" every 1 second
  setInterval(function () {

      // find the amount of "seconds" between now and target
      var current_date = new Date().getTime();
      var seconds_left = (target_date - current_date) / 1000;

      // do some time calculations
      days = parseInt(seconds_left / 86400);
      seconds_left = seconds_left % 86400;

      hours = parseInt(seconds_left / 3600);
      seconds_left = seconds_left % 3600;

      minutes = parseInt(seconds_left / 60);
      seconds = parseInt(seconds_left % 60);

      var addZerro = function(time) {
        if (time < 10) {
          return '0';
        }
        return '';
      }

      zeroHours = addZerro(hours);
      zeroMinutes = addZerro(minutes);
      zeroSeconds = addZerro(seconds);

      // format countdown string + set tag value
      var text = "<span>" + days + "<img src='images/colon.png'/><i id='days'>днів</i></span><span>" + zeroHours + hours + "<img src='images/colon.png'/><i>годин</i></span><span>" + zeroMinutes+minutes + "<img src='images/colon.png'/><i>хвилин</i></span><span>" + zeroSeconds+seconds + "<i>секунд</i></span>";
      countdown.html(text)

  }, 1000);
  // $('#countdown_container').html()
})