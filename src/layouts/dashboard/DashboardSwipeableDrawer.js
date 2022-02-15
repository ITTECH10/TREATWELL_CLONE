import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
// mui
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SpaIcon from '@mui/icons-material/Spa';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ContactMailIcon from '@mui/icons-material/ContactMail';
// rest
import { hasPermission, actions } from '../../utils/DataProviders/ROLES/permissions'

export default function DashboardSwipeableDrawer() {
    const theme = useTheme();
    const navigate = useNavigate()
    const { authenticated, logout, logedInPacient } = useApp()
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    // check if currently loged in user is a therapeut
    const isTherapeut = hasPermission(logedInPacient, actions.IS_THERAPEUT)

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const menuItems = !authenticated ? (
        <List>
            <ListItem button onClick={() => navigate('/')}>
                <ListItemIcon>
                    <HomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => navigate('/become-partner')}>
                <ListItemIcon>
                    <ContactMailIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Partner Werden" />
            </ListItem>
            <ListItem button onClick={() => navigate('/therapeuts/near')}>
                <ListItemIcon>
                    <LocationOnIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Standorte" />
            </ListItem>
            <ListItem button onClick={() => navigate('/therapies/categories')}>
                <ListItemIcon>
                    <SpaIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Therapien" />
            </ListItem>
            <ListItem button onClick={() => navigate('/login')}>
                <ListItemIcon>
                    <LoginIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Login" />
            </ListItem>
            <ListItem button onClick={() => navigate('/register')}>
                <ListItemIcon>
                    <PersonAddIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Register" />
            </ListItem>
        </List>
    ) : isTherapeut ? (
        <List>
            <ListItem button onClick={() => navigate('/')}>
                <ListItemIcon>
                    <HomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => navigate('/become-partner')}>
                <ListItemIcon>
                    <ContactMailIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Partner Werden" />
            </ListItem>
            <ListItem button onClick={() => logout()}>
                <ListItemIcon>
                    <ExitToAppIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Log out" />
            </ListItem>
        </List>
    ) : (
        <List>
            <ListItem button onClick={() => navigate('/')}>
                <ListItemIcon>
                    <HomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => navigate('/therapies/categories')}>
                <ListItemIcon>
                    <SpaIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Therapien" />
            </ListItem>
            <ListItem button onClick={() => navigate('/profile/appointments')}>
                <ListItemIcon>
                    <ListAltIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Meine Therapien" />
            </ListItem>
            <ListItem button onClick={() => navigate('/become-partner')}>
                <ListItemIcon>
                    <ContactMailIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Partner Werden" />
            </ListItem>
            <ListItem button onClick={() => navigate('/therapeuts/near')}>
                <ListItemIcon>
                    <LocationOnIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Standorte" />
            </ListItem>
            <ListItem button onClick={() => logout()}>
                <ListItemIcon>
                    <ExitToAppIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Log out" />
            </ListItem>
        </List>
    )

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {menuItems}
        </Box>
    );

    return (
        <Box sx={{ position: 'fixed', top: 0, right: 0, zIndex: 1100, color: '#000' }}>
            <React.Fragment key={'right'}>
                <Button onClick={toggleDrawer('right', true)} size="large" color="inherit" endIcon={<MenuIcon />} />
                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    {list('right')}
                </SwipeableDrawer>
            </React.Fragment>
        </Box >
    );
}
