'using client';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Import the Grid component
import { useMediaQuery } from '@mui/material';

const activities = [
  {
    id: 1,
    name: 'Gardening',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?nature',
  },
  {
    id: 2,
    name: 'Woodworking',
    impact: 'neutral',
    image: 'https://source.unsplash.com/featured/?woodworking',
  },
  {
    id: 3,
    name: 'Growing vegetables',
    impact: 'low',
    image: 'https://source.unsplash.com/featured/?vegetables',
  },
  {
    id: 4,
    name: 'Greenhouses',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?greenhouses',
  },
  {
    id: 5,
    name: 'Composting',
    impact: 'neutral',
    image: 'https://source.unsplash.com/featured/?composting',
  },
  {
    id: 6,
    name: 'Recycling',
    impact: 'low',
    image: 'https://source.unsplash.com/featured/?recycling',
  },
];

const impactColors = {
  high: '#7FFF7F', // Green
  neutral: '#FFB266', // Orange
  low: '#FF9999', // Red
};

export default function ActivitiesPage() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 960px)');
  const isLargeScreen = useMediaQuery('(min-width: 961px)');

  const [cardsPerRow, setCardsPerRow] = useState(4); // Default number of cards per row for large screens
  const [searchTerm, setSearchTerm] = useState('');
  const [filterByImpact, setFilterByImpact] = useState('all');

  const filteredActivities = activities.filter(activity =>
    activity.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterByImpact === 'all' || activity.impact === filterByImpact)
  );

  if (isSmallScreen && cardsPerRow !== 5) {
    setCardsPerRow(5);
  } else if (isMediumScreen && cardsPerRow !== 4) {
    setCardsPerRow(4);
  } else if (isLargeScreen && cardsPerRow !== 3) {
    setCardsPerRow(3);
  }

  return (
    <div>
      <h1>Activities Page</h1>
      <br/>
      <input
        type="text"
        placeholder="Search by event name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <br />
      <br />
      <select
        value={filterByImpact}
        onChange={e => setFilterByImpact(e.target.value)}
      >
        <option value="all">All</option>
        <option value="high">High Impact</option>
        <option value="neutral">Neutral Impact</option>
        <option value="low">Low Impact</option>
      </select>
      <br />
      <br />
      <Grid container spacing={2}>
        {filteredActivities.map(activity => (
          <Grid item xs={12} sm={6} md={cardsPerRow} key={activity.id}>
            <Card>
              <CardMedia component="img" height="140" image={activity.image} alt={activity.name} />
              <CardContent>
                <Typography variant="h5" component="div">
                  {activity.name}
                </Typography>
                <div style={{ backgroundColor: impactColors[activity.impact], width: 'fit-content', padding: '4px', borderRadius: '4px', marginTop: '8px' }}>
                  <Typography variant="body2" color="text.secondary">
                    {activity.impact}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}