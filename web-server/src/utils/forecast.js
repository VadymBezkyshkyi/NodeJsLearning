const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/9683455770b652d57aaa4a86ac8d2a1e/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}?units=si`;
    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service', undefined);
        } else if(error) {
            callback('Unable to find a location. Try another search.', undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees celsius. There is a ${body.currently.precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;
