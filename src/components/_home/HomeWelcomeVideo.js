import React from 'react';
// mui
import { Box, Card, CardMedia, Typography, Stack, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const HomeWelcomeVideo = () => {
    return (
        // fix later margin appropriatelly
        <Box px={3} pb={3}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Card sx={{ borderRadius: '0', width: { xs: '100%', md: '55%' }, height: { xs: 300, md: 'auto' } }}>
                    <CardMedia
                        component="video"
                        src="/static/videos/home-video.mp4"
                        controls
                        poster="/static/videos/video-poster.png"
                        // autoPlay
                        // loop
                        sx={{ width: '100%', height: '100%' }}
                    />
                </Card>
                <Box sx={{ width: { xs: '100%', md: '45%' }, ml: { xs: 0, md: 2 }, p: { xs: 2, md: 0 } }}>
                    <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
                        <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#3b5998' }}>
                            <FacebookIcon sx={{ fontSize: '6rem' }} />
                        </IconButton>
                        <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#8a3ab9' }}>
                            <InstagramIcon sx={{ fontSize: '6rem' }} />
                        </IconButton>
                    </Stack>
                </Box>
            </Card>
        </Box>
    )
};

export default HomeWelcomeVideo;
