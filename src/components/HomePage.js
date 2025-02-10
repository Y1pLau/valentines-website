import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { ArrowForward } from '@mui/icons-material'; // Import arrow icon
import CountUp from 'react-countup'; // Import react-countup

function HomePage() {
  // Set the date when you met your girlfriend
  const metDate = new Date('2023-09-18'); // Replace with your actual date
  const currentDate = new Date();

  // Calculate the difference in time and convert to days
  const differenceInTime = currentDate - metDate;
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

  return (
    <Box
      sx={{
        minHeight: '100vh', // Ensure the section takes full height of the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          padding: 3,
        }}
      >
        <Typography variant="h3" color="primary" gutterBottom>
          Happy Memories with You!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Every moment with you feels like magic. 💖
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 3 }}>
          Days Since We Met:
        </Typography>
        <Typography variant="h4" sx={{ color: '#d32f2f' }}>
          {/* Animated number using react-countup */}
          <CountUp start={0} end={differenceInDays} duration={2} />
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            href="/gallery"
            endIcon={<ArrowForward />} // Add arrow icon
            sx={{
              '&:hover': { backgroundColor: '#b71c1c' },
            }}
          >
            Move Next
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
