import { useEffect } from 'react';
import { useApp } from './context/AppContext'
import jwtDecode from 'jwt-decode'

// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
// import Loader from './components/Loader'
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  const { setAuthenticated, token, logout, getCurrentPacient, getAvailableTherapeuts } = useApp()

  const urlProtocol = window.location.href.split(':')[0]

  useEffect(() => {
    if (urlProtocol === 'http') {
      window.location.replace('https://gesundo24.de')
    }
  }, [])

  // ONLY RUN IF WE ARE AUTHENTICATED, AND WE CAN ONLY
  // BECOME AUTHENTICATED WITH A VALID TOKEN
  // SO THIS IS THE BEST APPROACH
  useEffect(() => {
    getAvailableTherapeuts()

    if (token) {
      // DO STUFF
      getCurrentPacient()
    }

    if (token) {
      const decoded = jwtDecode(token)

      if (new Date(decoded.exp * 1000) < new Date()) {
        // !EXPIRED
        logout()
      } else {
        setAuthenticated(true)
      }
    }
  }, [
    token,
    setAuthenticated,
    logout,
    getCurrentPacient,
    getAvailableTherapeuts
  ])

  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}
