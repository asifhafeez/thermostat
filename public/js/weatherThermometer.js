$(document).ready(function(){
	$( "#city" ).selectmenu();
	$( "select" )
		.change(function() {
			$( "select option:selected" ).each(function() {
				var cityname = $( this ).text();
				$.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=metric&id=524901&APPID=60ca7c94fd1f029e9896819ad8876e76", function(weather) {
				  var temperature = "Current Temperature: " + weather.main.temp + "°C";
				  var name = weather.weather[0].description;
				  var thing = weather.weather[0].icon;
				  var iconPath = "http://openweathermap.org/img/w/" + thing + ".png";

				  $('#weather').html("Weather: " + name + "<br>" + temperature );
			    $('<img src="'+ iconPath +'">').on('load', function() {
						$('#weather-icon').empty();
			 			$(this).width(150).height(150).appendTo('#weather-icon');
					});


				});
			});

		})
		.trigger( "change" );



});
