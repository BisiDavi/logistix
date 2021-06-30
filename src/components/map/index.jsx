import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import PuffLoader from 'react-spinners/PuffLoader';

function Map({ address, userLocation }) {
    const [map, setMap] = useState(null);

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_APIKEY,
    });

    const containerStyle = {
        width: '100%',
        height: '100%',
    };
    const center = {
        lat: userLocation !== null ? userLocation.latitude : 6.537216,
        lng: userLocation !== null ? userLocation.longitude : 3.3456128,
    };

    const position = {
        lat: userLocation !== null ? userLocation.latitude : 6.537216,
        lng: userLocation !== null ? userLocation.longitude : 3.3456128,
    };

    console.log('google map', map);

    function renderMap() {
        const onLoad = useCallback(function callback(map) {
            const bounds = new window.google.maps.LatLngBounds();
            map.fitBounds(bounds);
            setMap(map);
            address(map);
            return console.log('map: ', map);
        }, []);

        const onUnmount = useCallback(function callback(map) {
            setMap(null);
        }, []);

        return (
            <GoogleMap
                id='google-map'
                mapContainerStyle={containerStyle}
                zoom={10}
                center={center}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Marker draggable={true} onLoad={onLoad} position={position} />
            </GoogleMap>
        );
    }

    if (loadError) {
        return (
            <div>Map cannot be loaded right now, please check your network</div>
        );
    }

    return isLoaded ? renderMap() : <PuffLoader color={'#c85a5f14;'} />;
}

export default React.memo(Map);
