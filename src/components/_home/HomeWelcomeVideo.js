import React from 'react';
// mui
import { Box, Card, CardMedia, Stack, IconButton, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const HomeWelcomeVideo = () => {
    return (
        // fix later margin appropriatelly
        <Box pb={3} px={2}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Card sx={{ borderRadius: '0', width: { xs: '100%', md: '55%' }, height: 'auto' }}>
                    <CardMedia
                        component="video"
                        src="/static/videos/home-video.mp4"
                        controls
                        poster="https://res.cloudinary.com/dt5o99tph/image/upload/v1646655218/video-poster_nskuiv.png"
                        // autoPlay
                        // loop
                        sx={{ width: '100%', height: '100%' }}
                    />
                </Card>
                <Box sx={{ width: { xs: '100%', md: '45%' }, ml: { xs: 0, md: 2 }, p: { xs: 2, md: 0 } }}>
                    <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: { xs: 230, md: '100%' }, position: 'relative' }}>
                        <Typography variant="h6" sx={{ textAlign: 'center', position: 'absolute', width: '100%', mb: { xs: '10rem', md: '9rem' } }}>Folgen Sie uns auf Facebook und Instagram für neueste Angebote und Informationen!</Typography>
                        <IconButton href="https://www.facebook.com/Gesundo24-105847441995637/" target="_blank" sx={{ color: '#3b5998' }}>
                            <FacebookIcon sx={{ fontSize: { xs: '4rem', md: '6rem' } }} />
                        </IconButton>
                        <IconButton href="https://instagram.com/gesundo24.de?utm_medium=copy_link" target="_blank" sx={{ color: '#8a3ab9' }}>
                            <InstagramIcon sx={{ fontSize: { xs: '4rem', md: '6rem' } }} />
                        </IconButton>
                    </Stack>
                </Box>
            </Card>
        </Box>
    )
};

export default HomeWelcomeVideo;
