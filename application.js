$( document ).ready(function() {
var thermostat = new Thermostat();
document.getElementById("temperature-display").innerHTML = thermostat.temperature;
  $('.energy-use').text(thermostat.energyUse);
  $( "#down-temp" ).click(function() {
    thermostat.downTemp(1)
    $('.energy-use').text(thermostat.energyUse);
	    energyColor();
    $("#temperature-display").text(thermostat.temperature)
  });
  $( "#up-temp" ).click(function() {
    thermostat.upTemp(1)
    $('.energy-use').text(thermostat.energyUse);
	    energyColor();
    $("#temperature-display").text(thermostat.temperature)
  });
  $( ".power-saving-mode" ).click(function() {
    thermostat.powerSavingSwitch()
    $('.energy-use').text(thermostat.energyUse);
	    energyColor();
    $("#temperature-display").text(thermostat.temperature)
    
  });
  $( "#reset-temp" ).click(function() {
    thermostat.resetTemp()
	$('.energy-use').text(thermostat.energyUse);
	    energyColor();
    $("#temperature-display").text(thermostat.temperature)
  });

  function energyColor() {
    if(thermostat.energyUse === "high-usage") {
      $('.energy-use').css('background-color', 'red');
    }
    else if(thermostat.energyUse === "med-usage") {
      $('.energy-use').css('background-color', 'black');
    }
    else {
      $('.energy-use').css('background-color', 'green');
    }
  }

});


