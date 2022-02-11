import React from 'react'
// mui
import { Container, Grid, Typography } from '@mui/material'
// rest
import { therapyCategories as categories } from '../_mocks_/therapies'
import TherapyCategory from '../components/THERAPIES/TherapyCategory'
import Page from '../components/Page'

const TherapyCategories = () => {
    return (
        <Page title="Therapie kategorien">
            <Container maxWidth="xl">
                <Typography variant="h3" sx={{ mt: { xs: 3, md: 0 } }} align="center">Therapien Kategorien</Typography>
                <Grid container direction={{ xs: 'column', md: 'row' }} py={2} spacing={3}>
                    {
                        categories.map(category => {
                            return <Grid item xs={3}>
                                <TherapyCategory
                                    key={category.id}
                                    category={category}
                                />
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </Page>
    )
}

export default TherapyCategories