import * as React from 'react';
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
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const initialFields = {
    review: '',
    rating: ''
}

export default function FormDialog({ therapeutId }) {
    const [open, setOpen] = React.useState(false);
    const [btnLoading, setBtnLoading] = React.useState(false);
    const [fields, setFields] = React.useState(initialFields)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
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

        axios.post(`/therapeuts/${therapeutId}/reviews`, { ...fields })
            .then(res => {
                if (res.status === 201) {
                    setBtnLoading(false)
                    setOpen(false)
                    console.log(res.data)
                }
            }).catch(err => console.log(err.response))
    }

    return (
        <div>
            <Button size="small" variant="contained" endIcon={<ThumbUpIcon />} onClick={handleClickOpen}>Abstimmung</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Abstimmung</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Um diesen Therapeuten zu bewerten, füllen Sie bitte das untenstehende Formular aus
                    </DialogContentText>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            autoFocus
                            name="rating"
                            margin="dense"
                            id="name"
                            label="Rating"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                        />
                        <TextField
                            name="review"
                            margin="dense"
                            id="name"
                            label="Review"
                            multiline
                            rows={3}
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                        />
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="error">Zurück</Button>
                            <Button type="submit" variant="contained">
                                {btnLoading ? <CircularProgress style={{ color: '#fff' }} size={24} /> : 'Fertig'}
                            </Button>
                        </DialogActions>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
