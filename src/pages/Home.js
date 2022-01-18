import React from 'react'
import { useApp } from '../context/AppContext'
//////////////////////////
import { TextField, Stack, Box, Button, Typography, Paper } from '@mui/material'
//////////////////////////
import Page from '../components/Page'
import { actions } from '../utils/DataProviders/ActionButtonItems'
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ActionButton from '../components/_reusable/ActionButton'
import { isAdmin } from '../utils/DataProviders/ROLES/permissions'

const Logo = '/static/illustrations/home-alt.jpg'

const mockTherapeuts = [
    {
        id: 0,
        name: 'Emir Salihovic',
        offers: 'ultrazvuk srca',
        specializedIn: 'kardiolog',
        location: 'Berlin'
    },
    {
        id: 1,
        name: 'Jane Doe',
        offers: 'magnetna rezonanca',
        specializedIn: 'radiolog',
        location: 'Munich'
    },
]

const Home = () => {
    const { logedInPacient } = useApp()
    const [fields, setFields] = React.useState({
        query: ''
    })

    const roleMatch = isAdmin(logedInPacient)

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const filteredTherapeuts = mockTherapeuts.filter(therapeut => {
        return therapeut.name.toLowerCase().includes(fields.query.toLowerCase())
            || therapeut.offers.toLowerCase().includes(fields.query.toLowerCase())
            || therapeut.specializedIn.toLowerCase().includes(fields.query.toLowerCase())
    })

    return (
        <Page title="Home">
            <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ width: '45%', ml: '4rem', mb: '3rem' }}>
                    <Typography variant="h3">
                        Feel free to book an appointment
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#888' }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'.
                    </Typography>
                    <Stack mt={2} direction="row" spacing={2}>
                        <TextField
                            name="query"
                            placeholder="Ime, simptom, usluga"
                            onChange={handleChange}
                        />
                        <TextField
                            name="query"
                            onChange={handleChange}
                            placeholder={`Lokacija: Berlin`}
                        />
                        <Button variant="contained" sx={{ width: '17%' }} color="error">
                            Search
                        </Button>
                    </Stack>
                </Box>
                <Box sx={{ width: '55%' }}>
                    <img style={{ width: '100%' }} src={Logo} />
                </Box>
            </Stack>
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

{/* <Box component="form" p={2}>
<Stack direction="row" spacing={2}>
    <TextField
        name="query"
        placeholder="Ime, simptom, usluga"
        onChange={handleChange}
    />
    <TextField
        name="query"
        onChange={handleChange}
        placeholder={`Lokacija: Berlin`}
    />
</Stack>
<Button sx={{ mt: 1 }} variant="contained">
    Submit
</Button>
</Box>

<Box p={2}>
{
    fields.query !== '' && filteredTherapeuts.map(therapeut => {
        return <Typography key={therapeut.id}>{therapeut.name}</Typography>
    })
}
</Box> */}