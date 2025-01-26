import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const albumData = [
    { src: "0e22ebf7-52e6-4ac8-8da9-38f1da303de3.jpg", caption: "Photo: 0e22ebf7-52e6-4ac8-8da9-38f1da303de3.jpg" },
    { src: "7b761b60-9173-40a3-b371-35bca53a3e53.JPG", caption: "Photo: 7b761b60-9173-40a3-b371-35bca53a3e53.JPG" },
    { src: "befd1f9c-2cc3-4b02-a4a0-ead77b5f7dba.jpg", caption: "Photo: befd1f9c-2cc3-4b02-a4a0-ead77b5f7dba.jpg" },
    { src: "IMG_2582.JPG", caption: "Photo: IMG_2582.JPG" },
    { src: "IMG_3028.JPG", caption: "Photo: IMG_3028.JPG" },
    { src: "IMG_3474.DNG", caption: "Photo: IMG_3474.DNG" },
    { src: "IMG_4584.JPG", caption: "Photo: IMG_4584.JPG" },
    { src: "IMG_4584.MP4", caption: "Photo: IMG_4584.MP4" },
    { src: "IMG_5203.JPG", caption: "Photo: IMG_5203.JPG" },
    { src: "IMG_5203.MP4", caption: "Photo: IMG_5203.MP4" },
    { src: "IMG_5249.JPG", caption: "Photo: IMG_5249.JPG" },
    { src: "IMG_5249.MP4", caption: "Photo: IMG_5249.MP4" },
    { src: "IMG_5250.JPG", caption: "Photo: IMG_5250.JPG" },
    { src: "IMG_5250.MP4", caption: "Photo: IMG_5250.MP4" },
    { src: "IMG_5312.JPG", caption: "Photo: IMG_5312.JPG" },
    { src: "IMG_5594.JPG", caption: "Photo: IMG_5594.JPG" },
    { src: "IMG_5872.JPG", caption: "Photo: IMG_5872.JPG" },
    { src: "IMG_5872.MP4", caption: "Photo: IMG_5872.MP4" },
    { src: "IMG_6255.JPG", caption: "Photo: IMG_6255.JPG" },
    { src: "IMG_6255.MP4", caption: "Photo: IMG_6255.MP4" },
    { src: "IMG_6277.JPG", caption: "Photo: IMG_6277.JPG" },
    { src: "IMG_6291.JPG", caption: "Photo: IMG_6291.JPG" },
    { src: "IMG_6441.JPG", caption: "Photo: IMG_6441.JPG" },
    { src: "IMG_7066.JPG", caption: "Photo: IMG_7066.JPG" },
    { src: "IMG_7153.JPG", caption: "Photo: IMG_7153.JPG" },
    { src: "IMG_7221.JPG", caption: "Photo: IMG_7221.JPG" },
    { src: "IMG_7605.JPG", caption: "Photo: IMG_7605.JPG" },
    { src: "IMG_7605.MP4", caption: "Photo: IMG_7605.MP4" },
    { src: "IMG_7659.JPG", caption: "Photo: IMG_7659.JPG" },
    { src: "IMG_7659.MP4", caption: "Photo: IMG_7659.MP4" },
    { src: "IMG_7682.JPG", caption: "Photo: IMG_7682.JPG" },
    { src: "IMG_7682.MP4", caption: "Photo: IMG_7682.MP4" },
    { src: "IMG_7832.JPG", caption: "Photo: IMG_7832.JPG" },
    { src: "IMG_7832.MP4", caption: "Photo: IMG_7832.MP4" },
    { src: "IMG_7859.JPG", caption: "Photo: IMG_7859.JPG" },
    { src: "IMG_7859.MP4", caption: "Photo: IMG_7859.MP4" },
    { src: "IMG_7873.JPG", caption: "Photo: IMG_7873.JPG" },
    { src: "IMG_7873.MP4", caption: "Photo: IMG_7873.MP4" },
    { src: "IMG_7957.JPG", caption: "Photo: IMG_7957.JPG" },
    { src: "IMG_7957.MP4", caption: "Photo: IMG_7957.MP4" },
    { src: "IMG_8070.JPG", caption: "Photo: IMG_8070.JPG" },
    { src: "IMG_8160.JPG", caption: "Photo: IMG_8160.JPG" },
    { src: "IMG_8263.JPG", caption: "Photo: IMG_8263.JPG" },
    { src: "IMG_8314.JPG", caption: "Photo: IMG_8314.JPG" },
    { src: "IMG_8643.JPG", caption: "Photo: IMG_8643.JPG" },
    { src: "IMG_8695.JPG", caption: "Photo: IMG_8695.JPG" },
    { src: "IMG_8700.JPG", caption: "Photo: IMG_8700.JPG" },
    { src: "IMG_8773.JPG", caption: "Photo: IMG_8773.JPG" },
    { src: "IMG_8776.JPG", caption: "Photo: IMG_8776.JPG" },
    { src: "IMG_8778.JPG", caption: "Photo: IMG_8778.JPG" }
];


function PhotoAlbum() {
    return (
        <Box sx={{ mt: 5, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Our Memories Album
            </Typography>
            <Grid container spacing={4} sx={{ mt: 3 }}>
                {albumData.map((photo, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            component="img"
                            src={photo.src} // Image source
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '16px',
                                boxShadow: 3,
                            }}
                        />
                        <Typography
                            variant="body1"
                            sx={{
                                mt: 1,
                                fontSize: '1rem',
                            }}
                        >
                            {photo.caption} {/* Caption text */}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default PhotoAlbum;
