import React from 'react';
// mui
import { Box, Stack, Typography, Card } from '@mui/material'
import { manipulateCloudinaryImage } from '../../utils/manipulateCloudinaryImage'
import { styled } from '@mui/material/styles'

// const Icon1 = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644329808/heart_yghsut.png', ['q_80'])
// const Icon2 = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644329808/iv_ijnjtk.png', ['q_80'])
// const Icon3 = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644329808/hormones_cegmwr.png', ['q_80'])

const Icon1 = '/static/illustrations/lipoweg-icon-1.png'
const Icon2 = '/static/illustrations/lipoweg-icon-2.png'
const Icon3 = '/static/illustrations/lipoweg-icon-3.png'

const CardBox = styled(Card)(({ theme }) => ({
    minHeight: 200,
    width: 320,
    zIndex: 2,
    padding: 16,
    [theme.breakpoints.up('md')]: {
        width: 400,
    }
}))

const HomeServiceBoxes = () => {
    return (
        <Box>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2 }} justifyContent="center" alignItems={{ xs: 'center', md: 'stretch' }}>
                <CardBox>
                    <Stack direction={{ xs: 'column' }} justifyContent="space-between" alignItems={{ xs: 'center' }} >
                        <Box sx={{ width: 320 }}>
                            <img alt="hero-icon" src={Icon1} style={{ height: '100%', width: '100%' }} />
                        </Box>
                        <Box>
                            <Typography align="center" variant="h5">Geprüfte Therapeuten</Typography>
                            <Typography>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.
                            </Typography>
                        </Box>
                    </Stack>
                </CardBox>
                <CardBox>
                    <Stack direction={{ xs: 'column' }} justifyContent="space-between" alignItems={{ xs: 'center' }} >
                        <Box sx={{ width: 320 }}>
                            <img alt="hero-icon" src={Icon2} style={{ height: '100%', width: '100%' }} />
                        </Box>
                        <Box>
                            <Typography align="center" variant="h5">Buche 24/7</Typography>
                            <Typography>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.
                            </Typography>
                        </Box>
                    </Stack>
                </CardBox>
                <CardBox>
                    <Stack direction={{ xs: 'column' }} justifyContent="space-between" alignItems={{ xs: 'center' }} >
                        <Box sx={{ width: 320 }}>
                            <img alt="hero-icon" src={Icon3} style={{ height: '100%', width: '100%' }} />
                        </Box>
                        <Box>
                            <Typography align="center" variant="h5">Keine Vorkasse</Typography>
                            <Typography>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.
                            </Typography>
                        </Box>
                    </Stack>
                </CardBox>
            </Stack>
        </Box>
    )
};

export default HomeServiceBoxes;
