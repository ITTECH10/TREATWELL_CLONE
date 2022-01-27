import React from 'react';
// mui
import { Box, Stack, Grid, Typography, Button, Card } from '@mui/material'
import { styled } from '@mui/material/styles'

const Icon1 = '/static/illustrations/heart.png'
const Icon2 = '/static/illustrations/iv.png'
const Icon3 = '/static/illustrations/hormones.png'

const AppHeroBoxes = () => {
    return (
        <Box>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Card sx={{ width: 400, height: 200, p: 2 }}>
                    <Stack direction="row" justifyContent="space-between" >
                        <Typography variant="subtitle2">Geprüfte Therapeuten</Typography>
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
                <Card sx={{ width: 400, height: 200, p: 2 }}>
                    <Stack direction="row" justifyContent="space-between" >
                        <Typography variant="subtitle2">Buche 24/7</Typography>
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
                <Card sx={{ width: 400, height: 200, p: 2 }}>
                    <Stack direction="row" justifyContent="space-between"  >
                        <Typography variant="subtitle2">Keine Vorkasse</Typography>
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