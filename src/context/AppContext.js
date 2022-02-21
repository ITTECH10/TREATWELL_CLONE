
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
    const [selectedTherapeut, setSelectedTherapeut] = useState()
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

    const getOneTherapeut = useCallback((id) => {
        setAppLoading(true)
        axios.get(`/therapeuts/${id}`)
            .then(res => {
                if (res.status === 200) {
                    setAppLoading(false)
                    setSelectedTherapeut(res.data.therapeut)
                    navigate(`/therapeuts/${id}`)
                }
            }).catch(err => {
                setAppLoading(false)
                console.log(err)
            })
    }, [])

    const getCurrentPacient = useCallback(() => {
        setAppLoading(true)
        axios.get('/users/me')
            .then(res => {
                if (res.status === 200) {
                    setAppLoading(false)
                    // if (!res.data.user.policiesAccepted) {
                    //     navigate('/privacy-policy')
                    // }
                    setLogedInPacient(res.data.user)
                }
            })
            .catch(err => {
                setAppLoading(false)
                console.log(err)
            })
    }, [])

    // CONTINUE WORKING FROM HERE
    const logout = React.useCallback(() => {
        setAppLoading(true)
        // FIND BETTER SOLUTION // THIS IS A QUICK FIX
        // setLogedInPacient()
        // setSelectedTherapeut()
        axios.post('/users/logout')
            .then(res => {
                if (res.status === 200) {
                    localStorage.removeItem('token')
                    setToken(false)
                    setAuthenticated(false)
                    setAppLoading(false)
                    navigate('/login')
                    window.location.reload()
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
        setLogedInPacient,
        tempTherapeuts,
        setTempTherapeuts,
        therapeuts,
        setTherapeuts,
        therapies,
        setTherapies,
        selectedTherapeut,
        setSelectedTherapeut,
        getOneTherapeut,
        getAvailableTherapeuts
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider