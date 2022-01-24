import React from 'react';
import { useApp } from '../context/AppContext'
// mui
import { Box, Stack, Typography, Button, Avatar, Container, Tabs, Tab, Card, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles';
// rest
import TherapeutInfoTab from '../components/THERAPEUTS/_details/TherapeutInfoTab'
import TherapeutDetailsBookForm from '../components/THERAPEUTS/_details/TherapeutDetailsBookForm'

const Header = styled(Stack)(({ theme }) => ({
    // [theme.breakpoints.up('md')]: {
    //     flexDirection: 'row'
    // }
}))

const TherapeutDetails = () => {
    const theme = useTheme()
    const { selectedTherapeut } = useApp()
    const { image, name, formatedSpecialization } = selectedTherapeut

    return (
        <Box sx={{ width: '100%', position: 'relative' }}>
            <Box px={30} sx={{ background: theme.palette.primary.main, color: '#fff' }}>
                <Header direction="row" spacing={1} sx={{ position: 'relative', top: '2rem' }}>
                    <Box sx={{ height: 135, width: 135, overflow: 'hidden' }}>
                        <img style={{ height: '100%', width: '100%', borderRadius: 10 }} alt="avatar" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    </Box>
                    <Box>
                        <Typography variant="h4">{name}</Typography>
                        <Typography variant="subtitle2">{formatedSpecialization}</Typography>
                    </Box>
                </Header>
            </Box>
            <NavTabs />
        </Box>
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
