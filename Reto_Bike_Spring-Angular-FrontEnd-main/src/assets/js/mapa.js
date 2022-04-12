const map = L.map('map-template').setView([4.6351, -74.0703], 13);

const socket = io();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

map.locate({enableHighAccuracy: true});
map.on('locationfound', e => {
    const coords = [e.latlng.lat, e.latlng.lng]
    const marker = L.marker(coords);
    marker.bindPopup('Este es la ubicación de tu bicicleta');
    map.addLayer(marker);
    socket.emit('userCoords', e.latlng);
});

socket.on('newUserCoords', (coords) => {
    console.log('usuario nuevo conectado')
    const marker = L.marker([coords.lat + 0.2, coords.lng + 0.2]);
    marker.bindPopup('Este es la ubicación de tu bicicleta');
    map.addLayer(marker);
});

