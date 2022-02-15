import React from 'react';
// mui
import { Box, Card, CardMedia, Typography, Stack, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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
                    <Stack direction="row">
                        <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#3b5998' }}>
                            <FacebookIcon sx={{ fontSize: '4rem' }} />
                        </IconButton>
                        <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#8a3ab9' }}>
                            <InstagramIcon sx={{ fontSize: '4rem' }} />
                        </IconButton>
                    </Stack>
                </Box>
            </Card>
        </Box>
    )
};

export default HomeWelcomeVideo;
