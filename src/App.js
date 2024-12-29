import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button } from '@mui/material'; // Import Material UI components
import HomePage from './components/HomePage';
import PhotoGallery from './components/PhotoGallery';
import TimelinePage from './components/TimelinePage';
import LoveLetter from './components/LoveLetter';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import FontAwesome

const theme = createTheme({
  palette: {
    primary: { main: '#d32f2f' },
    background: { default: '#ffe6e6' },
  },
});

function App() {
  const hearts = new Array(50).fill(0); 
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const playAudio = () => {
    const audio = new Audio("/test.mp3"); // Ensure the path is correct (audio file in public folder)
    audio.loop = true; // Loop the audio if desired
    audio.play().then(() => {
      setAudioPlayed(true);
    }).catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  // Refs for each section
  const homeRef = useRef(null);
  const galleryRef = useRef(null);
  const timelineRef = useRef(null);
  const letterRef = useRef(null);

  // Names for each section to display in the console log
  const sectionNames = ['HomePage', 'PhotoGallery', 'TimelinePage', 'LoveLetter'];

  const sectionRefs = [homeRef, galleryRef, timelineRef, letterRef];

  // Function to scroll to the specific section with delay
  const scrollToSection = (index) => {
    if (index >= 0 && index < sectionRefs.length) {
      const section = sectionRefs[index].current;
      console.log("Scrolling to:", sectionNames[index]); // Log the section name
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Delay the state update to ensure the scroll happens smoothly
        setTimeout(() => setCurrentIndex(index), 500);
      }
    }
  };

  // Use IntersectionObserver to track visibility of sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(ref => ref.current === entry.target);
            if (index !== -1) {
              console.log('Currently in view:', sectionNames[index]);
              setTimeout(() => setCurrentIndex(index), 500); // Set the current section index
            }
          }
        });
      },
      { threshold: 0.5 } // 50% of the section in view triggers observer
    );

    // Observe each section
    sectionRefs.forEach(ref => {
      if (ref.current) {
        console.log('Observing:', ref.current);
        observer.observe(ref.current);
      }
    });

    // Cleanup observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!audioPlayed && (
        <button onClick={playAudio}>Start Music</button>
      )}

      <div className="falling-hearts">
        {hearts.map((_, index) => (
          <div key={index} className="heart">
            <i className="fas fa-heart"></i> {/* FontAwesome heart icon */}
          </div>
        ))}
      </div>

      {/* Scrollspy Navigation */}
      <div className="fixed-buttons">
        <Button
          variant="contained"
          color="primary"
          onClick={() => scrollToSection(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          Up
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => scrollToSection(currentIndex + 1)}
          disabled={currentIndex === sectionRefs.length - 1}
        >
          Down
        </Button>
      </div>

      {/* Sections */}
      <Box sx={{ minHeight: '100vh', paddingBottom: 20 }} ref={homeRef}>
        <HomePage />
      </Box>

      <Box sx={{ minHeight: '100vh', paddingBottom: 20 }} ref={galleryRef}>
        <PhotoGallery />
      </Box>

      <Box sx={{ minHeight: '100vh', paddingBottom: 20 }} ref={timelineRef}>
        <TimelinePage />
      </Box>

      <Box sx={{ minHeight: '100vh', paddingBottom: 20 }} ref={letterRef}>
        <LoveLetter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
