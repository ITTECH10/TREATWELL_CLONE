import React, { useState } from 'react';
import axios from 'axios'
import { useApp } from '../../context/AppContext'
// mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle';

export default function BookTherapyDialog({ therapeut, date }) {
    const [btnLoading, setBtnLoading] = useState(false)
    const { authenticated, setGeneralAlertOptions } = useApp()
    const [open, setOpen] = useState(false);
    const theme = useTheme()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setBtnLoading(true)

        const newAppointment = {
            name: therapeut.specializedServices,
            category: therapeut.specializedIn,
            appointedAt: date,
            therapeut: therapeut._id
        }

        axios.post(`/therapies/${therapeut._id}`, { ...newAppointment })
            .then(res => {
                if (res.status === 201) {
                    setOpen(false)
                    setBtnLoading(false)
                    setGeneralAlertOptions({
                        open: true,
                        severity: 'success',
                        message: 'Sie haben erfolgreich einen Termin vereinbart!',
                        hideAfter: 5000
                    })
                }
            })
    }

    return (
        <div>
            {!authenticated && <Typography variant="subtitle2" color="error">Melden Sie sich an um einen Termin zu vereinbaren...</Typography>}
            <Button variant="contained" onClick={handleClickOpen} disabled={!authenticated || !therapeut.available}>
                Termin Vereinbaren
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Termin bestätigen"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Sie haben sich entschieden, einen Termin mit <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>{therapeut.name}</span> zu vereinbaren am  <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>{new Date(date).toLocaleDateString('de-DE')}</span>.
                            Ist das richtig?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="error" onClick={handleClose}>Zurück</Button>
                        <Button type="submit" variant="contained" autoFocus>
                            {btnLoading ? <CircularProgress style={{ color: '#fff' }} size={24} /> : 'Fertig'}
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}
