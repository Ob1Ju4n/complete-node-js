/**
 * Created by j.ortiz on 4/01/2019.
 */
var request =  require('request');

const URL = 'http://ipinfo.io';

/*
module.exports = function (callback) {
    request({
        url: URL,
        json: true
    }, function (err, response, body) {
        if (err) {
            callback();
        } else {
            callback(body);
        }
    });
};
*/

module.exports = function () {
    return new Promise((resolve, reject) => {
        request({
            url: URL,
            json: true
        }, (err, response, body) => {
            if (err) {
                reject('Unable to guess location...');
            } else {
                resolve(body);
            }
        });
    });
};