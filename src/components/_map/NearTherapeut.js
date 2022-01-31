import { Marker, Popup } from 'react-map-gl'
import { useState } from 'react'
//mui
import { Box, Avatar, Typography, IconButton, Stack, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';

const ICON = '/static/icons/mapbox-marker-icon-red.svg'

const NearTherapeut = ({ therapeut }) => {
    const [showPopup, togglePopup] = useState(false)
    const { coordinates } = therapeut.locationCoordinates
    const [long, lat] = coordinates

    return (
        <Box onClick={() => togglePopup(true)}>
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
                    <Stack direction="row" mb={1} justifyContent="space-between">
                        <Avatar src={therapeut.image} sx={{ height: 50, width: 50 }} />
                        <IconButton
                            style={{ backgroundColor: 'transparent' }}
                            size="small"
                            color="primary"
                            href={`mailto:${therapeut.email}`}
                        >
                            <EmailIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                    </Stack>
                    <Typography variant="subtitle2">{therapeut.specializedIn}</Typography>
                    <Typography variant="subtitle2">Name: {therapeut.name}</Typography>
                    <Typography variant="subtitle2">Telefon: {therapeut.phone}</Typography>
                    <Stack>
                        <Button
                            size="small"
                            sx={{ p: 0 }}
                            variant="text"
                            href={`https://${therapeut.website}`}
                            target="_blank"
                        >
                            Webseite: {therapeut.website}
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                        >
                            Termin Vereinbaren
                        </Button>
                    </Stack>
                </Box>
            </Popup>}
        </Box >
    )
}

export default NearTherapeut