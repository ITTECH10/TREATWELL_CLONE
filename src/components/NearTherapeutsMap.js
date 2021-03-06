import React from 'react';
import { useApp } from '../context/AppContext'
import ReactMapGL from 'react-map-gl';
import NearTherapeut from './_map/NearTherapeut'

// secure later
const token = process.env.REACT_APP_MAPBOX_TOKEN

const NearTherapeutsMap = () => {
    const { therapeuts } = useApp()

    const [viewport, setViewport] = React.useState({
        longitude: 10.0183432948567,
        latitude: 51.1334813439932,
        zoom: 6,
        mapboxApiAccessToken: token,
        width: "100%",
        height: 'calc(100vh + 64px)'
    });

    return (
        // MAP HEIGHT CALCULATED 100vh - (AppBar height = 64px + container top and bottom margin 32 + 32 = 64px)
        <ReactMapGL mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true" {...viewport} onViewportChange={setViewport}>
            {therapeuts && therapeuts.map(therapeut => {
                return <NearTherapeut
                    therapeut={therapeut}
                />
            })}
        </ReactMapGL>
    );
}

export default NearTherapeutsMap;
