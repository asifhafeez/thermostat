$(document).ready(function(){

$('#temp').text(thermostat.CurrentTemperature());

  $('#temp-up').click( function() {
      thermostat.up();
      $('#temp').text(thermostat.CurrentTemperature());
      updateThermometer();
  });
  $('#temp-down').click( function() {
      thermostat.down();
      $('#temp').text(thermostat.CurrentTemperature());
      updateThermometer();
  });
  $('#reset').click( function() {
      thermostat.reset();
      $('#temp').text(thermostat.CurrentTemperature());
      updateThermometer();
  });
  $('#save_toggle').click( function() {
      thermostat.PowerSavingToggle();
      $('div#powersave').toggleClass("off");
      $('#temp').text(thermostat.CurrentTemperature());
      updateThermometer();
  });
});  
