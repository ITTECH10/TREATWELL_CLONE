import React from 'react';
// mui
import { Box, Stack, Typography, Card } from '@mui/material'
import { styled } from '@mui/material/styles'

const Icon1 = '/static/illustrations/lipoweg-icon-1.png'
const Icon2 = '/static/illustrations/lipoweg-icon-2.png'
const Icon3 = '/static/illustrations/lipoweg-icon-3.png'
const Icon4 = '/static/illustrations/lipoweg-icon-4.png'

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
        <Box my={3} py={3} sx={{ backgroundColor: '#E5E5E5' }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2 }} justifyContent="center" alignItems={{ xs: 'center', md: 'stretch' }}>
                <CardBox>
                    <Stack direction={{ xs: 'column' }} justifyContent="space-between" alignItems={{ xs: 'center' }} >
                        <Box sx={{ width: 320 }}>
                            <img alt="hero-icon" src={Icon1} style={{ height: '100%', width: '100%' }} />
                        </Box>
                        <Box>
                            <Typography align="center" variant="h5">Geprüfte Therapeuten</Typography>
                            <Typography>
                                Alle unsere Mitglied-Therapeuten verfügen über einige Qualifikationen und ausreichend Erfahrung. Alle haben ihre Ausbildung wie auch Weiterbildungen in Deutschland absolviert.
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
                                Wir erleichtern Ihnen die Suche nach einem passenden Therapeuten. Sie sehen das Profil, die Qualifikationen und Bewertungen auf einen Blick. So können Sie 24/7 und von überall einen Termin mit Ihrem ausgewählten Therapeuten buchen.
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
                                Terminbuchung ist bei uns kostenlos, Sie zahlen lediglich die Behandlung vor Ort.
                            </Typography>
                        </Box>
                    </Stack>
                </CardBox>
            </Stack>
            <Stack sx={{ mt: 2 }} direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2 }} justifyContent="center" alignItems={{ xs: 'center', md: 'stretch' }}>
                <CardBox>
                    <Stack direction={{ xs: 'column' }} justifyContent="space-between" alignItems={{ xs: 'center' }} >
                        <Box sx={{ width: 320 }}>
                            <img alt="hero-icon" src={Icon4} style={{ height: '100%', width: '100%' }} />
                        </Box>
                        <Box>
                            <Typography align="center" variant="h5">Bewährt</Typography>
                            <Typography>
                                Alle unsere Mitglied-Therapeuten verfügen über einige Qualifikationen und ausreichend Erfahrung. Alle haben ihre Ausbildung wie auch Weiterbildungen in Deutschland absolviert.
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
                            <Typography align="center" variant="h5">Unterstützung</Typography>
                            <Typography>
                                Wir erleichtern Ihnen die Suche nach einem passenden Therapeuten. Sie sehen das Profil, die Qualifikationen und Bewertungen auf einen Blick. So können Sie 24/7 und von überall einen Termin mit Ihrem ausgewählten Therapeuten buchen.
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
                            <Typography align="center" variant="h5">Leidenschaft</Typography>
                            <Typography>
                                Terminbuchung ist bei uns kostenlos, Sie zahlen lediglich die Behandlung vor Ort.
                            </Typography>
                        </Box>
                    </Stack>
                </CardBox>
            </Stack>
        </Box>
    )
};

export default HomeServiceBoxes;
