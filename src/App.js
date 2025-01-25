import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Typography } from '@mui/material';
import HomePage from './components/HomePage';
import PhotoAlbum from './components/PhotoGallery';
import TimelinePage from './components/TimelinePage';
import LoveLetter from './components/LoveLetter';
import InteractiveMap from './components/InteractiveMap';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const theme = createTheme({
  palette: {
    primary: { main: '#d32f2f' },
    background: { default: 'white' },
  },
});

function App() {
  const hearts = new Array(50).fill(0);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [audio, setAudio] = useState(null); // Track the audio instance
  const [isPlaying, setIsPlaying] = useState(false); // Toggle play/pause
  const [currentIndex, setCurrentIndex] = useState(0);

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
      newAudio.pause(); // Clean up on unmount
    };
  }, []);

  const homeRef = useRef(null);
  const galleryRef = useRef(null);
  const timelineRef = useRef(null);
  const letterRef = useRef(null);
  const mapRef = useRef(null);

  const sectionRefs = [homeRef, galleryRef, timelineRef, letterRef, mapRef];

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

  // Store and restore scroll position
  useEffect(() => {
    // Check if there's a saved scroll position
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    } else {
      // If there's no saved scroll position, set it to the top
      window.scrollTo(0, 0);
    }

    // Save the scroll position on page unload (before the user leaves or refreshes the page)
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Prevent Timeline Page from auto-scrolling on refresh
  useEffect(() => {
    const firstLoad = sessionStorage.getItem('firstLoad');
    if (!firstLoad) {
      // Scroll to top on initial load
      window.scrollTo(0, 0);
      sessionStorage.setItem('firstLoad', 'true');
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex((ref) => ref.current === entry.target);
            if (index !== -1) {
              setTimeout(() => setCurrentIndex(index), 500);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Music Control Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={playAudio}
        sx={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
        }}
      >
        <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} style={{ fontSize: '30px' }}></i>
      </Button>

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
          backgroundColor: '#ffeef3',
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
          padding: '20px',
          backgroundColor: '#f8bbd0',
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

      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f48fb1',
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
          backgroundColor: '#f06292',
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
          backgroundColor: '#f8bbd0',
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
    </ThemeProvider>
  );
}

export default App;
