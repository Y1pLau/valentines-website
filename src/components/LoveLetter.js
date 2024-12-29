import React from 'react';
import { Box, Typography } from '@mui/material';

function LoveLetter() {
  return (
    <Box sx={{ marginBottom: 4, textAlign: 'center', padding: 4, backgroundColor: '#fff0f0', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'Cursive', color: '#d32f2f' }}>
        A Love Letter
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: '1.5', color: '#555' }}>
        Dear Victoria,
        <br /><br />
        On this special day, I just want to say how much you mean to me. You bring joy, love, and light into my life every single day. Your smile brightens my world, and your presence makes everything better. ❤️
        <br /><br />
        I feel so lucky to have you by my side, and I promise to cherish every moment we share together. Here’s to many more beautiful memories and a lifetime of love.
        <br /><br />
        Love always,  
        Sam
      </Typography>
    </Box>
  );
}

export default LoveLetter;
