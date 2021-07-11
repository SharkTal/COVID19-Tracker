
import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet';
import './Map.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Map({ countries, center, zoom}) {
    console.log('THIS IS FROM MAP>>>', countries);
    console.log('THIS MAPCENTER FORM MAP>>>', center);

   

    return (
        <div className="map">
            <MapContainer className="map__container" center={center} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>,
        </div>
    )
}

export default Map
