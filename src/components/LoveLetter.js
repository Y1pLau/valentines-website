import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './LoveLetter.css'; // Custom CSS for the flip effect

function LoveLetter() {
  const [flipped, setFlipped] = useState(false);
  const [page, setPage] = useState(1); // Track the current page of text

  const handleCardClick = (e) => {
    // Only flip the card if the click is not on a button
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

  const title = "Valentine’s Day 💖";
  const receiver = "To: 林林 💕";
  const date = "14 Feb 2025";

  const message = [
    "Meow 🐱 Hello 林林, 寫緊依段文係情人節前兩日, 好開心可以同林林過我地嘅第一個情人節 💖。",
    "依個postcard 🎴 係札幌送比你, 好多謝林林同我去北海道, 係一個會同愛一生一世 💑 嘅人去嘅地方。",
    "所以你成日話我好上進 , 但其實係因為你, 我先上進 💪。",
    "你成日話你樣衰 🙈, 唔可愛 🥺, 無身材 😶, 但我想講你又靚女 💃 又可愛 🥰。",
    "最後我送左 33 朵紅玫瑰 🌹 比你, 代表愛你三生三世 ❤️‍🔥！Enjoy Valentine's Day 💘！"
  ];

  return (
    <Box
      sx={{
        textAlign: 'center',
        position: 'relative', // Ensures the title is positioned above the card
        height: '100vh',
      }}
    >
      {/* Title, Receiver, and Date outside the flip card */}
      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          width: '100%',
          textAlign: 'center',
          zIndex: 10, // Ensures it's always above the card
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'white' }}>
          {receiver}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'white' }}>
          {date}
        </Typography>
      </Box>

      {/* Flip card */}
      <Box
        className={`flip-card ${flipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
        sx={{
          perspective: '1500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Box
          className="flip-card-inner"
          sx={{
            width: '700px',
            height: '450px',
            textAlign: 'center',
            position: 'relative',
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
              backgroundImage: `url('https://y1plau.github.io/valentines-website/postcard.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
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
              position: 'relative',
            }}
          >
            {/* Letter Message */}
            <Typography
              variant="body1"
              sx={{
                color: '#4a4a4a',
                fontFamily: 'serif',
                textAlign: 'center',
                marginTop: '60px', // Push text down
                marginBottom: '20px',
                padding: '10px',
              }}
            >
              {message[page - 1]}
            </Typography>

            {/* Page Navigation Buttons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
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
                ⬅️
              </Button>
              <Button
                variant="outlined"
                onClick={handleNextPage}
                disabled={page === message.length}
              >
                ➡️
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoveLetter;
