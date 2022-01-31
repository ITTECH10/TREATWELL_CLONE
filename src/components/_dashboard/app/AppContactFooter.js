import React from 'react';
// mui
import { Box, Stack, Typography, Button, TextField, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
// rest
import Map from '../../Map'

const Logo = '/static/logo-white.svg'

const AppContactFooter = () => {
    const theme = useTheme()

    return (
        <Box sx={{ color: '#fff', backgroundColor: theme.palette.primary.main, position: 'relative', height: 400 }}>
            <Stack direction="row" justifyContent="space-between">
                <Box sx={{ width: '50%', p: 2 }}>
                    <Typography variant="h3">Kontakt Informationen</Typography>
                    <Stack>
                        <Typography>Telefon: 0049-833-372</Typography>
                        <Typography>Adresse: Wiesbaden Strasse 38822 Elfman</Typography>
                        <Typography>Impressum</Typography>
                    </Stack>
                    {/* <TextField
                        placeholder="E-mail"
                        type="email"
                        sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1, mt: 2 }}
                        fullWidth
                    /> */}
                </Box>
                {/* <Box sx={{ width: '40%', p: 1.5 }}>
                        <Map />
                    </Box> */}
            </Stack>
            <Box sx={{ p: 2 }}>
                <Box sx={{ position: 'absolute', bottom: '.5rem' }}>
                    <Box>
                        <Typography variant="h5">
                            Get In Touch
                        </Typography>
                        <Typography variant="body2">
                            Send us an e-mail.
                        </Typography>
                        <img src={Logo} style={{ width: 110, marginRight: 10, marginTop: 10 }} />
                    </Box>
                    <Stack direction="row">
                        <IconButton
                            href="https://google.com" target="_blank"
                            sx={{ color: theme.palette.background.paper, padding: '8px 0' }}
                        >
                            <FacebookIcon
                                sx={{ fontSize: '1.8rem' }}
                            />
                        </IconButton>
                        <IconButton
                            href="https://google.com" target="_blank"
                            sx={{ color: theme.palette.background.paper, padding: '8px 0' }}
                        >
                            <InstagramIcon
                                sx={{ fontSize: '1.8rem' }}
                            />
                        </IconButton>
                        <IconButton
                            href="mailto:emir.home.11@gmail.com"
                            sx={{ color: theme.palette.background.paper, padding: '8px 0' }}
                        >
                            <EmailIcon
                                sx={{ fontSize: '1.8rem' }}
                            />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
};

export default AppContactFooter;
