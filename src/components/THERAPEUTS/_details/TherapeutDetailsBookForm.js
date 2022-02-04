import React from 'react';
import { useApp } from '../../../context/AppContext'
import axios from 'axios'
//mui
import { Card, Box, TextField, Button, Typography, Stack, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

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
    '16:00h'
]

const TherapeutDetailsBookForm = () => {
    const theme = useTheme()
    const { setLogedInPacient, logedInPacient, selectedTherapeut } = useApp()
    const roleMatch = hasPermission(logedInPacient, actions.ADD_BOOKING_DATES)
    const { availableBookingDates } = selectedTherapeut || logedInPacient || { availableBookingDates: [] }
    const [dateValue, setDateValue] = React.useState(new Date());
    const [value, setValue] = React.useState(0);
    const [selectedListItems, setSelectedListItems] = React.useState([])
    const [selectedBookingDates, setSelectedBookingDates] = React.useState([])
    const [btnLoading, setBtnLoading] = React.useState(false)

    React.useEffect(() => {
        setSelectedBookingDates(availableBookingDates)
    }, [availableBookingDates])

    const updateTherapeutData = () => {
        setBtnLoading(true)
        axios.put('/therapeuts/update', { availableBookingDates: selectedBookingDates })
            .then(res => {
                setBtnLoading(false)
                if (res.status === 200) {
                    setLogedInPacient(res.data.therapeut)
                }
            }).catch(err => {
                console.log(err)
                setBtnLoading(false)
            })
    }

    const handleChange = (event, newValue) => {
        setSelectedListItems([])
        setValue(newValue);
    };

    const dateSelectionHandler = () => {
        setSelectedBookingDates([
            ...selectedBookingDates,
            {
                date: dateValue.toDateString(),
                selectedTimes: selectedListItems
            }
        ])
        setValue(0)
        setSelectedListItems([])
    }

    const listItemSelectionHandler = (hour) => {
        if (selectedListItems.indexOf(hour) > -1) {
            const updatedSelectedListItems = selectedListItems.filter(val => val !== hour)
            setSelectedListItems(updatedSelectedListItems)
        } else {
            setSelectedListItems([...selectedListItems, hour])
        }
    }

    const navigateBackUsingTab = () => {
        setValue(0)
        setSelectedListItems([])
    }

    return (
        <Card sx={{ overflow: 'hidden' }}>
            <Stack justifyContent="center" alignItems="center" sx={{ height: '3.5rem', backgroundColor: theme.palette.primary.main, color: '#fff', px: 1 }}>
                <Typography variant="h6">
                    Termin Online Verainbaren
                </Typography>
            </Stack>
            <Box p={2}>
                {value === 0 &&
                    <StaticDatePickerLandscape
                        dateValue={dateValue}
                        setDateValue={setDateValue}
                        selectedBookingDates={selectedBookingDates}
                    />}
                {roleMatch &&
                    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered >
                        <Tab sx={{ fontSize: '.65rem' }} icon={<EventAvailableIcon />} onClick={() => navigateBackUsingTab()} label="Datum" />
                        <Tab sx={{ fontSize: '.65rem' }} icon={<AccessAlarmsIcon />} label="Uhr" {...a11yProps(1)} />
                    </Tabs>}
                <TabPanel value={value} index={1}>
                    <List>
                        <Grid container spacing={1}>
                            {hours.map((hour, index) => {
                                return (
                                    <Grid item xs={4} key={index}>
                                        <ListItem
                                            sx={{ cursor: 'pointer', borderRadius: 1 }}
                                            // key={index}
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
                        Nächste
                    </Button>
                </TabPanel>
                {value === 0 && (
                    <LoadingButton
                        sx={{ mt: 1 }}
                        type="submit"
                        size="large"
                        variant="contained"
                        fullWidth
                        disabled={logedInPacient && selectedBookingDates ? selectedBookingDates.length === 0 : true}
                        loading={btnLoading}
                        onClick={updateTherapeutData}
                    >
                        Fertig
                    </LoadingButton>
                )}
            </Box>
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

const StaticDatePickerLandscape = ({ setDateValue, dateValue, selectedBookingDates }) => {
    const disabledDays = (date) => {
        return selectedBookingDates && selectedBookingDates.map((myDate) => new Date(myDate.date).getTime()).includes(date.getTime());
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="portrait"
                openTo="day"
                value={dateValue}
                shouldDisableDate={disabledDays}
                // disablePast
                // maxDate={new Date(new Date().setMonth(new Date().getMonth() + 2))}
                onChange={(newValue) => {
                    setDateValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

