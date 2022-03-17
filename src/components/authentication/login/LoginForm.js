import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useApp } from '../../../context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Stack,
  TextField,
  CircularProgress,
  IconButton,
  InputAdornment,
  Link,
  Box
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

const initialFields = {
  email: '',
  password: ''
}

export default function LoginForm() {
  const { setToken, setAuthenticated, setGeneralAlertOptions } = useApp()
  const [fields, setFields] = useState(initialFields)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false)

  const handleChange = e => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = e => {
    e.preventDefault()
    setBtnLoading(true)
    axios.post('/users/login', { ...fields })
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
        setBtnLoading(false)
        setGeneralAlertOptions({
          open: false,
          severity: 'error',
          message: '',
          hideAfter: 0
        })
        setGeneralAlertOptions({
          open: true,
          severity: 'error',
          message: `${err.response.data.message}`,
          hideAfter: 5000
        })
      })
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack>
        <TextField
          name="email"
          fullWidth
          type="email"
          sx={{ mb: 2 }}
          label="Email"
          onChange={handleChange}
        // error={Boolean(touched.email && errors.email)}
        // helperText={touched.email && errors.email}
        />

        <TextField
          name="password"
          fullWidth
          autoComplete="current-password"
          type={showPassword ? 'text' : 'password'}
          label="Passwort"
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
        // error={Boolean(touched.password && errors.password)}
        // helperText={touched.password && errors.password}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 2 }}>
        <Link component={RouterLink} variant="subtitle2" to="/forgotPassword">
          Passwort vergessen?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={btnLoading}
        disabled={Object.values(fields).some(field => field === '')}
      >
        {btnLoading ? <CircularProgress style={{ color: '#fff' }} size={24} /> : 'Fortsetzen'}
      </LoadingButton>
    </Box>
  );
}
