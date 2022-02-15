import React from 'react';
import { useApp } from '../../../context/AppContext'
// mui
import { Box, Stack, Card, Button, Grid, Avatar, Typography } from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
//rest
import BookTherapyDialog from '../../THERAPIES/BookTherapyDialog'
import BookFreeDate from './BookFreeDate'
import DateTimeTabsSwitcher from './DateTimeTabsSwitcher'
import { manipulateCloudinaryImage } from '../../../utils/manipulateCloudinaryImage'

const TherapeutDashboard = ({ therapeut }) => {
    const { getOneTherapeut } = useApp()
    const [value, setValue] = React.useState(0);
    const [dateValue, setDateValue] = React.useState(new Date());

    const optimizedTherapeutAvatarImage = manipulateCloudinaryImage(therapeut.image)

    return (
        <Card sx={{ py: 2, mb: 2 }} key={therapeut._id}>
            <Grid container direction={{ xs: 'column', md: 'row' }}>
                <Grid item xs={12} md={4} sx={{ pt: 2, px: 2 }}>
                    <Stack onClick={() => getOneTherapeut(therapeut._id)} direction="row" alignItems="center" spacing={1} sx={{ cursor: 'pointer' }}>
                        <Avatar alt="therapeut name" src={optimizedTherapeutAvatarImage} sx={{ height: 50, width: 50 }} />
                        <Typography variant="h6">
                            {`${therapeut.firstName} ${therapeut.lastName}`}
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
