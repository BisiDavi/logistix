import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

export default function Map({ address, userLocation }) {
    function onLoad(marker) {
        address(marker);
        return console.log('marker: ', marker);
    }
    const containerStyle = {
        width: '100%',
        height: '100vh',
    };
    const center = {
        lat: userLocation !== null ? userLocation.latitude : 6.537216,
        lng: userLocation !== null ? userLocation.longitude : 3.3456128,
    };

    const position = {
        lat: userLocation !== null ? userLocation.latitude : 6.537216,
        lng: userLocation !== null ? userLocation.longitude : 3.3456128,
    };
    return (
        <GoogleMap
            id='google-map'
            mapContainerStyle={containerStyle}
            zoom={10}
            center={center}
        >
            <Marker draggable={true} onLoad={onLoad} position={position} />
        </GoogleMap>
    );
}
