function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.powerSavingMode = false;
};

Thermostat.prototype.upTemp = function(value) {
	this.temperature += value;
};

Thermostat.prototype.downTemp = function(value) {
	this.temperature -= value;
};

Thermostat.prototype.powerSavingOn = function() {
	this.powerSavingMode = true;
};

