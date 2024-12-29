import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Countdown from 'react-countdown';

function HomePage() {
  const countdownRenderer = ({ days, hours, minutes, seconds }) => (
    <span>{days}d {hours}h {minutes}m {seconds}s</span>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh', // Ensure the section takes full height of the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        backgroundColor: '#ffe6e6',
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
          Happy Valentine’s Day!
        </Typography>
        <Typography variant="body1" gutterBottom>
          To the love of my life, this website is for you. 💖
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Countdown to Valentine’s Day:
        </Typography>
        <Typography variant="h4" sx={{ color: '#d32f2f' }}>
          <Countdown date={new Date('2024-02-14')} renderer={countdownRenderer} />
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            href="/gallery"
            sx={{
              '&:hover': { backgroundColor: '#b71c1c' },
            }}
          >
            View Our Memories
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
