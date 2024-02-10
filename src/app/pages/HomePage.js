import React from 'react';
import { Grid, Card, CardContent, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Chip } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';

export default function HomePage() {
  const data = [
    { name: 'Jan', impact: 50 },
    { name: 'Feb', impact: 80 },
    { name: 'Mar', impact: 120 },
    { name: 'Apr', impact: 90 },
    { name: 'May', impact: 110 },
    { name: 'Jun', impact: 150 },
    { name: 'Jul', impact: 130 },
    { name: 'Aug', impact: 160 },
    { name: 'Sep', impact: 140 },
    { name: 'Oct', impact: 180 },
    { name: 'Nov', impact: 200 },
    { name: 'Dec', impact: 220 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const activityData = [
    { name: 'Gardening', value: 30 },
    { name: 'Composting', value: 50 },
    { name: 'Recycling', value: 20 },
  ];

  const chipData = [
    { id: 1, text: 'Experience', freq: 13},
    { id: 2, text: 'Instructor', freq: 12},
    { id: 3, text: 'Enjoy', freq: 8},
    { id: 4, text: 'Interactive', freq: 4},
    { id: 5, text: 'Eye-opening', freq: 3},
    { id: 6, text: 'Expectations', freq: 3},
    { id: 7, text: 'Lacked', freq: 2},
  ]

  const surveyData = [
    { id: 1, title: 'Survey 1', date: '2022-10-01', name: 'John Doe', workshop: 'Composting Workshop', detailedFeedback: 'Great experience with Composting Workshop! I liked the interactive activities and the knowledgeable speakers. However, I think the workshop could have been more organized.', rating: 5 },
    { id: 2, title: 'Survey 2', date: '2022-10-05', name: 'Jane Smith', workshop: 'Gardening Workshop', detailedFeedback: 'Could be better. The content was informative, but it lacked hands-on exercises.', rating: 3 },
    { id: 3, title: 'Survey 3', date: '2022-10-10', name: 'Mike Johnson', workshop: 'Recycling Workshop', detailedFeedback: 'Loved the Recycling Workshop! The workshop was well-structured, and the facilitators were engaging. I particularly enjoyed the group discussions.', rating: 4 },
    { id: 4, title: 'Survey 4', date: '2022-10-15', name: 'Sarah Thompson', workshop: 'Gardening Workshop', detailedFeedback: 'Not satisfied. The Gardening Workshop did not meet my expectations. The topics covered were not relevant to my interests.', rating: 2 },
    { id: 5, title: 'Survey 5', date: '2022-10-20', name: 'David Wilson', workshop: 'Woodworking Workshop', detailedFeedback: 'Amazing experience with Woodworking Workshop! The workshop exceeded my expectations. The hands-on activities and real-life examples were very helpful.', rating: 5 },
    { id: 6, title: 'Survey 6', date: '2022-10-25', name: 'Emily Brown', workshop: 'Joy of Harvesting', detailedFeedback: 'Joy of Harvesting was fantastic! The harvest techniques were explained clearly, and the practical sessions were enjoyable. Thumbs up!', rating: 5 },
    { id: 7, title: 'Survey 7', date: '2022-10-30', name: 'Alex Turner', workshop: 'Modelling My Mind', detailedFeedback: 'Interesting insights in Modelling My Mind. However, the workshop felt a bit rushed, and I wish there was more time for Q&A.', rating: 3 },
    { id: 8, title: 'Survey 8', date: '2022-11-05', name: 'Sophie Evans', workshop: 'Sourdough Making', detailedFeedback: 'Sourdough Making was a delight! The hands-on experience and tips from the instructor were invaluable. Highly recommend!', rating: 5 },
    { id: 9, title: 'Survey 9', date: '2022-11-10', name: 'Michael Lee', workshop: 'Earth Oven Buns', detailedFeedback: 'Enjoyed making Earth Oven Buns, but the instructions were a bit confusing at times. Overall, a fun experience.', rating: 4 },
    { id: 10, title: 'Survey 10', date: '2022-11-15', name: 'Olivia Clark', workshop: 'Food with Love', detailedFeedback: 'Food with Love was heartwarming! Great recipes and a lovely atmosphere. Cannot wait for the next cooking workshop.', rating: 5 },
    { id: 11, title: 'Survey 11', date: '2022-11-20', name: 'Ryan Miller', workshop: 'Build with Trash', detailedFeedback: 'Build with Trash was eye-opening! It made me reconsider waste and its potential. However, the hands-on segment could be improved.', rating: 4 },
    { id: 12, title: 'Survey 12', date: '2022-11-25', name: 'Emma Harris', workshop: 'Wood for Good', detailedFeedback: 'Wood for Good provided valuable insights into sustainable woodworking. The practical tips will stay with me. Thank you!', rating: 5 },
    { id: 13, title: 'Survey 13', date: '2022-12-01', name: 'Jake Turner', workshop: 'GUI Kampung Tour', detailedFeedback: 'GUI Kampung Tour was informative, but it lacked interactive elements. More engagement with participants would enhance the experience.', rating: 3 },
    { id: 14, title: 'Survey 14', date: '2022-12-05', name: 'Mia Lopez', workshop: 'Flute Workshop', detailedFeedback: 'Flute Workshop was a magical experience! The instructor was talented, and the atmosphere created was enchanting. Bravo!', rating: 5 },
    { id: 15, title: 'Survey 15', date: '2022-12-10', name: 'Chris Martinez', workshop: 'Bugs Hotels Making', detailedFeedback: 'Bugs Hotels Making was interesting, but I expected more creativity in designing bug hotels. Still, a worthwhile workshop.', rating: 3 },
    { id: 16, title: 'Survey 16', date: '2022-12-15', name: 'Ava Robinson', workshop: 'Joy of Harvesting', detailedFeedback: 'Joy of Harvesting was a breath of fresh air! The instructors were passionate, and the hands-on activities were delightful. Thoroughly enjoyed it.', rating: 5 },
    { id: 17, title: 'Survey 17', date: '2022-12-20', name: 'Ethan White', workshop: 'Build with Trash', detailedFeedback: 'Build with Trash was eye-opening! It inspired me to think creatively about waste. The hands-on activities were engaging and thought-provoking.', rating: 5 },
    { id: 18, title: 'Survey 18', date: '2022-12-25', name: 'Grace Davis', workshop: 'Wood for Good', detailedFeedback: 'Wood for Good was excellent! The instructor expertise and the practical tips shared were valuable. Cannot wait to try them out.', rating: 5 },
    { id: 19, title: 'Survey 19', date: '2023-01-01', name: 'Logan Turner', workshop: 'Flute Workshop', detailedFeedback: 'Flute Workshop was a musical journey! The instructor skill and the choice of pieces made it a memorable experience. Highly recommend!', rating: 5 },
    { id: 20, title: 'Survey 20', date: '2023-01-05', name: 'Zoe Rodriguez', workshop: 'Bugs Hotels Making', detailedFeedback: 'Bugs Hotels Making was a fascinating exploration into creating habitats. The hands-on session was informative, and I appreciate the effort put into it.', rating: 4 },
    { id: 21, title: 'Survey 21', date: '2023-01-10', name: 'Liam Foster', workshop: 'Joy of Harvesting', detailedFeedback: 'Joy of Harvesting exceeded my expectations! The instructors were knowledgeable, and the hands-on activities were both educational and enjoyable.', rating: 5 },
    { id: 22, title: 'Survey 22', date: '2023-01-15', name: 'Aria Murphy', workshop: 'Modelling My Mind', detailedFeedback: 'Modelling My Mind provided valuable insights into mental modeling. The instructor was clear, and the discussions were thought-provoking. Thumbs up!', rating: 4 },
    { id: 23, title: 'Survey 23', date: '2023-01-20', name: 'Owen Turner', workshop: 'Sourdough Making', detailedFeedback: 'Sourdough Making was a delightful experience! The step-by-step instructions and the interactive nature of the workshop made it enjoyable.', rating: 5 },
    { id: 24, title: 'Survey 24', date: '2023-01-25', name: 'Harper Reed', workshop: 'Earth Oven Buns', detailedFeedback: 'Earth Oven Buns was a fun and informative workshop. The hands-on baking session was a highlight, and I learned a lot about baking with unconventional methods.', rating: 4 },
    { id: 25, title: 'Survey 25', date: '2023-01-30', name: 'Evelyn Scott', workshop: 'Food with Love', detailedFeedback: 'Food with Love created a warm and inviting atmosphere. The recipes were delicious, and the tips from the chef were valuable. Would attend again!', rating: 5 },
    { id: 26, title: 'Survey 26', date: '2023-02-05', name: 'Noah White', workshop: 'Build with Trash', detailedFeedback: 'Build with Trash was eye-opening! The focus on sustainable construction was inspiring. The instructors were passionate, and I left with a new perspective.', rating: 5 },
    { id: 27, title: 'Survey 27', date: '2023-02-10', name: 'Ava Turner', workshop: 'Wood for Good', detailedFeedback: 'Wood for Good was an excellent introduction to woodworking. The practical tips and safety guidelines provided a solid foundation for beginners like me.', rating: 4 },
    { id: 28, title: 'Survey 28', date: '2023-02-15', name: 'Lucas Baker', workshop: 'GUI Kampung Tour', detailedFeedback: 'GUI Kampung Tour offered interesting insights into local communities. However, I expected more interactive elements to engage participants and enhance the experience.', rating: 3 },
    { id: 29, title: 'Survey 29', date: '2023-02-20', name: 'Isabella Lee', workshop: 'Flute Workshop', detailedFeedback: 'Flute Workshop was a musical delight! The instructor skill and the variety of pieces played made it an enjoyable and enriching experience.', rating: 5 },
    { id: 30, title: 'Survey 30', date: '2023-02-25', name: 'Mason Wright', workshop: 'Bugs Hotels Making', detailedFeedback: 'Bugs Hotels Making was a creative exploration into building habitats. The hands-on session was informative, and I appreciate the effort put into it.', rating: 4 },
    { id: 31, title: 'Survey 31', date: '2023-03-01', name: 'Luna Rodriguez', workshop: 'Joy of Harvesting', detailedFeedback: 'Joy of Harvesting was a delightful experience! The instructor passion and the hands-on activities created a positive and educational environment. Highly recommend!', rating: 5 },
    { id: 32, title: 'Survey 32', date: '2023-03-05', name: 'Carter Davis', workshop: 'Build with Trash', detailedFeedback: 'Build with Trash was an eye-opener! The emphasis on sustainable building practices was inspiring. The practical activities were engaging and thought-provoking.', rating: 5 },
    { id: 33, title: 'Survey 33', date: '2023-03-10', name: 'Madison Martinez', workshop: 'Wood for Good', detailedFeedback: 'Wood for Good was an excellent workshop! The instructor expertise and the hands-on activities provided a great learning experience. Cannot wait to try woodworking on my own.', rating: 5 },
    { id: 34, title: 'Survey 34', date: '2023-03-15', name: 'Aiden Taylor', workshop: 'Flute Workshop', detailedFeedback: 'Flute Workshop was a musical journey! The instructor skill and the selection of pieces made it a memorable and enjoyable experience. Highly recommend for music enthusiasts!', rating: 5 },
    { id: 35, title: 'Survey 35', date: '2023-03-20', name: 'Hannah Brown', workshop: 'Bugs Hotels Making', detailedFeedback: 'Bugs Hotels Making was a fascinating exploration into creating bug habitats. The hands-on session was informative, and I appreciate the creativity involved.', rating: 4 },
  ];
  
  const [filterKeyword, setFilterKeyword] = useState('');

  const handleChipClick = (keyword) => {
    setFilterKeyword(keyword);
  };

  const [sortColumn, setSortColumn] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredSurveys = surveyData
    .filter((survey) =>
      survey.detailedFeedback.toLowerCase().includes(filterKeyword.toLowerCase())
    )
    .sort((a, b) => {
      if (sortColumn) {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];
        if (sortColumn === 'date') {
          const dateA = new Date(valueA.split('/').reverse().join('/'));
          const dateB = new Date(valueB.split('/').reverse().join('/'));
          if (sortDirection === 'asc') {
            return dateA - dateB;
          } else {
            return dateB - dateA;
          }
        } else {
          if (sortDirection === 'asc') {
            return valueA > valueB ? 1 : -1;
          } else {
            return valueA < valueB ? 1 : -1;
          }
        }
      }
    });

  return (
    <div>
      <h1>GUI Volunteer Impact Tracker</h1>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="body2" component="div">
                <strong>Total Visitors</strong>
              </Typography>
              <br style={{ height: '0.5em' }} />
              <Typography variant="h6" component="div">
                <strong>1270</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +5% from last week
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="body2" component="div">
                <strong>Total Volunteers</strong>
              </Typography>
              <br style={{ height: '0.5em' }} />
              <Typography variant="h6" component="div">
                <strong>254</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                -3% from last week
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="body2" component="div">
                <strong>Funds Raised</strong>
              </Typography>
              <br style={{ height: '0.5em' }} />
              <Typography variant="h6" component="div">
                <strong>$ 12 570</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +$ 3 000 from last week
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="body2" component="div">
                <strong>Cost Spent</strong>
              </Typography>
              <br style={{ height: '0.5em' }} />
              <Typography variant="h6" component="div">
                <strong>$ 9 213</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +$ 2 918 from last week
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="body2" component="div">
                <strong>Volunteering Impact</strong>
              </Typography>
              <br style={{ height: '0.5em' }} />
              <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="impact" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="body2" component="div">
                <strong>Popular Activities and Workshops</strong>
              </Typography>
              <br style={{ height: '0.5em' }} />
              <PieChart width={500} height={300}>
                <Pie
                  data={activityData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="body2" component="div">
                        <strong>Recent Surveys</strong>
                      </Typography>
                      <br style={{ height: '0.5em' }} />
                      <div>
                        {chipData.map((chip) => (
                            <Chip
                              key={chip.id}
                              label={chip.text + ' (' + chip.freq + ')'}
                              onClick={() => filterKeyword==chip.text?handleChipClick(''):handleChipClick(chip.text)}
                              variant={filterKeyword === chip.text ? 'filled' : 'outlined'}
                              color={filterKeyword === chip.text ? 'success' : 'default'}
                            />
                        ))}
                      </div>
                      <br style={{ height: '0.5em' }} />
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                            <TableCell onClick={() => handleSort('id')}>
                          <span style={{ cursor: 'pointer' }}>ID</span>
                          {sortColumn === 'id' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                              <TableCell onClick={() => handleSort('date')}>
                          <span style={{ cursor: 'pointer' }}>Date</span>
                          {sortColumn === 'date' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleSort('name')}>
                          <span style={{ cursor: 'pointer' }}>Name</span>
                          {sortColumn === 'name' && (
                            <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                          )}
                        </TableCell>
                        <TableCell>
                          Detailed Feedback
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
                            {filteredSurveys.map((survey) => (
                              <TableRow key={survey.id}>
                                <TableCell>{survey.id}</TableCell>
                                <TableCell>{survey.date}</TableCell>
                                <TableCell>{survey.name}</TableCell>
                                <TableCell>{survey.detailedFeedback}</TableCell>
                                <TableCell>{survey.rating}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
      </Grid>
    </div>
  );
}
