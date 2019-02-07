describe ("Thermostat", function() {
    var thermostat;
    beforeEach(function() {
        thermostat = new Thermostat()
    });

    it('has property temperature default', function() {
        expect(thermostat.temperature).toBe(thermostat.DEFAULT_TEMP)
    })

    it('has a minimum temperature of 10 degrees', function() {
        expect(thermostat.MINIMUM_TEMP).toBe(10)
    })

    it('has a default power saving mode setting-- ON', function() {
        expect(thermostat.powerSaver)
    })

    it('has property maxtemp which is 25 when powersaving and 32 when not', function() {
        expect(thermostat.maxtemp).toBe(25)
        thermostat._powerSaveOff()
        expect(thermostat.maxtemp).toBe(32)
    })

    describe ("up", function() {
        it('increments temperature by one', function() {
            thermostat.up()
            expect(thermostat.temperature).toBe(21)
        })
        it('has a maximum temp of 25 degrees when power saver is on', function() {
            for (let counter = 0; counter < 5; counter++){
                thermostat.up()
            };
            expect(function(){thermostat.up();}).toThrowError('cannot increase above 25 degrees when power saver is on')
        })
    })

    describe ('_down', function() {
        it('decrements temperature by one', function() {
            thermostat._down()
            expect(thermostat.temperature).toBe(19)
        })

        it('cannot be reduced below the mimimum temperature', function() {
            for (let counter = 0; counter < 10; counter++){
                thermostat._down()
            };
            expect(function(){thermostat._down();}).toThrowError('cannot reduce below 10 degrees')
        })
    })

    describe ('_powerSaveOff', function() {
        it("sets powerSaver to 'false'", function() {
            thermostat._powerSaveOff()
            expect(thermostat.powerSaver).toBe(false)
        })
    })

    describe ('_powerSaveOn', function() {
        it("sets powerSaver to 'true'", function() {
            thermostat._powerSaveOff()
            thermostat._powerSaveOn()
            expect(thermostat.powerSaver)
        })
    })

    describe ('_reset', function() {
        it("resets the temperature to default temperature", function() {
            thermostat._down()
            thermostat._reset()
            expect(thermostat.temperature).toBe(thermostat.DEFAULT_TEMP)
        })
    })

    describe ('_usage', function() {
        it("evaluates usage as LOW when temp is below 18", function() {
            thermostat.temperature = 17
            expect(thermostat._usage()).toBe('low-usage')
        })
        it("evaluates usage as MEDIUM when temp is above 18 and below 25", function() {
            thermostat.temperature = 24
            expect(thermostat._usage()).toBe('medium-usage')          
        })
        it("evaluates usage as HIGH when temp is above 25", function() {
            thermostat.temperature = 26
            expect(thermostat._usage()).toBe('high-usage')           
        })
    })
}) 