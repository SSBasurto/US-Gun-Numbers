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
let color = './static/data/state_color.json'
// let color = './static/data/state_color.csv'

// Color Function
// function chooseColor(name) {    
//     if (name == ) return "yellow";
//     }

// Column Function
function getCol(matrix, col){
    let column = [];
    for(var i=0; i<matrix.length; i++){
       column.push(matrix[i][col]);
    }
    return column;
 }

Promise.all([d3.json(geo),d3.json(color)]).then(function(data) {

    // Data
    feature = data[0].features
    color = data[1]
    console.log('States Features:',feature);
    console.log('State Color:', color); 
    
    // Appending Blue and Red States
    let blue = [];
    let red = [];

    for (let i = 0; i < color.length; i++) {
        blue.push(color[i]['Blue']);
        red.push(color[i]['Red']);
        }
        console.log('Blue:', blue);
    
    L.geoJson(data).addTo(myMap);

    
  });
