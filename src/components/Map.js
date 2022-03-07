import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
const token = process.env.REACT_APP_MAPBOX_TOKEN
const ICON = '/static/icons/mapbox-marker-icon-red.svg'

const Map = ({ lng, lat }) => {
    const [viewport, setViewport] = React.useState({
        zoom: 9
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
            mapboxApiAccessToken={token} {...viewport}
            height="400px" width="100%"
            onViewportChange={setViewport}
            longitude={lng}
            latitude={lat}
        >
            <Marker latitude={lat ? lat : 50.078217} longitude={lng ? lng : 8.239761}>
                <img src={ICON} alt="map-marker-icon" />
            </Marker>
        </ReactMapGL>
    );
}

export default Map;
