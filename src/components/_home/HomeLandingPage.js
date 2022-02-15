import React, { useState } from 'react'
import { useApp } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
// mui
import { styled, useTheme } from '@mui/material/styles'
import { TextField, Stack, Button, Box, Typography, useMediaQuery } from '@mui/material'
// rest
import TherapeutItem from '../THERAPEUTS/_list/TherapeutItem'

const notOptimizedLandingImage = '/static/illustrations/BildTitel1.jpg'

const MainStyle = styled(Stack)(({ theme }) => ({
    position: 'relative',
    height: 'calc(100vh - 64px)',
    [theme.breakpoints.up('md')]: {
        // height: 'calc(100vh - 64px)',
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
        top: '20%',
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

const HomeLandingPage = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const { setTherapeuts, therapeuts } = useApp()
    const [fields, setFields] = useState({
        query: '',
        locationQuery: ''
    })

    const match = useMediaQuery('(min-width:600px)');

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

    const filteredTherapeuts = therapeuts.length > 0 && therapeuts.filter(therapeut => {
        const name = `${therapeut.firstName} ${therapeut.lastName}`

        return (name.toLowerCase().includes(fields.query.toLowerCase())
            || therapeut.specializedServices.toLowerCase().includes(fields.query.toLowerCase())
            || therapeut.specializedIn.toLowerCase().includes(fields.query.toLowerCase())
            || therapeut.location.toLowerCase().includes(fields.query.toLowerCase()))
            && therapeut.location.toLowerCase().includes(fields.locationQuery.toLowerCase())
    })

    return (
        <MainStyle direction={{ xs: 'column', md: 'row' }} alignItems="center">
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
                    <Stack direction={{ xs: 'column', md: 'row' }} sx={{ width: '100%', order: { xs: 2, md: 1 } }}>
                        <TextField
                            name="query"
                            placeholder="Name, Symptom, Dienst"
                            onChange={handleChange}
                            fullWidth
                            size={!match && 'small'}
                            sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}
                        />
                        <LocationQueryTextField
                            name="locationQuery"
                            onChange={handleChange}
                            fullWidth
                            size={!match && 'small'}
                            placeholder={`Standort: Berlin`}
                            sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}
                        />
                    </Stack>
                    {(fields.query !== '' || fields.locationQuery !== '') && filteredTherapeuts.length > 0 &&
                        <TherapeutItem
                            navigate={navigate}
                            fields={fields}
                            filteredTherapeuts={filteredTherapeuts}
                        />
                    }
                    <SearchButton sx={{ order: { xs: 2, md: 3 } }} variant="contained" onClick={() => filterTherapeutsHandler()}>
                        Zuchen
                    </SearchButton>
                </FormGroupBox>
            </ContentBox>
            <ImageBox>
                <img style={{ width: '100%', opacity: .8, height: '100%' }} src={notOptimizedLandingImage} />
            </ImageBox>
        </MainStyle >
    )
}

export default HomeLandingPage