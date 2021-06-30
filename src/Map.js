
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Map({ center, zoom }) {
    return (
        <div className="map">
            <MapContainer className="map__container" center={center} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <LocationOnIcon />
                </Marker>
            </MapContainer>,
        </div>
    )
}

export default Map
