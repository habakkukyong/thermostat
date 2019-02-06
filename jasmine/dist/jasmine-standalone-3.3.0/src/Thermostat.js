function Thermostat () {
    this.temperature = 20
};

Thermostat.prototype._up = function() {
    this.temperature ++
}
