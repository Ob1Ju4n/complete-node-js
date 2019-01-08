/**
 * Created by j.ortiz on 4/01/2019.
 */
function getLocation() {
    return new Promise((resolve, reject) => resolve('Philadelphia'));
}

function getWeather(location) {
    return new Promise((resolve, reject) => resolve('It\'s 18 degrees in ' + location));
}


getLocation()
    .then(location => getWeather(location))
    .then(currentWeather => console.log(currentWeather))
    .catch(e => console.log(e));