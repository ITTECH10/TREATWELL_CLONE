import React, { useState } from 'react';
import axios from 'axios'
import { useApp } from '../../context/AppContext'
// mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle';

export default function BookTherapyDialog({ therapeut, date }) {
    const [btnLoading, setBtnLoading] = useState(false)
    const { setGeneralAlertOptions, getCurrentPacient, therapies, setTherapies } = useApp()
    const [open, setOpen] = useState(false);
    const theme = useTheme()

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setBtnLoading(true)

        const newTherapy = {
            name: therapeut.specializedServices,
            category: therapeut.specializedIn,
            date,
            therapeut: therapeut._id
        }

        axios.post(`/therapies/${therapeut._id}`, { ...newTherapy })
            .then(res => {
                if (res.status === 201) {
                    setOpen(false)
                    setBtnLoading(false)

                    setTherapies([...therapies, res.data.newTherapy])

                    // CONSIDER LATER
                    // const updatedLogedInPacient = {...logedInPacient, therapies: [...logedInPacient.therapies, res.data.newTherapy]}
                    getCurrentPacient()

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
            {/* <Button variant="contained" onClick={handleClickOpen} disabled={!authenticated || !therapeut.available}>
                Termin Vereinbaren
            </Button> */}
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
                        {"Termin best??tigen"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Sie haben sich entschieden, einen Termin mit <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>{therapeut.name}</span> zu vereinbaren am  <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>{new Date(date).toLocaleDateString('de-DE')}</span>.
                            Ist das richtig?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="error" onClick={handleClose}>Zur??ck</Button>
                        <Button type="submit" variant="contained" autoFocus>
                            {btnLoading ? <CircularProgress style={{ color: '#fff' }} size={24} /> : 'Fertig'}
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}
