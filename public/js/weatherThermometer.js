$(document).ready(function(){
  $.get("http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=e61318947b3809669f6c6fef00eb1cac", function(weather) {
  $('#weather').text(weather.main.temp);
});
});
