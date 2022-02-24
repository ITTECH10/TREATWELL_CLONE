import React from 'react';
import { useApp } from '../../../context/AppContext'
// mui
import { Box, Stack, Card, Button, Grid, Avatar, Typography, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
//rest
import BookTherapyDialog from '../../THERAPIES/BookTherapyDialog'
import BookFreeDate from './BookFreeDate'
import DateTimeTabsSwitcher from './DateTimeTabsSwitcher'
import { manipulateCloudinaryImage } from '../../../utils/manipulateCloudinaryImage'
import AddReviewDialog from '../../REVIEWS/AddReviewDialog'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';

const TherapeutDashboard = ({ therapeut }) => {
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)
    const { getOneTherapeut, authenticated } = useApp()
    const [value, setValue] = React.useState(0);
    const [dateValue, setDateValue] = React.useState(therapeut.availableBookingDates[0] ? new Date(therapeut.availableBookingDates.sort((a, b) => new Date(a.date) - new Date(b.date))[0].date) : new Date());

    const optimizedTherapeutAvatarImage = manipulateCloudinaryImage(therapeut.image)

    const calendarTogler = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <Card sx={{ py: 2, mb: 2, position: 'relative' }} key={therapeut._id}>
            <Grid container direction={{ xs: 'column', md: 'row' }}>
                <Grid item xs={12} md={4} sx={{ pt: 2, px: 2 }}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ cursor: 'pointer' }}>
                        <Avatar alt="therapeut name" src={optimizedTherapeutAvatarImage} sx={{ height: 50, width: 50 }} />
                        <Stack>
                            <Typography variant="h6" onClick={() => getOneTherapeut(therapeut._id)}>
                                {`${therapeut.firstName} ${therapeut.lastName}`}
                            </Typography>
                            <Stack alignItems="flex-start">
                                {therapeut.ratingsQuantity > 0 ?
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ display: 'inline' }}
                                        >
                                            Bewertung
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ color: theme.palette.primary.main }}
                                            noWrap>{Number(therapeut.ratingsAverage).toFixed(1)}
                                        </Typography>
                                    </Stack>
                                    : <Typography
                                        variant="subtitle2"
                                    >
                                        Noch keine bewertung.
                                    </Typography>}
                                {authenticated &&
                                    <AddReviewDialog
                                        therapeutId={therapeut._id}
                                    />
                                }
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box>
                        <Button startIcon={<WorkOutlineIcon />}>{therapeut.specializedIn}</Button>
                        <BookTherapyDialog
                            therapeut={therapeut}
                        />
                        <Typography variant="subtitle2">
                            Standort: {therapeut.location}
                        </Typography>
                        <Typography variant="subtitle2">
                            Addresse: {therapeut.address}
                        </Typography>
                        <Typography variant="subtitle2">
                            Schweerpunkte: {therapeut.specializedServices}
                        </Typography>
                        <Typography mt={1} variant="subtitle1">
                            Methoden:
                            {therapeut.specializedMethods.map((method, index) => {
                                return <Typography variant="body2">
                                    {/* {`${method} ${therapeut && therapeut.specializedMethods.length && index !== therapeut.specializedMethodsLength && ','}`} */}
                                    {method}
                                </Typography>
                            })}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    {open ?
                        <Box>
                            <BookFreeDate
                                selectedBookingDates={therapeut.availableBookingDates}
                                visible={value === 0}
                                therapeutAvailable={therapeut.available}
                                setDateValue={setDateValue}
                                dateValue={dateValue}
                            />
                            <DateTimeTabsSwitcher
                                value={value}
                                setValue={setValue}
                                therapeut={therapeut}
                                dateValue={dateValue}
                            />
                        </Box> : !open && therapeut.availableBookingDates.length === 0 && <Typography variant="h5">Dieser Therapeut hat keine verfügbaren Termine...</Typography>}
                </Grid>
            </Grid>
            {therapeut.availableBookingDates.length > 0 &&
                <IconButton color={open ? 'error' : 'primary'} sx={{ position: 'absolute', right: '.5rem', top: '.5rem' }} onClick={calendarTogler}>
                    {open ? <EventBusyIcon sx={{ fontSize: '1.7rem' }} /> : <EventAvailableIcon sx={{ fontSize: '1.7rem' }} />}
                </IconButton>}
        </Card>
    )
};

export default TherapeutDashboard;
