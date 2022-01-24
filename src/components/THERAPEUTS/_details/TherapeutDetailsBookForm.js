import React from 'react';
//mui
import { Card, Box, TextField, Button, Typography, Stack } from '@mui/material'
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const TherapeutDetailsBookForm = () => {
    return (
        <Card sx={{ overflow: 'hidden' }}>
            <Stack justifyContent="center" alignItems="center" sx={{ height: '3.5rem', backgroundColor: '#1890FF', color: '#fff', px: 1 }}>
                <Typography variant="h6">
                    Termin Online Verainbaren
                </Typography>
            </Stack>
            <Box p={2}>
                <TextField
                    placeholder="Vorname"
                    fullWidth
                    sx={{ mb: 1 }}
                />
                <TextField
                    placeholder="Nachname"
                    fullWidth
                    sx={{ mb: 1 }}
                />
                <TextField
                    placeholder="Standort"
                    fullWidth
                    sx={{ mb: 1 }}
                />
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

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="portrait"
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

