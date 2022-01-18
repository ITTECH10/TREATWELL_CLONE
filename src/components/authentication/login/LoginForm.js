import { useState } from 'react'
import { useApp } from '../../../context/AppContext'
import * as Yup from 'yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Stack,
  TextField,
  CircularProgress
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const { setToken, setAuthenticated } = useApp()
  const navigate = useNavigate()
  const [btnLoading, setBtnLoading] = useState(false)

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('E-Mail muss eine gültige E-Mail-Adresse sein').required('E-Mail ist benötigt'),
    // password: Yup.string().required('Passwort ist benötigt')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      // password: '',
      // remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      setBtnLoading(true)
      axios.post('/pacients/login', { ...values })
        .then(res => {
          if (res.status === 200) {
            setBtnLoading(false)
            setAuthenticated(true);
            navigate('/categories')
            setToken(res.data.token)
          }
        })
        .catch(err => console.log(err))
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  // const handleShowPassword = () => {
  //   setShowPassword((show) => !show);
  // };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            type="email"
            sx={{ mb: 2 }}
            label="Email"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          {/* <TextField
            fullWidth
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
          /> */}
        </Stack>
        {/* 
        <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 2 }}>
          <Link component={RouterLink} variant="subtitle2" to="#">
            Passwort vergessen?
          </Link>
        </Stack> */}

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Fortsetzen
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
