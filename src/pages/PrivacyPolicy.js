import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
// mui
import { Grid, Paper, Button, Stack, Typography, Box } from '@mui/material'
// rest
import Page from '../components/Page'

const PrivacyPolicy = () => {
    const { logout, setGeneralAlertOptions, authenticated, setLogedInPacient, logedInPacient } = useApp()
    const navigate = useNavigate()

    const acceptPoliciesHandler = () => {
        axios('/users/accept-policies')
            .then(res => {
                if (res.status === 200) {
                    navigate('/')
                    setLogedInPacient({ ...logedInPacient, policiesAccepted: true })
                    setGeneralAlertOptions({
                        open: true,
                        severity: 'info',
                        message: 'Vielen Dank, dass Sie unsere Impressum akzeptiert haben!',
                        hideAfter: 5000
                    })
                }
            }).catch(err => {
                console.log(err.response)
                setGeneralAlertOptions({
                    open: true,
                    severity: 'error',
                    message: 'Beim Akzeptieren Ihrer Anfrage ist etwas schief gelaufen, wenden Sie sich bitte an unseren Kundenservice!',
                    hideAfter: 5000
                })
            })
    }

    return (
        <Page title="Impressum">
            <Grid container>
                <Grid sm={3} item />
                <Grid sm={6} item>
                    <Paper p={3} elevation={1} sx={{ p: 5 }}>
                        <Box>
                            <Typography variant="h3">Impressum</Typography>
                            <Typography variant="h4">Angaben gem&auml;&szlig; &sect; 5 TMG</Typography>
                            <Typography variant="p">TS Management GbR<br />
                                Lichtenrader Damm 67<br />
                                12305 Berlin</Typography>

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
                        {authenticated ?
                            <Stack direction="row" spacing={1} justifyContent="flex-end" alignItems="center" my={1}>
                                <Button variant="contained" color='error' onClick={logout}>Ich bin nicht einverstanden</Button>
                                <Button variant="contained" color='primary' onClick={acceptPoliciesHandler}>Ich stimme zu</Button>
                            </Stack> :
                            <Button sx={{ mt: 1 }} variant="contained" onClick={() => navigate('/')}>
                                Gehe Zurück
                            </Button>
                        }
                    </Paper>
                </Grid>
                <Grid sm={3} item />
            </Grid>
        </Page>
    )
};

export default PrivacyPolicy;
