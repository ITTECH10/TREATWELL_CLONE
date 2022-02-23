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
                    <Typography variant="p">TS Management GbR<br />
                        Lichtenrader Damm 67<br />
                        12305 Berlin
                    </Typography>
                    <Typography variant="p"><strong>Vertreten durch:</strong><br />
                        Tanja Bastek</Typography>

                    <Typography variant="h4">Kontakt</Typography>
                    <Typography variant="p">Telefon: 030-91531353<br />
                        E-Mail: info@medirella.com</Typography>

                    <Typography variant="h4">Aufsichtsbeh&ouml;rde</Typography>
                    <Typography variant="p">Bundesamt f&uuml;r Verbraucherschutz und Lebensmittelsicherheit<br />
                        Mauerstra&szlig;e 39, 10117 Berlin</Typography>
                    <Typography variant="p"><a href="https://www.bvl.bund.de/DE/Home/home_node.html" target="_blank" rel="noopener noreferrer">https://www.bvl.bund.de/DE/Home/home_node.html</a></Typography>

                    <Typography variant="h4">Angaben zur Berufs&shy;haftpflicht&shy;versicherung</Typography>
                    <Typography variant="p"><strong>Name und Sitz des Versicherers:</strong><br />
                        Inter Versicherungen AG<br />
                        Wittenbergpl. 2, 10789 Berlin</Typography>
                    <Typography variant="p"><strong>Geltungsraum der Versicherung:</strong><br />Deutschland</Typography>

                    <Typography variant="h4">EU-Streitschlichtung</Typography>
                    <Typography variant="p">Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</Typography>

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