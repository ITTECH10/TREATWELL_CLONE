import { useState } from 'react'
import { useApp } from '../../../context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, InputAdornment, IconButton, Box, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// rest
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// ----------------------------------------------------------------------

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  policiesAccepted: false
}

export default function RegisterForm() {
  const { setAuthenticated, setToken, setLogedInPacient, setGeneralAlertOptions } = useApp()
  const [fields, setFields] = useState(initialValues)
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState()
  const [btnLoading, setBtnLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    axios.post('/users/signup', { ...fields })
      .then(res => {
        if (res.status === 201) {
          setBtnLoading(false)
          setAuthenticated(true);
          navigate('/home')
          setToken(res.data.token)
          setLogedInPacient(res.data.newUser)
        }
      })
      .catch(err => {
        // console.log(err)
        setGeneralAlertOptions({
          open: true,
          severity: 'error',
          message: err.response ? `${err.response.data.message}` : 'Server fehler...',
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
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField
            name="firstName"
            fullWidth
            onChange={handleChange}
            label="Vorname"
          />

          <TextField
            name="lastName"
            fullWidth
            onChange={handleChange}
            label="Nachname"
          />
        </Stack>

        <TextField
          name="email"
          fullWidth
          onChange={handleChange}
          type="email"
          label="E-mail"
        />
        <TextField
          name="password"
          fullWidth
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          label="Passwort"
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
          name="confirmPassword"
          fullWidth
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          label="Passwort bestätigen"
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

        <FormGroup style={{ alignItems: 'flex-start' }}>
          <FormControlLabel labelPlacement="end" control={<Checkbox checked={fields.policiesAccepted} onChange={() => setFields({
            ...fields,
            policiesAccepted: !fields.policiesAccepted
          })} />} label="Datenschutzbestimmungen" />
        </FormGroup>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={btnLoading}
          disabled={Object.values(fields).some(field => field === '')}
        >
          Fortsetzen
        </LoadingButton>
      </Stack>
    </Box>
  );
}
