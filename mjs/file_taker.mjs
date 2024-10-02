import express from 'express';
import { GoogleGenerativeAI} from '@google/generative-ai';
import { GoogleAIFileManager } from '@google/generative-ai/server';
import dotenv from 'dotenv';
import multer from 'multer';  // For handling file uploads
import fs from 'fs';
import cors from 'cors';

dotenv.config();

const app = express();
const upload = multer({ dest: 'uploads/' });  // Storing files temporarily in 'uploads' directory
const port = 3001;
app.use(cors());

// Initialize GoogleGenerativeAI and GoogleAIFileManager with your API_KEY
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const fileManager = new GoogleAIFileManager(process.env.API_KEY);

app.use(express.json());

// Endpoint to handle file uploads and questions
app.post('/process-file', upload.single('file'), async (req, res) => {
    if (!req.file || !req.body.question) {
        return res.status(400).json({ error: 'File and question required.' });
    }

    try {
        const filePath = req.file.path;
        const displayName = req.file.originalname;
        const mimeType = req.file.mimetype;

        // Upload the file to Google's FileManager
        const uploadResponse = await fileManager.uploadFile(filePath, { mimeType, displayName });
        console.log(`Uploaded file ${displayName} as: ${uploadResponse.file.uri}`);

        // Generate content using text and the uploaded file URI
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent([
            {
                fileData: {
                    mimeType: mimeType,
                    fileUri: uploadResponse.file.uri,
                },
            },
            { text: req.body.question },
        ]);

        // Cleanup: Remove the uploaded file from the server
        fs.unlinkSync(filePath);

        // Send the generated content back to the client
        res.json({ answer: result.response.text() });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to process the file and generate content.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
