const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


// forecast(-75.7088, 44.1545, (error, data) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });

const address = process.argv[2];

if(address) {
    geocode(address, (error, {latitude, longitude, location}) => {
        if(error) {
            console.log(error);
        } else {
            console.log(location);
            forecast(latitude, longitude, (error, data) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log(data);
                }
            })
        }
    });
} else {
    console.log('Please provide a value for location');
}



