import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import CountUp from 'react-countup';

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
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          position: 'relative',
          padding: 0,
          overflow: 'hidden',
          borderRadius: '16px',
        }}
      >
        {/* Image Wrapper */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Background Image */}
          <img
            src="https://y1plau.github.io/valentines-website/cfd4d491-0c0b-4c49-9bf3-2f4bd5015b0f.jpg" // Replace with your actual image URL
            alt="Couple"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain', // Ensures the full image is shown
              borderRadius: '16px',
            }}
          />

          {/* Text inside the image (Ensuring it's readable) */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)', // Center text
              textAlign: 'center',
              width: '100%',
              padding: 2,
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
            >
              Days Since We Met:
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
            >
              <CountUp start={0} end={differenceInDays} duration={2} />
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
