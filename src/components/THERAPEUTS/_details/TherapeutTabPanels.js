import React from 'react'
import { useApp } from '../../../context/AppContext'
// mui
import { Grid, Container, Card } from '@mui/material'
// rest
import TherapeutDetailsBookForm from './TherapeutDetailsBookForm'
import BookFreeDate from '../_filtered/BookFreeDate'
import DateTimeTabsSwitcher from '../_filtered/DateTimeTabsSwitcher'
import { hasPermission, actions } from '../../../utils/DataProviders/ROLES/permissions'

function TherapeutTabPanels(props) {
    const { logedInPacient, selectedTherapeut } = useApp()
    const therapeutPlaceholder = { availableBookingDates: [], available: true, firstName: '', lastName: '' }
    const { availableBookingDates, available } = selectedTherapeut || { availableBookingDates: [], available: true }
    const { children, navTabValue, index, ...other } = props;
    const [value, setValue] = React.useState(0)
    const [dateValue, setDateValue] = React.useState(availableBookingDates[0] ? new Date(availableBookingDates.sort((a, b) => new Date(a.date) - new Date(b.date))[0].date) : new Date());
    const roleMatch = hasPermission(logedInPacient, actions.IS_THERAPEUT)

    const content = roleMatch ? (
        <Container maxWidth="lg" sx={{ p: 2 }}>
            <Grid container spacing={2} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
                <Grid item xs={12} md={7}>
                    {children}
                </Grid>
                <Grid item xs={12} md={5}>
                    <TherapeutDetailsBookForm />
                </Grid>
            </Grid>
        </Container>
    ) : (
        <Container maxWidth="lg" sx={{ p: 2 }}>
            <Grid container spacing={2} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
                <Grid item xs={12} md={7}>
                    {children}
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card py={2}>
                        <BookFreeDate
                            selectedBookingDates={availableBookingDates}
                            visible={value === 0}
                            therapeutAvailable={available}
                            setDateValue={setDateValue}
                            dateValue={dateValue}
                        />
                        <DateTimeTabsSwitcher
                            style={{ alignItems: 'center', py: 2 }}
                            value={value}
                            setValue={setValue}
                            therapeut={selectedTherapeut ? selectedTherapeut : therapeutPlaceholder}
                            dateValue={dateValue}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )

    return (
        <div
            role="tabpanel"
            hidden={navTabValue !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {navTabValue === index && (
                content
            )}
        </div>
    );
}

export default TherapeutTabPanels