import React, {useState, createContext} from "react";

export const QuizContext = createContext()


export const QuizProvider = (props) => {

    const quiz = async () => {
        const res = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
        const data = await res.json()
        const filteredQuestions = data.results.filter(item => item.question.length < 100)
        return filteredQuestions.slice(0,5).map(item => (
                {
                id: nanoid(),
                questionText: item.question,
                correctAnswer: item.correct_answer,
                allAnswers: [...item.incorrect_answers, item.correct_answer].sort((a, b) => 0.5 - Math.random()),
                selectedAnswer: "",
                isCorrect: false,
                }
            )
        )
    }

    const [quizData, setQuizData] = useState(quiz)

    return (
        <QuizContext.Provider>
            {props.children}
        </QuizContext.Provider>
    )
}