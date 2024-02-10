'use client';
import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Chip } from '@mui/material';

export default function BeneficiariesPage() {
  const [selectedCard, setSelectedCard] = useState('totalVisitors');

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  const data1 = [
    { name: 'Week 1', Visiting: 100, '1 Activity': 70, '2+ Activities': 70 },
    { name: 'Week 2', Visiting: 80, '1 Activity': 50, '2+ Activities': 60 },
    { name: 'Week 3', Visiting: 120, '1 Activity': 80, '2+ Activities': 60 },
    { name: 'Week 4', Visiting: 140, '1 Activity': 90, '2+ Activities': 50 },
    { name: 'Week 5', Visiting: 110, '1 Activity': 110, '2+ Activities': 90 },
  ];

  const data2 = [
    { name: 'Week 1', Positive: 55, Neutral: 25, Negative: 20 },
    { name: 'Week 2', Positive: 65, Neutral: 25, Negative: 10 },
    { name: 'Week 3', Positive: 60, Neutral: 25, Negative: 15 },
    { name: 'Week 4', Positive: 45, Neutral: 35, Negative: 20 },
    { name: 'Week 5', Positive: 55.2, Neutral: 24.8, Negative: 20 },
  ];

  const data3 = [
    { name: 'Week 1', Positive: 10, Neutral: 5, Negative: 3 },
    { name: 'Week 2', Positive: 20, Neutral: 8, Negative: 4 },
    { name: 'Week 3', Positive: 30, Neutral: 12, Negative: 6 },
    { name: 'Week 4', Positive: 25, Neutral: 15, Negative: 3 },
    { name: 'Week 5', Positive: 35, Neutral: 10, Negative: 8 },
  ];

  const beneficiaries = [
    { name: 'Rajesh Kumar', lastSurvey: '15/10/2023', activitiesVisited: ['woodworking', 'farming', 'recycling', 'composting', 'gardening'], age: 25, isPatron: true, timesVisited: 5, rating: 4 },
    { name: 'Siti Aishah', lastSurvey: '12/09/2022', activitiesVisited: ['farming', 'recycling'], age: 30, isPatron: false, timesVisited: 2, rating: 3 },
    { name: 'Michael Tan', lastSurvey: '18/08/2021', activitiesVisited: ['gardening'], age: 40, isPatron: true, timesVisited: 1, rating: 5 },
    { name: 'Priya Sharma', lastSurvey: '20/07/2020', activitiesVisited: ['woodworking', 'farming', 'gardening'], age: 35, isPatron: false, timesVisited: 3, rating: 4 },
    { name: 'David Chen', lastSurvey: '14/06/2019', activitiesVisited: ['farming', 'recycling'], age: 28, isPatron: true, timesVisited: 2, rating: 5 },
    // Add 20 more entries here
    { name: 'Meera Patel', lastSurvey: '22/05/2023', activitiesVisited: ['gardening', 'composting'], age: 45, isPatron: true, timesVisited: 4, rating: 4 },
    { name: 'Kevin Wong', lastSurvey: '19/04/2022', activitiesVisited: ['woodworking', 'gardening'], age: 32, isPatron: false, timesVisited: 2, rating: 3 },
    { name: 'Lina Tan', lastSurvey: '16/03/2021', activitiesVisited: ['farming', 'recycling', 'composting'], age: 27, isPatron: true, timesVisited: 3, rating: 5 },
    { name: 'Daniel Lim', lastSurvey: '21/02/2020', activitiesVisited: ['woodworking', 'farming'], age: 38, isPatron: false, timesVisited: 2, rating: 4 },
    { name: 'Jasmine Ng', lastSurvey: '17/01/2019', activitiesVisited: ['gardening', 'composting'], age: 29, isPatron: true, timesVisited: 1, rating: 3 },
    { name: 'William Tan', lastSurvey: '23/12/2023', activitiesVisited: ['farming', 'recycling'], age: 33, isPatron: false, timesVisited: 2, rating: 5 },
    { name: 'Aishwarya Lim', lastSurvey: '25/11/2022', activitiesVisited: ['woodworking', 'gardening'], age: 31, isPatron: true, timesVisited: 3, rating: 4 },
    { name: 'James Chen', lastSurvey: '24/10/2021', activitiesVisited: ['farming', 'composting'], age: 26, isPatron: false, timesVisited: 2, rating: 5 },
    { name: 'Priya Kumar', lastSurvey: '26/09/2020', activitiesVisited: ['recycling', 'composting'], age: 37, isPatron: true, timesVisited: 1, rating: 4 },
    { name: 'Benjamin Ng', lastSurvey: '29/08/2019', activitiesVisited: ['woodworking', 'farming'], age: 34, isPatron: false, timesVisited: 2, rating: 3 },
    { name: 'Mira Lim', lastSurvey: '28/07/2023', activitiesVisited: ['gardening', 'composting'], age: 30, isPatron: true, timesVisited: 3, rating: 5 },
    { name: 'Ethan Chen', lastSurvey: '27/06/2022', activitiesVisited: ['woodworking', 'farming'], age: 39, isPatron: false, timesVisited: 2, rating: 4 },
    { name: 'Charlotte Ng', lastSurvey: '30/05/2021', activitiesVisited: ['recycling', 'composting'], age: 28, isPatron: true, timesVisited: 1, rating: 3 },
    { name: 'Alexander Tan', lastSurvey: '31/04/2020', activitiesVisited: ['woodworking', 'gardening'], age: 36, isPatron: false, timesVisited: 2, rating: 5 },
    { name: 'Sakura Lim', lastSurvey: '01/03/2019', activitiesVisited: ['farming', 'composting'], age: 32, isPatron: true, timesVisited: 3, rating: 4 },
    { name: 'Henry Chen', lastSurvey: '02/02/2023', activitiesVisited: ['woodworking', 'farming'], age: 27, isPatron: false, timesVisited: 2, rating: 5 },
  ];

  const [sortColumn, setSortColumn] = useState('lastSurvey');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedBeneficiaries = beneficiaries.sort((a, b) => {
    if (sortColumn) {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];
      if (sortColumn === 'lastSurvey') {
        const dateA = new Date(valueA.split('/').reverse().join('/'));
        const dateB = new Date(valueB.split('/').reverse().join('/'));
        if (sortDirection === 'asc') {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      } else if (sortColumn === 'activitiesVisited') {
        if (sortDirection === 'asc') {
          return a.activitiesVisited.length - b.activitiesVisited.length;
        } else {
          return b.activitiesVisited.length - a.activitiesVisited.length;
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
      <h1>Beneficiaries Page</h1>
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
                    Total Visitors: 1270
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    List of beneficiaries
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
                    Satisfaction: +10.2%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Compared to previous month
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
                    New Surveys This Month: 156
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total number of surveys taken
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
              <Bar dataKey="Visiting" stackId="stack" fill="#888888" />
              <Bar dataKey="1 Activity" stackId="stack" fill="#82aa9d" />
              <Bar dataKey="2+ Activities" stackId="stack" fill="#82ca9d" />
              <text x={280} y={20} textAnchor="middle" dominantBaseline="middle" fontSize={16}>
                Total Visitors
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
            <Bar dataKey="Positive" stackId="stack" fill="#82ca9d" />
            <Bar dataKey="Neutral" stackId="stack" fill="#888888" />
            <Bar dataKey="Negative" stackId="stack" fill="#d88488" />
            <text x={280} y={20} textAnchor="middle" dominantBaseline="middle" fontSize={16}>
              Satisfaction
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
            <Bar dataKey="Positive" stackId="stack" fill="#82ca9d" />
            <Bar dataKey="Neutral" stackId="stack" fill="#888888" />
            <Bar dataKey="Negative" stackId="stack" fill="#d88488" />
            <text x={280} y={20} textAnchor="middle" dominantBaseline="middle" fontSize={16}>
              New Surveys This Month
            </text>
          </BarChart>
          )}
        </Grid>
            <br/>
              <Grid item xs={12} sm={12}>
                <h2>Beneficiaries List</h2>
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
                        <TableCell onClick={() => handleSort('lastSurvey')}>
                          <span style={{ cursor: 'pointer' }}>Last Survey</span>
                          {sortColumn === 'lastSurvey' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('activitiesVisited')}>
                          <span style={{ cursor: 'pointer' }}>Activities Visited</span>
                          {sortColumn === 'activitiesVisited' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('age')}>
                          <span style={{ cursor: 'pointer' }}>Age</span>
                          {sortColumn === 'age' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('isPatron')}>
                          <span style={{ cursor: 'pointer' }}>Patron</span>
                          {sortColumn === 'isPatron' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('timesVisited')}>
                          <span style={{ cursor: 'pointer' }}>Times Visited</span>
                          {sortColumn === 'timesVisited' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('rating')}>
                          <span style={{ cursor: 'pointer' }}>Rating</span>
                          {sortColumn === 'rating' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sortedBeneficiaries.map((beneficiary, index) => (
                        <TableRow key={index}>
                          <TableCell>{beneficiary.name}</TableCell>
                          <TableCell>{beneficiary.lastSurvey}</TableCell>
                          <TableCell>
                            {beneficiary.activitiesVisited.map((activity, index) => (
                              <Chip key={index} label={activity} />
                            ))}
                          </TableCell>
                          <TableCell>{beneficiary.age}</TableCell>
                          <TableCell>{beneficiary.isPatron ? 'Yes' : 'No'}</TableCell>
                          <TableCell>{beneficiary.timesVisited}</TableCell>
                          <TableCell>{beneficiary.rating}</TableCell>
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
