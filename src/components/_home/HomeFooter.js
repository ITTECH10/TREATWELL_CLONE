import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
//mui
import { Stack, Box, Typography, IconButton, List, ListItem, ListItemText, Link } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
//rest
const Icon1 = '/static/illustrations/lipoweg-icon-4.png'
const Icon2 = '/static/illustrations/lipoweg-icon-5.png'
const Logo = '/static/logo-white.svg'

const generateListItems = [
    {
        id: 0,
        name: 'ERFOLGSGESCHICHTEN',
        link: '/'
    },
    {
        id: 1,
        name: 'STANDORTE',
        link: '/'
    },
    {
        id: 2,
        name: 'BLOG',
        link: '/'
    },
    {
        id: 3,
        name: 'PARTNER WERDEN',
        link: '/become-partner'
    },
    {
        id: 4,
        name: 'KONTAKT',
        link: '/'
    },
    {
        id: 5,
        name: 'IMPRESSUM',
        link: '/privacy-policy'
    },
    {
        id: 6,
        name: 'DATENSCHUTZ',
        link: '/privacy-policy'
    }
]

const HomeFooter = () => {
    const theme = useTheme()
    return (
        <Box sx={{ color: theme.palette.background.paper, backgroundColor: theme.palette.primary.dark }}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                sx={{ height: { xs: 'auto', md: 300 }, py: { xs: 2, md: 0 }, borderBottom: `1px solid ${theme.palette.background.paper}` }}
            >
                <Stack
                    sx={{ width: { xs: '100%', md: '50%' }, borderRight: `1px solid ${theme.palette.background.paper}` }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Box sx={{ width: 80 }}>
                        <img style={{ width: '100%' }} src={Icon1} alt="phone" />
                    </Box>
                    <Typography variant="h4">030 91531353</Typography>
                    <Typography variant="h4">TELEFON</Typography>
                </Stack>
                <Stack
                    sx={{ width: { xs: '100%', md: '50%' } }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Box sx={{ width: 80 }}>
                        <img style={{ width: '100%' }} src={Icon2} alt="email" />
                    </Box>
                    <Typography variant="h4">info@gesundo24.de</Typography>
                    <Typography variant="h4">MAIL</Typography>
                </Stack>
            </Stack>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-around"
                alignItems="center"
                sx={{ height: 400, backgroundColor: theme.palette.info.dark, borderBottom: `1px solid ${theme.palette.background.paper}` }}
            >
                <Box component="img" src={Logo} sx={{ width: 300, mt: { xs: 2, md: 0 } }} />
                <List>
                    {
                        generateListItems.map(listItem => {
                            return <ListItem key={listItem.id}>
                                <ListItemText
                                    primary={<Link color="inherit" component={RouterLink} to={listItem.link}>{listItem.name}</Link>}
                                />
                            </ListItem>
                        })
                    }
                </List>
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