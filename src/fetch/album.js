const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const albumDir = path.join(__dirname, 'album');

app.get('/api/photos', (req, res) => {
    
  fs.readdir(albumDir, (err, files) => {
    console.log('photos');
    if (err) {
      return res.status(500).json({ error: 'Failed to list files' });
    }
    const photos = files.map(file => `/album/${file}`);
    res.json(photos);

  });
});

app.use('/album', express.static(albumDir));
