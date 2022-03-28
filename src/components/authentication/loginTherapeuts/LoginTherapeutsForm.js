import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useApp } from '../../../context/AppContext'
import * as Yup from 'yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
    Stack,
    TextField,
    CircularProgress,
    IconButton,
    InputAdornment
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const { setToken, setAuthenticated, setGeneralAlertOptions } = useApp()
    const navigate = useNavigate()
    const [btnLoading, setBtnLoading] = useState(false)

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('E-Mail muss eine gültige E-Mail-Adresse sein').required('E-Mail ist benötigt'),
        password: Yup.string().required('Passwort ist benötigt')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: true
        },
        validationSchema: LoginSchema,
        onSubmit: () => {
            setBtnLoading(true)
            axios.post('/therapeuts/login', { ...values })
                .then(res => {
                    if (res.status === 200) {
                        setBtnLoading(false)
                        setAuthenticated(true);
                        navigate('/home')
                        setToken(res.data.token)
                    }
                })
                .catch(err => {
                    // console.log(err.response)
                    setGeneralAlertOptions({
                        open: true,
                        severity: 'error',
                        message: err.response ? `${err.response.data.message}` : 'Server fehler...',
                        hideAfter: 5000
                    })
                })
        }
    });

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack>
                    <TextField
                        fullWidth
                        type="email"
                        sx={{ mb: 2 }}
                        label="Email"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />

                    <TextField
                        fullWidth
                        sx={{ mb: 2 }}
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Passwort"
                        {...getFieldProps('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleShowPassword} edge="end">
                                        <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                    />
                </Stack>

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                >
                    {btnLoading ? <CircularProgress style={{ color: '#fff' }} size={24} /> : 'Fortsetzen'}
                </LoadingButton>
            </Form>
        </FormikProvider>
    );
}
