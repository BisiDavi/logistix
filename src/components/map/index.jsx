import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import styles from '../../styles/map.module.css';

function Map({ address, userLocation }) {
    const [map, setMap] = useState(null);

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

    return (
        <LoadScript
            libraries={['places']}
            googleMapsApiKey={process.env.NEXT_PUBLIC_APIKEY}
        >
            <GoogleMap
                id='google-map'
                mapContainerStyle={containerStyle}
                zoom={10}
                center={center}
                mapContainerClassName={styles.map}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Marker draggable={true} onLoad={onLoad} position={position} />
            </GoogleMap>
        </LoadScript>
    );
}

export default React.memo(Map);
