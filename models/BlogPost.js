// backend/models/BlogPost.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const BlogPost = sequelize.define('BlogPost', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = BlogPost;
// backend/models/Artwork.js
const sequelize = require('../database');

