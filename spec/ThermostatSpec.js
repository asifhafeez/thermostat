describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
  	thermostat = new Thermostat();
  });

  describe("Temperature", function() {
    
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toBe(20);
    });

    it('can turn up the temperature', function(){
      thermostat.upTemp(1)
    	expect(thermostat.temperature).toBe(21)
    });

    it('can turn down the temperature', function(){
      thermostat.downTemp(1)
    	expect(thermostat.temperature).toBe(19)
    });

    it('has a minimum temperature of 10 degrees', function(){
    	expect(thermostat.minTemp).toBe(10)
    });

  });

  describe('Power saving mode', function() {
    

    it('is switched off by default', function() {
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it('can be switched on', function() {
      thermostat.powerSavingOn();
      expect(thermostat.powerSavingMode).toBe(true);
    });
    
  });
 
});