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
import InfoIcon from '@mui/icons-material/Info';
import HomePage from './HomePage';
import ActivitiesPage from './ActivitiesPage';
import BeneficiariesPage from './BeneficiariesPage';
import VolunteersPage from './VolunteersPage';
import SettingsPage from './SettingsPage';

export default function Index() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [page, setPage] = useState(0);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavigation = (option) => {
    // Call relevant function based on the selected option
    switch (option) {
      case 'Home':
        return <HomePage />;
      case 'Activities':
        return <ActivitiesPage />;
      case 'Beneficiaries':
        return <BeneficiariesPage />;
      case 'Volunteers':
        return <VolunteersPage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        break;
    }
  };

  return (
    <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleMenu}
        edge="start"
        sx={{ mr: 2, ...(isExpanded && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>
      {page==0 ? <HomePage /> : page==1 ? <ActivitiesPage /> : page==2 ? <BeneficiariesPage /> : page==3 ? <VolunteersPage /> : <SettingsPage />}
      <Drawer
        variant="permanent"
        sx={{
          width: isExpanded ? 240 : 56,
          flexShrink: 0,
          ...(isExpanded && { transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms' }),
        }}
        open={isExpanded}
      >
        <IconButton onClick={toggleMenu}>
          <ChevronLeftIcon />
        </IconButton>
        <List>
          <ListItem button onClick={() => handleNavigation('Home')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Home" />}
          </ListItem>
          <ListItem button onClick={() => handleNavigation('About')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="About" />}
          </ListItem>
          <ListItem button onClick={() => handleNavigation('Activities')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Activities" />}
          </ListItem>
          <ListItem button onClick={() => handleNavigation('Beneficiaries')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Beneficiaries" />}
          </ListItem>
          <ListItem button onClick={() => handleNavigation('Volunteers')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Volunteers" />}
          </ListItem>
          <ListItem button onClick={() => handleNavigation('Settings')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Settings" />}
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}