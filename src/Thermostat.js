function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.powerSavingMode = false;
  this.maxTemp = 32;
};

Thermostat.prototype.upTemp = function(value) {
	this.temperature += value;
};

Thermostat.prototype.downTemp = function(value) {
	this.temperature -= value;
};

Thermostat.prototype.powerSavingSwitch = function() {
	this.powerSavingMode = !this.powerSavingMode
  this.setMaxTemp()
};

Thermostat.prototype.setMaxTemp = function(value) {
  this.maxTemp = this.powerSavingMode ? 25 :  32;
};
