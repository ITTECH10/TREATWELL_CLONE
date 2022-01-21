import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
// mui
import { Card, Typography, Box, Stack, IconButton, Divider, Chip, Link, Button } from '@mui/material'
import EuroIcon from '@mui/icons-material/Euro';
import BiotechIcon from '@mui/icons-material/Biotech';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// rest
import Map from '../../Map'

const TherapeutInfoTab = () => {
    return (
        <Card sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton color="primary">
                    <EuroIcon />
                </IconButton>
                <Typography variant="subtitle1">
                    Abrechnungsarten
                    <Typography variant="body2">
                        Kassenpatienten, <br /> Privatpatienten und Selbstzahler
                    </Typography>
                </Typography>
            </Stack>
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
