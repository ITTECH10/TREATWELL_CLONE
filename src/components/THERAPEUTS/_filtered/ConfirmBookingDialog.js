import * as React from 'react';
import { useApp } from '../../../context/AppContext'
// mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles'
import { LoadingButton } from '@mui/lab';

export default function ConfirmBookingDialog({ bookingTimeSelectionHandler, selectedDate, selectedHour, therapeutId, therapeutName, loading, open, setOpen }) {
    const { authenticated } = useApp()
    const theme = useTheme()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const idPersistenceHandler = () => {
        if (!authenticated) {
            localStorage.setItem('navigateToTherapeutId', therapeutId)
        }
    }

    return (
        <div>
            {authenticated ?
                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleClickOpen}
                    disabled={selectedHour.length === 0 || !authenticated}
                >
                    Termin <p style={{ textTransform: 'lowercase' }}>&nbsp; vereinbaren</p>
                </Button> :
                <Stack spacing={1} direction={{ xs: 'column', md: 'row' }} mt={1}>
                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        href="/register"
                    >
                        Registrieren
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        href="/login"
                        onClick={idPersistenceHandler}
                    >
                        Anmelden
                    </Button>
                </Stack>
            }
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Therapie bestätigen"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Sind Sie sicher, dass Sie einen Termin mit
                        <span style={{ color: theme.palette.primary.main, fontWeight: 'bold', margin: '0 3px' }}>
                            {therapeutName}
                        </span>
                        am <span style={{ color: theme.palette.primary.main, fontWeight: 'bold', marginLeft: '3px' }}>
                            {selectedDate.toLocaleDateString('de-DE')}
                        </span> um <span style={{ color: theme.palette.primary.main, fontWeight: 'bold', marginLeft: '3px' }}>
                            {selectedHour}
                        </span> buchen möchten?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="error"
                    >
                        Nein
                    </Button>
                    <LoadingButton
                        onClick={bookingTimeSelectionHandler}
                        variant="contained"
                        type="submit"
                        loading={loading}
                    >
                        Ich <p style={{ textTransform: 'lowercase' }}>&nbsp;bin sicher</p>
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
