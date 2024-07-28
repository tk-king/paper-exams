import { useState, useEffect } from "react";
import { getQuestions } from "@/api/question";

const useQuestions = () => {
    const [questions, setQuestions] = useState([]);

    const fetchQuestions = async () => {
        try {
            const res = await getQuestions();
            setQuestions(res);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    return { questions };
}

export default useQuestions;