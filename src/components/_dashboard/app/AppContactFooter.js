import React from 'react';
// mui
import { Box, Stack, Typography, Button, TextField, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
// rest
import Map from '../../Map'

const Logo = '/static/logo.png'

const AppContactFooter = () => {
    const theme = useTheme()

    return (
        <Box sx={{ color: '#fff', backgroundColor: theme.palette.primary.main, position: 'relative', height: 400 }}>
            <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <img src={Logo} style={{ width: 60 }} />
                    <Box>
                        <Typography variant="h5">
                            Get In Touch
                        </Typography>
                        <Typography variant="body2">
                            Send us an e-mail.
                        </Typography>
                    </Box>
                </Box>
                {/* <Divider sx={{ backgroundColor: '#fff' }} /> */}
                <Stack direction="row" justifyContent="space-between">
                    <Box sx={{ width: '50%' }}>
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
                <Stack direction="row" sx={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                    <IconButton href="https://google.com" target="_blank" sx={{ color: theme.palette.background.paper }}>
                        <FacebookIcon sx={{ fontSize: '1.8rem' }} />
                    </IconButton>
                    <IconButton href="https://google.com" target="_blank" sx={{ color: theme.palette.background.paper }}>
                        <InstagramIcon sx={{ fontSize: '1.8rem' }} />
                    </IconButton>
                    <IconButton href="mailto:emir.home.11@gmail.com" sx={{ color: theme.palette.background.paper }}>
                        <EmailIcon sx={{ fontSize: '1.8rem' }} />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    )
};

export default AppContactFooter;
