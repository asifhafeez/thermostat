function Thermostat() {
  this.temperature = 20;
  this.maxTemperature = 25;
  this.minTemperature = 10;
  this.powerSavingMode = true;
}

Thermostat.prototype.CurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.isPowerSavingOn = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.up = function() {
  if (this.temperature >= this.maxTemperature) {
    return;
  }
  else {
    this.temperature++;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature <= this.minTemperature) {
    return;
  }
  else {
    this.temperature--;
  }
};

Thermostat.prototype.PowerSavingToggle = function() {
  if (this.isPowerSavingOn() === true){
    this.maxTemperature = 32;
    this.powerSavingMode = false;
  }
  else {
    this.maxTemperature = 25;
    this.powerSavingMode = true;
  }
  if (this.CurrentTemperature() > 25){
    this.temperature = 25;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.display = function() {
  if(this.temperature < 18) {
    return 'Green';
  }
  else if(this.temperature > 25) {
    return 'Red';
  }
  else {
    return 'Yellow';
  }
};
