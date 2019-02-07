$ (document).ready(function() {
    var thermostat = new Thermostat();
    var openweather = 'http://api.openweathermap.org/data/2.5/weather?APPID=95fe1bb3ce25d9ae2bb98f96c68b008a&id='

    // function getWeatherUrl(city, callback){
    //     $.getJSON(openweather + city, callback)
    // }

    // var foo;

    getWeatherUrl(2643743, (data) => {
        foo = (data.main.temp)
    })
    
    $('#city').change(function() {
        var city = $('#city').val()
        $.get(openweather + city, function(data) {
            $('#weather').text(data.main.temp)
        })
    })

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

    $('#hoverB').hover(function() {
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