import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab';
import { motion } from 'framer-motion';

const TimelinePage = () => {
  // Sample milestones for the 2024 dating timeline
  const milestones = [
    { 
      date: '2024-01-01', 
      title: 'Our First Meeting', 
      description: 'We met at the park for the first time, and it was magical.',
      imageUrl: 'Victoria1.jpg',
    },
    { 
      date: '2024-02-14', 
      title: 'Valentine\'s Day Dinner', 
      description: 'A beautiful evening by the river, sharing a romantic dinner.',
      imageUrl: 'Victoria2.jpeg',
    },
    { 
      date: '2024-03-25', 
      title: 'Trip to Kyoto', 
      description: 'A romantic walk through the beautiful streets of Kyoto.',
      imageUrl: 'Victoria1.JPG',
    },
    { 
      date: '2024-06-18', 
      title: 'Anniversary Celebration', 
      description: 'Celebrating one year of memories, love, and laughter.',
      imageUrl: 'Victoria1.JPG',
    },
  ];

  const timelineRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const steps = timelineRef.current.querySelectorAll('.timeline-item'); // Select all timeline items

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(steps).indexOf(entry.target);
            if (index !== currentStep) {
              setCurrentStep(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    steps.forEach((step) => observer.observe(step));

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [currentStep]);

  useEffect(() => {
    const steps = timelineRef.current.querySelectorAll('.timeline-item');
    if (steps.length && currentStep < steps.length) {
      const nextStep = steps[currentStep];
      nextStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentStep]);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">2024 Dating Milestones</Typography>
      
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Box
            ref={timelineRef}
            sx={{
              height: '100vh',  // Full height for each item
              overflowY: 'auto', // Enable vertical scrolling
              overflowX: 'hidden', // Hide the horizontal scrollbar
              paddingRight: 1,
              scrollbarWidth: 'none',  // Hide scrollbar in Firefox
              '-ms-overflow-style': 'none', // Hide scrollbar in IE and Edge
              '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar in WebKit browsers
              scrollBehavior: 'smooth', // Smooth scrolling behavior
            }}
          >
            <Timeline position="alternate">
              {milestones.map((milestone, index) => (
                <TimelineItem key={index} className="timeline-item" sx={{ height: '100vh' }}> {/* Set height to full viewport */}
                  <TimelineSeparator>
                    <TimelineDot color={index % 2 === 0 ? 'primary' : 'secondary'} />
                    {index < milestones.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  
                  {/* Timeline Content with step animation */}
                  <TimelineContent>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: currentStep === index ? 1 : 0, y: currentStep === index ? 0 : 20 }}
                      transition={{
                        duration: 2,  // Increased duration for slower animation
                        ease: 'easeInOut',
                      }}  
                    >
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          {/* Animated Image */}
                          <motion.img 
                            src={milestone.imageUrl}
                            alt={`Milestone ${index + 1}`}
                            style={{ width: '100%', borderRadius: '8px', opacity: 0.9 }}
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}  // Slower fade-in for the image
                          />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                          <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                            {milestone.title} - {milestone.date}
                          </Typography>
                          <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            {milestone.description}
                          </Typography>
                        </Grid>
                      </Grid>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TimelinePage;
