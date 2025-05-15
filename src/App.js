// App.js
import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Typography } from '@mui/material';
import HomePage from './components/HomePage';
import PhotoAlbum from './components/PhotoGallery';
import TimelinePage from './components/TimelinePage';
import LoveLetter from './components/LoveLetter';
import InteractiveMap from './components/InteractiveMap';
import GiftExchange from './components/GiftExchange'; // Add this import
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MusicPlayer from './components/MusicPlayer';

const theme = createTheme({
  palette: {
    primary: { main: '#d32f2f' },
    background: { default: 'white' },
  },
});

function App() {
  const hearts = new Array(50).fill(0);
  const [isOpen, setIsOpen] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);

  const playAudio = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const newAudio = new Audio('test.mp3');
    newAudio.loop = true;
    setAudio(newAudio);

    return () => {
      newAudio.pause();
    };
  }, []);

  const homeRef = useRef(null);
  const galleryRef = useRef(null);
  const timelineRef = useRef(null);
  const letterRef = useRef(null);
  const mapRef = useRef(null);
  const giftRef = useRef(null); // Add reference for gift section

  const sectionRefs = [homeRef, timelineRef, letterRef, mapRef, giftRef, galleryRef]; // Update array

  const scrollToSection = (index) => {
    if (index >= 0 && index < sectionRefs.length) {
      const section = sectionRefs[index].current;
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setTimeout(() => setCurrentIndex(index), 500);
      }
    }
  };

  // ... (keep your existing useEffect hooks for scroll position and intersection observer)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="falling-hearts">
        {hearts.map((_, index) => (
          <div key={index} className="heart">
            <i className="fas fa-heart"></i>
          </div>
        ))}
      </div>

      <div className="fixed-buttons">
        <Button
          variant="contained"
          color="primary"
          onClick={() => scrollToSection(currentIndex - 1)}
          disabled={currentIndex === 0}
          sx={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            fontSize: '24px',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}
        >
          <i className="fas fa-arrow-up" style={{ fontSize: '30px' }}></i>
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => scrollToSection(currentIndex + 1)}
          disabled={currentIndex === sectionRefs.length - 1}
          sx={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            fontSize: '24px',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}
        >
          <i className="fas fa-arrow-down" style={{ fontSize: '30px' }}></i>
        </Button>
      </div>

      {/* Sections with Containers */}
      <Box
        sx={{
          minHeight: '100vh',
          padding: '20px',
          backgroundColor: '#fee5eb',
          textAlign: 'center',
          color: 'white',
        }}
        ref={homeRef}
      >
        <HomePage />
      </Box>

      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#ffc2d2',
          textAlign: 'center',
          color: 'white',
        }}
        ref={timelineRef}
      >
        <Typography variant="h4" gutterBottom>
          Timeline Page
        </Typography>
        <TimelinePage />
      </Box>

      <Box
        sx={{
          minHeight: '100vh',
          padding: '20px',
          backgroundColor: '#feb3c7',
          textAlign: 'center',
          color: 'white',
        }}
        ref={letterRef}
      >
        <Typography variant="h4" gutterBottom>
          Love Letter
        </Typography>
        <LoveLetter />
      </Box>

      <Box
        sx={{
          minHeight: '100vh',
          padding: '20px',
          backgroundColor: '#fd8faa',
          textAlign: 'center',
          color: 'white',
        }}
        ref={mapRef}
      >
        <Typography variant="h4" gutterBottom>
          Travel Memories Map
        </Typography>
        <Box sx={{ height: '500px', width: '100%' }}>
          <InteractiveMap />
        </Box>
      </Box>

      {/* New Gift Exchange Section */}
      <Box
        sx={{
          minHeight: '100vh',
          padding: '20px',
          backgroundColor: '#fc809c', // Add a new color in the gradient
          textAlign: 'center',
          color: 'white',
        }}
        ref={giftRef}
      >
        <GiftExchange />
      </Box>

      <Box
        sx={{
          minHeight: '100vh',
          padding: '20px',
          backgroundColor: '#fb6f92',
          textAlign: 'center',
          color: 'white',
        }}
        ref={galleryRef}
      >
        <Typography variant="h4" gutterBottom>
          Photo Gallery
        </Typography>
        <PhotoAlbum />
      </Box>

      <div>
        <MusicPlayer />
      </div>
    </ThemeProvider>
  );
}

export default App;