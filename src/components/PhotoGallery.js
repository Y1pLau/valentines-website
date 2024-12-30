import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';

const photos = [
  { src: 'IMG_4585.JPG', caption: 'Our first trip together' },
  { src: 'IMG_5249.JPEG', caption: 'A beautiful sunset we watched' },
  { src: '/images/photo3.jpg', caption: 'Cherished moments 💖' },
];

function PhotoGallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Adds navigation arrows
  };

  return (
    <Box sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Our Memories Together
      </Typography>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <Box
              component="img"
              src={photo.src}
              alt={photo.caption}
              sx={{
                maxWidth: '100%',
                maxHeight: '600px', // Increased max height for larger images
                width: 'auto', // Maintain aspect ratio
                height: 'auto', // Maintain aspect ratio
                borderRadius: '16px',
                display: 'block',
                margin: '0 auto', // Center the image horizontally
              }}
            />
            <Typography variant="body1" sx={{ mt: 2, fontSize: '1.2rem' }}>
              {photo.caption}
            </Typography>
          </div>
        ))}
      </Slider>
    </Box>
  );
}

export default PhotoGallery;
