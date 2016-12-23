$(document).ready(function(){

  
  $('#temp').text(thermostat.CurrentTemperature());

  $('#temp-up').click( function() {
      thermostat.up();
      $('#temp').text(thermostat.CurrentTemperature());
  });
  $('#temp-down').click( function() {
      thermostat.down();
      $('#temp').text(thermostat.CurrentTemperature());
  });
  $('#reset').click( function() {
      thermostat.reset();
      $('#temp').text(thermostat.CurrentTemperature());
  });
  $('#save_toggle').click( function() {
      thermostat.PowerSavingToggle();
      $('div#powersave').toggleClass("off");
      $('#temp').text(thermostat.CurrentTemperature());
  });


 
  
});
