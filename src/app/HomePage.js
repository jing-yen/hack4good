'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
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

export default function HomePage() {
  const [projects, setProjects] = useState([
    {
      title: "Clean Water Initiative",
      description: "Help us bring clean water to communities that lack access to it."
    },
    {
      title: "Education for All",
      description: "Support our mission to provide quality education to underprivileged children."
    },
    {
      title: "Save the Rainforest",
      description: "Join us in our efforts to protect the rainforests and the biodiversity they support."
    },
    // Add more projects as needed
  ]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const enrollInActivity = (activity) => {
    // Logic to enroll the volunteer in the selected activity
    console.log(`Enrolling in ${activity.title}`);
  };

  const requestCertificate = (activity) => {
    // Logic to request a certificate for the completed activity
    console.log(`Requesting certificate for ${activity.title}`);
  };

  return (
    <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h1" variant="h5">
        Welcome to Big At Heart!
      </Typography>
      <Typography component="h2" variant="subtitle1">
        Find a project you care about and make a difference today.
      </Typography>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleMenu}
        edge="start"
        sx={{ mr: 2, ...(isExpanded && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>
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
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Home" />}
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="About" />}
          </ListItem>
        </List>
      </Drawer>
      {projects.map((project) => (
        <Card sx={{ minWidth: 275, marginTop: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2">
              {project.description}
            </Typography>
          </CardContent>
          <Button size="small" onClick={() => enrollInActivity(project)}>Enroll</Button>
          <Button size="small" onClick={() => requestCertificate(project)}>Request Certificate</Button>
        </Card>
      ))}
    </Box>
  );
}