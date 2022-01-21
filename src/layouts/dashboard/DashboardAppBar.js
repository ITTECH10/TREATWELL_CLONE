import * as React from 'react';
import { useApp } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
//////////////////////////////////////
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Logo from '../../components/Logo'

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    color: '#fff',
    // backgroundColor: 'transparent',
    position: 'fixed',
    // [theme.breakpoints.up('lg')]: {
    //     width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
    // }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    // minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
        // minHeight: APPBAR_DESKTOP,
        // padding: theme.spacing(0, 5)
    }
}));

export default function ButtonAppBar() {
    const navigate = useNavigate()
    const { authenticated, logout } = useApp()

    const menuItems = !authenticated ? (
        <Box>
            <Button color="inherit" onClick={() => navigate('/categories')}>Home</Button>
            <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
            <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
        </Box>
    ) : (
        <Box>
            <Button color="inherit" onClick={() => navigate('/categories')}>Home</Button>
            <Button color="inherit" onClick={() => logout()}>Log out</Button>
        </Box>
    )

    return (
        <RootStyle>
            <ToolbarStyle>
                <Logo />
                {menuItems}
            </ToolbarStyle>
        </RootStyle>
    );
}
