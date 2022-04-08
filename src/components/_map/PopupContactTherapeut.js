import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { useApp } from '../../context/AppContext'
// mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import { LoadingButton } from '@mui/lab'

const initialFields = {
    name: '',
    phone: '',
    description: ''
}

export default function PopupContactTherapeut({ popupContactTherapeutOpen, setPopupContactTherapeutOpen, therapeutId }) {
    const navigate = useNavigate()
    const [fields, setFields] = useState(initialFields)
    const [btnLoading, setBtnLoading] = useState(false)
    const { logedInPacient, authenticated, setGeneralAlertOptions } = useApp()

    const handleClickOpen = () => {
        setPopupContactTherapeutOpen(true);
    };

    const handleClose = () => {
        setPopupContactTherapeutOpen(false);
        setFields(initialFields)
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

        axios.post(`/users/contact-therapeut-map/${therapeutId}`, { ...fields })
            .then(res => {
                if (res.status === 200) {
                    setPopupContactTherapeutOpen(false)
                    setBtnLoading(false)
                    setGeneralAlertOptions({
                        message: `Sie haben den Therapeuten erfolgreich kontaktiert! 🎉`,
                        hideAfter: 5000,
                        severity: 'success',
                        open: true
                    })
                }
            }).catch(err => {
                // console.log(err.response)
                setBtnLoading(false)
                setGeneralAlertOptions({
                    open: true,
                    severity: 'error',
                    message: err.response ? `${err.response.data.message}` : 'Server fehler...',
                    hideAfter: 5000
                })
            })
    }

    const recallRequestedHandler = () => {
        if (authenticated) {
            handleClickOpen()
        }

        if (!authenticated) {
            setGeneralAlertOptions({
                open: true,
                message: 'Sie mussen zuerst anmelden oder registrieren!',
                hideAfter: 2000,
                severity: 'warning'
            })
        }
    }

    return (
        <div>
            <Button
                variant="contained"
                size="small"
                sx={{ mt: .5, width: '100%' }}
                endIcon={<PhoneCallbackIcon />}
                onClick={recallRequestedHandler}
            >
                Rückruf erwünscht
            </Button>
            <Dialog open={popupContactTherapeutOpen} onClose={handleClose}>
                <DialogTitle>Rückruf erwünscht</DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={handleSubmit}>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            name="name"
                            margin="dense"
                            id="name"
                            label="Name"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            placeholder={logedInPacient && `${logedInPacient.firstName} ${logedInPacient.lastName}`}
                        />
                        <TextField
                            name="phone"
                            margin="dense"
                            id="phone"
                            label="Telefonnummer"
                            fullWidth
                            type="tel"
                            variant="standard"
                            onChange={handleChange}
                        />
                        <TextField
                            name="description"
                            margin="dense"
                            id="description"
                            label="Ihr Anliegen"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            multiline
                            rows={4}
                        />
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="error">Zurück</Button>
                            <LoadingButton
                                loading={btnLoading}
                                variant="contained"
                                type="submit"
                                disabled={Object.values(fields).some(field => field === '')}
                            >
                                Fertig
                            </LoadingButton>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
