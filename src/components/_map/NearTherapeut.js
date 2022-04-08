import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Marker, Popup } from 'react-map-gl'
import { useApp } from '../../context/AppContext'
//mui
import { Box, Avatar, Typography, IconButton, Stack, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
//others
import { manipulateCloudinaryImage } from '../../utils/manipulateCloudinaryImage'
import PopupContactTherapeut from './PopupContactTherapeut'

const ICON = '/static/icons/mapbox-marker-icon-red.svg'

const NearTherapeut = ({ therapeut }) => {
    const navigate = useNavigate()
    const { authenticated, setGeneralAlertOptions } = useApp()
    const [showPopup, togglePopup] = useState(false)
    const [open, setOpen] = useState(false)
    const { coordinates } = therapeut.locationCoordinates
    const [long, lat] = coordinates
    const name = `${therapeut.firstName} ${therapeut.lastName}`

    const optimizedAvatarImage = manipulateCloudinaryImage(therapeut.image)

    const bookTherapyHandler = () => {
        if (!authenticated) {
            setGeneralAlertOptions({
                open: true,
                message: 'Sie mussen zuerst anmelden oder registrieren!',
                hideAfter: 2000,
                severity: 'warning'
            })
        }

        if (authenticated) {
            navigate(`/therapeuts/${therapeut._id}`)
        }
    }

    return (
        <Box onClick={() => togglePopup(true)}>
            <Marker latitude={lat} longitude={long} offsetLeft={-10} offsetTop={5}>
                <img src={ICON} alt="map-marker-icon" />
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
                        <Avatar src={optimizedAvatarImage} sx={{ height: 50, width: 50 }} />
                        <IconButton
                            style={{ backgroundColor: 'transparent' }}
                            size="small"
                            color="primary"
                            href={`mailto:${therapeut.email}`}
                        >
                            <EmailIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                    </Stack>
                    <Box onClick={bookTherapyHandler}>
                        <Typography variant="subtitle2">{therapeut.specializedIn}</Typography>
                        <Typography variant="subtitle2">Name: {name}</Typography>
                        <Typography variant="subtitle2">Telefon: {therapeut.phone}</Typography>
                    </Box>
                    <Stack>
                        <Button
                            size="small"
                            sx={{ p: 0, mb: .4, '&:hover': { backgroundColor: 'transparent' } }}
                            variant="text"
                            href={`${therapeut && !therapeut.website.startsWith('https') ? `https://${therapeut.website}` : therapeut.website}`}
                            target="_blank"
                        >
                            webseite: {therapeut.website}
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={bookTherapyHandler}
                            endIcon={<BookOnlineIcon />}
                        >
                            Termin vereinbaren
                        </Button>
                        <PopupContactTherapeut
                            popupContactTherapeutOpen={open}
                            setPopupContactTherapeutOpen={setOpen}
                            therapeutId={therapeut._id}
                        />
                    </Stack>
                </Box>
            </Popup>}
        </Box >
    )
}

export default NearTherapeut