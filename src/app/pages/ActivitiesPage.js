'using client';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Import the Grid component
import { useMediaQuery } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts'; // Import the PieChart, Pie, and Cell components from recharts

const activities = [
  {
    id: 1,
    name: 'Gardening',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?nature',
    visitors: 100,
    description: 'Enjoy the beauty of nature while learning how to grow your own plants.',
    satisfaction: [
      { rating: 'Excellent', count: 20 },
      { rating: 'Good', count: 30 },
      { rating: 'Average', count: 10 },
      { rating: 'Poor', count: 5 },
    ],
    topComment: 'I loved gardening! It was a great way to relax and connect with nature.',
  },
  {
    id: 2,
    name: 'Recycling',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?recycling',
    visitors: 80,
    description: 'Learn about the importance of recycling and how to properly recycle different materials.',
    satisfaction: [
      { rating: 'Excellent', count: 15 },
      { rating: 'Good', count: 25 },
      { rating: 'Average', count: 12 },
      { rating: 'Poor', count: 3 },
    ],
    topComment: 'Recycling is such an important practice. I am glad I learned more about it!',
  },
  {
    id: 3,
    name: 'Woodworking',
    impact: 'neutral',
    image: 'https://source.unsplash.com/featured/?woodworking',
    visitors: 50,
    description: 'Discover the art of woodworking and create your own unique wooden crafts.',
    satisfaction: [
      { rating: 'Excellent', count: 10 },
      { rating: 'Good', count: 20 },
      { rating: 'Average', count: 8 },
      { rating: 'Poor', count: 2 },
    ],
    topComment: 'Woodworking was challenging, but I enjoyed the satisfaction of creating something with my own hands.',
  },
  {
    id: 4,
    name: 'Greenhouses',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?greenhouse',
    visitors: 70,
    description: 'Explore the world of greenhouses and learn how to grow plants in controlled environments.',
    satisfaction: [
      { rating: 'Excellent', count: 18 },
      { rating: 'Good', count: 28 },
      { rating: 'Average', count: 15 },
      { rating: 'Poor', count: 4 },
    ],
    topComment: 'The greenhouses were amazing! I learned so much about plant growth and cultivation.',
  },
];

const impactColors = {
  high: '#7FFF7F', // Green
  neutral: '#FFB266', // Orange
  low: '#FF9999', // Red
};

const getRatingColor = (rating) => {
  // Define your color mapping for each rating
  const ratingColors = {
    Excellent: '#00C49F', // Green
    Good: '#FFBB28', // Yellow
    Average: '#FF8042', // Orange
    Poor: '#FF0000', // Red
  };

  return ratingColors[rating];
};

// Calculate average number of visitors across all activities
const totalVisitors = activities.reduce((sum, activity) => sum + activity.visitors, 0);
const averageVisitors = totalVisitors / activities.length;

// Calculate average satisfaction ratings across all activities
const totalSatisfaction = activities.reduce((sum, activity) => {
  activity.satisfaction.forEach((satisfaction) => {
    sum[satisfaction.rating] = (sum[satisfaction.rating] || 0) + satisfaction.count;
  });
  return sum;
}, {});

const averageSatisfaction = Object.entries(totalSatisfaction).reduce((average, [rating, count]) => {
  average[rating] = count / activities.length;
  return average;
}, {});

// New component for event details modal
function EventDetails({ activity, onClose }) {
  const activityVisitorsComparison = activity.visitors > averageVisitors ? 'higher' : 'lower';
  const activitySatisfactionComparison = Object.entries(activity.satisfaction).reduce((comparison, [rating, count]) => {
    if (count > averageSatisfaction[rating]) {
      comparison[rating] = 'higher';
    } else if (count < averageSatisfaction[rating]) {
      comparison[rating] = 'lower';
    } else {
      comparison[rating] = 'equal';
    }
    return comparison;
  }, {});

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
          <Typography variant="body2" color="text.secondary">
            Visitors: {activity.visitors} ({activityVisitorsComparison} than average)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {activity.description}
          </Typography>
          <PieChart width={400} height={300}>
            <Pie
              data={activity.satisfaction}
              dataKey="count"
              nameKey="rating"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {activity.satisfaction.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getRatingColor(entry.rating)} />
              ))}
            </Pie>
          </PieChart>
          <TopCommentCard activity={activity} />
          <button onClick={onClose}>Close</button>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ActivitiesPage() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 960px)');
  const isLargeScreen = useMediaQuery('(min-width: 961px)');

  const [cardsPerRow, setCardsPerRow] = useState(4); // Default number of cards per row for large screens
  const [searchTerm, setSearchTerm] = useState('');
  const [filterByImpact, setFilterByImpact] = useState('all');
  const [selectedActivity, setSelectedActivity] = useState(null);

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

  const openEventDetails = (activity) => {
    setSelectedActivity(activity);
  };

  const closeEventDetails = () => {
    setSelectedActivity(null);
  };

  const getRatingColor = (rating) => {
    // Define your color mapping for each rating
    const ratingColors = {
      Excellent: '#00C49F', // Green
      Good: '#FFBB28', // Yellow
      Average: '#FF8042', // Orange
      Poor: '#FF0000', // Red
    };

    return ratingColors[rating];
  };

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
            <Card onClick={() => openEventDetails(activity)}>
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
                <Typography variant="body2" color="text.secondary">
                  Visitors: {activity.visitors}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {activity.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedActivity && (
        <EventDetails activity={selectedActivity} onClose={closeEventDetails} />
      )}
    </div>
  );
}

function TopCommentCard({ activity }) {
  const topComment = activity.satisfaction[0];

  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {activity.topComment}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {topComment.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Count: {topComment.count}
        </Typography>
      </CardContent>
    </Card>
  );
}