// Verificar si soporta geolocalizacion

function initMap() {
  const argCoords = { lat: 31.4920012633899, lng: -106.41426048309822 };
  const map = new google.maps.Map(mapDiv, {
    center: argCoords,
    zoom: 13,
  });
  const marker = new google.maps.Marker({
    position: argCoords,
    map,
  });
  button.addEventListener("click", () => {
    if (navigator.geolocation) {
      //Preguntar sobre la localización
      navigator.geolocation.getCurrentPosition(
        //obtener la localización
        ({ coords: { latitude, longitude } }) => {
          const coords = {
            lat: latitude,
            lng: longitude,
          };
          map.setCenter(coords);
          marker.setPosition(coords);
        },
        () => {
          alert("Error");
        }
      );
    } else {
      alert("Tu navegador no soporta Geolocalizacion");
    }
  });
}
