import React, {useState, createContext, useContext} from "react";

export const QuizContext = createContext()

export const useQuizContext = () => useContext(QuizContext)

export const QuizProvider = props => {
     
    const [questions, setQuestions] = useState([
        {
            category: "Entertainment: Video Games",
            type: "multiple",
            difficulty: "easy",
            question: "Who is Sonic&#039;s sidekick?",
            correct_answer: "Tails",
            incorrect_answers: [
                "Shadow",
                "Amy",
                "Knuckles"
            ]
        },
        {
            category: "Entertainment: Video Games",
            type: "multiple",
            difficulty: "easy",
            question: "What is the name of the main healing item in Dark Souls?",
            correct_answer: "Estus Flask",
            incorrect_answers: [
                "Health Potion",
                "Orange Juice",
                "Ashen Flask"
            ]
        },
        {
            category: "Entertainment: Video Games",
            type: "multiple",
            difficulty: "easy",
            question: "The name of the Metroid series comes from what?",
            correct_answer: "An enemy in the game",
            incorrect_answers: [
                "The final boss&#039;s name",
                "The main character&#039;s name",
                "A spaceship&#039;s name"
            ]
        },
        {
            category: "Entertainment: Video Games",
            type: "multiple",
            difficulty: "easy",
            question: "In &quot;Mario &amp; Sonic at the Olympic Games&quot;, characters are split into how many types?",
            correct_answer: "4",
            incorrect_answers: [
                "6",
                "5",
                "3"
            ]
        },
        {
            category: "Entertainment: Japanese Anime & Manga",
            type: "multiple",
            difficulty: "easy",
            question: "In the 2012 animated film &quot;Wolf Children&quot;, what are the names of the wolf children?",
            correct_answer: "Ame &amp; Yuki",
            incorrect_answers: [
                "Hana &amp; Yuki",
                "Ame &amp; Hana",
                "Chuck &amp; Anna"
            ]
        }
    ])

    return (
        <QuizContext.Provider value={[questions, setQuestions]}>
            {props.children}
        </QuizContext.Provider>
    )
}