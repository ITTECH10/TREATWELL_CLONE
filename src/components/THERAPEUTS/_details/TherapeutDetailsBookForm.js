import React from 'react';
//mui
import { Card, Box, TextField, Button, Typography, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const TherapeutDetailsBookForm = () => {
    const theme = useTheme()
    return (
        <Card sx={{ overflow: 'hidden' }}>
            <Stack justifyContent="center" alignItems="center" sx={{ height: '3.5rem', backgroundColor: theme.palette.primary.main, color: '#fff', px: 1 }}>
                <Typography variant="h6">
                    Termin Online Verainbaren
                </Typography>
            </Stack>
            <Box p={2}>
                <StaticDatePickerLandscape />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: '100%', mt: 1 }}
                    size="large"
                    href="https://google.com"
                    target="_blank"
                >
                    Fertig
                </Button>
            </Box>
        </Card>
    )
};

export default TherapeutDetailsBookForm;

function StaticDatePickerLandscape() {
    const [value, setValue] = React.useState(new Date());

    const myDates = [
        '2022/01/29',
        '2022/02/03',
        '2022/03/15',
    ]

    const disabledDays = (date) => {
        return !myDates.map((myDate) => new Date(myDate).getTime()).includes(date.getTime());
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="portrait"
                openTo="day"
                value={value}
                shouldDisableDate={disabledDays}
                disablePast
                maxDate={new Date(new Date().setMonth(new Date().getMonth() + 2))}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

