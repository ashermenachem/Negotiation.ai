// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/negotiation', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// OpenAI setup
const openai = new OpenAI({
  apiKey: 'your_openai_api_key_here',
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
