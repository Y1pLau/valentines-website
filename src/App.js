import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Typography } from '@mui/material';
import HomePage from './components/HomePage';
import PhotoGallery from './components/PhotoGallery';
import TimelinePage from './components/TimelinePage';
import LoveLetter from './components/LoveLetter';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const theme = createTheme({
  palette: {
    primary: { main: '#d32f2f' },
    background: { default: 'white' },
  },
});

function App() {
  const hearts = new Array(50).fill(0);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [audio, setAudio] = useState(null);  // Track the audio instance
  const [isPlaying, setIsPlaying] = useState(false);  // Toggle play/pause
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
    // Set the audio instance on mount
    useEffect(() => {
      const newAudio = new Audio("/test.mp3");
      newAudio.loop = true;
      setAudio(newAudio);
  
      return () => {
        newAudio.pause();  // Clean up on unmount
      };
    }, []);
  const homeRef = useRef(null);
  const galleryRef = useRef(null);
  const timelineRef = useRef(null);
  const letterRef = useRef(null);

  const sectionRefs = [homeRef, galleryRef, timelineRef, letterRef];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(ref => ref.current === entry.target);
            if (index !== -1) {
              setTimeout(() => setCurrentIndex(index), 500);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach(ref => {
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
    width: '80px',
    height: '80px',
    borderRadius: '50%', // Makes the button circular
    fontSize: '24px', // Increases font size for better visibility
    padding: 0, // Removes extra padding to maintain circular shape
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '80px',
    height: '80px',
    borderRadius: '50%', // Makes the button circular
    fontSize: '24px', // Increases font size for better visibility
    padding: 0, // Removes extra padding to maintain circular shape
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
          color: 'white', // White text
        }}
        ref={homeRef}
      >
        <Typography variant="h4" component="h2" gutterBottom>
        </Typography>
        <HomePage />
      </Box>

      <Box
        sx={{
          minHeight: '100vh',
          padding: '20px',
          backgroundColor: '#f8bbd0',
          textAlign: 'center',
          color: 'white', // White text
        }}
        ref={galleryRef}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Photo Gallery
        </Typography>
        <PhotoGallery />
      </Box>

      <Box
        sx={{
          minHeight: '100vh',
          padding: '20px',
          backgroundColor: '#f48fb1',
          textAlign: 'center',
          color: 'white', // White text
        }}
        ref={timelineRef}
      >
        <Typography variant="h4" component="h2" gutterBottom>
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
          color: 'white', // White text
        }}
        ref={letterRef}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Love Letter
        </Typography>
        <LoveLetter />
      </Box>
    </ThemeProvider>
  );
}
export default App;