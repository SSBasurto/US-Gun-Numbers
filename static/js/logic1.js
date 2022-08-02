let myMap = L.map("map", {
    center: [41.515111142650824, -112.22313302713114],
    zoom: 4
});

let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(myMap);

/* GeoJson */
let geo = './static/data/geo_states.json'

/* state color json */
// let color = './static/data/state_color.json'
let color = './static/data/state_color.csv'

// Color Function
// function chooseColor(feature) {
//     for (let i = 0; i < data_c.length; i++) {
//         if (feature[i].properties.name == data_c) return "yellow";
//     }
// }


// retrieving states outline json
d3.json(geo).then(function(data) {

    feature = data.features
    console.log('States Features:',feature);
    L.geoJson(data).addTo(myMap);

    // retrieve color json
    d3.csv(color).then(function(data_c) {
        console.log('Color:',data_c[Blue])
    })

});

