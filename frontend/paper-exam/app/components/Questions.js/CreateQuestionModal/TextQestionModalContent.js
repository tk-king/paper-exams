import React, { useState } from 'react';
import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const TestQuestionModalContent = () => {
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');
    const [solution, setSolution] = useState('');
    const [points, setPoints] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ name, question, solution, points, difficulty });
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: 2,
                maxWidth: 500,
                mx: 'auto',
            }}
            onSubmit={handleSubmit}
        >
            <Typography variant="h6" gutterBottom>
                Add a Test Question
            </Typography>
            <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
            />
            <TextField
                label="Test Question"
                variant="outlined"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                fullWidth
                multiline
                rows={4}
            />
            <TextField
                label="Solution"
                variant="outlined"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                fullWidth
                multiline
                rows={4}
            />
            <TextField
                label="Points"
                type="number"
                variant="outlined"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                fullWidth
            />
            <FormControl fullWidth>
                <InputLabel>Difficulty</InputLabel>
                <Select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    label="Difficulty"
                >
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
};

export default TestQuestionModalContent;
