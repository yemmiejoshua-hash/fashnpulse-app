const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase client initialization (placeholder keys from .env)
const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'placeholder-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Fashnpulse Marketplace API' });
});

// Mock Products Route
app.get('/api/products', async (req, res) => {
  // TODO: Replace with actual Supabase DB fetching once keys are provided
  res.json({
    status: 'success',
    data: [
      { id: 1, title: 'Onyx Agbada Suite', price: 85000, category: 'Native Wear' },
      { id: 2, title: 'Sunset Midi Dress', price: 42000, category: 'Casual' },
    ]
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
