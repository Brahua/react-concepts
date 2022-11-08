import React, { useState } from "react";

interface IProps {
    questions: any[];
}

const QuizNavbar = ({ questions }: IProps) => {
    const [questionIndex, setQuestionIndex] = useState<number>(0);

    const goBack = () => {
        setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1)
        //setQuestionIndex(questionIndex - 1);
    }
    const goNext = () => {
        setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1)
    }

    const onFirstQuestion = questionIndex === 0;
    const onLastQuestion = questionIndex === questions.length - 1;

    return (
        <div className="container">
            <span>Question {questionIndex + 1}</span>
            <div>
                <button onClick={goBack} disabled={onFirstQuestion}>Back</button>
            </div>
            <div>
                <button onClick={goNext} disabled={onLastQuestion}>Next</button>
            </div>
        </div>
    )

}

export default QuizNavbar;