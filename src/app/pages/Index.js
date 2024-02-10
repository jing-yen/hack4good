'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HomePage from './HomePage';
import ActivitiesPage from './ActivitiesPage';
import BeneficiariesPage from './BeneficiariesPage';
import VolunteersPage from './VolunteersPage';
import SettingsPage from './SettingsPage';
import { SupervisedUserCircle } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#c6ffbe',
      main: '#ffffff',
      dark: '#ba000d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c6ffbe',
      main: '#ffffff',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function Index() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [page, setPage] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const sideDrawerWidth = isExpanded ? '20%' : '5%';
  const mainContentWidth = `90%`;
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 600); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box sx={{ py: 0, px: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {isMobileView ? (
            <AppBar position="static" sx={{ backgroundColor: '#c6ffbe' }}>
              <Toolbar>
                <IconButton onClick={toggleMenu} edge="start" color="black" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                  Ground Up Initiative
                </Typography>
              </Toolbar>
            </AppBar>
          ) : <div></div>}
      {!isMobileView || isExpanded ? (<Drawer
        variant="permanent"
        sx={{
          width: sideDrawerWidth,
          flexShrink: 0,
          ...(isExpanded && { transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms' }),
          
        }}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.secondary.light, // Change background color of drawer to primary color
          }
        }}
        open={isExpanded}
      >
        <IconButton onClick={toggleMenu}>
          {isExpanded ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <List>
          <ListItem onClick={() => handlePageChange(0)} sx={{ bgcolor: page === 0 ? theme.palette.secondary.main : 'inherit' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <HomeIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Home" />}
          </ListItem>
          <ListItem onClick={() => handlePageChange(1)} sx={{ bgcolor: page === 1 ? theme.palette.secondary.main : 'inherit' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <EventIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Activities" />}
          </ListItem>
          <ListItem onClick={() => handlePageChange(2)} sx={{ bgcolor: page === 2 ? theme.palette.secondary.main : 'inherit' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <PeopleIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Beneficiaries" />}
          </ListItem>
          <ListItem onClick={() => handlePageChange(3)} sx={{ bgcolor: page === 3 ? theme.palette.secondary.main : 'inherit' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <SupervisedUserCircle />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Volunteers" />}
          </ListItem>
          <ListItem onClick={() => handlePageChange(4)} sx={{ bgcolor: page === 4 ? theme.palette.secondary.main : 'inherit' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <SettingsIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Settings" />}
          </ListItem>
        </List>
      </Drawer>): <div></div>}
      <Box
        sx={{
          py: 4,
          px: 4,
          flexGrow: 1,
          transform: isExpanded ? 'translateX(20%)' : 'translateX(5%)',
          transition: 'transform 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
          overflowX: 'visible',
          width: mainContentWidth,
          minHeight: '100vh', // Add this line to set minimum height to full viewport height
        }}
      >
        {page === 0 ? <HomePage /> : page === 1 ? <ActivitiesPage /> : page === 2 ? <BeneficiariesPage /> : page === 3 ? <VolunteersPage /> : <SettingsPage />}
      </Box>
    </Box>
  );
}