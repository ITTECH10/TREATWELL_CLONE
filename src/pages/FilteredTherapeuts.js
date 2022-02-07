import React from 'react'
import { useApp } from '../context/AppContext'
import Page from '../components/Page'
///////////////////////// material
import { Typography, Container } from '@mui/material'
// rest
import TherapeutDashboard from '../components/THERAPEUTS/_filtered/TherapeutDashboard'

const FilteredTherapeuts = () => {
    const { therapeuts } = useApp()
    return (
        <Page title="Rezultati Pretrage">
            <Container maxWidth="lg" p={2}>
                <Typography my={2} variant="h5" align="center">Buchen Sie den passenden Spezialisten online.</Typography>
                {
                    therapeuts.map(therapeut => {
                        return <TherapeutDashboard
                            key={therapeut._id}
                            therapeut={therapeut}
                        />
                    })
                }
            </Container>
        </Page>
    )
}

export default FilteredTherapeuts
