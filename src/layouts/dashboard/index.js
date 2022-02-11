import { useLocation } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
//
// import DashboardNavbar from './DashboardNavbar';
// import DashboardSidebar from './DashboardSidebar';
import DashboardAppBar from './DashboardAppBar';
import DashboardSwipeableDrawer from './DashboardSwipeableDrawer';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
// const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  // display: 'flex',
  // minHeight: 'calc(100% - 0px)',
  overflow: 'hidden',
  // marginTop: 64
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE,
  // paddingTop: APP_BAR_MOBILE + 24,
  // paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    // paddingTop: APP_BAR_MOBILE,
    // paddingTop: APP_BAR_DESKTOP + 24,
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const location = useLocation()
  const { appLoading } = useApp()
  const match = location.pathname !== '/register' && location.pathname !== '/login' && location.pathname !== '/authenticate/therapeuts'
  const dimensionsMatch = useMediaQuery('(min-width:600px)');

  return (
    <RootStyle>
      {!dimensionsMatch && !appLoading ? <DashboardSwipeableDrawer /> : <DashboardAppBar />}
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
