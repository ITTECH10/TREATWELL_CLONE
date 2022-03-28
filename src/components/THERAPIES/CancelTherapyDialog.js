import * as React from 'react';
import { useApp } from '../../context/AppContext'
import axios from 'axios'
// mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import HistoryIcon from '@mui/icons-material/History';
import { LoadingButton } from '@mui/lab'

export default function CancelTherapyDialog({ therapyId, selectedTherapyDate, therapeutId }) {
    const { therapeuts, setTherapeuts, logedInPacient, setLogedInPacient, setGeneralAlertOptions } = useApp()
    const [open, setOpen] = React.useState(false);
    const [btnLoading, setBtnLoading] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setBtnLoading(true)

        const therapeutsCopy = [...therapeuts]
        const foundTherapeut = therapeutsCopy.find(therapeut => therapeut._id === therapeutId)
        const { availableBookingDates } = foundTherapeut
        const formatedTime = new Date(selectedTherapyDate).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + 'h'

        const selectedBookingDate = availableBookingDates.filter(availableBookingDate => {
            const formatedDate = new Date(selectedTherapyDate).toLocaleDateString('de-DE')
            return formatedDate === new Date(availableBookingDate.date).toLocaleDateString('de-DE')
        })

        let modifiedSelectedBookingTimes = []

        if (selectedBookingDate[0]) {
            modifiedSelectedBookingTimes = [...selectedBookingDate[0].selectedTimes, formatedTime]
            selectedBookingDate[0].selectedTimes = modifiedSelectedBookingTimes
        }

        if (selectedBookingDate.length === 0) {
            const restoredDate = { date: new Date(selectedTherapyDate).toDateString(), selectedTimes: [formatedTime] }
            selectedBookingDate.push(restoredDate)
            availableBookingDates.push(restoredDate)
        }


        axios.put(`/therapies/cancel-therapy/${therapyId}`, { availableBookingDates, therapeutId })
            .then(res => {
                if (res.status === 200) {
                    const copyTherapies = [...logedInPacient.therapies]
                    const updatedTherapies = copyTherapies.filter(therapy => therapy._id !== therapyId)

                    setLogedInPacient({ ...logedInPacient, therapies: updatedTherapies })

                    setBtnLoading(false)
                    setOpen(false)
                    setTherapeuts(therapeutsCopy)
                    setGeneralAlertOptions({
                        open: true,
                        message: 'Sie haben erfolgreich einen Termin abgebrochen!',
                        severity: 'success',
                        hideAfter: 5000
                    })
                }
            }).catch(err => {
                setBtnLoading(false)
                setGeneralAlertOptions({
                    open: true,
                    severity: 'error',
                    message: err.response.data.message ? `${err.response.data.message}` : 'Server fehler...',
                    hideAfter: 5000
                })
                // console.log(err.response)
            })
    }

    return (
        <div>
            <Tooltip title="Therapie abbrechen">
                <Button color="error" onClick={handleClickOpen} endIcon={<HistoryIcon />}>
                    Termin Stornieren
                </Button>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Termin Stornieren?"}
                </DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={handleSubmit}>
                        <DialogContentText id="alert-dialog-description">
                            Sind Sie sicher, dass Sie dieses Termin abbrechen möchten?
                        </DialogContentText>
                        <DialogActions>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleClose}
                            >
                                Zurück
                            </Button>
                            <LoadingButton
                                type="submit"
                                loading={btnLoading}
                                variant="contained"
                                color="error"
                                autoFocus>
                                Ich bin sicher!
                            </LoadingButton>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
