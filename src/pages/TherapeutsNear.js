import React from 'react';
// mui
import { Grid, Paper, Card, Typography, Button, Box, Stack, Container, TextField } from '@mui/material'
// rest
import Page from '../components/Page'
import NearTherapeutsMap from '../components/NearTherapeutsMap'

const TherapeutsNear = () => {
    return (
        <Page title="Therapeuten Nahe">
            <Container maxWidth="xxl" sx={{ my: 4 }}>
                <Card p={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Box p={3}>
                                <Typography variant="h3">Therapeuten Nahe</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Lorem ispum dolor sit amet, consectet lorem d, lorem ipsum dolor sit amet,Lorem ispum dolor sit amet, consectet lorem d, lorem ipsum dolor sit amet,Lorem ispum dolor sit amet, consectet lorem d, lorem ipsum dolor sit amet...
                                </Typography>
                                <Box mt={2}>
                                    <TextField
                                        placeholder="Test"
                                        fullWidth
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <NearTherapeutsMap />
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Page>
    )
};

export default TherapeutsNear;
