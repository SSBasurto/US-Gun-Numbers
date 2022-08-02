let myMap = L.map("map", {
    center: [41.515111142650824, -112.22313302713114],
    zoom: 3
});

let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(myMap);

/* GeoJson */
const geo = './static/data/geo_states.json'

/* state color json */
const color = './static/data/state_color.json'

/* State Center Points */
const center = './static/data/center_points.csv'

/* Guns */
const gun = './static/data/guns2.csv'

/* D3 */
Promise.all([d3.json(geo),d3.json(color),d3.csv(center),d3.csv(gun)])
                .then(function(data) {

    // Data
    const features = data[0].features
    const color = data[1]
    const centers = data[2]
    const guns = data[3]
    console.log('States Features:',features);
    console.log('State Color:', color); 
    console.log('center:', centers);
    console.log('Guns:', guns);    
    
    // Appending Blue and Red States
    let blue = [];
    let red = [];
    
    for (let i = 0; i < 25; i++) {
        blue.push(color[i]['Blue']);
        red.push(color[i]['Red']);
    };

    // Function for the color of State
    function chooseColor(name) {    
        if (blue.includes(name) ) return "blue";
        else return "red";
        };
        
    // Geo Json and Color function COME BACK TO LAYER  newLayer =
    L.geoJson(data[0], {
        style: function(feature) {
            return {
              color: "white",
              fillColor: chooseColor(feature.properties.NAME),
              fillOpacity: 0.65,
              weight: 0.85
            };
        }

    }).addTo(myMap);

    // Marker lists
    let c_coordinates = []
    let markers = []
    let circles = []
    
    // Markers w/ center data
    for (let i = 0; i < centers.length; i++) {
        c_coordinates.push([centers[i]['Latitude'],centers[i]['Longitude']]);
    
        // markers.push (
            L.marker(c_coordinates[i], {                
                }).bindPopup(`<h1>${guns[i]['State']}</h1><hr>
                    <h3>Population: ${guns[i]['Population']}</H3>
                    <h3>Registered Guns: ${guns[i]['Registerd Guns']}</H3>
                    <h3>Pop. Gun Ownership: ${guns[i]['Gun Ownership']}</H3>
                    <h3>School Shootings: ${guns[i]['School Shootings']}</H3>`)
                        .addTo(myMap);
        // )
        // circles.push(
            L.circle(c_coordinates[i], {

            })
        // )

    }
});
