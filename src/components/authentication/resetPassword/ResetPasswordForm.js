import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import axios from 'axios'
import { useApp } from './../../../context/AppContext'

// material
import {
    Stack,
    TextField,
    IconButton,
    InputAdornment,
    Box
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

const initialValues = {
    password: '',
    confirmPassword: ''
}

export default function ResetPasswordForm() {
    const navigate = useNavigate();
    const { setToken, setGeneralAlertOptions } = useApp()
    const [fields, setFields] = useState(initialValues)
    const location = useLocation()
    const [showPassword, setShowPassword] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false)

    const urlToken = location.pathname.split('/')[2]

    const handleSubmit = e => {
        e.preventDefault()
        setBtnLoading(true)

        if (fields.password !== fields.confirmPassword) {
            setBtnLoading(false)
            setGeneralAlertOptions({
                open: true,
                severity: 'error',
                message: 'Passwörter sind nicht dasselbe.',
                hideAfter: 5000
            })
            return
        }
        axios.post(`/pacients/resetPassword/${urlToken}`, { ...fields })
            .then(res => {
                if (res.status === 200) {
                    setBtnLoading(false)
                    setToken(res.data.token)
                    navigate('/home')
                    setGeneralAlertOptions({
                        open: true,
                        severity: 'success',
                        message: 'Sie haben Ihr Passwort erfolgreich zurückgesetzt.',
                        hideAfter: 5000
                    })
                }
            }).catch(err => {
                // console.log(err)
                setBtnLoading(false)
                setGeneralAlertOptions({
                    open: true,
                    severity: 'error',
                    message: `${err.response.data.message}`,
                    hideAfter: 5000
                })
            })
    }

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={1}>
                <TextField
                    fullWidth
                    name="password"
                    sx={{ mb: 0 }}
                    autoComplete="password"
                    type={showPassword ? 'text' : 'password'}
                    label="Neues Passwort"
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} edge="end">
                                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    fullWidth
                    name="confirmPassword"
                    style={{ marginBottom: 8 }}
                    autoComplete="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    label="Passwort bestätigen"
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword} edge="end">
                                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Stack>

            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={btnLoading}
                disabled={Object.values(fields).some(field => field === '')}
            >
                Fertig
            </LoadingButton>
        </Box>
    );
}