import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
const token = 'pk.eyJ1IjoidHJlYXR3ZWxsMTAiLCJhIjoiY2t5bXd6dnVrMDF3NTJ2b3k0Y20zMDR5dCJ9.wIzLh0qg1SiCZ3mm8t9qug';
const ICON = '/static/icons/mapbox-marker-icon-red.svg'

const Map = () => {
    const [viewport, setViewport] = React.useState({
        longitude: 8.239761,
        latitude: 50.078217,
        zoom: 9
    });

    return (
        <ReactMapGL mapStyle="mapbox://styles/mapbox/streets-v11" mapboxApiAccessToken={token} {...viewport} height="400px" width="100%" onViewportChange={setViewport}>
            <Marker latitude={50.078217} longitude={8.239761} offsetLeft={-20} offsetTop={-10}>
                <img src={ICON} />
            </Marker>
        </ReactMapGL>
    );
}

export default Map;
