import React, {useState, useEffect, useContext} from 'react'
// import Home from './Home'
import AnswerButton from './AnswerButton'
import Question from './Question'
// import { QuizContext } from './QuizContext'
// import getQuestions from '../services/getQuestions'
import { nanoid } from 'nanoid'

function Quiz() {

    // const [isGameStarted, setIsGameStarted] = useState(false)
    // const [isGameOver, setIsGameOver] = useState(false)
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
    // const [questionsArray, setQuestionsArray] = useContext(QuizContext)
    const [quizData, setQuizData] = useState([])
    
    // const allQuestionsAnswered = quizData.every(question => question.selectedAnswer !== '')
    
    // const startGame = () => {
        //     setIsGameStarted(prevState => !prevState)
        // }

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
                .then(res => res.json())
                .then(data => setQuizData(parseArr(data.results)) )
        
        const parseArr = questionArr => {
          const newArr = []
          questionArr.forEach(question => {

            const incorrect = question.incorrect_answers.map(answer => {
                return {
                    value: answer,
                    id: nanoid(),
                    isHeld: false,
                    isCorrect: false
                }
            })

            const correct = {
                value: question.correct_answer,
                id: nanoid(),
                isHeld: false,
                isCorrect: true
            }

            const allAnswers = [...incorrect, correct].sort((a,b)=> 0.5 - Math.random())

            newArr.push( 
                {
                ...question,
                id: nanoid(),
                allAnswers: allAnswers,
                selectedAnswer: ""
                }
            )
            })
          return newArr.filter(question => question.question.length < 100).slice(0,5)
        }
    }, [])

    const selectAnswer = (questionId, answerId) => {
        setQuizData(prevQuizData => {
            return prevQuizData.map( question => {
                if (questionId !== question.id) {
                    return question
                } else {
                    const newAnswers = question.allAnswers.map(answer => {
                        return answer.id === answerId 
                            ? {...answer, isHeld: !answer.isHeld}
                            : {...answer, isHeld: false}
                    }) 
                    return {...question, allAnswers: newAnswers}
                }
            })
        })
    }
    
    const questionBlocks = quizData.map(question => {
        return (
            <div className='question--container'>
                <Question key={question.id} questionText={question.question} />
                <div className='question--answers'>
                    {question.allAnswers.map(answer => 
                        <AnswerButton 
                            key={answer.id} 
                            answer={answer.value}
                            id={answer.id}
                            questionId={question.id}
                            isHeld={answer.isHeld}
                            selectAnswer={selectAnswer}
                        />
                    )}
                </div>
                <div className='question--line'></div>
            </div>
        )
    })

    return (
        <div className='quiz--container'>
            {questionBlocks}
            <button className='quiz--btn'>Check answers</button>
        </div>
    )
}

export default Quiz