describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start with a temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase temperature with up", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should reduce temperature with down", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it("has a minimum temperature of 10 degrees", function() {
    for (i = 1; i <= 20; i++){
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it("has a maximum temperature of 25 degrees when power saving mode is on", function() {
    thermostat.PowerSavingOn();
    for (i = 1; i <= 20; i++){
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it("has a maximum temperature of 32 degrees when power saving mode is off", function() {
    thermostat.PowerSavingOff();
    for (i = 1; i <= 20; i++){
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32);
  });

  it("should reset temperature to 20 with reset", function() {
    thermostat.PowerSavingOff();
    for (i = 1; i <= 20; i++){
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('displays green based on usage', function(){
    for (var i = 1; i <= 3; i++){
      thermostat.down();
    }
    expect(thermostat.display()).toEqual('Green');
  });

  it('displays yellow based on usage', function(){
    expect(thermostat.display()).toEqual('Yellow');
  });

  it('displays red based on usage', function(){
    thermostat.PowerSavingOff();
    for (var i = 1; i <= 6; i++){
      thermostat.up();
    }
    expect(thermostat.display()).toEqual('Red');
  });

});
