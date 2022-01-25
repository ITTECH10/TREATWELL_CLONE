import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
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
    CircularProgress
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function ResetPasswordForm() {
    const navigate = useNavigate();
    const location = useLocation()
    const [showPassword, setShowPassword] = useState(false);
    const { setToken } = useApp()
    const [btnLoading, setBtnLoading] = useState(false)

    const urlToken = location.pathname.split('/')[2]

    const LoginSchema = Yup.object().shape({
        password: Yup.string().required('Bitte geben Sie Ihr neues Passwort ein.').oneOf([Yup.ref('confirmPassword'), null], 'Passwörter stimmen nicht überein!'),
        confirmPassword: Yup.string().required('Bitte bestätigen Sie Ihr Passwort.').oneOf([Yup.ref('password'), null], 'Passwörter stimmen nicht überein!')
    });

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema: LoginSchema,

        onSubmit: () => {
            setBtnLoading(true)
            if (values.password !== values.confirmPassword) {
                setBtnLoading(false)
                return
            }
            axios.post(`/pacients/resetPassword/${urlToken}`, { ...values })
                .then(res => {
                    if (res.status === 200) {
                        setBtnLoading(false)
                        setToken(res.data.token)
                        navigate('/categories')
                    }
                }).catch(err => {
                    setBtnLoading(false)
                    console.log(err)
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
                <Stack spacing={1}>
                    <TextField
                        fullWidth
                        sx={{ mb: 0 }}
                        autoComplete="password"
                        type={showPassword ? 'text' : 'password'}
                        label="Neues Passwort"
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
                    <TextField
                        fullWidth
                        style={{ marginBottom: 8 }}
                        autoComplete="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        label="Passwort bestätigen"
                        {...getFieldProps('confirmPassword')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleShowPassword} edge="end">
                                        <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                    />
                </Stack>

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                >
                    {btnLoading ? <CircularProgress style={{ color: '#fff' }} size={24} /> : 'Fertig'}
                </LoadingButton>
            </Form>
        </FormikProvider>
    );
}