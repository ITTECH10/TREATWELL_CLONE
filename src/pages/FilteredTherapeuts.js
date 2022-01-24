import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Page from '../components/Page'
///////////////////////// material
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Typography, Box, Stack, Card, Button, Grid, Container, Avatar } from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
//////////////////////////
import BookTherapyDialog from '../components/THERAPIES/BookTherapyDialog'
import AddTherapyDialog from '../components/THERAPIES/AddTherapyDialog'

const FilteredTherapeuts = () => {
    const { therapeuts, setSelectedTherapeut } = useApp()
    const navigate = useNavigate()
    // FIX LATER
    const [preventMultipleComponentDateChange, setPreventMultipleComponentChange] = useState(new Date())

    const therapeutSelectionHandler = (therapeut) => {
        if (therapeut) {
            setSelectedTherapeut(therapeut)
            navigate(`/therapeuts/${therapeut._id}`)
        }
    }

    return (
        <Page title="Rezultati Pretrage">
            <Container maxWidth="lg" p={2}>
                <Typography my={2} variant="h5" align="center">Kardio-MRT (Herz-MRT) in Deutschland : Buchen Sie den passenden Spezialisten online.</Typography>
                {
                    therapeuts.map(therapeut => {
                        return <Card sx={{ p: 2, mb: 2, height: 400 }}>
                            <Grid container>
                                <Grid item xs={4} sx={{ pt: 2 }}>
                                    <Stack onClick={() => therapeutSelectionHandler(therapeut)} direction="row" alignItems="center" spacing={1} sx={{ cursor: 'pointer' }}>
                                        <Avatar alt="therapeut name" src={therapeut.image} sx={{ height: 50, width: 50 }} />
                                        <Typography variant="h6">
                                            {therapeut.name}
                                        </Typography>
                                    </Stack>
                                    <Box>
                                        <Button startIcon={<WorkOutlineIcon />}>{therapeut.specializedIn}</Button>
                                        <Typography variant="subtitle2">
                                            {therapeut.location}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            82211 Herrsching am Ammersee
                                        </Typography>
                                        <BookTherapyDialog therapeut={therapeut} date={preventMultipleComponentDateChange} />
                                    </Box>
                                </Grid>
                                <Grid item xs={8}>
                                    {therapeut.available ?
                                        <StaticDatePickerLandscape
                                            setPreventMultipleComponentChange={setPreventMultipleComponentChange}
                                        /> :
                                        <Typography variant="subtitle1">Keine Verfügbarkeit...</Typography>}
                                </Grid>
                            </Grid>
                        </Card>
                    })
                }
            </Container>
        </Page>
    )
}

export default FilteredTherapeuts

function StaticDatePickerLandscape({ setPreventMultipleComponentChange }) {
    const [value, setValue] = React.useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={value}
                disablePast
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setValue(newValue);
                    setPreventMultipleComponentChange(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

