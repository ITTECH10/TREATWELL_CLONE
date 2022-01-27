import React from 'react';
// mui
import { Box, Card, CardMedia, Typography } from '@mui/material'

const AppHowToVideo = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Card sx={{ display: 'flex' }}>
                <Card sx={{ borderRadius: '0', width: '55%' }}>
                    <CardMedia
                        component="video"
                        src="/static/videos/home-video-alt-2.mp4"
                        alt="Live from space album cover"
                        autoPlay
                        muted
                        loop
                        sx={{ width: '100%' }}
                    />
                </Card>
                <Box sx={{ width: '45%', ml: 2 }}>
                    <Typography variant="h3">Einfach und modern</Typography>
                    <Typography variant="body2" sx={{ color: '#888' }}>
                        Es ist eine seit langem bekannte Tatsache, dass ein Leser beim Betrachten des Layouts durch den lesbaren Inhalt einer Seite abgelenkt wird. Der Punkt bei der Verwendung von Lorem Ipsum ist, dass es eine mehr oder weniger normale Verteilung von Buchstaben hat, im Gegensatz zur Verwendung von „Content here“.
                    </Typography>
                </Box>
            </Card>
        </Box>
    )
};

export default AppHowToVideo;
