function initMap() {
	// add your code here
	L.mapquest.key = 'Rk0C1CZjW6PC2e3IvDxYSYJbB9aA7Jt7';

	//'map' refers to a <div> element with the ID map 
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'), 
		zoom: 12, 
		zoomControl: false
	}); 

	// add a marker to the map
	L.marker([32.87855572003468, -117.23590009040727]).addTo(map); 
};
