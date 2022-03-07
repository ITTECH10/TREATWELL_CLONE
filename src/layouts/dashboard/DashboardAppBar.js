import * as React from 'react';
import { useApp } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
//////////////////////////////////////
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// rest
import { hasPermission, actions } from '../../utils/DataProviders/ROLES/permissions'

import Logo from '../../components/Logo'

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    color: '#fff',
    position: 'fixed',
    backgroundColor: theme.palette.background.paper
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between'
}));

export default function ButtonAppBar() {
    const navigate = useNavigate()
    const { authenticated, logout, logedInPacient, appLoading } = useApp()

    const isTherapeut = hasPermission(logedInPacient, actions.IS_THERAPEUT)

    const menuItems = !authenticated ? (
        <Box>
            <Button color="primary" onClick={() => navigate('/home')}>Home</Button>
            <Button color="primary" onClick={() => navigate('/therapeuts/near')}>Standorte</Button>
            <Button color="primary" onClick={() => navigate('/become-partner')}>Partner Werden</Button>
            <Button color="primary" onClick={() => navigate('/therapies/categories')}>Therapien</Button>
            <Button color="primary" onClick={() => navigate('/login')}>Login</Button>
            <Button color="primary" onClick={() => navigate('/register')}>Registrieren</Button>
        </Box>
    ) : isTherapeut ? (
        <Box>
            <Button color="primary" onClick={() => navigate('/home')}>Home</Button>
            <Button color="primary" onClick={() => navigate('/become-partner')}>Partner Werden</Button>
            <Button color="primary" onClick={() => logout()}>Log out</Button>
        </Box>
    ) : (
        <Box>
            <Button color="primary" onClick={() => navigate('/home')}>Home</Button>
            <Button color="primary" onClick={() => navigate('/become-partner')}>Partner Werden</Button>
            <Button color="primary" onClick={() => navigate('/therapies/categories')}>Therapien</Button>
            <Button color="primary" onClick={() => navigate('/profile/appointments')}>Meine Therapien</Button>
            <Button color="primary" onClick={() => navigate('/therapeuts/near')}>Standorte</Button>
            <Button color="primary" onClick={() => logout()}>Abmelden</Button>
        </Box>
    )

    return (
        !appLoading &&
        <RootStyle>
            <ToolbarStyle>
                <Logo />
                {menuItems}
            </ToolbarStyle>
        </RootStyle>
    );
}
