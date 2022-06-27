// 01. add URL for fetch
let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100'

export function getJSON(url) {
    return fetch(url)
    .then(function (response) {
        return response.json();
    })
    .catch(function (error) {
        console.log(error);
    })
}

// Get the Geolocation API
export const getLocation = function (options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    });
};





