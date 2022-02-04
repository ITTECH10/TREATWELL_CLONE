import { useApp } from '../context/AppContext'
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// material
import { Box } from '@mui/material';
import Alert from './_reusable/Alert'
import Loader from './Loader'

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }, ref) => {
  const { appLoading } = useApp()
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
