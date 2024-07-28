import { useState } from "react";
import { Button } from "@mui/material";
import CreateQuestionModal from "../Questions.js/CreateQuestionModal";
import useQuestions from "@/hooks/useQuestions";
import QuestionList from "../Questions.js/QuestionList";

const QuestionPage = () => {
    const [questionModalOpen, setQuestionModalOpen] = useState(false);

    const {questions} = useQuestions()

    console.log(questions);
    
    if (!questions) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <Button
                variant="outlined"
                onClick={() => setQuestionModalOpen(true)}>+ Add</Button>
            <CreateQuestionModal
                questionType="text"
                open={questionModalOpen}
                onClose={() => setQuestionModalOpen(false)}>
            </CreateQuestionModal>
            <QuestionList
                questions={questions}
            ></QuestionList>
            

        </div>
    )
}

export default QuestionPage;