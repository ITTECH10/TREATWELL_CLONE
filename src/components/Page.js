import { useApp } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef, useEffect } from 'react';
// material
import { Box } from '@mui/material';
import Alert from './_reusable/Alert'
import Loader from './Loader'

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }, ref) => {
  const { appLoading, logedInPacient, authenticated } = useApp()
  const navigate = useNavigate()
  const navigateToTherapeutId = localStorage.navigateToTherapeutId && localStorage.navigateToTherapeutId

  // useEffect(() => {
  //   if (authenticated && (logedInPacient && !logedInPacient.policiesAccepted)) {
  //     navigate('/datenshutz')
  //   }
  // }, [authenticated, logedInPacient, navigate])

  useEffect(() => {
    if (navigateToTherapeutId && logedInPacient && logedInPacient.role !== 'therapeut' && authenticated) {
      navigate(`/therapeuts/${navigateToTherapeutId}`)
      localStorage.removeItem('navigateToTherapeutId')
    }
  }, [])

  return (
    !appLoading ?
      <Box ref={ref} {...other}>
        <Alert />
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </Box> : <Loader />
  )
})

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
