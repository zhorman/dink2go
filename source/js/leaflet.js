var map = L.map('map').setView([59.968328, 30.317334], 20);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([59.9681, 30.3166]).addTo(map)
  .bindPopup('Санкт-Петербург, набережная реки Карповки, дом 5')
  .openPopup();
