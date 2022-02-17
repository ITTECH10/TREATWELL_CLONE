import React from 'react';
import { useApp } from '../../../context/AppContext'
// mui
import { Box, Stack, Card, Button, Grid, Avatar, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
//rest
import BookTherapyDialog from '../../THERAPIES/BookTherapyDialog'
import BookFreeDate from './BookFreeDate'
import DateTimeTabsSwitcher from './DateTimeTabsSwitcher'
import { manipulateCloudinaryImage } from '../../../utils/manipulateCloudinaryImage'

const TherapeutDashboard = ({ therapeut }) => {
    const theme = useTheme()
    const { getOneTherapeut } = useApp()
    const [value, setValue] = React.useState(0);
    const [dateValue, setDateValue] = React.useState(therapeut.availableBookingDates[0] ? new Date(therapeut.availableBookingDates[therapeut.availableBookingDates.length - 1].date) : new Date());

    const optimizedTherapeutAvatarImage = manipulateCloudinaryImage(therapeut.image)

    return (
        <Card sx={{ py: 2, mb: 2 }} key={therapeut._id}>
            <Grid container direction={{ xs: 'column', md: 'row' }}>
                <Grid item xs={12} md={4} sx={{ pt: 2, px: 2 }}>
                    <Stack onClick={() => getOneTherapeut(therapeut._id)} direction="row" alignItems="center" spacing={1} sx={{ cursor: 'pointer' }}>
                        <Avatar alt="therapeut name" src={optimizedTherapeutAvatarImage} sx={{ height: 50, width: 50 }} />
                        <Stack>
                            <Typography variant="h6">
                                {`${therapeut.firstName} ${therapeut.lastName}`}
                            </Typography>
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
                        </Stack>
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
                <Grid item xs={12} md={8}>
                    {value === 0 &&
                        <BookFreeDate
                            selectedBookingDates={therapeut.availableBookingDates}
                            visible={value === 0}
                            therapeutAvailable={therapeut.available}
                            setDateValue={setDateValue}
                            dateValue={dateValue}
                        />}
                    <DateTimeTabsSwitcher
                        value={value}
                        setValue={setValue}
                        therapeut={therapeut}
                        dateValue={dateValue}
                    />
                </Grid>
            </Grid>
        </Card>
    )
};

export default TherapeutDashboard;
