'use client';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Import the Grid component
import { useMediaQuery } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts'; // Import the PieChart, Pie, and Cell components from recharts
import Button from '@mui/material/Button';

const activities = [
  {
    id: 1,
    name: 'Gardening',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?nature',
    visitors: 100,
    summary: 'Effective in teaching plant cultivation. Engages visitors with nature.',
    improvements: [],
    description: 'Gardening workshop successfully imparts knowledge on plant cultivation. Participants enjoy connecting with nature.',
    satisfaction: [
      { rating: 'Excellent', count: 20 },
      { rating: 'Good', count: 30 },
      { rating: 'Average', count: 10 },
      { rating: 'Poor', count: 5 },
    ],
    topPositiveComment: 'I loved gardening! It was a great way to relax and connect with nature.',
    topConstructiveNegativeComment: 'The session lacked detailed information on specific plant types. Would appreciate more in-depth content.',
  },
  {
    id: 2,
    name: 'Recycling',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?recycling',
    visitors: 80,
    summary: 'Raises awareness about recycling importance. Teaches proper recycling methods.',
    improvements: [],
    description: 'Recycling workshop effectively raises awareness about the importance of recycling and teaches proper methods.',
    satisfaction: [
      { rating: 'Excellent', count: 15 },
      { rating: 'Good', count: 25 },
      { rating: 'Average', count: 12 },
      { rating: 'Poor', count: 3 },
    ],
    topPositiveComment: 'Recycling is such an important practice. I am glad I learned more about it!',
    topConstructiveNegativeComment: 'While informative, practical demonstrations for different recycling materials would enhance the learning experience.',
  },
  {
    id: 3,
    name: 'Woodworking',
    impact: 'neutral',
    image: 'https://source.unsplash.com/featured/?woodworking',
    visitors: 50,
    summary: 'Introduces participants to woodworking art. Encourages hands-on crafting.',
    improvements: [
      'Include more beginner-friendly projects for diverse skill levels.',
      'Offer advanced sessions for participants seeking a greater challenge.',
      'Provide additional guidance on tool safety and usage.',
    ],
    description: 'Woodworking workshop introduces participants to the art of woodworking, encouraging hands-on crafting.',
    satisfaction: [
      { rating: 'Excellent', count: 10 },
      { rating: 'Good', count: 20 },
      { rating: 'Average', count: 8 },
      { rating: 'Poor', count: 2 },
    ],
    topPositiveComment: 'Woodworking was challenging, but I enjoyed the satisfaction of creating something with my own hands.',
    topConstructiveNegativeComment: 'The workshop primarily focused on intermediate projects. Including more beginner-friendly projects would cater to diverse skill levels.',
  },
  {
    id: 4,
    name: 'Greenhouses',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?greenhouse',
    visitors: 70,
    summary: 'Explores controlled plant growth. Informative about greenhouse environments.',
    improvements: [
      'Include a hands-on session for setting up a mini greenhouse.',
      'Provide additional materials for a more interactive experience.',
    ],
    description: 'Greenhouses workshop explores controlled plant growth and provides valuable insights into greenhouse environments.',
    satisfaction: [
      { rating: 'Excellent', count: 18 },
      { rating: 'Good', count: 28 },
      { rating: 'Average', count: 15 },
      { rating: 'Poor', count: 4 },
    ],
    topPositiveComment: 'The greenhouses were amazing! I learned so much about plant growth and cultivation.',
    topConstructiveNegativeComment: 'While informative, a hands-on session for setting up a mini greenhouse would enhance practical learning.',
  },
  {
    id: 5,
    name: 'Joy of Harvesting',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?harvesting',
    visitors: 90,
    summary: 'Imparts joy through harvesting. Clear guidance on crop cultivation.',
    improvements: [
      'Include more interactive activities during practical sessions.',
      'Provide additional resources for further exploration of crop varieties.',
    ],
    description: 'Joy of Harvesting workshop imparts joy through harvesting with clear guidance on crop cultivation techniques.',
    satisfaction: [
      { rating: 'Excellent', count: 25 },
      { rating: 'Good', count: 30 },
      { rating: 'Average', count: 10 },
      { rating: 'Poor', count: 5 },
    ],
    topPositiveComment: 'Joy of Harvesting was fantastic! The harvest techniques were explained clearly, and the practical sessions were enjoyable.',
    topConstructiveNegativeComment: 'The practical sessions were enjoyable but lacked interactive activities. Adding more interactive elements would enhance the overall experience.',
  },
  {
    id: 6,
    name: 'Modelling My Mind',
    impact: 'neutral',
    image: 'https://source.unsplash.com/featured/?mind',
    visitors: 60,
    summary: 'Delves into mental modeling. Thought-provoking discussions.',
    improvements: [
      'Include practical exercises for applying mental modeling techniques.',
      'Provide additional reading materials for in-depth understanding.',
    ],
    description: 'Modelling My Mind workshop delves into mental modeling with thought-provoking discussions.',
    satisfaction: [
      { rating: 'Excellent', count: 15 },
      { rating: 'Good', count: 25 },
      { rating: 'Average', count: 12 },
      { rating: 'Poor', count: 3 },
    ],
    topPositiveComment: 'Modelling My Mind provided valuable insights into mental modeling. The instructor was clear, and the discussions were thought-provoking. Thumbs up!',
    topConstructiveNegativeComment: 'The workshop provided valuable insights but lacked practical exercises for applying mental modeling techniques. Including hands-on activities would enhance the learning experience.',
  },
  {
    id: 7,
    name: 'Sourdough Making',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?sourdough',
    visitors: 75,
    summary: 'Delightful journey into sourdough making. Interactive step-by-step instructions.',
    improvements: [
      'Provide additional tips for troubleshooting common sourdough issues.',
      'Include a Q&A session for personalized guidance.',
    ],
    description: 'Sourdough Making workshop is a delightful journey with interactive step-by-step instructions.',
    satisfaction: [
      { rating: 'Excellent', count: 20 },
      { rating: 'Good', count: 30 },
      { rating: 'Average', count: 15 },
      { rating: 'Poor', count: 5 },
    ],
    topPositiveComment: 'Sourdough Making was a delightful experience! The step-by-step instructions and the interactive nature of the workshop made it enjoyable.',
    topConstructiveNegativeComment: 'While enjoyable, additional tips for troubleshooting common sourdough issues would be beneficial. Participants faced challenges that could be addressed in the workshop.',
  },
  {
    id: 8,
    name: 'Earth Oven Buns',
    impact: 'neutral',
    image: 'https://source.unsplash.com/featured/?oven',
    visitors: 65,
    summary: 'Fun and informative workshop on Earth Oven Buns. Hands-on baking session.',
    improvements: [
      'Include more details on the science behind unconventional baking.',
      'Provide follow-up sessions for showcasing personal creations.',
    ],
    description: 'Earth Oven Buns workshop is a fun and informative experience with a hands-on baking session.',
    satisfaction: [
      { rating: 'Excellent', count: 18 },
      { rating: 'Good', count: 28 },
      { rating: 'Average', count: 10 },
      { rating: 'Poor', count: 4 },
    ],
    topPositiveComment: 'Earth Oven Buns was a fun and informative workshop. The hands-on baking session was a highlight, and I learned a lot about baking with unconventional methods.',
    topConstructiveNegativeComment: 'While informative, participants desired more detailed explanations of the science behind unconventional baking. A follow-up session to showcase personal creations would also be appreciated.',
  },
  {
    id: 9,
    name: 'Food with Love',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?food',
    visitors: 85,
    summary: 'Creates a warm and inviting atmosphere with Food with Love. Explores delicious recipes.',
    improvements: [
      'Include a Q&A session for personalized cooking tips.',
      'Provide additional resources for exploring diverse cuisines.',
    ],
    description: 'Food with Love workshop creates a warm and inviting atmosphere, exploring delicious recipes and cooking tips.',
    satisfaction: [
      { rating: 'Excellent', count: 22 },
      { rating: 'Good', count: 32 },
      { rating: 'Average', count: 10 },
      { rating: 'Poor', count: 3 },
    ],
    topPositiveComment: 'Food with Love created a warm and inviting atmosphere. The recipes were delicious, and the tips from the chef were valuable. Would attend again!',
    topConstructiveNegativeComment: 'While enjoyable, participants wished for a Q&A session to receive personalized cooking tips. Including this interactive element would enhance the workshop experience.',
  },
  {
    id: 10,
    name: 'Build with Trash',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?trash',
    visitors: 95,
    summary: 'Eye-opening focus on sustainable construction. Passionate instructors.',
    improvements: [
      'Include more hands-on activities for direct engagement.',
      'Provide additional materials for creative constructions.',
      'Offer follow-up resources for sustainable practices at home.',
    ],
    description: 'Build with Trash workshop is eye-opening, focusing on sustainable construction with passionate instructors.',
    satisfaction: [
      { rating: 'Excellent', count: 30 },
      { rating: 'Good', count: 25 },
      { rating: 'Average', count: 8 },
      { rating: 'Poor', count: 2 },
    ],
    topPositiveComment: 'Build with Trash was eye-opening! The focus on sustainable construction was inspiring. The instructors were passionate, and I left with a new perspective.',
    topConstructiveNegativeComment: 'The workshop was inspiring, but participants desired more hands-on activities for direct engagement. Enhancing these aspects would enrich the overall experience.',
  },
  {
    id: 11,
    name: 'Wood for Good',
    impact: 'high',
    image: 'https://source.unsplash.com/featured/?wood',
    visitors: 88,
    summary: 'Excellent introduction to woodworking. Practical tips for beginners.',
    improvements: [
      'Include advanced techniques for participants seeking a greater challenge.',
      'Provide additional guidance on sourcing quality wood materials.',
    ],
    description: 'Wood for Good workshop offers an excellent introduction to woodworking with practical tips for beginners.',
    satisfaction: [
      { rating: 'Excellent', count: 28 },
      { rating: 'Good', count: 30 },
      { rating: 'Average', count: 12 },
      { rating: 'Poor', count: 4 },
    ],
    topPositiveComment: 'Wood for Good was excellent! The instructor expertise and the practical tips shared were valuable. Cannot wait to try them out.',
    topConstructiveNegativeComment: 'The workshop was excellent, but participants seeking a greater challenge expressed a desire for advanced techniques. Including these would cater to a broader skill range.',
  },
  {
    id: 12,
    name: 'GUI Kampung Tour',
    impact: 'neutral',
    image: 'https://source.unsplash.com/featured/?tour',
    visitors: 55,
    summary: 'Insightful tour of local communities. Expected more interactive elements.',
    improvements: [
      'Enhance interactive elements for a more engaging experience.',
      'Include local community members in the tour for authentic insights.',
    ],
    description: 'GUI Kampung Tour offers insightful exploration of local communities with a focus on interactive engagement.',
    satisfaction: [
      { rating: 'Excellent', count: 15 },
      { rating: 'Good', count: 20 },
      { rating: 'Average', count: 15 },
      { rating: 'Poor', count: 3 },
    ],
    topPositiveComment: 'GUI Kampung Tour offered interesting insights into local communities. However, I expected more interactive elements to engage participants and enhance the experience.',
    topConstructiveNegativeComment: 'While insightful, participants expected more interactive elements to engage them effectively. Enhancing these aspects would enrich the overall experience.',
  },
  {
    id: 13,
    name: 'Flute Workshop',
    impact: 'neutral',
    image: 'https://source.unsplash.com/featured/?flute',
    visitors: 58,
    summary: 'Musical journey exploring flute playing and enchantment. Varied pieces played.',
    improvements: [
      'Include more beginner-friendly pieces for participants with limited musical experience.',
      'Provide additional resources for learning sheet music.',
    ],
    description: 'Flute Workshop is a musical journey exploring flute playing and musical enchantment.',
    satisfaction: [
      { rating: 'Excellent', count: 25 },
      { rating: 'Good', count: 30 },
      { rating: 'Average', count: 10 },
      { rating: 'Poor', count: 5 },
    ],
    topPositiveComment: 'Flute Workshop was a musical journey! The instructor skill and the variety of pieces played made it an enjoyable and enriching experience. Highly recommend for music enthusiasts!',
    topConstructiveNegativeComment: 'While enjoyable, participants with limited musical experience expressed a desire for more beginner-friendly pieces. Including a variety of difficulty levels would enhance inclusivity.',
  },
  {
    id: 14,
    name: 'Bugs Hotels Making',
    impact: 'neutral',
    image: 'https://source.unsplash.com/featured/?bugs',
    visitors: 62,
    summary: 'Fascinating exploration into creating bug habitats. Informative hands-on session.',
    improvements: [
      'Include additional materials for more creative bug habitat designs.',
      'Provide a guide on sustaining bug habitats at home.',
    ],
    description: 'Bugs Hotels Making is a fascinating exploration into creating bug habitats with an informative hands-on session.',
    satisfaction: [
      { rating: 'Excellent', count: 20 },
      { rating: 'Good', count: 25 },
      { rating: 'Average', count: 15 },
      { rating: 'Poor', count: 5 },
    ],
    topPositiveComment: 'Bugs Hotels Making was a fascinating exploration into creating bug habitats. The hands-on session was informative, and I appreciate the creativity involved.',
    topConstructiveNegativeComment: 'Participants desired more materials for creative bug habitat designs. Including these would enhance the hands-on session and encourage creativity.',
  },
  // ... other activities
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
  const activityVisitorsPercentage = ((activity.visitors - averageVisitors) / averageVisitors) * 100;
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
<div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    onClick={onClose}
  >
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >      <Card>
        <CardMedia component="img" height="140" image={activity.image} alt={activity.name} />
        <CardContent>
          <Typography variant="h3" component="div">
            {activity.name}
          </Typography>
          <div style={{ backgroundColor: impactColors[activity.impact], width: 'fit-content', padding: '4px', borderRadius: '4px', marginTop: '8px' }}>
            <Typography variant="body2" color="black">
              Impact - {activity.impact}
            </Typography>
          </div>
          <br/>
          <Typography variant="h5" color="black">
            Visitors:
          </Typography>
          <Typography variant="body1" color="black">
            {activity.visitors} ({activityVisitorsComparison} than average, {Math.abs(activityVisitorsPercentage).toFixed(2)}% {activityVisitorsComparison})
          </Typography>
          <br/>
          <Typography variant="h5" color="black">
            Summary:
          </Typography>
          <Typography variant="body2" color="black">
            {activity.description}
          </Typography>
          <br/>
          {activity.improvements.map((improvement, index) => (
            (index==0 && 
              <div><Typography variant="h5" color="black">
                Suggested Improvements:
              </Typography>
              <Typography key={index} variant="body2" color="black">
                - {improvement}
              </Typography>
              </div>) ||
            <Typography key={index} variant="body2" color="black">
              - {improvement}
            </Typography>
          ))}
          <br/>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <PieChart width={400} height={300}>
                <text x={200} y={20} textAnchor="middle" dominantBaseline="middle">
                  Visitor Satisfaction
                </text>
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
            </Grid>
            <Grid item xs={6} sm={6}>
              <TopCommentCard activity={activity} />
            </Grid>
          </Grid>
          <Button variant="outlined" onClick={onClose} style={{ color: '#4f664c', backgroundColor: '#dcffd8' }}>
            <strong>Close</strong>
          </Button>
        </CardContent>
      </Card>
    </div>
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

  
  const [sortBy, setSortBy] = useState('all');

  const setSort = (value) => {
    setSortBy(value);
  };

  const filteredActivities = activities.filter(activity =>
    activity.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterByImpact === 'all' || activity.impact === filterByImpact)
  );

  if (sortBy === 'impact1') {
    filteredActivities.sort((a, b) => {
      if (a.impact === 'high' && b.impact !== 'high') {
        return -1;
      } else if (a.impact !== 'high' && b.impact === 'high') {
        return 1;
      } else if (a.impact === 'neutral' && b.impact === 'low') {
        return -1;
      } else if (a.impact === 'low' && b.impact === 'neutral') {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'impact2') {
    filteredActivities.sort((a, b) => {
      if (a.impact === 'high' && b.impact !== 'high') {
        return 1;
      } else if (a.impact !== 'high' && b.impact === 'high') {
        return -1;
      } else if (a.impact === 'neutral' && b.impact === 'low') {
        return 1;
      } else if (a.impact === 'low' && b.impact === 'neutral') {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'visitors1') {
    filteredActivities.sort((a, b) => b.visitors - a.visitors);
  } else if (sortBy === 'visitors2') {
    filteredActivities.sort((a, b) => a.visitors - b.visitors);
  } else if (sortBy === 'feedback1') {
    filteredActivities.sort((a, b) => b.satisfaction[0].count - a.satisfaction[0].count);
  } else if (sortBy === 'feedback2') {
    filteredActivities.sort((a, b) => a.satisfaction[0].count - b.satisfaction[0].count);
  }
  if (isSmallScreen && cardsPerRow !== 5) {
    setCardsPerRow(5);
  } else if (isMediumScreen && cardsPerRow !== 4) {
    setCardsPerRow(4);
  } else if (isLargeScreen && cardsPerRow !== 3) {
    setCardsPerRow(3);
  }

  const openEventDetails = (activity) => {
    setSelectedActivity(activity);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };
  const closeEventDetails = () => {
    setSelectedActivity(null);
    document.body.style.overflow = 'auto'; // Enable scrolling
  };  return (
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
        <option value="all">Filter by..</option>
        <option value="high">High Impact</option>
        <option value="neutral">Neutral Impact</option>
        <option value="low">Low Impact</option>
      </select>
      
      <select
        value={sortBy}
        onChange={e => setSort(e.target.value)}
      >
        <option value="all">Sort by..</option>
        <option value="impact1">Impact (High to Low)</option>
        <option value="impact2">Impact (Low to High)</option>
        <option value="visitors1">Visitors (High to Low)</option>
        <option value="visitors2">Visitors (Low to High)</option>
        <option value="feedback1">Feedback (High to Low)</option>
        <option value="feedback2">Feedback (Low to High)</option>
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
                  <Typography variant="body2" color="black">
                    {activity.impact}
                  </Typography>
                </div>
                <br/>
                <Typography variant="body2" color="black">
                  Visitors: {activity.visitors}
                </Typography>
                { activity.improvements.length>0 && <Typography variant="body2" color="black" style={{ fontWeight: activity.improvements.length > 0 ? 'strong' : 'normal' }}>
                  {activity.improvements.length} Suggested Improvements 🌠
                </Typography> }
                <Typography variant="body2" color="text.secondary">
                  {activity.summary}
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
  return (
    <div>
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Top Positive Comment 👍
        </Typography>
        <br/>
        <Typography variant="body2" color="black">
        {activity.topPositiveComment}
        </Typography>
      </CardContent>
    </Card>
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Top Negative Comment 👎
        </Typography>
        <br/>
        <Typography variant="body2" color="black">
        {activity.topConstructiveNegativeComment}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}