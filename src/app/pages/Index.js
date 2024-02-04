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

export default function Index() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [page, setPage] = useState(0);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const sideDrawerWidth = isExpanded ? '20%' : '5%';
  const mainContentWidth = `90%`;

  return (
    <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: sideDrawerWidth,
          flexShrink: 0,
          ...(isExpanded && { transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms' }),
        }}
        open={isExpanded}
      >
        <IconButton onClick={toggleMenu}>
          {isExpanded ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <List>
          <ListItem onClick={() => handlePageChange(0)} sx={{ backgroundColor: page === 0 ? 'lightblue' : 'inherit' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <HomeIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Home" />}
          </ListItem>
          <ListItem onClick={() => handlePageChange(1)} sx={{ backgroundColor: page === 1 ? 'lightblue' : 'inherit' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <EventIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Activities" />}
          </ListItem>
          <ListItem onClick={() => handlePageChange(2)} sx={{ backgroundColor: page === 2 ? 'lightblue' : 'inherit' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <PeopleIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Beneficiaries" />}
          </ListItem>
          <ListItem onClick={() => handlePageChange(3)} sx={{ backgroundColor: page === 3 ? 'lightblue' : 'inherit' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <SupervisedUserCircle />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Volunteers" />}
          </ListItem>
          <ListItem onClick={() => handlePageChange(4)} sx={{ backgroundColor: page === 4 ? 'lightblue' : 'inherit' }}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <SettingsIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Settings" />}
          </ListItem>
        </List>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          transform: isExpanded ? 'translateX(20%)' : 'translateX(5%)',
          transition: 'transform 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
          overflowX: 'visible',
          width: mainContentWidth,
        }}
      >
        {page === 0 ? <HomePage /> : page === 1 ? <ActivitiesPage /> : page === 2 ? <BeneficiariesPage /> : page === 3 ? <VolunteersPage /> : <SettingsPage />}
      </Box>
    </Box>
  );
}