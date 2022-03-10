import { useState } from 'react'
import axios from 'axios'
import { useApp } from './../../../context/AppContext'

import { Link as RouterLink } from 'react-router-dom';

// material
import {
    Stack,
    TextField,
    Link,
    Box
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function ForgotPasswordForm() {
    const { setGeneralAlertOptions } = useApp()
    const [email, setEmail] = useState('')
    const [btnLoading, setBtnLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        setBtnLoading(true)
        axios.post('/pacients/forgotPassword', { email })
            .then(res => {
                if (res.status === 200) {
                    setBtnLoading(false)
                    setGeneralAlertOptions({
                        open: true,
                        severity: 'success',
                        message: 'Wir haben Ihnen Anweisungen zum Zurücksetzen des Passworts an Ihre E-Mail gesendet!',
                        hideAfter: 5000
                    })
                }
            }).catch(err => {
                // console.log(err)
                setBtnLoading(false)
                setGeneralAlertOptions({
                    open: true,
                    severity: 'error',
                    message: err.response.data.message ? `${err.response.data.message}` : 'Server fehler...',
                    hideAfter: 5000
                })
            })
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <TextField
                    fullWidth
                    type="email"
                    sx={{ mb: 2 }}
                    label="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Stack>

            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={btnLoading}
                disabled={email === ''}
            >
                Fertig
            </LoadingButton>
            <Link sx={{ display: 'inline-block', mt: .5 }} variant="subtitle2" component={RouterLink} to="/">
                Gehe Zurück
            </Link>
        </Box>
    );
}