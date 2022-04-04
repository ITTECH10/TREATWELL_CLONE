import React from 'react';
import { Calendar } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"

import { useApp } from '../../../context/AppContext'
import axios from 'axios'
//mui
import { Card, Box, TextField, Button, Typography, Stack, Grid, Badge } from '@mui/material'
import { useTheme } from '@mui/material/styles'
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import StaticDatePicker from '@mui/lab/StaticDatePicker';
// import deLocale from 'date-fns/locale/de';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { LoadingButton } from '@mui/lab'
//rest
import { hasPermission, actions } from '../../../utils/DataProviders/ROLES/permissions'

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const hours = [
    '08:00h',
    '09:00h',
    '10:00h',
    '11:00h',
    '12:00h',
    '13:00h',
    '14:00h',
    '15:00h',
    '16:00h',
    '17:00h',
    '18:00h',
    '19:00h',
    '20:00h'
]

const TherapeutDetailsBookForm = () => {
    const theme = useTheme()
    const { setLogedInPacient, logedInPacient, selectedTherapeut, setGeneralAlertOptions } = useApp()
    const roleMatch = hasPermission(logedInPacient, actions.ADD_BOOKING_DATES)
    const { availableBookingDates } = selectedTherapeut || logedInPacient || { availableBookingDates: [] }
    const [dateValues, setDateValues] = React.useState();
    const [values, setValues] = React.useState([])

    const [value, setValue] = React.useState(0);
    const [selectedListItems, setSelectedListItems] = React.useState([])
    const [selectedBookingDates, setSelectedBookingDates] = React.useState([])
    const [btnLoading, setBtnLoading] = React.useState(false)

    const formatedDateValues = dateValues && dateValues.split(' ').map(el => new Date(el).toDateString())

    React.useEffect(() => {
        setSelectedBookingDates(availableBookingDates)
    }, [availableBookingDates])


    const formatedSelectedBookingDates = []
    if (selectedBookingDates[0] && selectedBookingDates[0].dates) {
        for (let i = 0; i < selectedBookingDates[0].dates.length; i++) {
            formatedSelectedBookingDates.push(selectedBookingDates[0].dates[i])
        }
    }

    const adaptedSelectedBookingDates = selectedBookingDates[0] && selectedBookingDates[0].dates && selectedBookingDates.map(date => {
        return date.dates.map(value => value)
    })

    const finalSelectedBookingDates = adaptedSelectedBookingDates && adaptedSelectedBookingDates[0].map(el => {
        return {
            date: el,
            selectedTimes: selectedListItems
        }
    })

    const updateTherapeutData = () => {
        setBtnLoading(true)

        axios.put('/therapeuts/update', { availableBookingDates: finalSelectedBookingDates })
            .then(res => {
                setBtnLoading(false)
                if (res.status === 200) {
                    setLogedInPacient({ ...logedInPacient, availableBookingDates: res.data.therapeut.availableBookingDates })
                    setSelectedBookingDates([])
                    setSelectedListItems([])
                    setValues([])
                    setGeneralAlertOptions({
                        hideAfter: 5000,
                        severity: 'success',
                        open: true,
                        message: 'Sie haben Ihre Termine erfolgreich aktualisiert!'
                    })
                }
            }).catch(err => {
                // console.log(err)
                setGeneralAlertOptions({
                    open: true,
                    severity: 'error',
                    message: err.response ? `${err.response.data.message}` : 'Server fehler...',
                    hideAfter: 5000
                })
                setBtnLoading(false)
            })
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dateSelectionHandler = () => {
        setSelectedBookingDates([
            {
                dates: formatedDateValues,
                selectedTimes: selectedListItems
            }
        ])
        setValue(0)
    }

    const listItemSelectionHandler = (hour) => {
        if (selectedListItems.indexOf(hour) > -1) {
            const updatedSelectedListItems = selectedListItems.filter(val => val !== hour)
            setSelectedListItems(updatedSelectedListItems)
        } else {
            setSelectedListItems([...selectedListItems, hour])
        }
    }

    return (
        <Card sx={{ overflow: 'hidden' }}>
            <Stack justifyContent="center" alignItems="center" sx={{ height: '3.5rem', backgroundColor: theme.palette.primary.main, color: '#fff', px: 1 }}>
                <Typography variant="h6">
                    Tragen Sie hier Ihre verfügbaren Termine ein
                </Typography>
            </Stack>
            <Stack p={4} spacing={2} alignItems="center">
                {value === 0 &&
                    <StaticDatePickerLandscape
                        setDateValues={setDateValues}
                        selectedBookingDates={availableBookingDates}
                        values={values}
                        setValues={setValues}
                    />
                }
                {roleMatch &&
                    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered >
                        <Tab
                            sx={{ fontSize: '.65rem' }}
                            icon={<EventAvailableIcon />}
                            label="Datum"
                        />
                        <Tab
                            sx={{ fontSize: '.65rem' }}
                            icon={<AccessAlarmsIcon />}
                            label="Uhrzeit" {...a11yProps(1)}
                        />
                    </Tabs>}
                <TabPanel value={value} index={1}>
                    <List>
                        <Grid container spacing={1}>
                            {hours.map((hour, index) => {
                                return (
                                    <Grid item xs={4} key={index}>
                                        <ListItem
                                            sx={{ cursor: 'pointer', borderRadius: 1 }}
                                            onClick={() => listItemSelectionHandler(hour)}
                                            selected={selectedListItems.indexOf(hour) > -1}
                                        >
                                            <ListItemText
                                                primary={hour}
                                                secondary={null}
                                                sx={{ textAlign: 'center' }}
                                                primaryTypographyProps={{ variant: 'h6' }}
                                            />
                                        </ListItem>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </List>
                    <Button
                        sx={{ mt: 1 }}
                        variant="contained"
                        fullWidth
                        size="large"
                        onClick={dateSelectionHandler}
                        disabled={selectedListItems.length === 0}
                    >
                        Weiter
                    </Button>
                </TabPanel>
                {value === 0 && (
                    <LoadingButton
                        sx={{ mt: 1 }}
                        type="submit"
                        size="large"
                        variant="contained"
                        fullWidth
                        disabled={values.length === 0 || selectedListItems.length === 0}
                        loading={btnLoading}
                        onClick={updateTherapeutData}
                    >
                        Fertig
                    </LoadingButton>
                )}
            </Stack>
        </Card>
    )
};

export default TherapeutDetailsBookForm;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const weekDays = ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"]

const StaticDatePickerLandscape = ({ setDateValues, selectedBookingDates, values, setValues }) => {
    // const disabledDays = (date) => {
    //     return selectedBookingDates && selectedBookingDates.map((myDate) => new Date(myDate.date).getTime()).includes(date.getTime());
    // };

    const shouldDisableDates = selectedBookingDates.map(selectedDate => {
        return selectedDate.date
    })

    return (
        <Calendar
            shadow={false}
            weekDays={weekDays}
            multiple
            className='book-calendar'
            mapDays={({ date }) => {
                const formatedDate = `${date.weekDay.shortName} ${date.month.shortName} ${date.day} ${date.year}`

                if (shouldDisableDates.includes(formatedDate)) {
                    return {
                        disabled: true
                    }
                }
            }}
            onChange={array => {
                setValues(array)
                setDateValues(array.join(" "))
            }}
            value={values}
            minDate={new Date()}
            plugins={[
                <DatePanel header='Termine' className="book-calendar-panel" />
            ]}
        />
    );
}
