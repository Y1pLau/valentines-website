import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab';
import { motion } from 'framer-motion';

const TimelinePage = () => {
  // Sample milestones for the 2024 dating timeline
  const milestones = [
    { 
      date: '2023-09-18', 
      title: 'First Meeting', 
      description: '我同林林第一次坐摩天輪, 亦係第一次同女仔坐摩天輪',
      imageUrl: 'https://y1plau.github.io/valentines-website/0e22ebf7-52e6-4ac8-8da9-38f1da303de3.jpg',
    },
    { 
      date: '2024-02-14', 
      title: 'Valentine\'s Day', 
      description: '第一次同林林過情人節同送花,亦係第一次同女仔過情人節同送花',
      imageUrl: 'https://y1plau.github.io/valentines-website/b55406cf-a991-4a88-8e33-68f102eece8e.jpg',
    },
    { 
      date: '2024-06-21', 
      title: 'Kyoto Trip', 
      description: '第一次同林林單獨去旅行,亦係第一次同女仔去旅行',
      imageUrl: 'https://y1plau.github.io/valentines-website/IMG_5249.JPG',
    },
    { 
      date: '2025-01-09', 
      title: 'Sapporo Trip', 
      description: '第一次同林林去北海道依個浪漫地方方,亦係第一次同女仔去',
      imageUrl: 'https://y1plau.github.io/valentines-website/IMG_8643.JPG',
    },
    { 
      date: '', 
      title: 'Coming Soon', 
      description: '期待著下一次和林林的第一次',
      imageUrl: 'https://y1plau.github.io/valentines-website/9258dca8-cc34-4766-a9d9-5825a575a553.jpg', 
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
                      <Grid item xs={12} sm={6}> {/* Increased width for larger images */}
  <motion.img 
    src={milestone.imageUrl}
    alt={`Milestone ${index + 1}`}
    style={{ 
      width: '100%', 
      maxWidth: '400px', // Set a maximum width
      height: 'auto', 
      borderRadius: '8px', 
      opacity: 0.9 
    }}
    initial={{ opacity: 0.3 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, ease: 'easeInOut' }}
  />
</Grid>
<Grid item xs={12} sm={9}>
  <Box>
    <Typography 
      variant="h6" 
      sx={{ 
        fontSize: { xs: '1.1rem', md: '1.4rem' }, 
        fontWeight: 'bold', 
        display: 'block' // Ensures full width
      }}
    >
      {milestone.title}
    </Typography>
    <Typography 
      sx={{ 
        fontSize: { xs: '0.9rem', md: '1rem' }, 
        display: 'block', 
        color: 'gray' 
      }}
    >
      {milestone.date}
    </Typography>
  </Box>
  <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, mt: 1 }}>
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
