import React from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import deLocale from 'date-fns/locale/de';

import { Typography } from '@mui/material'

const BookFreeDate = ({ selectedBookingDates, visible, therapeutAvailable, setDateValue, dateValue }) => {
    const disabledDays = (date) => {
        return selectedBookingDates && !selectedBookingDates.map((myDate) => new Date(myDate.date).getTime()).includes(date.getTime());
    };

    const content = therapeutAvailable && visible ? (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale}>
            <StaticDatePicker
                allowSameDateSelection
                orientation={{ xs: 'portrait', md: 'landscape' }}
                openTo="day"
                value={dateValue}
                disablePast
                shouldDisableDate={disabledDays}
                onChange={(newValue) => {
                    setDateValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    ) : !therapeutAvailable && visible ? (
        <Typography variant="subtitle1">Keine Verfügbarkeit...</Typography>
    ) : null

    return content
}

export default BookFreeDate