import React from 'react';
import { useApp } from '../../../context/AppContext'
// mui
import { Card, Typography, Box, Stack, IconButton, Divider, Chip, Link, Button } from '@mui/material'
import CollectionsIcon from '@mui/icons-material/Collections';
import BiotechIcon from '@mui/icons-material/Biotech';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// rest
import Map from '../../Map'

const TherapeutInfoTab = () => {
    const { selectedTherapeut } = useApp()
    const { images: practicePhotos } = selectedTherapeut

    return (
        <Card sx={{ p: 2 }}>
            <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton color="primary">
                        <CollectionsIcon />
                    </IconButton>
                    <Typography variant="subtitle1">
                        Praxis Photos
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                    {practicePhotos.map(practicePhoto => {
                        return <Box sx={{ height: 80, width: 80, borderRadius: 1, overflow: 'hidden' }}>
                            <img src={practicePhoto} style={{ height: '100%', width: '100%' }} />
                        </Box>
                    })}
                </Stack>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton color="primary">
                        <BiotechIcon />
                    </IconButton>
                    <Typography variant="subtitle1">
                        Leistungsspektrum und behandelte Symptome
                    </Typography>
                </Stack>
                <Stack direction="row" sx={{ ml: 5, mb: 1 }} spacing={2}>
                    <Chip label="Ultraschall / Sonografie" />
                    <Chip label="Echokardiografie / Herzecho" />
                </Stack>
                <Stack direction="row" sx={{ ml: 5 }} spacing={2}>
                    <Chip label="Doppler-Ultraschall / Doppler-Sonografie" />
                    <Chip label="24-Stunden-Langzeit-EKG" />
                </Stack>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Stack direction="row" alignItems="flex-start">
                <IconButton color="primary">
                    <LocationOnIcon />
                </IconButton>
                <Box>
                    <Typography variant="subtitle1">
                        Karte und Zugangsinformationen
                    </Typography>
                    <Button variant="text" sx={{ mb: 1, p: 0 }} href="https://google.com" target="_blank">
                        Herz-Kreislauf-Praxis am Medicum (Wiesbaden), Taunusstein & Rheingau
                    </Button>
                    <Typography variant="subtitle1" mb={1}>
                        1. Herz-Kreislauf-Praxis am Medicum (Wiesbaden)
                        <Typography variant="body2">
                            Langenbeckplatz 2, 65189 Wiesbaden
                        </Typography>
                    </Typography>
                    <Typography variant="subtitle1" mb={1}>
                        Zugangsinformationen
                        <Typography variant="body2">
                            4.OG mit Fahrstuhl <br />
                            Barrierefrei <br />
                            Gebührenpflichtige Parkplätze
                        </Typography>
                    </Typography>
                </Box>
            </Stack>
            <Map />
        </Card>
    )
};

export default TherapeutInfoTab;
