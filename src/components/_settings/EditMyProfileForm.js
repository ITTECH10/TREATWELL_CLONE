import React from 'react'
import { useNavigate } from 'react-router-dom'
/////////////////////////////////
import { Paper, Typography, Stack, Button, Box, TextField } from '@mui/material'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const EditMyProfileForm = () => {
    const navigate = useNavigate()
    const handleChange = e => { }

    return (
        <Paper elevation={1} sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={{ height: 80, width: 80, position: 'relative' }}>
                    <img src='https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="employee-profile" style={{ height: '100%', width: '100%', borderRadius: '50%' }} />
                </Box>
                <Stack alignItems="space-between">
                    <Typography>Hans Miller</Typography>
                    <a href="https://google.com" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>
                        Website: https://google.com
                    </a>
                </Stack>
            </Stack>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box>
                    <Stack direction="row" spacing={2} mt={3}>
                        <TextField
                            name="phone"
                            fullWidth
                            disabled
                            value={`Handy: 0049-152-901820`}
                            size="small"
                            onChange={handleChange}
                        />
                        <TextField
                            placeholder="Email"
                            name="email"
                            fullWidth
                            disabled
                            value={`Email: hans.beispiel@test.com`}
                            type="email"
                            size="small"
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2} mt={3}>
                        <TextField
                            fullWidth
                            name="biography"
                            size="small"
                            disabled
                            value='Biografie: Hallo, wie Sie sehen können, bin ich auf kognitive Verhaltenstherapie spezialisiert. Aus meiner Erfahrung heraus habe ich die große Mehrheit der Menschen geführt und ihnen geholfen.'
                            multiline
                            rows={5}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Box mt={3}>
                        <Button variant="contained" color="error" onClick={() => navigate('/home')}>Zurück</Button>
                    </Box>
                </Box>
            </LocalizationProvider>
        </Paper>
    )
}

export default EditMyProfileForm
