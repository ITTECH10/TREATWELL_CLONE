import React from 'react';
import { useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'
// mui
import { Box, Stack, Typography, Button, Avatar, Container, Tabs, Tab, Card, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles';
// rest
import TherapeutInfoTab from '../components/THERAPEUTS/_details/TherapeutInfoTab'
import TherapeutDetailsBookForm from '../components/THERAPEUTS/_details/TherapeutDetailsBookForm'
import Page from '../components/Page'
import { hasPermission, actions } from '../utils/DataProviders/ROLES/permissions'

const TherapeutDetails = () => {
    const theme = useTheme()
    const { pathname } = useLocation();
    const { selectedTherapeut, logedInPacient, authenticated, getOneTherapeut } = useApp()
    const { image, name, specializedIn, phone, location: therapeutLocation, role } = selectedTherapeut || logedInPacient || { image: '', name: '', specializedIn: '', phone: '', role: '', location: '' }
    const therapeutId = pathname.split('/')[2]
    const roleMatch = hasPermission(logedInPacient, actions.MAIN_ROLE_UI_VISIBILITY)

    React.useEffect(() => {
        if (authenticated && roleMatch) {
            getOneTherapeut(therapeutId)
        }
    }, [getOneTherapeut, role])

    return (
        <Page title="Therapeut Profile">
            <Box sx={{ width: '100%', position: 'relative' }}>
                <Box px={30} sx={{ background: theme.palette.primary.main, color: '#fff' }}>
                    <Stack direction="row" spacing={1} sx={{ position: 'relative', top: '2rem' }}>
                        <Box sx={{ height: 135, width: 135, overflow: 'hidden' }}>
                            <img style={{ height: '100%', width: '100%', borderRadius: 10 }} alt="avatar" src={image} />
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
    const { children, value, index, ...other } = props;
    // const matches = useMediaQuery

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Stack direction="row" justifyContent="center" sx={{ marginRight: '25rem' }}>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                    <Tab label="Info" {...a11yProps(0)} />
                    <Tab label="Zugang" {...a11yProps(1)} />
                    <Tab label="Profile" {...a11yProps(2)} />
                </Tabs>
            </Stack>
            <TabPanel value={value} index={0}>
                <TherapeutInfoTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </>
    );
}


export default TherapeutDetails;
