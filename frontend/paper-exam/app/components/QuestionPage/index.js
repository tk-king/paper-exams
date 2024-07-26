import { Button } from "@mui/material";
import CreateQuestionModal from "../Questions.js/CreateQuestionModal";

const QuestionPage = () => {

    return (
        <div>
            <Button variant="outlined">+ Add</Button>
            <CreateQuestionModal questionType="text" open={true}></CreateQuestionModal>
        </div>
    )
}

export default QuestionPage;