import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './LoveLetter.css'; // Custom CSS for the flip effect

function LoveLetter() {
  const [flipped, setFlipped] = useState(false);
  const [page, setPage] = useState(1); // Track the current page of text

  const handleCardClick = (e) => {
    // Only flip the card if the click is not on the button
    if (!e.target.closest('button')) {
      setFlipped(!flipped);
    }
  };

  const handleNextPage = () => {
    if (page < message.length) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const message = [
    "Meow Hello 林林,寫緊依個係情人節前兩日,好開心可以同林林過我地嘅第一個情人節,",
    "With every moment we spend together, I feel my heart blossom just like the cherry blossoms in spring.",
    "Happy Valentine’s Day! I can't wait for more memories to be made as we continue this beautiful journey together."
  ];

  return (
    <Box
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
      sx={{
        perspective: '1500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        className="flip-card-inner"
        sx={{
          width: '700px',
          height: '450px',
          textAlign: 'center',
          position: 'relative', // Ensure that the button's absolute positioning works
        }}
      >
        {/* Front of the card */}
        <Box
          className="flip-card-front"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            border: '2px solid #f48fb1',
            backgroundImage: `url('https://y1plau.github.io/valentines-website/postcard.jpg')`, // Use a sakura background pattern
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* You can add any front content here */}
        </Box>

        {/* Back of the card */}
        <Box
          className="flip-card-back"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff0f5',
            borderRadius: '15px',
            boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            border: '2px solid #f48fb1',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#4a4a4a',
              fontFamily: 'serif',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            {message[page - 1]} {/* Display the text based on the current page */}
          </Typography>

          {/* Page Navigation Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end', // Align buttons to the right
              width: '100%',
              position: 'absolute',
              bottom: '20px',
              right: '20px',
            }}
          >
            <Button
              variant="outlined"
              onClick={handlePrevPage}
              disabled={page === 1}
              sx={{ marginRight: '10px' }}
            >
              <i className="fas fa-arrow-left"></i> {/* FontAwesome left arrow */}
            </Button>
            <Button
              variant="outlined"
              onClick={handleNextPage}
              disabled={page === message.length}
            >
              <i className="fas fa-arrow-right"></i> {/* FontAwesome right arrow */}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoveLetter;
