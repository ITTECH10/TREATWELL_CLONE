import React from 'react'
// mui
import { Box, Stack, Typography, Button, Grid, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles'
// others
import { manipulateCloudinaryImage } from '../../utils/manipulateCloudinaryImage'

const TrendingLeaf = '/static/icons/trending-leaf.png'
const ImageOne = manipulateCloudinaryImage('https://res.cloudinary.com/dt5o99tph/image/upload/v1647337468/portrait-cheerful-male-doctor-dressed-uniform_s60zzh.jpg', ['w_2000'])
const ImageTwo = manipulateCloudinaryImage('https://res.cloudinary.com/dt5o99tph/image/upload/v1646653258/therapy-of-the-month_tjdanr.jpg', ['w_2000'])
const ImageThree = manipulateCloudinaryImage('https://res.cloudinary.com/dt5o99tph/image/upload/v1646653260/back-pain_eha6zn.jpg', ['w_2000'])

const HomeTrendingNews = () => {
    const theme = useTheme()

    return (
        <Box sx={{ backgroundColor: '#E5E5E5' }}>
            <Container sx={{ py: { xs: .5, md: 4 } }}>
                <Typography variant="h2" align="center">Aktuelles aus der Gesundo24 Welt</Typography>
                <Box sx={{ height: '.8rem', width: '7rem', m: '1rem auto' }}>
                    <img alt="leaf" src={TrendingLeaf} style={{ height: '100%', width: '100%' }} />
                </Box>
                <Grid container spacing={4} sx={{ height: { xs: 'auto', md: 600 }, mb: 4 }}>
                    <Grid item xs={12} md={4}>
                        <Stack justifyContent="center" alignItems="center" sx={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(${ImageOne})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '.5rem',
                            height: { xs: 300, md: '100%' }
                        }}>
                            <Stack alignItems="center" px={2}>
                                <Typography variant="h3" sx={{ color: theme.palette.background.paper, fontWeight: 400, textAlign: 'center' }}>
                                    Heilpraktiker des Monats
                                </Typography>
                                <Button sx={{
                                    backgroundColor: 'transparent',
                                    border: `2px solid ${theme.palette.background.paper}`,
                                    boxShadow: 'none',
                                    '&:hover': { backgroundColor: '#fff', boxShadow: 'none', color: '#000' }
                                }}
                                    variant="contained"
                                    size="large">
                                    Mehr lesen
                                </Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack justifyContent="center" alignItems="center" sx={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(${ImageTwo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '.5rem',
                            height: { xs: 300, md: '100%' }
                        }}>
                            <Stack alignItems="center" px={2}>
                                <Typography variant="h3" sx={{ color: theme.palette.background.paper, fontWeight: 400, textAlign: 'center' }}>
                                    Therapie des Monats
                                </Typography>
                                <Button sx={{
                                    backgroundColor: 'transparent',
                                    border: `2px solid ${theme.palette.background.paper}`,
                                    boxShadow: 'none',
                                    '&:hover': { backgroundColor: '#fff', boxShadow: 'none', color: '#000' }
                                }}
                                    variant="contained"
                                    size="large">
                                    Mehr lesen
                                </Button>                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack justifyContent="center" alignItems="center" sx={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(${ImageThree})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '.5rem',
                            height: { xs: 300, md: '100%' }
                        }}>
                            <Stack alignItems="center" px={2}>
                                <Typography variant="h3" sx={{ color: theme.palette.background.paper, fontWeight: 400, textAlign: 'center' }}>
                                    Good to know "Rückenschmerzen" hier gratis downloaden
                                </Typography>
                                <Button sx={{
                                    backgroundColor: 'transparent',
                                    border: `2px solid ${theme.palette.background.paper}`,
                                    boxShadow: 'none',
                                    '&:hover': { backgroundColor: '#fff', boxShadow: 'none', color: '#000' }
                                }}
                                    variant="contained"
                                    size="large">
                                    Mehr lesen
                                </Button>                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default HomeTrendingNews