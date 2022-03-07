import React from 'react';
import { useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'
// rest
import Page from '../components/Page'
import { hasPermission, actions } from '../utils/DataProviders/ROLES/permissions'
import TherapeutHeader from '../components/THERAPEUTS/_details/TherapeutHeader'

const TherapeutDetails = () => {
    const { pathname } = useLocation();
    const { selectedTherapeut, logedInPacient, authenticated, getOneTherapeut } = useApp()
    const { role } = selectedTherapeut || logedInPacient || { role: '' }
    const therapeutId = pathname.split('/')[2]
    const roleMatch = hasPermission(logedInPacient, actions.MAIN_ROLE_UI_VISIBILITY)

    React.useEffect(() => {
        if (!roleMatch && !authenticated) {
            getOneTherapeut(therapeutId)
        }

        if (roleMatch && authenticated) {
            getOneTherapeut(therapeutId)
        }
    }, [getOneTherapeut, role, therapeutId, roleMatch, authenticated])

    return (
        <Page title="Therapeut Profile">
            <TherapeutHeader />
        </Page>
    )
};

export default TherapeutDetails;
