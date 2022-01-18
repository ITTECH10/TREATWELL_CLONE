import * as React from 'react';
// import { usePacientContext } from '../../context/PacientContext'
// import { useApp } from '../../context/AppContext'
import axios from 'axios';
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
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
/////////////////////////////////////
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';

const roles = [
    {
        id: 1,
        text: "Pacijent",
        value: 'pacient'
    },
    {
        id: 2,
        text: "Terapeut",
        value: 'therapeut'
    }
]

const genders = [
    {
        id: 1,
        text: "Muško",
        value: 'male'
    },
    {
        id: 2,
        text: "Žensko",
        value: 'female'
    },
    {
        id: 3,
        text: "Nothing",
        value: ''
    },
]

const initialFields = {
    name: '',
    email: '',
    phone: '000-000-000',
    role: '',
    // gender: genders[0].value,
    biography: '',
    website: '',
    // pacientImage: '',
    specializedIn: '',
    specializedServices: '',
}

export default function AddPacientModal({ onlyIcon }) {
    const [open, setOpen] = React.useState(false)
    const [btnLoading, setBtnLoading] = React.useState(false)
    // const { setPacients, pacients } = usePacientContext()
    // const { setGeneralAlertOptions } = useApp()
    const [fields, setFields] = React.useState(initialFields)

    const formData = new FormData()
    formData.append('name', fields.name)
    formData.append('email', fields.email)
    formData.append('phone', fields.phone)
    formData.append('role', fields.role)
    formData.append('biography', fields.biography)
    formData.append('website', fields.website)
    formData.append('specializedIn', fields.specializedIn)
    formData.append('specializedServices', fields.specializedServices)
    formData.append('website', fields.website)
    // formData.append('photo', fields.pacientImage)

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
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            url: '/terapeuts'
        }).then(res => {
            if (res.status === 201) {
                // const updatedPacients = [...pacients, { ...res.data.pacient }]
                // setPacients(updatedPacients)
                setBtnLoading(false)
                setOpen(false)
                // setGeneralAlertOptions({
                //     open: true,
                //     message: 'Uspješno ste dodali pacijenta!',
                //     severity: 'success',
                //     hideAfter: 5000
                // })
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const openUploadHandler = () => {
        const input = document.getElementById('photo-input-ref')
        input.click()
    }

    const handleImageChange = (e) => {
        const photo = e.target.files[0]
        setFields({
            ...fields,
            pacientImage: photo
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
                    Novi Pacijent
                </Button>
            }
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Novi Pacijent</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Da biste dodali novog pacijenta, molimo vas popunite informacije
                        ispod.
                    </DialogContentText>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                        >
                            {/* <input
                                name="photo"
                                id="photo-input-ref"
                                type="file"
                                hidden
                                onChange={handleImageChange}
                            />
                            <Button
                                variant="contained"
                                sx={{ mt: 1 }}
                                onClick={openUploadHandler}
                            >
                                {fields.pacientImage !== '' ? 'Promjeni sliku' : 'Dodaj sliku'}
                            </Button> */}
                            <TextField
                                name="role"
                                required
                                id="role"
                                select
                                label="Uloga"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                sx={{ mt: 2 }}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                {roles.map((option, idx) => (
                                    <option key={option.id} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </TextField>
                            <TextField
                                name="name"
                                required
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Ime"
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
                                label="Uloga"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="specializedIn"
                                required
                                id="specializedIn"
                                label="Specijalista za"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="specializedServices"
                                required
                                id="specializedServices"
                                label="Usluge"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            {/* <TextField
                            id="birthDate"
                            label="Datum rođenja"
                            name="birthDate"
                            required
                            type="date"
                            sx={{ mt: 2 }}
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /> */}
                            {/* <DateTimePicker
                                label="Datum Rođenja"
                                name="date"
                                value={fields.birthDate}
                                ampm={false}
                                onChange={(value) => setFields({ ...fields, birthDate: value })}
                                renderInput={(params) => <TextField variant="standard" sx={{ mt: 1, mb: -1 }} fullWidth {...params} />}
                            /> */}
                            {/* <TextField
                                name="gender"
                                required
                                id="gender"
                                select
                                label="Spol"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                sx={{ mt: 2 }}
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                {genders.map((option, idx) => (
                                    <option key={option.id} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </TextField> */}
                            <TextField
                                name="biography"
                                required
                                margin="dense"
                                id="biography"
                                label="Biografija"
                                multiline
                                rows={5}
                                type="tel"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <DialogActions>
                                <Button variant="contained" color="error" onClick={handleClose}>Nazad</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={Object.values(fields).some(field => field === '')}
                                >
                                    {btnLoading ? <CircularProgress style={{ color: '#fff' }} size={24} /> : 'Gotovo'}
                                </Button>
                            </DialogActions>
                        </Box>
                    </LocalizationProvider>
                </DialogContent>
            </Dialog>
        </>
    );
}