// backend/routes/artworkRoutes.js

const express = require('express');
const router = express.Router();
const Artwork = require('../models/Artwork');

// Get all artworks
router.get('/artworks', async (req, res) => {
  try {
    const artworks = await Artwork.findAll();
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve artworks' });
  }
});

// Get artwork by ID
router.get('/artworks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const artwork = await Artwork.findByPk(id);
    if (!artwork) {
      return res.status(404).json({ error: 'Artwork not found' });
    }
    res.json(artwork);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve artwork' });
  }
});

// Create artwork
router.post('/artworks', async (req, res) => {
  const { title, description, imageUrl } = req.body;
  try {
    const artwork = await Artwork.create({ title, description, imageUrl });
    res.status(201).json(artwork);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create artwork' });
  }
});

// Update artwork
router.put('/artworks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, imageUrl } = req.body;
  try {
    const artwork = await Artwork.findByPk(id);
    if (!artwork) {
      return res.status(404).json({ error: 'Artwork not found' });
    }
    await artwork.update({ title, description, imageUrl });
    res.json(artwork);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update artwork' });
  }
});

// Delete artwork
router.delete('/artworks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const artwork = await Artwork.findByPk(id);
    if (!artwork) {
      return res.status(404).json({ error: 'Artwork not found' });
    }
    await artwork.destroy();
    res.json({ message: 'Artwork deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete artwork' });
  }
});

module.exports = router;
