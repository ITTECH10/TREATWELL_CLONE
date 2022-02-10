import React from 'react';
// mui
import { Box, Card, CardMedia, Typography } from '@mui/material'

const HomeWelcomeVideo = () => {
    return (
        // fix later margin appropriatelly
        <Box p={3}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Card sx={{ borderRadius: '0', width: { xs: '100%', md: '55%' } }}>
                    <CardMedia
                        component="video"
                        src="/static/videos/home-video.mp4"
                        controls
                        // autoPlay
                        // loop
                        sx={{ width: '100%' }}
                    />
                </Card>
                <Box sx={{ width: { xs: '100%', md: '45%' }, ml: { xs: 0, md: 2 }, p: { xs: 2, md: 0 } }}>
                    <Typography variant="h3">Einfach und modern</Typography>
                    <Typography variant="body2" sx={{ color: '#888' }}>
                        Es ist eine seit langem bekannte Tatsache, dass ein Leser beim Betrachten des Layouts durch den lesbaren Inhalt einer Seite abgelenkt wird. Der Punkt bei der Verwendung von Lorem Ipsum ist, dass es eine mehr oder weniger normale Verteilung von Buchstaben hat, im Gegensatz zur Verwendung von „Content here“.
                    </Typography>
                </Box>
            </Card>
        </Box>
    )
};

export default HomeWelcomeVideo;