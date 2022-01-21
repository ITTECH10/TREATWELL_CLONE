import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  const navigate = useNavigate()

  return <Box component="img" onClick={() => navigate('/categories')} src="/static/logo.png" sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }} />;
}
