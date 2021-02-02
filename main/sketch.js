var map = L.map('map').setView([55.4411764, 11.7928708], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var stuSplit = L.latLng(55.4411764, 11.7928708);
var myMarker = L.circleMarker(stuSplit, {
    title: 'unselected'
  })
  .addTo(map);
alert(myMarker.getLatLng());
map.on('click', function(e) {
  coords = e.latlng.lat.toFixed(2) + ", " + e.latlng.lng.toFixed(2);


  

// weather api storm glass
  
const lat =  parseFloat(e.latlng.lat.toFixed(2));
const lng =  parseFloat(e.latlng.lng.toFixed(2));
const params = 'waveHeight';
var a;


fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
    headers: {
        'Authorization': '78ccbb86-6139-11eb-8cb1-0242ac130002-78ccbc12-6139-11eb-8cb1-0242ac130002'
    }
    }).then((response) => response.json()).then((jsonData) => {
      // Do something with response data.
    alert(coords);
    // var obj = JSON.parse(jsonData)
    console.log(jsonData.hours[0].waveHeight)
    a = JSON.stringify(jsonData.hours[0].waveHeight);
    // alert(a);
    alert(a);
    console.log(a);

    // for mongodb


    // alert(jsonData)
    });





//  for marker
  L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
    .bindPopup(coords)
    .openPopup();
  alert(coords);


});



