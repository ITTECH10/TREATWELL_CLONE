import React from 'react'
// mui
import { Box, Stack, Card, List, ListItem, ListItemText, ListItemIcon, Typography, Divider, Rating } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// others

const therapeutAdvantages = [
    {
        id: 0,
        title: 'Neukundengewinnung'
    },
    {
        id: 1,
        title: 'Bekanntheitsgradsteigerung'
    },
    {
        id: 2,
        title: 'Unterstützung beim Geschäfts-/ Praxisaufbau'
    },
    {
        id: 3,
        title: 'Monatliche Unterstützung bei Marketing und Werbung'
    },
    {
        id: 4,
        title: 'Rechtliche Beratung'
    }
]

const HomeTherapeutAdvantages = () => {
    const theme = useTheme()

    return (
        <Card sx={{ px: { xs: 0, md: 10 }, pt: { xs: 1.5, md: 3 }, mb: 3 }}>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Stack justifyContent="center" alignItems="center" sx={{ width: { xs: '100%', md: '50%' }, py: 4 }}>
                    <Box sx={{
                        height: { xs: 235 },
                        width: 400,
                        position: 'relative',
                        backgroundColor: 'rgba(52, 196, 83, .7)',
                        borderRadius: 1,
                        px: 2
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            left: '50%',
                            top: '-2.3rem',
                            transform: 'translateX(-50%)',
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            border: `5px solid ${theme.palette.primary.light}`,
                            overflow: 'hidden'
                        }}>
                            <Box sx={{
                                height: '100%',
                                width: '100%',
                                backgroundImage: 'url(https://res.cloudinary.com/dt5o99tph/image/upload/v1649338355/twkvwx7jjwmau2pnutoo.jpg)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'top',
                                transform: 'scale(1.2)'
                            }} />
                        </Box>
                        <Box sx={{ color: '#fff', mt: 5.5, textAlign: 'center', px: { xs: 1.5, md: 0 } }}>
                            <Typography variant="h5">Ya-Hui Wang - Heilpraktikerin</Typography>
                            <Rating
                                sx={{ opacity: '1 !important' }}
                                name="read-only"
                                disabled
                                value={5}
                            />
                            <Divider sx={{ mx: 'auto', borderColor: 'white', width: 200, my: .5 }} />
                            <Typography variant="caption">
                                gesundo24.de ist für mich die beste Entscheidung seit langem! Endlich eine Plattform, die die Wichtigkeit von Heilpraktikern anerkennt. Vor allem sind die Menschlichkeit und Know-How der Betreiberinnen und deren Leidenschaft für die Naturheilkunde top!
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
                <List dense sx={{ width: { xs: '100%', md: '50%' }, marginTop: { xs: 0, md: 2 } }}>
                    {therapeutAdvantages.map(therapeutAdvantage => {
                        return <ListItem key={therapeutAdvantage.id}>
                            <ListItemIcon>
                                <CheckCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                                primary={therapeutAdvantage.title}
                                primaryTypographyProps={{ variant: 'h5' }}
                            />
                        </ListItem>
                    })}
                </List>
            </Stack>
        </Card >
    )
}

export default HomeTherapeutAdvantages
