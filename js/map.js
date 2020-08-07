 /*==============================================================================
 * When a Element is selected, It reveals 
 ==============================================================================*/

 var map = L.map('map').setView([51.505, -0.09], 13);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);
 
 L.marker([51.5, -0.09]).addTo(map)
 .bindPopup('Dr Gilbert Andrews.<br> 11 Penfold Drive.')
 .openPopup();

/*=============================================================================*/