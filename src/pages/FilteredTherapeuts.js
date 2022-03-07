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
                <Typography my={2} variant="h4" align="center">
                    {therapeuts.length > 0 ? 'Buchen Sie den passenden Spezialisten online.' : 'Noch keine therapeute.'}
                </Typography>
                {
                    therapeuts.length > 0 && therapeuts.map(therapeut => {
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
