import React from 'react';
// mui
import { Box, Stack, Typography, Card } from '@mui/material'
import { manipulateCloudinaryImage } from '../../../utils/manipulateCloudinaryImage'
import { styled, useTheme } from '@mui/material/styles'

const Icon1 = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644329808/heart_yghsut.png', ['q_80'])
const Icon2 = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644329808/iv_ijnjtk.png', ['q_80'])
const Icon3 = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644329808/hormones_cegmwr.png', ['q_80'])

const CardBox = styled(Card)(({ theme }) => ({
    height: 200,
    width: 320,
    opacity: .9,
    zIndex: 2,
    padding: 16,
    [theme.breakpoints.up('md')]: {
        width: 400,
    }
}))

const AppHeroBoxes = () => {
    return (
        <Box>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2 }} justifyContent="center">
                <CardBox>
                    <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'center', md: 'stretch' }} >
                        <Typography sx={{ mb: { xs: 2, md: 0 } }} variant="h5">Geprüfte Therapeuten</Typography>
                        <Box sx={{ width: 75 }}>
                            <img alt="hero-icon" src={Icon1} sx={{ height: '100%', width: '100%' }} />
                        </Box>
                    </Stack>
                </CardBox>
                <CardBox>
                    <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'center', md: 'stretch' }} >
                        <Typography sx={{ mb: { xs: 2, md: 0 } }} variant="h5">Buche 24/7</Typography>
                        <Box sx={{ width: 75 }}>
                            <img alt="hero-icon" src={Icon2} sx={{ height: '100%', width: '100%' }} />
                        </Box>
                    </Stack>
                </CardBox>
                <CardBox>
                    <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'center', md: 'stretch' }} >
                        <Typography sx={{ mb: { xs: 2, md: 0 } }} variant="h5">Keine Vorkasse</Typography>
                        <Box sx={{ width: 75 }}>
                            <img alt="hero-icon" src={Icon3} sx={{ height: '100%', width: '100%' }} />
                        </Box>
                    </Stack>
                </CardBox>
            </Stack>
        </Box>
    )
};

export default AppHeroBoxes;


{/* <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card>
                        <Typography>Box 1</Typography>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <Typography>Box 1</Typography>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <Typography>Box 1</Typography>
                    </Card>
                </Grid>
            </Grid> */}