require('dotenv').config();
const express = require('express');
const db = require('./database');
const { generateStory } = require('./ai-service');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors()); 

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/stories/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await db.query(
      'SELECT * FROM stories WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la récupération' });
  }
});

// Endpoint to generate and save a story
app.post('/generate', async (req, res) => {
  // 1. Security check to avoid crash if the body is empty
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "Le corps de la requête est vide ou n'est pas au format JSON" });
  }

  const { userId, character, place, theme } = req.body;

  // Check if the mandatory fields are there
  if (!character || !place || !theme) {
    return res.status(400).json({ error: "Champs manquants (character, place ou theme)" });
  }

  try {
    const storyContent = await generateStory(character, place, theme);
    const result = await db.query(
      'INSERT INTO stories (user_id, character_name, place, theme, story_content) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [userId || 'guest', character, place, theme, storyContent]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Erreur détaillée:", err);
    res.status(500).json({ error: 'Erreur lors de la génération' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`AI Story Service running on port ${PORT}`);
});