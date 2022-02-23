import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
//mui
import { Stack, Box, Typography, IconButton, List, ListItem, ListItemText, Link, Divider } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
//rest
const Icon1 = '/static/illustrations/lipoweg-icon-4.png'
const Icon2 = '/static/illustrations/lipoweg-icon-5.png'
const Logo = '/static/logo-white.svg'

const generateListItems = [
    {
        id: 0,
        name: 'STANDORTE',
        link: '/therapeuts/near'
    },
    {
        id: 1,
        name: 'BLOG',
        link: '/'
    },
    {
        id: 2,
        name: 'PARTNER WERDEN',
        link: '/become-partner'
    },
    {
        id: 3,
        name: 'IMPRESSUM',
        link: '/impressum'
    },
    {
        id: 4,
        name: 'DATENSCHUTZ',
        link: 'https://drive.google.com/uc?export=download&id=1KED1sq3X1Gr4h-kDDKB23UGeORwhOnuw',
        openOnNewPage: true
    },
    {
        id: 5,
        name: 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN',
        link: 'https://drive.google.com/uc?export=download&id=1Yer9C98lmrf_XSe_btn85PtMzYCBqU6A',
        openOnNewPage: true
    }
]

const HomeFooter = () => {
    const theme = useTheme()
    return (
        <Box sx={{ color: theme.palette.background.paper, backgroundColor: theme.palette.primary.dark }}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                sx={{ height: { xs: 'auto', md: 300 }, py: { xs: 3, md: 0 }, borderBottom: `1px solid ${theme.palette.background.paper}` }}
            >
                <Stack
                    sx={{ width: { xs: '100%', md: '50%' }, borderRight: `1px solid ${theme.palette.background.paper}` }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <IconButton color="inherit" sx={{ cursor: 'auto' }}>
                        <PhoneIcon sx={{ fontSize: "3rem" }} />
                    </IconButton>
                    <Typography variant="h4">030 91531353</Typography>
                </Stack>
                <Stack
                    sx={{ width: { xs: '100%', md: '50%' } }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <IconButton color="inherit" sx={{ cursor: 'auto' }}>
                        <EmailIcon sx={{ fontSize: "3rem" }} />
                    </IconButton>
                    <Typography variant="h4">info@gesundo24.de</Typography>
                </Stack>
            </Stack>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-around"
                alignItems="center"
                sx={{ height: 470, backgroundColor: theme.palette.info.dark, borderBottom: `1px solid ${theme.palette.background.paper}` }}
            >
                <Box component="img" src={Logo} sx={{ width: 300, mt: { xs: 2, md: 0 } }} />
                <Stack spacing={1}>
                    <List>
                        {
                            generateListItems.map(listItem => {
                                return <ListItem key={listItem.id}>
                                    <ListItemText
                                        primary={<a style={{ color: 'inherit' }} target={listItem.openOnNewPage && '_blank'} href={listItem.link}>{listItem.name}</a>}
                                    />
                                </ListItem>
                            })
                        }
                    </List>
                    <Box px={2}>
                        <Typography variant="h5">Kontakt</Typography>
                        <Divider sx={{ mb: 1 }} />
                        <Typography>Adresse: Lichtenrader Damm 67 12305 Berlin</Typography>
                        <Typography>Email: info@gesundo24.de</Typography>
                        <Typography>Telefon: +49 30 22 38 98 38</Typography>
                    </Box>
                </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ backgroundColor: theme.palette.info.darker }}>
                <Typography>&copy; Gesundo24 2022</Typography>
                <Stack direction="row" spacing={1}>
                    <IconButton sx={{ color: 'currentColor' }}>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: 'currentColor' }}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: 'currentColor' }}>
                        <EmailIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export default HomeFooter