import React from 'react';
import { useApp } from '../../../context/AppContext'
import axios from 'axios';
// mui
import { Tabs, Tab, Box, Typography, Stack, List, ListItem, ListItemText } from '@mui/material'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
//rest
import ConfirmBookingDialog from './ConfirmBookingDialog';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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

const DateTimeTabsSwitcher = ({ value, setValue, therapeut, dateValue }) => {
    const { therapeuts, setTherapeuts, setGeneralAlertOptions, getCurrentPacient, therapies, setTherapies } = useApp()
    const [selectedHour, setSelectedHour] = React.useState([])
    const [btnLoading, setBtnLoading] = React.useState(false)
    const [dialogOpen, setDialogOpen] = React.useState(false)

    let extractedBookingHours = []

    if (therapeuts) {
        extractedBookingHours = therapeuts.map(el => {
            return el.availableBookingDates.filter(avDate => {
                return dateValue.toLocaleDateString() === new Date(avDate.date).toLocaleDateString()
            })
        }).map(el => {
            return el.map(el => el.selectedTimes)
        }).flat()
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSelectedHour([])
    };

    const navigateBackUsingTab = () => {
        setValue(0)
        setSelectedHour([])
    }

    const bookingTimeSelectionHandler = () => {
        setBtnLoading(true)

        const therapeutsCopy = [...therapeuts]
        const foundTherapeut = therapeutsCopy.find(el => el._id === therapeut._id)
        const { availableBookingDates } = foundTherapeut

        const selectedBookingDate = availableBookingDates.filter(availableBookingDate => {
            return dateValue.toLocaleDateString() === new Date(availableBookingDate.date).toLocaleDateString()
        })

        const modifiedSelectedBookingTimes = selectedBookingDate[0].selectedTimes.filter(selectedDate => {
            return selectedDate !== selectedHour
        })

        selectedBookingDate[0].selectedTimes = modifiedSelectedBookingTimes

        if (selectedBookingDate[0].selectedTimes.length === 0) {
            const deleteIndex = availableBookingDates.indexOf(selectedBookingDate[0])
            availableBookingDates.splice(deleteIndex, 1)
        }

        const data = {
            appointedAt: new Date(`${new Date(dateValue).toLocaleDateString()} ${selectedHour.split('h')[0] + ':00'}`),
            name: foundTherapeut.specializedServices,
            category: foundTherapeut.specializedIn,
            therapeut: foundTherapeut._id,
            price: '200$'
        }

        axios.put(`/therapeuts/${therapeut._id}`, { ...data, availableBookingDates })
            .then(res => {
                if (res.status === 200) {
                    setBtnLoading(false)
                    setTherapeuts(therapeutsCopy)
                    setTherapies([...therapies, res.data.newTherapy])

                    // CONSIDER LATER
                    // const updatedLogedInPacient = {...logedInPacient, therapies: [...logedInPacient.therapies, res.data.newTherapy]}
                    getCurrentPacient()
                    setGeneralAlertOptions({
                        open: true,
                        message: 'Sie haben erfolgreich einen Termin vereinbart!',
                        severity: 'success',
                        hideAfter: 5000
                    })
                    setDialogOpen(false)
                    setSelectedHour([])
                }
            }).catch(err => {
                setBtnLoading(false)
                console.log(err)
            })
    }

    const listItemSelectionHandler = (hour) => {
        setSelectedHour(hour)
    }

    return (
        <Stack alignItems="flex-end">
            <TabPanel value={value} index={1}>
                <TabPanel value={value} index={1}>
                    <Typography variant="subtitle1">
                        {extractedBookingHours[0] && extractedBookingHours[0].length > 0 ?
                            "Verfügbare Buchungszeiten für dieses Datum..."
                            : "Es gibt keine verfugbare Buchungszeiten für dieses Datum..."}
                    </Typography>
                    <List>
                        {extractedBookingHours[0] && extractedBookingHours[0].map((hour) => {
                            return (
                                <ListItem
                                    sx={{ cursor: 'pointer', borderRadius: 1 }}
                                    onClick={() => listItemSelectionHandler(hour)}
                                    selected={selectedHour.indexOf(hour) > -1}
                                >
                                    <ListItemText
                                        primary={hour}
                                        secondary={null}
                                        sx={{ textAlign: 'center' }}
                                        primaryTypographyProps={{ variant: 'h6' }}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                    <ConfirmBookingDialog
                        selectedHour={selectedHour}
                        bookingTimeSelectionHandler={bookingTimeSelectionHandler}
                        therapeutName={`${therapeut.firstName} ${therapeut.lastName}`}
                        loading={btnLoading}
                        setOpen={setDialogOpen}
                        open={dialogOpen}
                    />
                </TabPanel>
            </TabPanel>
            <Tabs value={value} onChange={handleChange} >
                <Tab sx={{ fontSize: '.65rem' }} icon={<EventAvailableIcon />} onClick={() => navigateBackUsingTab()} label="Datum" />
                <Tab sx={{ fontSize: '.65rem' }} icon={<AccessAlarmsIcon />} label="Uhr" {...a11yProps(1)} />
            </Tabs>
        </Stack>
    )
};

export default DateTimeTabsSwitcher;
