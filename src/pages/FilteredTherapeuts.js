import React from 'react'
import { useApp } from '../context/AppContext'
import Page from '../components/Page'
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
///////////////////////// material
import { Typography, Box, Stack, Card, Button, Grid, Container, Avatar } from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const FilteredTherapeuts = () => {
    const { tempTherapeuts } = useApp()
    return (
        <Page title="Rezultati Pretrage">
            <Container maxWidth="lg" p={2}>
                <Typography my={2} variant="h5" align="center">Kardio-MRT (Herz-MRT) in Deutschland : Buchen Sie den passenden Spezialisten online.</Typography>
                {
                    tempTherapeuts.map(therapeut => {
                        return <Card sx={{ p: 2, mb: 2, height: 400 }}>
                            <Grid container>
                                <Grid item xs={4} sx={{ pt: 2 }}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Avatar alt="therapeut name" src={therapeut.image} sx={{ height: 50, width: 50 }} />
                                        <Typography variant="h6">
                                            {therapeut.name}
                                        </Typography>
                                    </Stack>
                                    <Box>
                                        <Button startIcon={<WorkOutlineIcon />}>{therapeut.formatedSpecialization}</Button>
                                        <Typography variant="subtitle2">
                                            {therapeut.location}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            82211 Herrsching am Ammersee
                                        </Typography>
                                        <Button sx={{ mt: 1 }} variant="contained" href={therapeut.website} target="_blank">
                                            Termin Vereinbaren
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={8}>
                                    {therapeut.availableInNextWeek ? <StaticDatePickerLandscape /> : <Typography variant="subtitle1">Keine Verfügbarkeit in dieser Woche | Nächster Termin am 24. Februar 2022</Typography>}
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

function StaticDatePickerLandscape() {
    const [value, setValue] = React.useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={value}
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

