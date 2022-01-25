import { useState } from 'react'
import { useApp } from '../../../context/AppContext'
import axios from 'axios'
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, InputAdornment, IconButton, CircularProgress } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// rest
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// ----------------------------------------------------------------------

export default function RegisterForm() {
  const { setAuthenticated, setToken } = useApp()
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState()
  const [btnLoading, setBtnLoading] = useState(false)

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Vorname ist notwendig'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Nachname ist notwendig'),
    email: Yup.string().email('Email must be a valid email address').required('E-Mail ist notwendig'),
    password: Yup.string().required('Passwort ist notwendig'),
    confirmPassword: Yup.string().required('Bitte bestätigen Sie das Passwort').oneOf([Yup.ref('password'), null], 'Passwörter sind nicht identisch')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      axios.post('/pacients/signup', { ...values })
        .then(res => {
          if (res.status === 201) {
            setBtnLoading(false)
            setAuthenticated(true);
            navigate('/categories')
            setToken(res.data.token)
          }
        })
        .catch(err => console.log(err))
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Vorname"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Nachname"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="E-mail"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            name="password"
            fullWidth
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
          <TextField
            name="confirmPassword"
            fullWidth
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

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            {btnLoading ? <CircularProgress style={{ color: '#fff' }} size={24} /> : 'Fortzetzen'}
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
