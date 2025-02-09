import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const albumData = [
    { src: "https://y1plau.github.io/valentines-website/0e22ebf7-52e6-4ac8-8da9-38f1da303de3.jpg", caption: "Photo: 0e22ebf7-52e6-4ac8-8da9-38f1da303de3.jpg" },
    { src: "https://y1plau.github.io/valentines-website/7b761b60-9173-40a3-b371-35bca53a3e53.JPG", caption: "Photo: 7b761b60-9173-40a3-b371-35bca53a3e53.JPG" },
    { src: "https://y1plau.github.io/valentines-website/befd1f9c-2cc3-4b02-a4a0-ead77b5f7dba.jpg", caption: "Photo: befd1f9c-2cc3-4b02-a4a0-ead77b5f7dba.jpg" },
    { src: "https://y1plau.github.io/valentines-website/IMG_2582.JPG", caption: "Photo: IMG_2582.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_3028.JPG", caption: "Photo: IMG_3028.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_3474.JPG", caption: "Photo: IMG_3474.DNG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_4584.JPG", caption: "Photo: IMG_4584.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_4584.MP4", caption: "Photo: IMG_4584.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_5203.JPG", caption: "Photo: IMG_5203.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_5203.MP4", caption: "Photo: IMG_5203.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_5249.JPG", caption: "Photo: IMG_5249.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_5249.MP4", caption: "Photo: IMG_5249.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_5250.JPG", caption: "Photo: IMG_5250.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_5250.MP4", caption: "Photo: IMG_5250.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_5312.JPG", caption: "Photo: IMG_5312.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_5594.JPG", caption: "Photo: IMG_5594.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_5872.JPG", caption: "Photo: IMG_5872.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_5872.MP4", caption: "Photo: IMG_5872.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_6255.JPG", caption: "Photo: IMG_6255.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_6255.MP4", caption: "Photo: IMG_6255.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_6277.JPG", caption: "Photo: IMG_6277.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_6291.JPG", caption: "Photo: IMG_6291.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_6441.JPG", caption: "Photo: IMG_6441.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7066.JPG", caption: "Photo: IMG_7066.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7153.JPG", caption: "Photo: IMG_7153.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7221.JPG", caption: "Photo: IMG_7221.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7605.JPG", caption: "Photo: IMG_7605.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7605.MP4", caption: "Photo: IMG_7605.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7659.JPG", caption: "Photo: IMG_7659.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7659.MP4", caption: "Photo: IMG_7659.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7682.JPG", caption: "Photo: IMG_7682.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7682.MP4", caption: "Photo: IMG_7682.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7832.JPG", caption: "Photo: IMG_7832.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7832.MP4", caption: "Photo: IMG_7832.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7859.JPG", caption: "Photo: IMG_7859.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7859.MP4", caption: "Photo: IMG_7859.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7873.JPG", caption: "Photo: IMG_7873.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7873.MP4", caption: "Photo: IMG_7873.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7957.JPG", caption: "Photo: IMG_7957.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_7957.MP4", caption: "Photo: IMG_7957.MP4" },
    { src: "https://y1plau.github.io/valentines-website/IMG_8070.JPG", caption: "Photo: IMG_8070.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_8160.JPG", caption: "Photo: IMG_8160.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_8263.JPG", caption: "Photo: IMG_8263.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_8314.JPG", caption: "Photo: IMG_8314.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_8643.JPG", caption: "Photo: IMG_8643.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_8695.JPG", caption: "Photo: IMG_8695.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_8700.JPG", caption: "Photo: IMG_8700.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_8773.JPG", caption: "Photo: IMG_8773.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_8776.JPG", caption: "Photo: IMG_8776.JPG" },
    { src: "https://y1plau.github.io/valentines-website/IMG_8778.JPG", caption: "Photo: IMG_8778.JPG" }
];


function PhotoAlbum() {
    return (
        <Box sx={{ mt: 5, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Our Memories Album
            </Typography>
            <Box sx={{ maxHeight: '80vh', overflowY: 'auto', mt: 3 }}>
                <Grid container spacing={4}>
                    {albumData.map((media, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            {media.src.endsWith(".MP4") ? (
                                <Box
                                    component="video"
                                    src={media.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '16px',
                                        boxShadow: 3,
                                    }}
                                />
                            ) : (
                                <Box
                                    component="img"
                                    src={media.src}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '16px',
                                        boxShadow: 3,
                                    }}
                                />
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default PhotoAlbum;