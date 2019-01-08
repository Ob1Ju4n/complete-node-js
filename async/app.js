/**
 * Created by j.ortiz on 3/01/2019.
 */
var weather = require('./weather.js');
var location = require('./location.js');
var argv =  require('yargs')
    .options({
        location: {
            demand: false,
            alias: 'l',
            description: 'Location to fetch data from',
            type: 'string'
        }
    })
    .help('help')
    .argv;

// Business logic:
if (argv.location) {
    console.log('Location was provided.');
    weather(argv.location)
        .then(currentWeather => console.log(currentWeather))
        .catch(error => console.log(error));
} else {
    console.log('Location was not provided.');
    location()
        .then(locationPayload => weather(locationPayload.city))
        .then(currentWeather => console.log(currentWeather))
        .catch(error => console.log(error));
}