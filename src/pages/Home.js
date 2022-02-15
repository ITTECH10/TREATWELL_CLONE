import React from 'react'
import { useApp } from '../context/AppContext'
//////////////////////////
//////////////////////////
import Page from '../components/Page'
import { actions } from '../utils/DataProviders/ActionButtonItems'
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ActionButton from '../components/_reusable/ActionButton'
import { isAdmin } from '../utils/DataProviders/ROLES/permissions'
// import AppContactFooter from '../components/_dashboard/app/AppContactFooter'
import HomeLandingPage from '../components/_home/HomeLandingPage'
import HomeServiceBoxes from '../components/_home/HomeServiceBoxes'
import HomeBanner from '../components/_home/HomeBanner'
import HomeWelcomeVideo from '../components/_home/HomeWelcomeVideo'
import HomeFooter from '../components/_home/HomeFooter'

// const optimizedLandingImage = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644307359/BildTitel1_1_sv4ifc.jpg', ['w_3500'])
// const notOptimizedLandingImage = manipulateCloudinaryImage('https://res.cloudinary.com/dnirsutla/image/upload/v1644307359/BildTitel1_1_sv4ifc.jpg', ['w_5000'])

const Home = () => {
    const { logedInPacient, getAvailableTherapeuts } = useApp()
    const roleMatch = isAdmin(logedInPacient)

    React.useEffect(() => {
        getAvailableTherapeuts()
    }, [getAvailableTherapeuts])

    return (
        <Page title="Home">
            <HomeLandingPage />
            <HomeBanner title="IHRE VORTEILE" />
            <HomeServiceBoxes />
            <HomeBanner title="SO FUNKCIONIERT GESUNDO24" />
            <HomeWelcomeVideo />
            <HomeFooter />
            {
                roleMatch && <ActionButton
                    actions={actions}
                    actionIcon={<SpeedDialIcon />}
                />
            }
        </Page >
    )
}

export default Home
