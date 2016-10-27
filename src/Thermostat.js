function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.powerSavingMode = true;
  this.setMaxTemp()
};

Thermostat.prototype.upTemp = function(value) {
	if ((this.temperature + value) > this.maxTemp ) {
	  throw new Error(`Cannot go above ${this.maxTemp} degrees!`)
	};
	this.temperature += value;
};

Thermostat.prototype.downTemp = function(value) {
	if ((this.temperature - value) < this.minTemp ) {
	  throw new Error(`Cannot go below ${this.minTemp} degrees!`)
	};
  this.temperature -= value;
};

Thermostat.prototype.powerSavingSwitch = function() {
	this.powerSavingMode = !this.powerSavingMode
  this.setMaxTemp()
};

Thermostat.prototype.setMaxTemp = function(value) {
  this.maxTemp = this.powerSavingMode ? 25 :  32;
};
