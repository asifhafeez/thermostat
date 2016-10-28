$(document).ready(function(){
	

  $.get("http://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&id=524901&APPID=60ca7c94fd1f029e9896819ad8876e76", function(weather) {
	  var temperature = "Current temperature: " + weather.main.temp
	  var name = weather.weather[0].description
	  var thing = weather.weather[0].icon
	  var iconPath = "http://openweathermap.org/img/w/" + thing + ".png"
	  $('#weather').html("Description: " + name + " " + temperature );
    $('<img src="'+ iconPath +'">').on('load', function() {
 			$(this).width(100).height(100).appendTo('#weather-icon');
		});


	});
});
