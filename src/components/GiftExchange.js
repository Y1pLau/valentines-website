// components/GiftExchange.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const giftsData = {
  toGirlfriend: [
    {
      name: "Rose Gold Necklace",
      description: "A beautiful rose gold necklace with a heart pendant",
      date: "Valentine's Day 2024",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      name: "Custom Photo Book",
      description: "A personalized photo book of our memories",
      date: "Anniversary 2024",
      image: "https://via.placeholder.com/150"
    }
  ],
  fromGirlfriend: [
    {
      name: "Leather Wallet",
      description: "A sleek black leather wallet",
      date: "Birthday 2024",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Handmade Scarf",
      description: "A cozy scarf she knitted herself",
      date: "Christmas 2024",
      image: "https://via.placeholder.com/150"
    }
  ]
};

function GiftExchange() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4 }}>
        Our Gift Exchange
      </Typography>

      {/* Gifts to Girlfriend */}
      <Typography variant="h5" sx={{ color: 'white', mb: 2 }}>
        Gifts I Gave You
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {giftsData.toGirlfriend.map((gift, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <CardMedia
                component="img"
                height="150"
                image={gift.image}
                alt={gift.name}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  {gift.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  {gift.description}
                </Typography>
                <Typography variant="caption" sx={{ color: 'white' }}>
                  {gift.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Gifts from Girlfriend */}
      <Typography variant="h5" sx={{ color: 'white', mb: 2 }}>
        Gifts You Gave Me
      </Typography>
      <Grid container spacing={3}>
        {giftsData.fromGirlfriend.map((gift, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <CardMedia
                component="img"
                height="150"
                image={gift.image}
                alt={gift.name}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  {gift.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  {gift.description}
                </Typography>
                <Typography variant="caption" sx={{ color: 'white' }}>
                  {gift.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GiftExchange;