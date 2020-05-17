const request = require('postman-request');
const utils = require('./utils.js');

utils.geocode('haifa', (error, data) => {
    debugger;

    utils.forecast(data, (error, data)=>{
        if (data) {
            console.log("temp", data.current.temperature);
            console.log("location", data.location.name);
        } else {
            console.log(error);
        }
    });
});
