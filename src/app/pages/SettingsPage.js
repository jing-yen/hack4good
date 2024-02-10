import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

export default function SettingsPage() {
  return (
    <div>
      <h1>Settings Page</h1>
      <form style={{ width: '100%', marginTop: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={8} style={{ marginBottom: '1rem' }}>
            <Typography variant="h4">Reset Password</Typography>
            <Typography variant="body1">Reset your account password.</Typography>
          </Grid>
          <Grid item xs={4} style={{ marginBottom: '1rem' }}>
            <Button variant="contained" color="primary" fullWidth style={{ width: '80%', height: '3rem' }}>
              Reset Password
            </Button>
          </Grid>

          <Grid item xs={8} style={{ marginBottom: '1rem' }}>
            <Typography variant="h4">Add Other Admins</Typography>
            <Typography variant="body1">Add additional administrators to your account.</Typography>
          </Grid>
          <Grid item xs={4} style={{ marginBottom: '1rem' }}>
            <Button variant="contained" color="primary" fullWidth style={{ width: '80%', height: '3rem' }}>
              Add Admins
            </Button>
          </Grid>

          <Grid item xs={8} style={{ marginBottom: '1rem' }}>
            <Typography variant="h4">Manage Volunteers</Typography>
            <Typography variant="body1">Manage volunteers and their roles.</Typography>
          </Grid>
          <Grid item xs={4} style={{ marginBottom: '1rem' }}>
            <Button variant="contained" color="primary" fullWidth style={{ width: '80%', height: '3rem' }}>
              Manage Volunteers
            </Button>
          </Grid>

          <Grid item xs={8} style={{ marginBottom: '1rem' }}>
            <Typography variant="h4">Documentation</Typography>
            <Typography variant="body1">Access and manage documentation.</Typography>
          </Grid>
          <Grid item xs={4} style={{ marginBottom: '1rem' }}>
            <Button variant="contained" color="primary" fullWidth style={{ width: '80%', height: '3rem' }}>
              Documentation
            </Button>
          </Grid>

          {/* Export Data */}
          <Grid item xs={8} style={{ marginBottom: '1rem' }}>
            <Typography variant="h4">Export Data</Typography>
            <Typography variant="body1">Export your data.</Typography>
          </Grid>
          <Grid item xs={4} style={{ marginBottom: '1rem' }}>
            <Button variant="contained" color="primary" fullWidth style={{ width: '80%', height: '3rem' }}>
              Export Data
            </Button>
          </Grid>

          {/* Sign Out */}
          <Grid item xs={8} style={{ marginBottom: '1rem' }}>
            <Typography variant="h4">Sign Out</Typography>
            <Typography variant="body1">Sign out of your account.</Typography>
          </Grid>
          <Grid item xs={4} style={{ marginBottom: '1rem' }}>
            <Button variant="contained" color="secondary" fullWidth style={{ width: '80%', height: '3rem' }}>
              Sign Out
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
