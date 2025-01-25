const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // You can change this port
const albumDir = path.join(__dirname, 'album');

// Serve photos from the "album" directory
app.use('/album', express.static(albumDir));

// API to fetch all photo filenames in the "album" folder
app.get('/api/photos', (req, res) => {
    console.log('Fetching photo list...');
    fs.readdir(albumDir, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return res.status(500).json({ error: 'Failed to read directory' });
      }
      console.log('Files in album:', files);
      const photos = files.map(file => ({
        src: `/album/${file}`,
        caption: `Photo: ${file}`
      }));
      console.log('Photos to send:', photos);
      res.json(photos);
    });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
