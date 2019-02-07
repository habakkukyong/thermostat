$ (document).ready(function() {
    var thermostat = new Thermostat();
    $('#temp').text(thermostat.temperature);
    $('#powerSaveStatus').text(thermostat.powerSaver);

    $('#tempUp').click(function() {
        thermostat.up();
        $('#temp').text(thermostat.temperature);
    });

    $('#tempDown').click(function() {
        thermostat._down();
        $('#temp').text(thermostat.temperature);
    });

    $('#powerSaveOn').click(function() {
        thermostat._powerSaveOn();
        $('#powerSaveStatus').text(thermostat.powerSaver);
    });

    $('#powerSaveOff').click(function() {
        thermostat._powerSaveOff();
        $('#powerSaveStatus').text(thermostat.powerSaver);
    });

    $('#reset').click(function() {
        thermostat._reset();
        $('#temp').text(thermostat.temperature);
    });

    $('#magic').click(function() {
        $(document.body).css('background-color', 'lightblue')
    });

    $('#normal').click(function() {
        $(document.body).css('background-color', 'whitesmoke')
    });

    $('#daring').click(function() {
        $(document.body).css('background-color', 'brown')
    });

    $('#mysterious').click(function() {
        $('#daring').addClass("shabby")
    });

    $('#contemporary').hover(function() {
        $('#daring').removeClass("shabby")
    });

    function getPeople() {
        $.get("https://async-workshops-api.herokuapp.com/people", function(response) {
          response.forEach(function(person) {
            console.log(person.name)
          });
        });
    }

    getPeople()
});