import React from 'react';
import { useApp } from '../context/AppContext'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// mui
import { Box, Avatar, Typography } from '@mui/material'

const token = 'pk.eyJ1IjoidHJlYXR3ZWxsMTAiLCJhIjoiY2t5bXd6dnVrMDF3NTJ2b3k0Y20zMDR5dCJ9.wIzLh0qg1SiCZ3mm8t9qug';
const ICON = '/static/icons/mapbox-marker-icon-red.svg'

const NearTherapeutsMap = () => {
    const { therapeuts } = useApp()

    const [viewport, setViewport] = React.useState({
        longitude: 10.0183432948567,
        latitude: 51.1334813439932,
        zoom: 6,
        mapboxApiAccessToken: token,
        width: "100%",
        height: "calc(100vh - 128px)"
    });
    const [showPopup, togglePopup] = React.useState(true);

    return (
        // MAP HEIGHT CALCULATED 100vh - (AppBar height = 64px + container top and bottom margin 32 + 32 = 64px)
        <ReactMapGL mapStyle="mapbox://styles/mapbox/streets-v11" {...viewport} onViewportChange={setViewport}>
            {therapeuts.map(therapeut => {
                const { coordinates } = therapeut.locationCoordinates
                const [long, lat] = coordinates
                return (
                    <>
                        <Marker latitude={lat} longitude={long} offsetLeft={-10} offsetTop={5}>
                            <img src={ICON} />
                        </Marker>
                        {showPopup && <Popup
                            latitude={lat}
                            longitude={long}
                            closeButton={true}
                            closeOnClick={false}
                            onClose={() => togglePopup(false)}
                            anchor="bottom" >
                            <Box>
                                <Avatar src={therapeut.image} />
                                <Typography variant="subtitle2">Name:{therapeut.name}</Typography>
                                <Typography variant="subtitle2">{therapeut.specializedIn}</Typography>
                                <Typography variant="subtitle2">Telefon: {therapeut.phone}</Typography>
                            </Box>
                        </Popup>}
                    </>
                )
            })}
        </ReactMapGL>
    );
}

export default NearTherapeutsMap;
