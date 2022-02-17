import * as React from 'react';
import { useApp } from '../context/AppContext'
//mui
import { Card, Stack, Box, Typography, CardContent, CardActions } from '@mui/material'
//rest
import Page from '../components/Page'
import AddReviewDialog from '../components/REVIEWS/AddReviewDialog'
import CancelTherapyDialog from '../components/THERAPIES/CancelTherapyDialog'

export default function MyAppointedTherapies() {
    const { logedInPacient } = useApp()
    const { therapies: myTherapies } = (logedInPacient && logedInPacient) || []

    return (
        <Page title="Meine Therapien">
            <Box sx={{ height: 'calc(100vh - 80px)', p: 2 }}>
                {myTherapies && myTherapies.length === 0 ? <Typography align="center" variant="h5">Sie haben noch keine gebuchten Termine...</Typography> :
                    <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
                        {myTherapies && myTherapies.map(myTherapy => {
                            return <AppointedTherapy key={myTherapy._id} therapy={myTherapy} />
                        })}
                    </Stack>}
            </Box>
        </Page>
    )
}

function AppointedTherapy({ therapy }) {
    return (
        <Card sx={{ maxWidth: 345, m: 1 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {`${therapy.therapeut.firstName} ${therapy.therapeut.lastName}`} / {therapy.therapeut.specializedIn}
                </Typography>
                <Typography variant="body2" sx={{ color: '#999' }}>
                    Datum / {new Date(therapy.appointedAt).toLocaleString('de-DE', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </Typography>
                <Typography variant="body2" sx={{ color: '#999' }}>
                    Location / {therapy.therapeut.location}
                </Typography>
                <Typography gutterBottom variant="body2" sx={{ color: '#999' }}>
                    Avg.Rating / {therapy.therapeut.ratingsAverage.toFixed(1)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Stack sx={{ width: '100%' }} direction="row" alignItems="center" justifyContent="space-between">
                    <AddReviewDialog
                        therapeutId={therapy.therapeut._id}
                    />
                    <CancelTherapyDialog
                        therapyId={therapy._id}
                        selectedTherapyDate={therapy.appointedAt}
                        therapeutId={therapy.therapeut._id}
                    />
                </Stack>
            </CardActions>
        </Card>
    );
}
