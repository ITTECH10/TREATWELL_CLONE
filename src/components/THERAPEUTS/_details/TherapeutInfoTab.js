import React from 'react';
import { useApp } from '../../../context/AppContext'
// mui
import { Card, Typography, Box, Stack, IconButton, Divider, List, ListItem, ListItemText, Button } from '@mui/material'
import CollectionsIcon from '@mui/icons-material/Collections';
import ArticleIcon from '@mui/icons-material/Article';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
// rest
import Map from '../../Map'

const TherapeutInfoTab = () => {
    const { selectedTherapeut } = useApp()
    const { images: practicePhotos, website } = selectedTherapeut

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
                <Stack ml={2} direction="row" spacing={2}>
                    {practicePhotos.map(practicePhoto => {
                        return <Box sx={{ height: 100, width: 200, borderRadius: 1, overflow: 'hidden' }}>
                            <img src={practicePhoto} style={{ height: '100%', width: '100%' }} />
                        </Box>
                    })}
                </Stack>
            </Box>
            <Divider sx={{ mt: 2, mb: 1 }} />
            <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton color="primary">
                        <ArticleIcon />
                    </IconButton>
                    <Typography variant="subtitle1">
                        Kurzvorstellung
                    </Typography>
                </Stack>
                <Box ml={2}>
                    <Typography variant="body2">
                        Nulla pellentesque lacus vel odio consequat, a cursus nunc porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sed odio vel sem molestie feugiat eu in dui. Nunc eleifend tristique eros eget venenatis. Proin vel rhoncus tortor. Nulla vel eros vel justo aliquam condimentum. Integer arcu mi, sollicitudin quis molestie rhoncus, luctus vel ante. Duis auctor, sem non viverra lobortis, nunc justo laoreet enim, et imperdiet dui ligula eu ipsum. Vestibulum ultricies lacinia magna, fermentum tristique neque blandit vitae. Morbi ac maximus quam, ut dictum enim. Sed dictum sed turpis et pellentesque. Integer tincidunt eleifend tellus sit amet finibus. Nunc convallis arcu ut orci condimentum facilisis. Nullam posuere eros quis nunc auctor scelerisque. Integer mattis mollis leo id faucibus.
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{ mt: 2, mb: 1 }} />
            <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton color="primary">
                        <SummarizeIcon />
                    </IconButton>
                    <Typography variant="subtitle1">
                        Schwerpunkt
                    </Typography>
                </Stack>
                <Box ml={2}>
                    <Typography variant="body2">
                        Nulla pellentesque lacus vel odio consequat, a cursus nunc porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sed odio vel sem molestie feugiat eu in dui. Nunc eleifend tristique eros eget venenatis. Proin vel rhoncus tortor. Nulla vel eros vel justo aliquam condimentum. Integer arcu mi, sollicitudin quis molestie rhoncus, luctus vel ante.
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{ mt: 2, mb: 1 }} />
            <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton color="primary">
                        <SchoolIcon />
                    </IconButton>
                    <Typography variant="subtitle1">
                        Qualifikationen
                    </Typography>
                </Stack>
                <Box >
                    <List dense sx={{ p: 0 }}>
                        <ListItem>
                            <ListItemText
                                primary="Elementary School"
                                secondary='Bonn 2009'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Middle Medicine School"
                                secondary='Bonn 2014'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="College Degree"
                                secondary='Berlin 2018'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Masters Degree"
                                secondary='Berlin 2020'
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Divider sx={{ mt: 2, mb: 1 }} />
            <Box>
                <Stack direction="row" alignItems="center">
                    <IconButton color="primary">
                        <LocationOnIcon />
                    </IconButton>
                    <Box>
                        <Typography variant="subtitle1">
                            Kontakt Informationen
                        </Typography>
                    </Box>
                </Stack>
                <Box ml={2}>
                    <Button variant="text" sx={{ p: 0, mb: .5 }} href="https://google.com" target="_blank">
                        {website}
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
                    <Map />
                </Box>
            </Box>
        </Card>
    )
};

export default TherapeutInfoTab;

{/* <Stack direction="row" sx={{ ml: 5, mb: 1 }} spacing={2}>
                    <Chip label="Ultraschall / Sonografie" />
                    <Chip label="Echokardiografie / Herzecho" />
                </Stack>
                <Stack direction="row" sx={{ ml: 5 }} spacing={2}>
                    <Chip label="Doppler-Ultraschall / Doppler-Sonografie" />
                    <Chip label="24-Stunden-Langzeit-EKG" />
                </Stack> */}