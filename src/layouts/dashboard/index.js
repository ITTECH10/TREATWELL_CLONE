import { useLocation } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
//
import DashboardAppBar from './DashboardAppBar';
import DashboardSwipeableDrawer from './DashboardSwipeableDrawer';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
// const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  [theme.breakpoints.up('md')]: {
    paddingTop: APP_BAR_MOBILE
  }
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const { pathname } = useLocation()
  const { appLoading } = useApp()
  const dimensionsMatch = useMediaQuery('(min-width:600px)');

  return (
    <RootStyle>
      {pathname === '/impressum' || pathname === '/datenshutz' ? null : !dimensionsMatch && !appLoading ? <DashboardSwipeableDrawer /> : <DashboardAppBar />}
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
