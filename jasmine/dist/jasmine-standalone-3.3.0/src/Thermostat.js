function Thermostat () {
    this.DEFAULT_TEMP = 20
    this.temperature = this.DEFAULT_TEMP
    this.MINIMUM_TEMP = 10
    this.powerSaver = true
    this.maxtemp = 25
};

Thermostat.prototype.up = function() {
    if(this.temperature >= this.maxtemp) {
        try {
            throw new Error('cannot increase above 25 degrees when power saver is on')
        }
        catch(err) {
            document.getElementById("errorcatcher").innerHTML = "Can't increase beyond max 25/32" 
        }
    } else { this.temperature ++ }
}

Thermostat.prototype._down = function() {
    if(this.temperature <= this.MINIMUM_TEMP) {
        try {
            throw new Error('cannot reduce below 10 degrees')
        }
        catch(err) {
            document.getElementById("errorcatcher").innerHTML = 'Min always 10' 
        }
    } else {
        this.temperature --
    }  
}

Thermostat.prototype._powerSaveOff = function() {
    this.powerSaver = false
    this.maxtemp = 32
}

Thermostat.prototype._powerSaveOn = function() {
    this.powerSaver = true
    this.maxtemp = 25
}

Thermostat.prototype._reset = function() {
    this.temperature = this.DEFAULT_TEMP
}

Thermostat.prototype._usage = function() {
    if (this.temperature < 18) {
        return 'low-usage'
    } else if (this.temperature < 25) {
        return 'medium-usage'
    }    if (this.temperature >= 25) {
        return 'high-usage'
    }
}