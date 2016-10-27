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


    it('is switched on by default', function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('can be switched on', function() {
      thermostat.powerSavingSwitch();
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('maximium temperature is 25 when on', function() {
      expect(thermostat.maxTemp).toBe(25);
    });

    it('can be switched off', function() {
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it('maximium temperature is 32 when off', function() {
      thermostat.powerSavingSwitch();
      expect(thermostat.maxTemp).toBe(32);
    });

  });

  describe('temperature extremes', function() {

    it('cannot go below the minimum temperature', function() {
      expect(function(){ thermostat.downTemp(23) }).toThrow(new Error(`Cannot go below ${thermostat.minTemp} degrees!`))
    });

    it('cannot go above the maximum temperature', function() {
      expect(function(){ thermostat.upTemp(23) }).toThrow(new Error(`Cannot go above ${thermostat.maxTemp} degrees!`))
    });
  });

});
