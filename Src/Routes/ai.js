const express = require('express');
const router = express.Router();

// Mock AI idea generator
router.post('/generate', (req, res) => {
  const { topic } = req.body;
  const ideas = [
    `Create a viral post about ${topic} for TikTok`,
    `Write a tweet thread on ${topic}`,
    `Design a LinkedIn carousel about ${topic}`
  ];
  res.json({ ideas });
});

module.exports = router;
