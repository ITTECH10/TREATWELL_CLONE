import React from 'react'
// mui
import { Stack, Tabs, Tab } from '@mui/material'
// rest
import TherapeutInfoTab from './TherapeutInfoTab'
import TherapeutTabPanels from './TherapeutTabPanels'

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TherapeutHeaderTabs() {
    const [navTabValue, setNavTabValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setNavTabValue(newValue);
    };

    return (
        <>
            <Stack direction="row" justifyContent="center" sx={{ marginRight: { xs: 0, md: '50rem' }, marginLeft: { xs: 0, md: 0 } }}>
                <Tabs sx={{ height: 0, width: 0 }} navTabValue={navTabValue} onChange={handleChange} aria-label="nav tabs example">
                    <Tab label="Info"  {...a11yProps(0)} />
                </Tabs>
            </Stack>
            <TherapeutTabPanels navTabValue={navTabValue} index={0}>
                <TherapeutInfoTab />
            </TherapeutTabPanels>
        </>
    );
}

export default TherapeutHeaderTabs