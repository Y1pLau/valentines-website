import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

function TimelinePage() {
  const milestones = [
    { date: '2022-05-14', event: 'Our first date', photo: '/IMG_4585.JPG' },
    { date: '2023-01-01', event: 'New Year’s Eve together', photo: 'IMG_5249.JPEG' },
    { date: '2023-07-20', event: 'Trip to Kyoto ❤️', photo: 'IMG_5249.JPEG' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % milestones.length);
    }, 3000); // Change photo every 3 seconds

    return () => clearInterval(interval);
  }, [milestones.length]);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Our Journey Together
      </Typography>
      <Timeline position="alternate">
        {milestones.map((milestone, index) => (
          <TimelineItem
            key={index}
            sx={{
              opacity: currentIndex === index ? 1 : 0.3,
              transition: 'opacity 1s ease-in-out',
            }}
          >
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < milestones.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                <img
                  src={milestone.photo}
                  alt={milestone.event}
                  style={{
                    width: '150px',
                    height: 'auto',
                    borderRadius: '8px',
                    margin: '10px',
                  }}
                />
                <Box sx={{ textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                  <Typography variant="h6">{milestone.event}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {milestone.date}
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}

export default TimelinePage;
