import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import axios from 'axios'
//mui
import { Grid, Stack, Box, TextField, Typography, Card, Checkbox, FormControlLabel, FormGroup, IconButton } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
//rest
import Page from '../components/Page'

const initialFields = {
    firstName: '',
    lastName: '',
    street: '',
    plz: '',
    place: '',
    email: '',
    phone: '',
    message: '',
    checked: false
}

const BecomePartner = () => {
    const { setGeneralAlertOptions } = useApp()
    const [fields, setFields] = useState(initialFields)
    const [btnLoading, setBtnLoading] = useState(false)

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setBtnLoading(true)

        axios.post('/therapeuts/become-partner', { therapeut: { ...fields } })
            .then(res => {
                if (res.status === 200) {
                    setBtnLoading(false)
                    setGeneralAlertOptions({
                        open: true,
                        message: 'Sie haben die E-mail erfolgreich gesendet!',
                        severity: 'success',
                        hideAfter: 5000
                    })
                }
            }).catch(err => {
                console.log(err)
                setBtnLoading(false)
                setGeneralAlertOptions({
                    open: true,
                    message: 'Etwas ist schief gelaufen!',
                    severity: 'success',
                    hideAfter: 5000
                })
            })
    }

    return (
        <Page title="Partner Bekommen" mx={2}>
            <Stack alignItems="center" mb={4} mx="auto" sx={{ width: { xs: 'auto', md: 600 } }}>
                <Typography variant="h3" align="center" mt={5}>
                    Werden Sie unser Partner!
                </Typography>
                <Typography align="center">
                    Senden Sie uns eine Nachricht und erhalten Sie mehr Informationen.
                </Typography>
            </Stack>
            <Grid container spacing={2}>
                <Grid item xs={0} md={3} />
                <Grid item xs={12} md={6}>
                    <Card sx={{ py: 5, px: { xs: 2, md: 10 }, mb: 4 }}>
                        <Box component="form" sx={{ mx: 'auto' }} onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
                                    <TextField
                                        label="Vorname"
                                        onChange={handleChange}
                                        name="firstName"
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        label="Nachname"
                                        onChange={handleChange}
                                        name="lastName"
                                        required
                                        fullWidth
                                    />
                                </Stack>
                                <TextField
                                    label="Strasse, Hausnummer"
                                    onChange={handleChange}
                                    name="street"
                                    required
                                    fullWidth
                                />
                                <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
                                    <TextField
                                        label="PLZ"
                                        onChange={handleChange}
                                        name="plz"
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        label="Ort"
                                        onChange={handleChange}
                                        name="place"
                                        required
                                        fullWidth
                                    />
                                </Stack>
                                <TextField
                                    label="E-mail"
                                    onChange={handleChange}
                                    name="email"
                                    required
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    label="Telefonnummer"
                                    onChange={handleChange}
                                    name="phone"
                                    required
                                    fullWidth
                                />
                                <TextField
                                    label="Nachricht"
                                    onChange={handleChange}
                                    name="message"
                                    required
                                    fullWidth
                                    multiline
                                    rows={4}
                                />
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox
                                            checked={fields.checked}
                                            onChange={() => setFields({ ...fields, checked: !fields.checked })}
                                            required
                                        />}
                                        label="Wir verarbeiten Ihre Daten entsprechend unserer Datenschutzhinweise.*"
                                    />
                                </FormGroup>
                                <LoadingButton
                                    type="submit"
                                    sx={{ alignSelf: 'flex-end' }}
                                    variant="contained"
                                    size="large"
                                    endIcon={<EmailIcon />}
                                    disabled={Object.values(fields).some(field => !field)}
                                    loading={btnLoading}
                                >
                                    Nachriht Senden
                                </LoadingButton>
                            </Stack>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ height: { xs: 'calc(100% - 8px)', md: 'calc(100% - 32px)' }, p: 2 }}>
                        <Typography variant="h3">Kontakt Info</Typography>
                        <Typography>
                            Lichtenrader Damm 67 12305 Berlin
                        </Typography>
                        <Typography>
                            info@gesundo24.de
                        </Typography>
                        <Typography>
                            +49 30 22 38 98 38
                        </Typography>
                        <Typography variant="h3" mt={2}>Get Social</Typography>
                        <Stack direction="row">
                            <IconButton sx={{ color: '#3b5998' }}>
                                <FacebookIcon sx={{ fontSize: '2rem' }} />
                            </IconButton>
                            <IconButton sx={{ color: '#8a3ab9' }}>
                                <InstagramIcon sx={{ fontSize: '2rem' }} />
                            </IconButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Page >
    )
}

export default BecomePartner