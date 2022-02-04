import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useApp } from '../context/AppContext'
import Page from '../components/Page'
///////////////////////// material
// import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import StaticDatePicker from '@mui/lab/StaticDatePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Typography, Box, Stack, Card, Button, Grid, Container, Avatar } from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
//////////////////////////
import BookTherapyDialog from '../components/THERAPIES/BookTherapyDialog'
// import AddTherapyDialog from '../components/THERAPIES/AddTherapyDialog'
import { Calendar } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/analog_time_picker";

const FilteredTherapeuts = () => {
    const [value, setValue] = useState(new Date());
    const { therapeuts, setSelectedTherapeut, setAppLoading, getOneTherapeut } = useApp()
    const navigate = useNavigate()

    // const therapeutSelectionHandler = (therapeut) => {
    //     if (therapeut) {
    //         setSelectedTherapeut(therapeut)
    //         navigate(`/therapeuts/${therapeut._id}`)
    //     }
    // }

    // const therapeutSelectionHandler = id => {
    //     setAppLoading(true)
    //     axios.get(`/therapeuts/${id}`)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 setAppLoading(false)
    //                 setSelectedTherapeut(res.data.therapeut)
    //                 navigate(`/therapeuts/${id}`)
    //             }
    //         }).catch(err => {
    //             setAppLoading(false)
    //             console.log(err)
    //         })
    // }

    return (
        <Page title="Rezultati Pretrage">
            <Container maxWidth="lg" p={2}>
                <Typography my={2} variant="h5" align="center">Kardio-MRT (Herz-MRT) in Deutschland : Buchen Sie den passenden Spezialisten online.</Typography>
                {
                    therapeuts.map(therapeut => {
                        // const myDates = therapeut.availableBookingDates[0].split(',')
                        // const disableBookedHours = myDates.map(myDate => new Date(myDate).getHours()).includes(value.getHours())

                        return <Card sx={{ p: 2, mb: 2 }} key={therapeut._id}>
                            <Grid container>
                                <Grid item xs={4} sx={{ pt: 2 }}>
                                    <Stack onClick={() => getOneTherapeut(therapeut._id)} direction="row" alignItems="center" spacing={1} sx={{ cursor: 'pointer' }}>
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
                                        <BookTherapyDialog
                                            therapeut={therapeut}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={8}>
                                    {therapeut.available ?
                                        <StaticDatePickerLandscape
                                            value={value}
                                            setValue={setValue}
                                        // myDates={myDates}
                                        // disableBookedHours={disableBookedHours}
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

function StaticDatePickerLandscape({ value, setValue, myDates, disableBookedHours }) {
    const handleChange = (date) => {
        const formatedDate = `${date.year}/${date.month}/${date.day} ${date.hour}:${date.minute}:${date.second}`
        setValue(new Date(formatedDate))
    }

    // const input = document.querySelector('.rmdp-time-picker div input')

    // if (input.value === '00') {
    //     input.setAttribute('disabled', '')
    // }

    return (
        <Calendar
            value={value}
            onChange={handleChange}
            plugins={[<TimePicker />]}
            maxDate={new Date(new Date().setMonth(new Date().getMonth() + 2))}
            minDate={new Date()}
        // mapDays={({ date }) => {
        //     let props = {}
        //     const adaptedDate = `${date.year}/${date.month}/${date.day}`

        //     if (!myDates.map(myDate => new Date(myDate).getTime()).includes(new Date(adaptedDate).getTime())) props.disabled = true
        //     return props
        // }}
        />
    );
}
