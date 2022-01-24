import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
//////////////////////////
import { TextField, Stack, Box, Button, Typography, Avatar, ListItemAvatar, ListItemText, Divider, ListItem, List, useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'
//////////////////////////
import Page from '../components/Page'
import { actions } from '../utils/DataProviders/ActionButtonItems'
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ActionButton from '../components/_reusable/ActionButton'
import { isAdmin } from '../utils/DataProviders/ROLES/permissions'

const Logo = '/static/illustrations/home-alt.jpg'

// const mockTherapeuts = [
//     {
//         id: 0,
//         name: 'Karl Fischer',
//         specializedServices: 'ultrazvuk srca herz ekg',
//         specializedIn: 'kardiologija',
//         formatedSpecialization: 'Kardiologe',
//         location: 'Berlin',
//         image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
//         website: 'https://google.com',
//         biography: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
//         availableInNextWeek: true,
//         availableBookingDates: ['2022-01-25T00:00', '2022-02-01T00:00', '2022-03-03T00:00']
//     },
//     {
//         id: 1,
//         name: 'Jane Doe',
//         specializedServices: 'magnetna rezonanca',
//         specializedIn: 'radiologija',
//         formatedSpecialization: 'Radiologe',
//         location: 'Munich',
//         image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
//         website: 'https://google.com',
//         biography: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
//         availableInNextWeek: true,
//         availableBookingDates: ['2022-01-25T00:00', '2022-02-01T00:00', '2022-03-03T00:00']
//     },
//     {
//         id: 3,
//         name: 'Lukas Nicolaus',
//         specializedServices: 'pregled koze',
//         specializedIn: 'dermatologija',
//         formatedSpecialization: 'Dermatologe',
//         location: 'Essen',
//         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//         website: 'https://google.com',
//         biography: "Vivamus nunc neque, molestie quis dolor vitae, efficitur pellentesque felis. Donec sit amet fringilla neque, a convallis ante.",
//         availableInNextWeek: false,
//         availableBookingDates: ['2022-01-25T00:00', '2022-02-01T00:00', '2022-03-03T00:00']
//     },
//     {
//         id: 4,
//         name: 'Daniel Jones',
//         specializedServices: 'operacija',
//         specializedIn: 'hirurgija',
//         formatedSpecialization: 'Chirurg',
//         location: 'Dortmund',
//         image: 'https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//         website: 'https://google.com',
//         biography: "Morbi sagittis dignissim est quis fringilla. In volutpat tellus non fringilla ultrices.",
//         availableInNextWeek: true,
//         availableBookingDates: ['2022-01-25T00:00', '2022-02-01T00:00', '2022-03-03T00:00']
//     }
// ]

const MainStyle = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
    }
}));

const ContentBox = styled(Stack)(({ theme }) => ({
    padding: '2rem',
    [theme.breakpoints.up('md')]: {
        width: '50%',
        marginLeft: '4rem',
        marginBottom: '3rem',
        padding: 0
    }
}));

const FormGroupBox = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
    }
}));

const ImageBox = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '50%'
    }
}));

const LocationQueryTextField = styled(TextField)(({ theme }) => ({
    margin: '1rem 0',
    [theme.breakpoints.up('md')]: {
        margin: '0 1rem'
    }
}))

const SearchButton = styled(Button)(({ theme }) => ({
    marginTop: '1rem',
    [theme.breakpoints.up('md')]: {
        marginTop: 0,
        width: '17%'
    }
}))

const AdaptedList = styled(List)(({ theme }) => ({
    width: 340,
    maxWidth: 360,
    maxHeight: 250,
    overflowY: 'scroll',
    bgcolor: 'background.paper',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
        // maxWidth: 360,
        position: 'absolute',
        top: '24.5rem',
        left: '2rem'
    }
}))

const Home = () => {
    const navigate = useNavigate()
    const { logedInPacient, therapeuts } = useApp()
    const [fields, setFields] = useState({
        query: '',
        locationQuery: ''
    })

    console.log(therapeuts)

    const match = useMediaQuery('(min-width:600px)');
    const roleMatch = isAdmin(logedInPacient)

    const filteredTherapeuts = therapeuts.filter(therapeut => {
        return (therapeut.name.toLowerCase().includes(fields.query.toLowerCase())
            || therapeut.specializedServices.toLowerCase().includes(fields.query.toLowerCase())
            || therapeut.specializedIn.toLowerCase().includes(fields.query.toLowerCase())
            || therapeut.location.toLowerCase().includes(fields.query.toLowerCase()))
            && therapeut.location.toLowerCase().includes(fields.locationQuery.toLowerCase())
    })

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Page title="Home">
            <MainStyle spacing={2} alignItems="center">
                <ContentBox>
                    <Typography variant="h3">
                        Buchen Sie gerne einen Termin
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#888' }}>
                        Es ist eine seit langem bekannte Tatsache, dass ein Leser beim Betrachten des Layouts durch den lesbaren Inhalt einer Seite abgelenkt wird. Der Punkt bei der Verwendung von Lorem Ipsum ist, dass es eine mehr oder weniger normale Verteilung von Buchstaben hat, im Gegensatz zur Verwendung von „Content here“.
                    </Typography>
                    <FormGroupBox mt={2}>
                        <TextField
                            name="query"
                            placeholder="Name, Symptom, Dienst"
                            onChange={handleChange}
                        />
                        <LocationQueryTextField
                            name="locationQuery"
                            onChange={handleChange}
                            placeholder={`Standort: Berlin`}
                        />
                        {(fields.query !== '' || fields.locationQuery !== '') && filteredTherapeuts.length > 0 &&
                            <TherapeutItem
                                navigate={navigate}
                                fields={fields}
                                filteredTherapeuts={filteredTherapeuts}
                            />
                        }
                        <SearchButton variant="contained" onClick={() => navigate('/therapeuts')}>
                            Zuchen
                        </SearchButton>
                    </FormGroupBox>
                </ContentBox>
                {match &&
                    <ImageBox>
                        <img style={{ width: '100%' }} src={Logo} />
                    </ImageBox>}
            </MainStyle>
            {
                roleMatch && <ActionButton
                    actions={actions}
                    actionIcon={<SpeedDialIcon />}
                />
            }
        </Page >
    )
}

export default Home

const TherapeutItem = ({ fields, filteredTherapeuts, navigate }) => {
    const { setSelectedTherapeut } = useApp()
    // const match = useMediaQuery('(minWidth: 600px)')

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
                    return <div key={therapeut._id}>
                        <ListItem
                            // key={therapeut._id}
                            alignItems="flex-start"
                            sx={{ cursor: 'pointer' }}
                            onClick={() => therapeutSelectionHandler(therapeut)}
                        >
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={therapeut.image} />
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
                                            {therapeut.name}
                                        </Typography>
                                        {`—${therapeut.biography}…"`}
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
