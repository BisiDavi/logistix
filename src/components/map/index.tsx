import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

export default function Map({ address, userLocation }) {
    function onLoad(marker) {
        address(marker);
        return console.log('marker: ', marker);
    }
    const containerStyle = {
        width: '100%',
        height: '600px',
    };
    const center = {
        lat: userLocation.latitude,
        lng: userLocation.longitude,
    };

    const position = {
        lat: userLocation.latitude,
        lng: userLocation.longitude,
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
