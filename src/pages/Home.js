import React from 'react'
//////////////////////////
import { TextField, Stack, Box, Button, Typography } from '@mui/material'
//////////////////////////
import Page from '../components/Page'
import { actions } from '../utils/DataProviders/ActionButtonItems'
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ActionButton from '../components/_reusable/ActionButton'

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
    const [fields, setFields] = React.useState({
        query: ''
    })

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
            <Box component="form" p={2}>
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
            </Box>
            <ActionButton
                actions={actions}
                actionIcon={<SpeedDialIcon />}
            />
        </Page>
    )
}

export default Home
