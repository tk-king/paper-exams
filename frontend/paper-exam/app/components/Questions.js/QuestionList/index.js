import React, { useState } from 'react';
import { Card, CardContent, CardActions, Collapse, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandableCard = ({ question }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{question.name}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{question.question}</Typography>
                    <Typography paragraph>{question.answer}</Typography>
                    <Typography paragraph>Points: {question.points}</Typography>
                    <Typography paragraph>Difficulty: {question.difficulty}</Typography>
                    <Typography paragraph>Type: {question.type}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

const QuestionList = ({questions}) => {

    questions = [
        {
            "name": "Question 1",
            "question": "What is the capital of France?",
            "answer": "Paris",
            "points": 1,
            "difficulty": 3,
            "type": "text"
        }
    ]

    return (
        <div>
            {questions.map((question, index) => (
                <ExpandableCard key={index} question={question} />
            ))}
        </div>
    )
}

export default QuestionList;