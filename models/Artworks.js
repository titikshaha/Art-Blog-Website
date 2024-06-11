// backend/models/Artwork.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Artwork = sequelize.define('Artwork', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Artwork;
// backend/models/Artwork.js
const sequelize = require('../database');
