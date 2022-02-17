import React from 'react';
import { useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'
// mui
import { Box, Stack, Typography, Container, Tabs, Tab, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles';
// rest
import TherapeutInfoTab from '../components/THERAPEUTS/_details/TherapeutInfoTab'
import TherapeutDetailsBookForm from '../components/THERAPEUTS/_details/TherapeutDetailsBookForm'
import Page from '../components/Page'
import { hasPermission, actions } from '../utils/DataProviders/ROLES/permissions'
import { manipulateCloudinaryImage } from '../utils/manipulateCloudinaryImage'
import UpdateTherapeutInfoDialog from '../components/THERAPEUTS/_details/UpdateTherapeutInfoDialog'
import BookFreeDate from '../components/THERAPEUTS/_filtered/BookFreeDate'
import DateTimeTabsSwitcher from '../components/THERAPEUTS/_filtered/DateTimeTabsSwitcher'

const TherapeutDetails = () => {
    const theme = useTheme()
    const { pathname } = useLocation();
    const { selectedTherapeut, logedInPacient, authenticated, getOneTherapeut } = useApp()
    const { image, name, specializedIn, phone, location: therapeutLocation, role } = selectedTherapeut || logedInPacient || { image: '', name: '', specializedIn: '', phone: '', role: '', location: '' }
    const therapeutId = pathname.split('/')[2]
    const roleMatch = hasPermission(logedInPacient, actions.MAIN_ROLE_UI_VISIBILITY)
    const manipulatedAvatarImage = manipulateCloudinaryImage(image, ['w_1500'])

    React.useEffect(() => {
        if (!roleMatch && !authenticated) {
            getOneTherapeut(therapeutId)
        }

        if (roleMatch && authenticated) {
            getOneTherapeut(therapeutId)
        }
    }, [getOneTherapeut, role])

    return (
        <Page title="Therapeut Profile">
            <Box sx={{ width: '100%', position: 'relative' }}>
                <Box px={{ xs: 0, md: 30 }} sx={{ background: theme.palette.primary.main, color: '#fff' }}>
                    <Stack direction="row" spacing={1} sx={{ position: 'relative', top: '2rem' }}>
                        <Box sx={{ height: 135, width: 135, position: 'relative', marginLeft: { xs: 2, md: 0 } }}>
                            <img style={{ height: '100%', width: '100%', borderRadius: 10 }} alt="avatar" src={manipulatedAvatarImage} />
                            <UpdateTherapeutInfoDialog />
                        </Box>
                        <Box>
                            <Typography variant="h4">{name}</Typography>
                            <Typography variant="subtitle2">{specializedIn}</Typography>
                            <Typography variant="subtitle2">Location: {therapeutLocation}</Typography>
                            <Typography variant="subtitle2">Telefon: {phone}</Typography>
                        </Box>
                    </Stack>
                </Box>
                <NavTabs />
            </Box>
        </Page>
    )
};

function TabPanel(props) {
    const { logedInPacient, selectedTherapeut } = useApp()
    const { availableBookingDates, available } = selectedTherapeut || { availableBookingDates: [], available: true }
    const { children, navTabValue, index, ...other } = props;
    const [value, setValue] = React.useState(0)
    const [dateValue, setDateValue] = React.useState(availableBookingDates[0] ? new Date(availableBookingDates[availableBookingDates.length - 1].date) : new Date());
    const roleMatch = hasPermission(logedInPacient, actions.IS_THERAPEUT)
    // const matches = useMediaQuery

    const content = roleMatch ? (
        <Container maxWidth="lg" sx={{ p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    {children}
                </Grid>
                <Grid item xs={5}>
                    <TherapeutDetailsBookForm />
                </Grid>
            </Grid>
        </Container>
    ) : (
        <Container maxWidth="lg" sx={{ p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    {children}
                </Grid>
                <Grid item xs={5}>
                    <BookFreeDate
                        selectedBookingDates={availableBookingDates}
                        visible={value === 0}
                        therapeutAvailable={available}
                        setDateValue={setDateValue}
                        dateValue={dateValue}
                    />
                    <DateTimeTabsSwitcher
                        value={value}
                        setValue={setValue}
                        therapeut={selectedTherapeut ? selectedTherapeut : {}}
                        dateValue={dateValue}
                    />
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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function NavTabs() {
    const [navTabValue, setNavTabValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setNavTabValue(newValue);
    };

    return (
        <>
            <Stack direction="row" justifyContent="center" sx={{ marginRight: { xs: 0, md: '25rem' }, marginLeft: { xs: '8rem', md: 0 } }}>
                <Tabs navTabValue={navTabValue} onChange={handleChange} aria-label="nav tabs example">
                    <Tab label="Info" {...a11yProps(0)} />
                </Tabs>
            </Stack>
            <TabPanel navTabValue={navTabValue} index={0}>
                <TherapeutInfoTab />
            </TabPanel>
        </>
    );
}


export default TherapeutDetails;
