'use client';
import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Chip } from '@mui/material';

export default function VolunteersPage() {
  const [selectedCard, setSelectedCard] = useState('totalVisitors');

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  const data1 = [
    { name: 'Week 1', Admin: 30, Workshops: 20, Professional: 15 },
    { name: 'Week 2', Admin: 25, Workshops: 15, Professional: 10 },
    { name: 'Week 3', Admin: 35, Workshops: 25, Professional: 20 },
    { name: 'Week 4', Admin: 40, Workshops: 30, Professional: 15 },
    { name: 'Week 5', Admin: 20, Workshops: 20, Professional: 10 },
  ];

  const data2 = [
    { name: 'Week 1', Active: 41.67, Inactive: 41.66, 'No Activity': 16.67 },
    { name: 'Week 2', Active: 50, Inactive: 25, 'No Activity': 25 },
    { name: 'Week 3', Active: 56, Inactive: 24, 'No Activity': 20 },
    { name: 'Week 4', Active: 40, Inactive: 36, 'No Activity': 24 },
    { name: 'Week 5', Active: 50.6, Inactive: 12.5, 'No Activity': 36.9 },
  ];

  const data3 = [
    { name: 'Week 1', 'Total Hours': 542 },
    { name: 'Week 2', 'Total Hours': 382 },
    { name: 'Week 3', 'Total Hours': 412 },
    { name: 'Week 4', 'Total Hours': 564 },
    { name: 'Week 5', 'Total Hours': 632 },
  ];

  const volunteers = [
    { 
      name: 'Rajesh Kumar', 
      registerDate: '15/10/2023', 
      phoneNumber: '1234567890', 
      latestVolunteering: '12/10/2023', 
      age: 25, 
      availability: 'Weekends', 
      skills: ['woodworking', 'farming', 'recycling', 'composting', 'gardening'], 
      hoursOfVolunteering: 10 
    },
    { 
      name: 'Siti Aishah', 
      registerDate: '12/09/2022', 
      phoneNumber: '9876543210', 
      latestVolunteering: '10/09/2023', 
      age: 30, 
      availability: 'Weekdays', 
      skills: ['farming', 'recycling'], 
      hoursOfVolunteering: 5 
    },
    { 
      name: 'Michael Tan', 
      registerDate: '18/08/2021', 
      phoneNumber: '4567890123', 
      latestVolunteering: '08/10/2023', 
      age: 40, 
      availability: 'Weekends', 
      skills: ['gardening'], 
      hoursOfVolunteering: 8 
    },
    { 
      name: 'Priya Sharma', 
      registerDate: '20/07/2020', 
      phoneNumber: '3210987654', 
      latestVolunteering: '05/10/2023', 
      age: 35, 
      availability: 'Weekdays', 
      skills: ['woodworking', 'farming', 'gardening'], 
      hoursOfVolunteering: 12 
    },
    { 
      name: 'David Chen', 
      registerDate: '14/06/2019', 
      phoneNumber: '8901234567', 
      latestVolunteering: '02/10/2023', 
      age: 28, 
      availability: 'Weekends', 
      skills: ['farming', 'recycling'], 
      hoursOfVolunteering: 6 
    },
    // Add 20 more entries here
    { 
      name: 'Meera Patel', 
      registerDate: '22/05/2023', 
      phoneNumber: '2345678901', 
      latestVolunteering: '01/10/2023', 
      age: 45, 
      availability: 'Weekdays', 
      skills: ['gardening', 'composting'], 
      hoursOfVolunteering: 9 
    },
    { 
      name: 'Kevin Wong', 
      registerDate: '19/04/2022', 
      phoneNumber: '7654321098', 
      latestVolunteering: '30/09/2023', 
      age: 32, 
      availability: 'Weekends', 
      skills: ['woodworking', 'gardening'], 
      hoursOfVolunteering: 7 
    },
    { 
      name: 'Lina Tan', 
      registerDate: '16/03/2021', 
      phoneNumber: '0123456789', 
      latestVolunteering: '29/09/2023', 
      age: 27, 
      availability: 'Weekdays', 
      skills: ['farming', 'recycling', 'composting'], 
      hoursOfVolunteering: 11 
    },
    { 
      name: 'Daniel Lim', 
      registerDate: '21/02/2020', 
      phoneNumber: '9876543210', 
      latestVolunteering: '28/09/2023', 
      age: 38, 
      availability: 'Weekends', 
      skills: ['woodworking', 'farming'], 
      hoursOfVolunteering: 8 
    },
    { 
      name: 'Jasmine Ng', 
      registerDate: '17/01/2019', 
      phoneNumber: '1234567890', 
      latestVolunteering: '27/09/2023', 
      age: 29, 
      availability: 'Weekdays', 
      skills: ['gardening', 'composting'], 
      hoursOfVolunteering: 10 
    },
    { 
      name: 'William Tan', 
      registerDate: '23/12/2023', 
      phoneNumber: '2345678901', 
      latestVolunteering: '26/09/2023', 
      age: 33, 
      availability: 'Weekends', 
      skills: ['farming', 'recycling'], 
      hoursOfVolunteering: 6 
    },
    { 
      name: 'Aishwarya Lim', 
      registerDate: '25/11/2022', 
      phoneNumber: '7654321098', 
      latestVolunteering: '25/09/2023', 
      age: 31, 
      availability: 'Weekdays', 
      skills: ['woodworking', 'gardening'], 
      hoursOfVolunteering: 9 
    },
    { 
      name: 'James Chen', 
      registerDate: '24/10/2021', 
      phoneNumber: '0123456789', 
      latestVolunteering: '24/09/2023', 
      age: 26, 
      availability: 'Weekends', 
      skills: ['farming', 'composting'], 
      hoursOfVolunteering: 7 
    },
    { 
      name: 'Priya Kumar', 
      registerDate: '26/09/2020', 
      phoneNumber: '9876543210', 
      latestVolunteering: '23/09/2023', 
      age: 37, 
      availability: 'Weekdays', 
      skills: ['recycling', 'composting'], 
      hoursOfVolunteering: 11 
    },
    { 
      name: 'Benjamin Ng', 
      registerDate: '29/08/2019', 
      phoneNumber: '1234567890', 
      latestVolunteering: '22/09/2023', 
      age: 34, 
      availability: 'Weekends', 
      skills: ['woodworking', 'farming'], 
      hoursOfVolunteering: 8 
    },
    { 
      name: 'Mira Lim', 
      registerDate: '28/07/2023', 
      phoneNumber: '2345678901', 
      latestVolunteering: '21/09/2023', 
      age: 30, 
      availability: 'Weekdays', 
      skills: ['gardening', 'composting'], 
      hoursOfVolunteering: 10 
    },
    { 
      name: 'Ethan Chen', 
      registerDate: '27/06/2022', 
      phoneNumber: '7654321098', 
      latestVolunteering: '20/09/2023', 
      age: 39, 
      availability: 'Weekends', 
      skills: ['woodworking', 'farming'], 
      hoursOfVolunteering: 7 
    },
    { 
      name: 'Charlotte Ng', 
      registerDate: '30/05/2021', 
      phoneNumber: '0123456789', 
      latestVolunteering: '19/09/2023', 
      age: 28, 
      availability: 'Weekdays', 
      skills: ['recycling', 'composting'], 
      hoursOfVolunteering: 11 
    },
    { 
      name: 'Alexander Tan', 
      registerDate: '31/04/2020', 
      phoneNumber: '9876543210', 
      latestVolunteering: '18/09/2023', 
      age: 36, 
      availability: 'Weekends', 
      skills: ['woodworking', 'gardening'], 
      hoursOfVolunteering: 8 
    },
    { 
      name: 'Sakura Lim', 
      registerDate: '01/03/2019', 
      phoneNumber: '1234567890', 
      latestVolunteering: '17/09/2023', 
      age: 32, 
      availability: 'Weekdays', 
      skills: ['farming', 'composting'], 
      hoursOfVolunteering: 10 
    },
    { 
      name: 'Henry Chen', 
      registerDate: '02/02/2023', 
      phoneNumber: '2345678901', 
      latestVolunteering: '16/09/2023', 
      age: 27, 
      availability: 'Weekends', 
      skills: ['woodworking', 'farming'], 
      hoursOfVolunteering: 7 
    },
  ];

  const [sortColumn, setSortColumn] = useState('hoursOfVolunteering');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedVolunteers = volunteers.sort((a, b) => {
    if (sortColumn) {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];
      if (sortColumn === 'registerDate' || sortColumn === 'latestVolunteering') {
        const dateA = new Date(valueA.split('/').reverse().join('/'));
        const dateB = new Date(valueB.split('/').reverse().join('/'));
        if (sortDirection === 'asc') {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      } else if (sortColumn === 'skills') {
        if (sortDirection === 'asc') {
          return a.skills.length - b.skills.length;
        } else {
          return b.skills.length - a.skills.length;
        }
      } else {
        if (sortDirection === 'asc') {
          return valueA > valueB ? 1 : -1;
        } else {
          return valueA < valueB ? 1 : -1;
        }
      }
    }
    return 0;
  });

  return (
    <div>
      <h1>Volunteers Page</h1>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card
                onClick={() => handleCardClick('totalVisitors')}
                style={{ backgroundColor: selectedCard === 'totalVisitors' ? '#dcffd8' : 'white' }}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    Total Volunteers: 320
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    List of volunteers
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                onClick={() => handleCardClick('satisfaction')}
                style={{ backgroundColor: selectedCard === 'satisfaction' ? '#dcffd8' : 'white' }}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    Volunteer Activeness: 50.6%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Activeness in events and workshops
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                onClick={() => handleCardClick('newSurveys')}
                style={{ backgroundColor: selectedCard === 'newSurveys' ? '#dcffd8' : 'white' }}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    Total Involvement: 2643 hours
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Involvement of all volunteers
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={7}>
          {selectedCard === 'totalVisitors' && (
            <BarChart width={500} height={300} data={data1}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Admin" stackId="stack" fill="#888888" />
              <Bar dataKey="Workshops" stackId="stack" fill="#82aa9d" />
              <Bar dataKey="Professional" stackId="stack" fill="#82ca9d" />
              <text x={280} y={20} textAnchor="middle" dominantBaseline="middle" fontSize={16}>
                Total Volunteers
              </text>
            </BarChart>
          )}
          {selectedCard === 'satisfaction' && (
            <BarChart width={500} height={300} data={data2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Active" stackId="stack" fill="#82ca9d" />
            <Bar dataKey="Inactive" stackId="stack" fill="#888888" />
            <Bar dataKey="No Activity" stackId="stack" fill="#d88488" />
            <text x={280} y={20} textAnchor="middle" dominantBaseline="middle" fontSize={16}>
              Volunteer Activeness
            </text>
          </BarChart>
          )}
          {selectedCard === 'newSurveys' && (
            <BarChart width={500} height={300} data={data3}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Total Hours" stackId="stack" fill="#82ca9d" />
            <text x={280} y={20} textAnchor="middle" dominantBaseline="middle" fontSize={16}>
              Total hour of involvements
            </text>
          </BarChart>
          )}
        </Grid>
            <br/>
              <Grid item xs={12} sm={12}>
                <h2>Volunteers List</h2>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell onClick={() => handleSort('name')}>
                          <span style={{ cursor: 'pointer' }}>Name</span>
                          {sortColumn === 'name' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('registerDate')}>
                          <span style={{ cursor: 'pointer' }}>Date registered</span>
                          {sortColumn === 'registerDate' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('latestVolunteering')}>
                          <span style={{ cursor: 'pointer' }}>Latest volunteering</span>
                          {sortColumn === 'latestVolunteering' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('age')}>
                          <span style={{ cursor: 'pointer' }}>Age</span>
                          {sortColumn === 'age' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('skills')}>
                          <span style={{ cursor: 'pointer' }}>Skills</span>
                          {sortColumn === 'skills' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('phoneNumber')}>
                          <span style={{ cursor: 'pointer' }}>Phone Number</span>
                          {sortColumn === 'phoneNumber' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('availability')}>
                          <span style={{ cursor: 'pointer' }}>Availability</span>
                          {sortColumn === 'availability' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('hoursOfVolunteering')}>
                          <span style={{ cursor: 'pointer' }}>Hours of Volunteering</span>
                          {sortColumn === 'hoursOfVolunteering' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sortedVolunteers.map((volunteer, index) => (
                        <TableRow key={index}>
                          <TableCell>{volunteer.name}</TableCell>
                          <TableCell>{volunteer.registerDate}</TableCell>
                          <TableCell>{volunteer.latestVolunteering}</TableCell>
                          <TableCell>{volunteer.age}</TableCell>
                          <TableCell>
                            {volunteer.skills.map((skill, index) => (
                              <Chip key={index} label={skill} />
                            ))}
                          </TableCell>
                          <TableCell>{volunteer.phoneNumber}</TableCell>
                          <TableCell>{volunteer.availability}</TableCell>
                          <TableCell style={{ fontWeight: volunteer.hoursOfVolunteering > 10 ? 'bold' : 'normal', color: volunteer.hoursOfVolunteering > 10 ? 'bronze' : 'inherit' }}>
                            {volunteer.hoursOfVolunteering} {volunteer.hoursOfVolunteering > 10 ? '🥇' : ''}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
        </Grid>
      <br />
      
    </div>
  );
}
