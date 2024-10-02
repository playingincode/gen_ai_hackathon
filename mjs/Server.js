import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());  // To parse JSON bodies
app.use(express.static('public'));  // Serve static files, if any

// Initialize GoogleGenerativeAI with API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Route to handle questions from the front end
app.post('/ask', async (req, res) => {
    const { question } = req.body;

    // Ensure there's a question to process
    if (!question) {
        return res.status(400).json({ error: 'No question provided' });
    }

    // Specify the Gemini model to use
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    try {
        const result = await model.generateContent([
            { text: "Assume you are an expert on this subject, know everything about it, and are constrained only to this text." },
            { text: question }
        ]);

        // Send the result back to the client
        res.json({ answer: result.response.text() });
    } catch (error) {
        console.error('Error processing the Gemini request:', error);
        res.status(500).json({ error: 'Failed to process your question' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
