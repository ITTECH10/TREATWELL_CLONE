import * as React from 'react';
import { useApp } from '../../context/AppContext'
import axios from 'axios'
// mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles'

const initialFields = {
    review: ''
}

export default function AddReviewDialog({ therapeutId }) {
    const { setGeneralAlertOptions } = useApp()
    const theme = useTheme()
    const [open, setOpen] = React.useState(false);
    const [btnLoading, setBtnLoading] = React.useState(false);
    const [fields, setFields] = React.useState(initialFields)
    const [value, setValue] = React.useState(0);

    const rateTherapyHandler = (value) => {
        setOpen(true);
        setValue(value)
    };

    const handleClose = () => {
        setValue(0)
        setOpen(false);
    };

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setBtnLoading(true)

        axios.post(`/therapeuts/${therapeutId}/reviews`, { ...fields, rating: value })
            .then(res => {
                if (res.status === 201) {
                    setBtnLoading(false)
                    setOpen(false)
                    setValue(0)
                    setGeneralAlertOptions({
                        open: true,
                        message: 'Sie haben erfolgreich einen Review hinzugefügt!',
                        severity: 'success',
                        hideAfter: 5000
                    })
                }
            }).catch(err => {
                // console.log(err.response)
                setBtnLoading(false)
                setGeneralAlertOptions({
                    open: true,
                    message: 'Something went wrong!',
                    severity: 'error',
                    hideAfter: 5000
                })
            })
    }

    return (
        <div>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    rateTherapyHandler(newValue)
                }}
            />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Bewertung</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Sind Sie sicher, dass Sie diese Therapist mit
                        <span style={{ fontWeight: 'bold', color: theme.palette.primary.main, marginLeft: 4 }}>
                            {value}
                        </span> bewerten möchten?
                        Wenn ja, hinterlassen Sie bitte Ihren Eindruck...
                    </DialogContentText>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            name="review"
                            margin="dense"
                            id="name"
                            label="Eindruck"
                            multiline
                            rows={3}
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                        />
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="error">Zurück</Button>
                            <Button type="submit" variant="contained" disabled={fields.review === ''}>
                                {btnLoading ? <CircularProgress style={{ color: '#fff' }} size={24} /> : 'Fertig'}
                            </Button>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
