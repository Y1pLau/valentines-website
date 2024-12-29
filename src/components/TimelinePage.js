import React from 'react';
import { Container, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

function TimelinePage() {
  const milestones = [
    { date: '2022-05-14', event: 'Our first date' },
    { date: '2023-01-01', event: 'New Year’s Eve together' },
    { date: '2023-07-20', event: 'Trip to Kyoto ❤️' },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Our Journey Together
      </Typography>
      <Timeline position="alternate">
        {milestones.map((milestone, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < milestones.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{milestone.event}</Typography>
              <Typography variant="body2" color="textSecondary">
                {milestone.date}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}

export default TimelinePage;
