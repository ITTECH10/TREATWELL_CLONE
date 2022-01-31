
import React, { useCallback, useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from './../hooks/useLocalStorage'
import axios from 'axios'

const AppContext = createContext()

export const useApp = () => {
    return useContext(AppContext)
}

const AppContextProvider = ({ children }) => {
    const navigate = useNavigate()
    /////////////////////////////////////////
    const [token, setToken] = useLocalStorage('token', '')
    const [authenticated, setAuthenticated] = useState(false)
    const [logedInPacient, setLogedInPacient] = useState()
    const [appLoading, setAppLoading] = useState(false)
    const [tempTherapeuts, setTempTherapeuts] = useState([])
    const [therapeuts, setTherapeuts] = useState([])
    const [therapies, setTherapies] = useState([])
    const [myTherapies, setMyTherapies] = useState([])
    const [selectedTherapeut, setSelectedTherapeut] = useState({})
    const [generalAlertOptions, setGeneralAlertOptions] = useState({
        open: false,
        message: '',
        severity: '',
        hideAfter: 5000
    })

    const getAvailableTherapeuts = useCallback(() => {
        axios.get('/therapeuts').then(res => {
            if (res.status === 200) {
                setTherapeuts(res.data.therapeuts)
            }
        }).catch(err => console.log(err))
    }, [])

    const getCurrentPacient = useCallback(() => {
        axios.get('/pacients/me')
            .then(res => {
                if (res.status === 200) {
                    setLogedInPacient(res.data.pacient)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // CONTINUE WORKING FROM HERE
    const logout = React.useCallback(() => {
        setAppLoading(true)
        // FIND BETTER SOLUTION
        setLogedInPacient()
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
        setToken,
        getCurrentPacient,
        logedInPacient,
        tempTherapeuts,
        setTempTherapeuts,
        therapeuts,
        setTherapeuts,
        therapies,
        setTherapies,
        myTherapies,
        setMyTherapies,
        selectedTherapeut,
        setSelectedTherapeut,
        getAvailableTherapeuts
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider