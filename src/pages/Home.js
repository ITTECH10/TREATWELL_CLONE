import React from 'react'
import { useApp } from '../context/AppContext'
//////////////////////////
//////////////////////////
import Page from '../components/Page'
import { actions } from '../utils/DataProviders/ActionButtonItems'
import { SpeedDialIcon, useMediaQuery, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import ActionButton from '../components/_reusable/ActionButton'
import { isAdmin } from '../utils/DataProviders/ROLES/permissions'
// import AppContactFooter from '../components/_dashboard/app/AppContactFooter'
import HomeLandingPage from '../components/_home/HomeLandingPage'
import HomeServiceBoxes from '../components/_home/HomeServiceBoxes'
import HomeBanner from '../components/_home/HomeBanner'
import HomeWelcomeVideo from '../components/_home/HomeWelcomeVideo'
import HomeFooter from '../components/_home/HomeFooter'
import HomeTrendingNews from '../components/_home/HomeTrendingNews'
import HomeTherapeutAdvantages from '../components/_home/HomeTherapeutAdvantages'

const Home = () => {
    const { logedInPacient, getAvailableTherapeuts } = useApp()
    const roleMatch = isAdmin(logedInPacient)
    const theme = useTheme()
    const match = useMediaQuery('(min-width:600px)');

    React.useEffect(() => {
        getAvailableTherapeuts()
    }, [getAvailableTherapeuts])

    return (
        <Page title="Home">
            <HomeLandingPage />
            <HomeBanner
                title="SO FUNKTIONIERT GESUNDO24"
                titleVariant={match ? 'subtitle1' : 'subtitle2'}
                style={{
                    height: match ? '2rem' : '2.5rem',
                    width: '100%',
                    color: theme.palette.background.paper,
                    backgroundColor: theme.palette.primary.main,
                    my: 1.5,
                    // mt: ,
                    borderRadius: 0
                }}
            />
            <Divider sx={{ borderColor: theme.palette.primary.main, borderBottomWidth: '2px', width: '100%', mx: 'auto', mb: 1.5 }} />
            <HomeWelcomeVideo />
            <HomeBanner
                title=""
                titleVariant={match ? 'subtitle1' : 'subtitle2'}
                style={{
                    height: match ? '2rem' : '2.5rem',
                    width: '100%',
                    color: theme.palette.background.paper,
                    backgroundColor: theme.palette.primary.main,
                    mb: 1.5,
                    // mt: ,
                    borderRadius: 0
                }}
            />
            <Divider sx={{ borderColor: theme.palette.primary.main, borderBottomWidth: '2px', width: '100%', mx: 'auto', mb: 2 }} />
            <HomeTrendingNews />
            <HomeBanner
                title="WERFEN SIE EINEN BLICK AUF IHRE VORTEILE"
                titleVariant={match ? 'subtitle1' : 'subtitle2'}
                style={{
                    height: match ? '2rem' : '2.5rem',
                    width: '100%',
                    color: theme.palette.background.paper,
                    backgroundColor: theme.palette.primary.main,
                    mt: 1.5,
                    borderRadius: 0
                }}
            />
            <Divider sx={{ borderColor: theme.palette.primary.main, borderBottomWidth: '2px', width: '100%', mx: 'auto', my: 1.5 }} />
            <HomeServiceBoxes />
            <HomeBanner
                title="IHRE VORTEILE ALS THERAPEUT"
                titleVariant={match ? 'subtitle1' : 'subtitle2'}
                style={{
                    height: match ? '2rem' : '2.5rem',
                    width: '100%',
                    color: theme.palette.background.paper,
                    backgroundColor: theme.palette.primary.main,
                    my: 1.5,
                    borderRadius: 0
                }}
            />
            <Divider sx={{ borderColor: theme.palette.primary.main, borderBottomWidth: '2px', width: '100%', mx: 'auto', mb: 1.5 }} />
            <HomeTherapeutAdvantages />
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
