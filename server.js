// backend/server.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// backend/server.js

const sequelize = require('./database');
const Artwork = require('./models/Artwork');
const BlogPost = require('./models/BlogPost');
const Comment = require('./models/Comment');

// Synchronize models with the database
(async () => {
  try {
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to synchronize models:', error);
  }
})();



// Middleware to parse JSON
app.use(express.json());

// Import routes
const artworkRoutes = require('./routes/artworkRoutes');
const blogPostRoutes = require('./routes/blogPostRoutes');
const commentRoutes = require('./routes/commentRoutes');

// Use routes
app.use('/api', artworkRoutes);
app.use('/api', blogPostRoutes);
app.use('/api', commentRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
