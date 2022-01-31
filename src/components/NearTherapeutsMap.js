import React from 'react';
import { useApp } from '../context/AppContext'
import ReactMapGL from 'react-map-gl';
import NearTherapeut from './_map/NearTherapeut'

const token = 'pk.eyJ1IjoidHJlYXR3ZWxsMTAiLCJhIjoiY2t5bXd6dnVrMDF3NTJ2b3k0Y20zMDR5dCJ9.wIzLh0qg1SiCZ3mm8t9qug';

const NearTherapeutsMap = () => {
    const { therapeuts } = useApp()

    const [viewport, setViewport] = React.useState({
        longitude: 13.38333,
        latitude: 52.51667,
        zoom: 12,
        mapboxApiAccessToken: token,
        width: "100%",
        height: "calc(100vh - 128px)"
    });

    return (
        // MAP HEIGHT CALCULATED 100vh - (AppBar height = 64px + container top and bottom margin 32 + 32 = 64px)
        <ReactMapGL mapStyle="mapbox://styles/mapbox/streets-v11" {...viewport} onViewportChange={setViewport}>
            {therapeuts.map(therapeut => {
                return <NearTherapeut
                    therapeut={therapeut}
                />
            })}
        </ReactMapGL>
    );
}

export default NearTherapeutsMap;
