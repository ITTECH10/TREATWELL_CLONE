import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
//////////////////////////
import { TextField, Stack, Button, Typography, Avatar, ListItemAvatar, Box, ListItemText, Divider, ListItem, List, useMediaQuery } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
//////////////////////////
import Page from '../components/Page'
import { actions } from '../utils/DataProviders/ActionButtonItems'
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ActionButton from '../components/_reusable/ActionButton'
import { isAdmin } from '../utils/DataProviders/ROLES/permissions'
import AppHeroBoxes from '../components/_dashboard/app/AppHeroBoxes'
import AppHowToVideo from '../components/_dashboard/app/AppHowToVideo'
import AppContactFooter from '../components/_dashboard/app/AppContactFooter'
import { manipulateCloudinaryImage } from '../utils/manipulateCloudinaryImage'

// const optimizedLandingImage = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644307359/BildTitel1_1_sv4ifc.jpg', ['w_3500'])
// const notOptimizedLandingImage = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644307359/BildTitel1_1_sv4ifc.jpg', ['w_5000'])
const notOptimizedLandingImage = '/static/illustrations/BildTitel1.jpg'

const MainStyle = styled(Stack)(({ theme }) => ({
    position: 'relative',
    height: 'calc(100vh - 64px)',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        height: 'calc(75vh - 64px)'
    }
}));

const ContentBox = styled(Stack)(({ theme }) => ({
    padding: '2rem',
    color: theme.palette.background.paper,
    zIndex: 2,
    // marginTop: '4rem',
    [theme.breakpoints.up('md')]: {
        width: '50%',
        marginLeft: '4rem',
        marginBottom: '3rem',
        marginTop: 0,
        padding: 0,
        position: 'absolute',
        top: '29%',
        zIndex: 1000
    }
}));

const FormGroupBox = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
    }
}));

const ImageBox = styled(Stack)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
        position: 'static'
    }
}));

const LocationQueryTextField = styled(TextField)(({ theme }) => ({
    margin: '1rem 0',
    [theme.breakpoints.up('md')]: {
        margin: '0 1rem'
    }
}))

const SearchButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '17%'
    }
}))

const AdaptedList = styled(List)(({ theme }) => ({
    width: 'auto',
    // maxWidth: 360,
    maxHeight: 210,
    // borderRadius: 8,
    overflowY: 'scroll',
    bgcolor: 'background.paper',
    position: 'relative',
    zIndex: 30000,
    background: '#fff',
    [theme.breakpoints.up('md')]: {
        // maxWidth: 360,
        position: 'absolute',
        top: '12rem',
        left: '0',
        maxHeight: 250
    }
}))

const Home = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const { logedInPacient, therapeuts, setTherapeuts, getAvailableTherapeuts } = useApp()
    const [fields, setFields] = useState({
        query: '',
        locationQuery: ''
    })

    const match = useMediaQuery('(min-width:600px)');
    const roleMatch = isAdmin(logedInPacient)

    React.useEffect(() => {
        getAvailableTherapeuts()
    }, [getAvailableTherapeuts])

    const filteredTherapeuts = therapeuts.length > 0 && therapeuts.filter(therapeut => {
        const name = `${therapeut.firstName} ${therapeut.lastName}`

        return (name.toLowerCase().includes(fields.query.toLowerCase())
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

    const filterTherapeutsHandler = () => {
        setTherapeuts(filteredTherapeuts)
        navigate('/therapeuts')
    }

    return (
        <Page title="Home">
            <MainStyle alignItems="center">
                <ContentBox sx={{ mt: { xs: (fields.query !== '' || fields.locationQuery !== '') && filteredTherapeuts.length > 0 ? 0 : 8, md: 0 } }}>
                    <Box sx={{ display: { xs: (fields.query !== '' || fields.locationQuery !== '') && filteredTherapeuts.length > 0 && !match && 'none' } }}>
                        <Typography variant="h3" sx={{ fontSize: !match && '2.1rem', lineHeight: !match && '1.1' }}>
                            Buchen Sie gerne einen Termin
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.background.paper, fontSize: !match && '.6rem' }}>
                            Es ist eine seit langem bekannte Tatsache, dass ein Leser beim Betrachten des Layouts durch den lesbaren Inhalt einer Seite abgelenkt wird. Der Punkt bei der Verwendung von Lorem Ipsum ist, dass es eine mehr oder weniger normale Verteilung von Buchstaben hat, im Gegensatz zur Verwendung von „Content here“.
                        </Typography>
                    </Box>
                    <FormGroupBox mt={{ xs: (fields.query !== '' || fields.locationQuery !== '') && filteredTherapeuts.length > 0 && !match ? 0 : 2 }}>
                        <TextField
                            name="query"
                            placeholder="Name, Symptom, Dienst"
                            onChange={handleChange}
                            size={!match && 'small'}
                            sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}
                        />
                        <LocationQueryTextField
                            name="locationQuery"
                            onChange={handleChange}
                            size={!match && 'small'}
                            placeholder={`Standort: Berlin`}
                            sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}
                        />
                        {(fields.query !== '' || fields.locationQuery !== '') && filteredTherapeuts.length > 0 &&
                            <TherapeutItem
                                navigate={navigate}
                                fields={fields}
                                filteredTherapeuts={filteredTherapeuts}
                            />
                        }
                        <SearchButton sx={{ marginTop: (fields.query !== '' || fields.locationQuery !== '') && filteredTherapeuts.length > 0 && !match && '1rem' }} variant="contained" onClick={() => filterTherapeutsHandler()}>
                            Zuchen
                        </SearchButton>
                    </FormGroupBox>
                </ContentBox>
                <ImageBox>
                    <img style={{ width: '100%', opacity: .8, height: !match && '100%' }} src={notOptimizedLandingImage} />
                </ImageBox>
            </MainStyle >
            <Stack alignItems="center" justifyContent="center" sx={{ height: match ? '3rem' : '2.5rem', position: 'relative', zIndex: 999, opacity: .8, width: '81%', my: 3, mx: 'auto', borderRadius: 2, backgroundColor: theme.palette.primary.main, color: '#fff' }}>
                <Typography variant="h6">IHRE VORTEILE</Typography>
            </Stack>
            <AppHeroBoxes />
            <Stack alignItems="center" justifyContent="center" sx={{ height: match ? '3rem' : '2.5rem', width: '81%', position: 'relative', zIndex: 999, opacity: .8, mt: 3, mb: !match ? 0 : 3, mx: 'auto', borderRadius: 2, backgroundColor: theme.palette.primary.main, color: '#fff' }}>
                <Typography variant="h6">WIE FUNKCIONIERT GESUNDO24</Typography>
            </Stack>
            <AppHowToVideo />
            <AppContactFooter />
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
                                            <Typography variant="subtitle2">Name: <span>{therapeut.name}</span></Typography>
                                            <Typography variant="subtitle2">Heilpraktiker: {therapeut.specializedIn}</Typography>
                                            <Typography variant="subtitle2">Telefon: {therapeut.phone}</Typography>
                                            <Typography variant="subtitle2">Schwerpunkt: Kardiologie ist mei...</Typography>
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
