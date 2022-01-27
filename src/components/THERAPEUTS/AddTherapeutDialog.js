import * as React from 'react';
import { useApp } from '../../context/AppContext'
import axios from 'axios';
//mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CircularProgress from '@mui/material/CircularProgress';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
//rest
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';

const initialFields = {
    name: '',
    email: '',
    phone: '000-000-000',
    biography: '',
    website: '',
    specializedIn: '',
    specializedServices: '',
    location: '',
    image: '',
    bulk: ''
}

export default function AddPacientModal({ onlyIcon }) {
    const [open, setOpen] = React.useState(false)
    const [btnLoading, setBtnLoading] = React.useState(false)
    const { setGeneralAlertOptions, therapeuts, setTherapeuts } = useApp()
    const [fields, setFields] = React.useState(initialFields)

    const formData = new FormData()
    formData.append('name', fields.name)
    formData.append('email', fields.email)
    formData.append('phone', fields.phone)
    formData.append('biography', fields.biography)
    formData.append('website', fields.website)
    formData.append('specializedIn', fields.specializedIn)
    formData.append('specializedServices', fields.specializedServices)
    formData.append('location', fields.location)
    formData.append('photo', fields.image)

    if (fields.bulk.length > 0) {
        fields.bulk.forEach(file => {
            formData.append('multiplePhotos', file)
        })
    }

    for (var value of formData.values()) {
        console.log(value);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFields(initialFields)
    };

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnLoading(true)

        axios({
            method: 'POST',
            headers: { "Content-Type": "multipart/form-data" },
            url: '/therapeuts',
            data: formData
        }).then(res => {
            if (res.status === 201) {
                const updatedTherapeuts = [...therapeuts, { ...res.data.newTherapeut }]
                setTherapeuts(updatedTherapeuts)
                setBtnLoading(false)
                setOpen(false)
                setGeneralAlertOptions({
                    open: true,
                    message: 'Sie haben erfolgreich einen Therapeuten hinzugefügt!',
                    severity: 'success',
                    hideAfter: 5000
                })
            }
        }).catch(err => {
            setBtnLoading(false)
            console.log(err)
        })
    }

    const openUploadHandler = () => {
        const input = document.getElementById('photo-input-ref')
        input.click()
    }

    const openBulkUploadHandler = () => {
        const input = document.getElementById('photo-input-bulk-ref')
        input.click()
    }

    const handleImageChange = (e) => {
        const photo = e.target.files[0]
        setFields({
            ...fields,
            image: photo
        })
    }

    const handleImageBulkChange = (e) => {
        const photos = e.target.files
        setFields({
            ...fields,
            bulk: [...photos]
        })
    }

    return (
        <>
            {onlyIcon ?
                <PersonAddIcon onClick={handleClickOpen} />
                : <Button
                    variant="contained"
                    startIcon={<Icon icon={plusFill} />}
                    onClick={handleClickOpen}
                >
                    Novi Terapeut
                </Button>
            }
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Neuer Therapeut</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Um einen neuen Therapeuten hinzuzufügen, füllen Sie bitte die Informationen aus
                        unter
                    </DialogContentText>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                        >
                            <input
                                name="photo"
                                id="photo-input-ref"
                                type="file"
                                hidden
                                onChange={handleImageChange}
                            />
                            <input
                                name="bulk"
                                id="photo-input-bulk-ref"
                                type="file"
                                multiple
                                hidden
                                onChange={handleImageBulkChange}
                            />
                            <Button
                                variant="contained"
                                sx={{ mt: 1, mr: 1 }}
                                onClick={openUploadHandler}
                            >
                                {fields.image !== '' ? 'Ändere das Bild' : 'Foto hinzufügen'}
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ mt: 1 }}
                                onClick={openBulkUploadHandler}
                            >
                                {fields.bulk !== '' ? 'Ändere Praxis Bilder' : 'Praxis Fotos hinzufügen'}
                            </Button>
                            <TextField
                                name="name"
                                required
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="email"
                                required
                                id="email"
                                label="E-Mail"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="location"
                                required
                                id="location"
                                label="Standort"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="phone"
                                required
                                id="phone"
                                label="Telefon"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="website"
                                required
                                id="website"
                                label="Webseite"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="specializedIn"
                                required
                                id="specializedIn"
                                label="Spezialist für"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="specializedServices"
                                required
                                id="specializedServices"
                                label="Dienstleistungen"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <TextField
                                name="biography"
                                required
                                margin="dense"
                                id="biography"
                                label="Biografie"
                                multiline
                                rows={5}
                                type="tel"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <DialogActions>
                                <Button variant="contained" color="error" onClick={handleClose}>Zuruck</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                // disabled={Object.values(fields).some(field => field === '')}
                                >
                                    {btnLoading ? <CircularProgress style={{ color: '#fff' }} size={24} /> : 'Fertig'}
                                </Button>
                            </DialogActions>
                        </Box>
                    </LocalizationProvider>
                </DialogContent>
            </Dialog>
        </>
    );
}