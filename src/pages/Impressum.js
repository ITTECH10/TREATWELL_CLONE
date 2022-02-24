import React from 'react'
import { useNavigate } from 'react-router-dom'
// mui
import { Typography, Box, Button, Grid } from '@mui/material'
// other

const Impressum = () => {
    const navigate = useNavigate()

    return (
        <Grid container>
            <Grid item xs={0} md={3} />
            <Grid item xs={12} md={6}>
                <Box>
                    <Typography variant="h3">Impressum</Typography>
                    <Typography variant="h4">Angaben gem&auml;&szlig; &sect; 5 TMG</Typography>
                    <Typography variant="p"><strong>Vertreten durch:</strong><br />
                        Tanja Bastek</Typography><br />
                    <Typography>Gesundo24</Typography>
                    <Typography>Lichtenrader Damm 67</Typography>
                    <Typography>12305 Berlin</Typography>
                    <Typography variant="h4">Kontakt</Typography>
                    <Typography variant="p">Telefon: 03022389838<br />
                        E-Mail: info@gesundo24.de</Typography>
                    <Typography variant="h4">Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</Typography>
                    <Typography variant="p">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</Typography>
                </Box>
                <Button onClick={() => navigate('/')} variant="contained">Gehe Zurück</Button>
            </Grid>
            <Grid item xs={0} md={3} />
        </Grid>
    )
}

export default Impressum