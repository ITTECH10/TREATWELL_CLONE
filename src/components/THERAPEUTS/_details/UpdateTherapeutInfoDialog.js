import * as React from 'react';
import { useApp } from '../../../context/AppContext'
import axios from 'axios'
//mui
import { Box, Tooltip, IconButton, Dialog, DialogTitle, DialogActions, DialogContent, Stack, DialogContentText, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { LoadingButton } from '@mui/lab'

const initialState = {
    image: '',
    practicePhotos: ''
}

export default function UpdateTherapeutInfoDialog() {
    const { setLogedInPacient, logedInPacient, setGeneralAlertOptions } = useApp()
    const [open, setOpen] = React.useState(false)
    const [fields, setFields] = React.useState(initialState)
    const [btnLoading, setBtnLoading] = React.useState(false)

    const formData = new FormData()

    formData.append('photo', fields.image)

    if (fields.practicePhotos.length > 0) {
        fields.practicePhotos.forEach(file => {
            formData.append('multiplePhotos', file)
        })
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setBtnLoading(true)

        axios({
            method: 'PUT',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            url: '/therapeuts/update'
        }).then(res => {
            if (res.status === 200) {
                setBtnLoading(false)
                setOpen(false)
                setLogedInPacient({
                    ...logedInPacient,
                    image: res.data.therapeut.image,
                    images: res.data.therapeut.images
                }
                )
                setGeneralAlertOptions({
                    open: true,
                    message: 'Sie haben Ihre Informationen erfolgreich geändert!',
                    severity: 'success',
                    hideAfter: 5000
                })
            }
        }).catch(err => {
            console.log(err.response)
            setBtnLoading(false)
        })
    }

    const filePickerPoopupHandler = () => {
        const input = document.getElementById('update-therapeut-image')
        input.click()
    }

    const practicePhotosFilePickerPoopupHandler = () => {
        const input = document.getElementById('update-therapeut-practice-photos')
        input.click()
    }

    const profileImageChangeHandler = e => {
        const photo = e.target.files[0]
        setFields({
            ...fields,
            image: photo
        })
    }

    const practicePhotosChangeHandler = e => {
        const photos = e.target.files
        setFields({
            ...fields,
            practicePhotos: [...photos]
        })
    }

    return (
        <>
            <Tooltip title="Profil bearbeiten" sx={{ position: 'absolute', bottom: '-.2rem', right: 0 }}>
                <IconButton color="primary" onClick={handleOpen}>
                    <EditIcon sx={{ fontSize: '1.6rem' }} />
                </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Profil bearbeiten
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <strong>HINWEIS: Die maximale Größe eines Bildes beträgt 10 MB!</strong> <br />
                        Um Ihre Profilinformationen zu ändern, füllen Sie das folgende Formular aus.
                    </DialogContentText>
                    <Box component="form" onSubmit={handleSubmit}>
                        <input
                            hidden
                            id="update-therapeut-image"
                            type="file"
                            name="image"
                            onChange={profileImageChangeHandler}
                        />
                        <input
                            hidden
                            id="update-therapeut-practice-photos"
                            type="file"
                            multiple
                            name="practicePhotos"
                            onChange={practicePhotosChangeHandler}
                        />
                        <Stack direction="row" spacing={1} mt={1}>
                            <Button
                                variant="contained"
                                onClick={filePickerPoopupHandler}
                            >
                                {fields.image !== '' ? 'Profilfoto ausgewählt' : 'Profilbild ändern'}
                            </Button>
                            <Button
                                variant="contained"
                                onClick={practicePhotosFilePickerPoopupHandler}
                            >
                                {fields.practicePhotos !== '' ? 'Praxis photos ausgewählt' : 'Praxis photos ändern'}
                            </Button>
                        </Stack>
                        <DialogActions>
                            <Button variant="contained" color="error" onClick={handleClose}>
                                Cancel
                            </Button>
                            <LoadingButton
                                variant="contained"
                                type="submit"
                                disabled={Object.values(fields).every(field => field === '')}
                                loading={btnLoading}
                            >
                                Fertig
                            </LoadingButton>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
}
