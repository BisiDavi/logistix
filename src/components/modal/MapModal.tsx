import React from 'react';
import AppModal from '.';
import styles from './modal.module.css';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapModal = ({ show, onHide }) => {
    const containerStyle = {
        width: '100%',
        height: '600px',
    };

    const center = {
        lat: 6.745,
        lng: 3.3792,
    };

    const position = {
        lat: 6.5244,
        lng: 3.3792,
    };

    const onLoad = (marker) => {
        console.log('marker: ', marker);
    };

    return (
        <AppModal show={show} onHide={onHide} className={styles.AppModal}>
                <GoogleMap
                    id='google-map'
                    mapContainerStyle={containerStyle}
                    zoom={10}
                    center={center}
                >
                    <Marker
                        draggable={true}
                        onLoad={onLoad}
                        position={position}
                    />
                </GoogleMap>
        </AppModal>
    );
};

export default MapModal;
