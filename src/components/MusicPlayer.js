import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import { PlayArrow, Pause, SkipNext, SkipPrevious, VolumeUp, MusicNote } from '@mui/icons-material';

const playlist = [
  { title: "Wherever You Are", artist: "ONE OK ROCK", src: "https://y1plau.github.io/valentines-website/OneOkRock-WhereverYouAre.mp3", cover: "download.jpg" },
  { title: "Sukidakara", artist: "Yuika", src: "https://y1plau.github.io/valentines-website/Yuika_Ren_-_Sukidakara_(Hydr0.org).mp3", cover: "414F8C+obOL._UXNaN_FMjpg_QL85_.jpg" },
  { title: "Perfect", artist: "Ed Sheeran", src: "https://y1plau.github.io/valentines-website/OneOkRock-WhereverYouAre.mp3", cover: "/images/edsheeran.jpg" },
];

function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(new Audio(playlist[currentTrack].src));

  useEffect(() => {
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeTrack = (direction) => {
    let newIndex = (currentTrack + direction + playlist.length) % playlist.length;
    setCurrentTrack(newIndex);
    audioRef.current.pause();
    audioRef.current = new Audio(playlist[newIndex].src);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <>
      {/* Floating Music Icon */}
      {!isOpen && (
        <IconButton
          onClick={() => setIsOpen(true)}
          sx={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            backgroundColor: '#d32f2f',
            color: 'white',
            borderRadius: '50%',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
            padding: '12px',
            zindex: '100',
          }}
        >
          <MusicNote sx={{ fontSize: '30px' }} />
        </IconButton>
      )}

      {/* Music Player Box (Apple Style) */}
      {isOpen && (
        <Box
          sx={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#222',
            padding: '15px',
            borderRadius: '20px',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.4)',
            color: 'white',
            minWidth: '280px',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Album Art */}
          <img
            src={playlist[currentTrack].cover}
            alt="Album Cover"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              marginBottom: '10px',
            }}
          />

          {/* Song Info */}
          <Box sx={{ textAlign: 'center', marginBottom: '10px' }}>
            <Typography variant="body2" noWrap>{playlist[currentTrack].title}</Typography>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>{playlist[currentTrack].artist}</Typography>
          </Box>

          {/* Controls */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            <IconButton onClick={() => changeTrack(-1)} color="inherit">
              <SkipPrevious sx={{ fontSize: '30px' }} />
            </IconButton>
            <IconButton onClick={togglePlay} color="inherit">
              {isPlaying ? <Pause sx={{ fontSize: '30px' }} /> : <PlayArrow sx={{ fontSize: '30px' }} />}
            </IconButton>
            <IconButton onClick={() => changeTrack(1)} color="inherit">
              <SkipNext sx={{ fontSize: '30px' }} />
            </IconButton>
          </Box>

          {/* Close Button */}
          <Button
            onClick={() => setIsOpen(false)}
            sx={{
              color: 'white',
              fontSize: '12px',
              marginTop: '10px',
              textTransform: 'none',
            }}
          >
            Close
          </Button>
        </Box>
      )}
    </>
  );
}

export default MusicPlayer;
