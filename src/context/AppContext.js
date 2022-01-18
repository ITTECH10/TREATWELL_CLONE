
import React from 'react';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from './../hooks/useLocalStorage'
import axios from 'axios'

const AppContext = React.createContext()

export const useApp = () => {
    return React.useContext(AppContext)
}

const AppContextProvider = ({ children }) => {
    const navigate = useNavigate()
    /////////////////////////////////////////
    const [token, setToken] = useLocalStorage('token', '')
    const [authenticated, setAuthenticated] = React.useState(false)
    const [appLoading, setAppLoading] = React.useState(false)
    const [generalAlertOptions, setGeneralAlertOptions] = React.useState({
        open: false,
        message: '',
        severity: '',
        hideAfter: 5000
    })

    // CONTINUE WORKING FROM HERE
    const logout = React.useCallback(() => {
        setAppLoading(true)
        axios.post('/pacients/logout')
            .then(res => {
                if (res.status === 200) {
                    localStorage.removeItem('token')
                    setToken(false)
                    setAuthenticated(false)
                    setAppLoading(false)
                    navigate('/login')
                }
            }).catch(err => console.error(err))
    }, [setToken])

    const value = {
        authenticated,
        setAuthenticated,
        setAppLoading,
        appLoading,
        generalAlertOptions,
        setGeneralAlertOptions,
        logout,
        token,
        setToken
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider