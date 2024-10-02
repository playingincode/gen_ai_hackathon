import React, { useState } from 'react';
import { Box, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Input } from '@mui/material';

function EduBot() {
    const [file, setFile] = useState(null);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [open, setOpen] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleSubmit = async () => {
        if (!file || !question.trim()) {
            alert('Both file and question are required.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('question', question);

        try {
            const response = await fetch('http://localhost:3001/process-file', {
                method: 'POST',
                body: formData,  // FormData will set the correct content-type header
            });
            const data = await response.json();
            setAnswer(data.answer);
            setOpen(true);
        } catch (error) {
            console.error('Error when fetching:', error);
            setAnswer('Failed to fetch answer.');
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 8
        }}>
            <Input
                type="file"
                onChange={handleFileChange}
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Ask your question"
                variant="outlined"
                fullWidth
                value={question}
                onChange={handleQuestionChange}
                sx={{ marginBottom: 2, maxWidth: 500 }}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Ask EduBot
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Response from EduBot</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {answer}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default EduBot;
