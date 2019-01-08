/**
 * Created by j.ortiz on 4/01/2019.
 */
var request = require('request');

const URL = 'https://api.openweathermap.org/data/2.5/find?';
const APP_ID = 'e2ff093e948379ef1817871448412476';

/*
module.exports = function (location, callback) {
    request({
        url: URL + 'q=' + encodeURIComponent(location) + '&APPID=' + APP_ID + '&units=metric',
        json: true
    }, function (err, response, body) {
        if (err) {
           callback('Unable to fetch weather.');
        } else {
           callback('It\'s ' + body.list[0].main.temp + ' degrees in ' + body.list[0].name);
        }
    });
};
*/

module.exports = function (location) {
    return new Promise((resolve, reject) => {
        request({
            url: URL + 'q=' + encodeURIComponent(location) + '&APPID=' + APP_ID + '&units=metric',
            json: true
        }, (err, response, body) => {
            // console.log(JSON.stringify(body));
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
    });
};
