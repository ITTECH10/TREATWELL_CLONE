import React from 'react'
import { useApp } from '../../../context/AppContext'
//mui
import { styled } from '@mui/material/styles'
import { Avatar, ListItemAvatar, ListItemText, Divider, ListItem, List, Button, Typography } from '@mui/material'
//rest
import { manipulateCloudinaryImage } from '../../../utils/manipulateCloudinaryImage'

const AdaptedList = styled(List)(({ theme }) => ({
    width: 'auto',
    // maxWidth: 360,
    maxHeight: 185,
    // borderRadius: 8,
    overflowY: 'scroll',
    bgcolor: 'background.paper',
    position: 'relative',
    zIndex: 30000,
    borderRadius: 8,
    background: '#fff',
    order: 1,
    marginBottom: '1rem',
    [theme.breakpoints.up('md')]: {
        // maxWidth: 360,
        position: 'absolute',
        top: '9.5rem',
        left: '0',
        maxHeight: 250,
        marginBottom: 0,
        borderRadius: 0
    }
}))

const TherapeutItem = ({ fields, filteredTherapeuts, navigate }) => {
    const { setSelectedTherapeut } = useApp()

    const therapeutSelectionHandler = (therapeut) => {
        if (therapeut) {
            setSelectedTherapeut(therapeut)
            navigate(`/therapeuts/${therapeut._id}`)
        }
    }

    return (
        <AdaptedList>
            {
                filteredTherapeuts.map(therapeut => {
                    const optimizedAvatarImage = manipulateCloudinaryImage(therapeut.image)

                    return <div key={therapeut._id}>
                        <ListItem
                            alignItems="flex-start"
                            sx={{ cursor: 'pointer' }}
                            onClick={() => therapeutSelectionHandler(therapeut)}
                        >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={optimizedAvatarImage} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={fields.query || fields.locationQuery}
                                primaryTypographyProps={{ sx: { textDecoration: 'underline', color: 'red' } }}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            <Typography variant="subtitle2">Name: <span>{`${therapeut.firstName} ${therapeut.lastName}`}</span></Typography>
                                            <Typography variant="subtitle2">Beruf: {therapeut.specializedIn}</Typography>
                                            <Typography variant="subtitle2">Telefon: {therapeut.phone}</Typography>
                                            <Typography variant="subtitle2">Schwerpunkt: {therapeut.specializedMethods.map(el => <Typography variant="body2">{el}</Typography>)}</Typography>
                                        </Typography>
                                        {<Button size="small">Mehr Uber Mich</Button>}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                })
            }
        </AdaptedList>
    );
}

export default TherapeutItem