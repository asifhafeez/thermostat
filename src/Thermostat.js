function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.powerSavingMode = true;
  this.setMaxTemp()
  this.setEnergyUse()
};

Thermostat.prototype.upTemp = function(value) {
	if ((this.temperature + value) > this.maxTemp ) {
	  throw new Error(`Cannot go above ${this.maxTemp} degrees!`)
	};
	this.temperature += value;
  this.setEnergyUse()
};

Thermostat.prototype.downTemp = function(value) {
	if ((this.temperature - value) < this.minTemp ) {
	  throw new Error(`Cannot go below ${this.minTemp} degrees!`)
	};
  this.temperature -= value;
  this.setEnergyUse()
};

Thermostat.prototype.powerSavingSwitch = function() {
	this.powerSavingMode = !this.powerSavingMode
  this.setMaxTemp()
  this.resetTemp()
};

Thermostat.prototype.setMaxTemp = function() {
  this.maxTemp = this.powerSavingMode ? 25 :  32;
};

Thermostat.prototype.resetTemp = function() {
	this.temperature = 20
  this.setEnergyUse()
};

Thermostat.prototype.setEnergyUse = function () {
  if (this.temperature < 18) {
    this.energyUse = 'low-usage'
  } else if (this.temperature < 25) {
    this.energyUse =  'med-usage'
  } else {
    this.energyUse =  'high-usage'
  }
};
