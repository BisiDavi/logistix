function error(err) {
    console.warn(`Error(${err.code}): ${err.message}`);
}

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function getUserLocation(data) {
    window.navigator.geolocation.getCurrentPosition(
        function (position) {
            let coord = position.coords;
            data(coord);
            console.log('Your current position is:');
            console.log(`Latitude: ${coord.latitude}`);
            console.log(`Longitude: ${coord.longitude}`);
            console.log(`Accuracy: ${coord.accuracy}`);
        },
        error,
        options,
    );
}

export default getUserLocation;
