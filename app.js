// Import necessary modules
const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const OpenAI = require('openai');
require('dotenv').config();

// Initialize Express app
const app = express();

// Configure OpenAI with API key and base URL
const openai = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

// Set up Handlebars as the view engine
app.engine("hbs", engine({ 
  extname: ".hbs",
  helpers: {
    eq: (a, b) => a === b // Helper function to check equality
  }
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory storage for chat history
let messageHistory = [
  { role: "system", content: process.env.SYSTEM_PROMPT }
];

// Route to render the main page
app.get('/', (req, res) => {
  res.render('index', { messages: messageHistory });
});

// Route to handle chat messages
app.post('/chat', async (req, res) => {
  const { message } = req.body;
  
  try {
    // Add user message to history
    const userMessage = { role: "user", content: message };
    messageHistory.push(userMessage);

    // Request AI completion
    const completion = await openai.chat.completions.create({
      messages: messageHistory,
      model: "llama3-8b-8192",
    });

    // Extract AI response and add to history
    const aiResponse = completion.choices[0].message;
    messageHistory.push({
      role: "assistant",
      content: aiResponse.content,
    });

    // Send response back to client
    res.json({ 
      success: true, 
      response: aiResponse.content,
      history: messageHistory 
    });
  } catch (error) {
    console.error('Error:', error); // Log any errors
    res.status(500).json({ success: false, error: 'Failed to get AI response' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));