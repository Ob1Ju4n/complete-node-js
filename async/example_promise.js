/**
 * Created by j.ortiz on 4/01/2019.
 */
var request = require('request');

function getWeather(location) {
    return new Promise(function (resolve, reject) {
        const URL = 'https://api.openweathermap.org/data/2.5/find?';
        const APP_ID = 'e2ff093e948379ef1817871448412476';

        if (location) {
            request({
                url: URL + 'q=' + encodeURIComponent(location) + '&APPID=' + APP_ID + '&units=metric',
                json: true
            }, function (err, response, body) {
                if (err) {
                    reject('Unable to fetch weather.');
                } else {
                    // console.log(JSON.stringify(body));
                    if (body.cod === '200' && body.list.length > 0) {
                        resolve('It\'s ' + body.list[0].main.temp + ' degrees in ' + body.list[0].name);
                    } else {
                        reject('Unable to fetch weather.');
                    }
                }
            });
        } else {
            console.log('Location was not provided.');
        }
    });
}

getWeather('san francisco')
    .then(
        currentWeather => console.log(currentWeather), // resolve
        error => console.log(error) // reject
    );