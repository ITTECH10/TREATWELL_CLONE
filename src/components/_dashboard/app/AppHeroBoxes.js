import React from 'react';
// mui
import { Box, Stack, Typography, Card } from '@mui/material'
import { manipulateCloudinaryImage } from '../../../utils/manipulateCloudinaryImage'

const Icon1 = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644329808/heart_yghsut.png', ['q_80'])
const Icon2 = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644329808/iv_ijnjtk.png', ['q_80'])
const Icon3 = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644329808/hormones_cegmwr.png', ['q_80'])

const AppHeroBoxes = () => {
    return (
        <Box>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Card sx={{ width: 400, height: 200, p: 2, opacity: .9 }}>
                    <Stack direction="row" justifyContent="space-between" >
                        <Typography variant="h5">Geprüfte Therapeuten</Typography>
                        <Box sx={{ width: 75 }}>
                            <img alt="hero-icon" src={Icon1} sx={{ height: '100%', width: '100%' }} />
                        </Box>
                    </Stack>
                    {/* <Button
                        variant="contained"
                        sx={{ width: '90%', mx: 'auto', position: 'absolute', bottom: '1rem' }}
                    >
                        Mehr
                    </Button> */}
                </Card>
                <Card sx={{ width: 400, height: 200, p: 2, opacity: .9 }}>
                    <Stack direction="row" justifyContent="space-between" >
                        <Typography variant="h5">Buche 24/7</Typography>
                        <Box sx={{ width: 75 }}>
                            <img alt="hero-icon" src={Icon2} sx={{ height: '100%', width: '100%' }} />
                        </Box>
                    </Stack>
                    {/* <Button
                        variant="contained"
                        sx={{ width: '90%', mx: 'auto', position: 'absolute', bottom: '1rem' }}
                    >
                        Mehr
                    </Button> */}
                </Card>
                <Card sx={{ width: 400, height: 200, p: 2, opacity: .9 }}>
                    <Stack direction="row" justifyContent="space-between"  >
                        <Typography variant="h5">Keine Vorkasse</Typography>
                        <Box sx={{ width: 75 }}>
                            <img alt="hero-icon" src={Icon3} sx={{ height: '100%', width: '100%' }} />
                        </Box>
                    </Stack>
                    {/* <Button
                        variant="contained"
                        sx={{ width: '90%', mx: 'auto', position: 'absolute', bottom: '1rem' }}
                    >
                        Mehr
                    </Button> */}
                </Card>
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