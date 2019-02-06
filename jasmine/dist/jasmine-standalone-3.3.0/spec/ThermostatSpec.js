describe ("Thermostat", function() {
    var thermostat;
    beforeEach(function() {
        thermostat = new Thermostat()
    });

    it('has property temperature defaulting to 20', function() {
        expect(thermostat.temperature).toBe(20)
    })

    describe ("_up", function() {
        it('increments temperature by one', function() {
            thermostat._up()
            expect(thermostat.temperature).toBe(21)
        })
    })
})