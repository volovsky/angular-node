const request = require('postman-request');

const geocode = (address, callback) => {
    const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoidm9sb3Zza3kiLCJhIjoiY2thNWgzczlqMDAxODNmbjUyODZrczBvbiJ9.JGtWHL6vkA3WtHdAawK58w&limit=1'
    const geoData = request({url: geocodingUrl, json:true}, (error, response) => {
        if(error){
            callback("general error", null)
        } else {
            const cordinates = response.body.features[0];
            if(cordinates) {

                // Calling callback with cordinates data
                callback(null, {
                    longtitude:response.body.features[0].center[0],
                    latitude: response.body.features[0].center[1]
                });
            } else {
                // Calling callback with error
                callback("no location", null)
            }
        }
    })
};

const forecast = (data, callback) => {
    if (data.longtitude || data.latitude) {
        const url = 'http://api.weatherstack.com/current?access_key=a19138cb547bd7292357f495fecf6eb7&query=' + data.latitude + ',' + data.longtitude +  '&units=m';
        request({url: url, json:true}, (error, response) => {
            callback(null, response.body)
        })
    } else {
        callback('error', null)
    }
}

module.exports = {
    geocode: geocode,
    forecast: forecast
}