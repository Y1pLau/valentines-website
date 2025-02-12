import React, { useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Dialog,
    DialogContent,
    IconButton,
    Card,
    CardActionArea,
    CardMedia,
    CardContent
} from "@mui/material";
import { Close } from "@mui/icons-material";

// Example albums with grouped photos
const albums = [
    {
        name: "Kyoto Trip",
        date: "2024-06-21",
        photos: [
            { src: "https://y1plau.github.io/valentines-website/a1.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a2.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a3.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a4.jpg" },
            { src: "https://y1plau.github.io/valentines-website/a5.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a6.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a7.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a8.jpg" },
            { src: "https://y1plau.github.io/valentines-website/a9.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a10.jpg" },
            { src: "https://y1plau.github.io/valentines-website/a11.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a12.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a13.jpg" },
            { src: "https://y1plau.github.io/valentines-website/a14.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a15.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a16.jpg" },
            { src: "https://y1plau.github.io/valentines-website/a17.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a18.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a19.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a20.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a21.GIF" },
            { src: "https://y1plau.github.io/valentines-website/a22.jpg" },
            { src: "https://y1plau.github.io/valentines-website/a23.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a24.JPG" },
            { src: "https://y1plau.github.io/valentines-website/a25.JPG" },
            
        ],
    },
    {
        name: "Other",
        date: "2023-2025",
        photos: [
            { src: "https://y1plau.github.io/valentines-website/IMG_4584.JPG" },
            { src: "https://y1plau.github.io/valentines-website/IMG_4584.MP4" },
            { src: "https://y1plau.github.io/valentines-website/0e22ebf7-52e6-4ac8-8da9-38f1da303de3.jpg" },
            { src: "https://y1plau.github.io/valentines-website/7b761b60-9173-40a3-b371-35bca53a3e53.JPG"},
            { src: "https://y1plau.github.io/valentines-website/befd1f9c-2cc3-4b02-a4a0-ead77b5f7dba.jpg"},
            { src: "https://y1plau.github.io/valentines-website/IMG_2582.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_3028.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_3474.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_4584.JPG" },
            { src: "https://y1plau.github.io/valentines-website/IMG_4584.MP4" },
            { src: "https://y1plau.github.io/valentines-website/IMG_5203.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_5203.MP4"},
            { src: "https://y1plau.github.io/valentines-website/IMG_5249.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_5249.MP4"},
            { src: "https://y1plau.github.io/valentines-website/IMG_5250.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_5250.MP4"},
            { src: "https://y1plau.github.io/valentines-website/IMG_5312.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_5594.JPG" },
            { src: "https://y1plau.github.io/valentines-website/IMG_5872.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_5872.MP4"},
            { src: "https://y1plau.github.io/valentines-website/IMG_6255.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_6255.MP4"},
            { src: "https://y1plau.github.io/valentines-website/IMG_6277.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_6291.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_6441.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7066.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7153.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7221.JPG" },
            { src: "https://y1plau.github.io/valentines-website/IMG_7605.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7605.MP4"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7659.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7659.MP4"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7682.JPG" },
            { src: "https://y1plau.github.io/valentines-website/IMG_7682.MP4"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7832.JPG" },
            { src: "https://y1plau.github.io/valentines-website/IMG_7832.MP4" },
            { src: "https://y1plau.github.io/valentines-website/IMG_7859.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7859.MP4"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7873.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7873.MP4"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7957.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_7957.MP4"},
            { src: "https://y1plau.github.io/valentines-website/IMG_8070.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_8160.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_8263.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_8314.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_8643.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_8695.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_8700.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_8773.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_8776.JPG"},
            { src: "https://y1plau.github.io/valentines-website/IMG_8778.JPG"}
        ],
    },
    {
        name: "Sapporo Memories",
        date: "2025-01-09",
        photos: [
            { src: "https://y1plau.github.io/valentines-website/1.jpg" },
            { src: "https://y1plau.github.io/valentines-website/2.jpg" },
            { src: "https://y1plau.github.io/valentines-website/3.jpg" },
            { src: "https://y1plau.github.io/valentines-website/4.jpg" },
            { src: "https://y1plau.github.io/valentines-website/5.jpg" },
            { src: "https://y1plau.github.io/valentines-website/6.jpg" },
            { src: "https://y1plau.github.io/valentines-website/7.jpg" },
            { src: "https://y1plau.github.io/valentines-website/8.jpg" },
            { src: "https://y1plau.github.io/valentines-website/9.jpg" },
            { src: "https://y1plau.github.io/valentines-website/10.jpg" },
            { src: "https://y1plau.github.io/valentines-website/11.jpg" },
            { src: "https://y1plau.github.io/valentines-website/12.jpg" },
            { src: "https://y1plau.github.io/valentines-website/13.jpg" },
            { src: "https://y1plau.github.io/valentines-website/14.jpg" },
            { src: "https://y1plau.github.io/valentines-website/15.jpg" },
            { src: "https://y1plau.github.io/valentines-website/16.jpg" },
            { src: "https://y1plau.github.io/valentines-website/17.jpg" },
            { src: "https://y1plau.github.io/valentines-website/19.jpg" },
            { src: "https://y1plau.github.io/valentines-website/20.jpg" },
            { src: "https://y1plau.github.io/valentines-website/21.jpg" },
            

        ],
    },
];

function PhotoAlbum() {
    const [openAlbum, setOpenAlbum] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [openPreview, setOpenPreview] = useState(false);
    const [previewSrc, setPreviewSrc] = useState(null);

    // Open album modal
    const handleOpenAlbum = (album) => {
        setSelectedAlbum(album);
        setOpenAlbum(true);
    };

    // Open image preview
    const handleOpenPreview = (src) => {
        setPreviewSrc(src);
        setOpenPreview(true);
    };

    // Close modals
    const handleClose = () => {
        setOpenAlbum(false);
        setSelectedAlbum(null);
    };

    const handleClosePreview = () => {
        setOpenPreview(false);
        setPreviewSrc(null);
    };

    return (
        <Box sx={{ mt: 5, textAlign: "center", fontFamily: "'San Francisco', sans-serif" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "600", letterSpacing: "0.5px" }}>
                Our Memories Album
            </Typography>

            <Grid container spacing={2} sx={{ mt: 3 }} justifyContent="center">
                {albums.map((album, index) => {
                    const albumPreview = album.photos[0]?.src; // First image as preview
                    return (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Card
                                sx={{
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "16px",
                                    cursor: "pointer",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                                onClick={() => handleOpenAlbum(album)}
                            >
                                <CardActionArea>
                                    {albumPreview && (
                                        <CardMedia
                                            component="img"
                                            image={albumPreview}
                                            alt={album.name}
                                            sx={{
                                                objectFit: "cover",
                                                width: "100%",
                                                height: "180px",
                                                borderRadius: "16px 16px 0 0",
                                            }}
                                        />
                                    )}
                                    <CardContent sx={{ p: 2, textAlign: "left" }}>
                                        <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "16px" }}>
                                            {album.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {album.date}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            {/* Album Modal with Grid Photos */}
            <Dialog open={openAlbum} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogContent sx={{ position: "relative", p: 3 }}>
                    {/* Close Button */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            color: "black",
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            borderRadius: "50%",
                        }}
                    >
                        <Close />
                    </IconButton>

                    {selectedAlbum && (
                        <Box>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: "600" }}>
                                {selectedAlbum.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {selectedAlbum.date}
                            </Typography>

                            <Grid container spacing={2}>
                                {selectedAlbum.photos.map((photo, idx) => (
                                    <Grid item xs={6} sm={4} key={idx}>
                                        <Card
                                            sx={{
                                                cursor: "pointer",
                                                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                                                borderRadius: "12px",
                                                overflow: "hidden",
                                            }}
                                            onClick={() => handleOpenPreview(photo.src)}
                                        >
                                            {photo.src.endsWith(".MP4") ? (
                                                <video
                                                    src={photo.src}
                                                    style={{
                                                        width: "100%",
                                                        borderRadius: "8px",
                                                        objectFit: "contain",
                                                    }}
                                                    autoPlay
                                                    loop
                                                    muted
                                                />
                                            ) : (
                                                <CardMedia
                                                    component="img"
                                                    image={photo.src}
                                                    alt={`Photo ${idx}`}
                                                    sx={{
                                                        objectFit: "contain",
                                                        width: "100%",
                                                        height: "auto",
                                                    }}
                                                />
                                            )}
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )}
                </DialogContent>
            </Dialog>

            {/* Image Preview Modal */}
            <Dialog open={openPreview} onClose={handleClosePreview} maxWidth="lg">
                <DialogContent sx={{ position: "relative", textAlign: "center", p: 2 }}>
                    <IconButton
                        onClick={handleClosePreview}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            color: "black",
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            borderRadius: "50%",
                        }}
                    >
                        <Close />
                    </IconButton>

                    {previewSrc?.endsWith(".MP4") ? (
                        <video src={previewSrc} controls style={{ maxWidth: "100%", maxHeight: "90vh" }} />
                    ) : (
                        <img src={previewSrc} alt="Preview" style={{ maxWidth: "100%", maxHeight: "90vh" }} />
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default PhotoAlbum;
