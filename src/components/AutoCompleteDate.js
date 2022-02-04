import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoCompleteDate() {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={hours}
            renderInput={(params) => <TextField value={hours[0].label} fullWidth {...params} label="Time" h variant="standard" />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const hours = [
    { label: '06:00h' },
    { label: '06:30h' },
    { label: '07:00h' },
    { label: '07:30h' },
    { label: '08:00h' },
    { label: '08:30h' },
    { label: '09:00h' },
    { label: '09:30h' },
    { label: '10:00h' },
    { label: '10:30h' },
    { label: '11:00h' },
    { label: '11:30h' },
    { label: '12:00h' },
    { label: '12:30h' },
    { label: '13:00h' },
    { label: '13:30h' },
    { label: '14:00h' },
    { label: '14:30h' },
    { label: '15:00h' },
    { label: '15:30h' },
    { label: '16:00h' },
    { label: '16:30h' },
    { label: '17:00h' },
    { label: '17:30h' },
    { label: '18:00h' },
    { label: '18:30h' },
    { label: '19:00h' },
    { label: '19:30h' },
    { label: '20:00h' },
    { label: '20:30h' },
    { label: '21:00h' },
    { label: '21:30h' },
    { label: '22:00h' },
    { label: '22:30h' },
    { label: '23:00h' },
    { label: '23:30h' },
    { label: '00:00h' },
];
