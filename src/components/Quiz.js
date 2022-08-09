import React, {useState, useEffect} from 'react'
import AnswerButton from './AnswerButton'
import Question from './Question'
import { nanoid } from 'nanoid'

function Quiz() {

    const [isGameOver, setIsGameOver] = useState(false)
    const [quizData, setQuizData] = useState([])
    const [reset, setReset] = useState(false)

    useEffect(() => {

        setReset(false)
        setIsGameOver(false)

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
    }, [reset])

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
    
    /* GAME OVER LOGIC */
    let score = 0

    const allQuestionsAnswered = quizData.every(question => question.allAnswers.some(answer => answer.isHeld))

    const toggleIsGameOver = () => {setIsGameOver(prevState => !prevState)}

    if (isGameOver) {
        quizData.map(question => {
            return question.allAnswers.forEach(answer => {
                return answer.isHeld && answer.isCorrect ? score++ : score
            })
        })
    }

    /* QUESTIONS MAP */
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
                            selectAnswer={!isGameOver && selectAnswer}
                            correctAnswer={question.correct_answer}
                            isGameOver={isGameOver}
                        />
                    )}
                </div>
                <div className='question--line'></div>
            </div>
        )
    })

    /* DISPLAY OUTPUT */
    return (
        <div className='quiz--container'>
            {questionBlocks}
            {
                isGameOver
                ? 
                <div className='btn--container'>
                    <span className='score--text'>You scored {score}/{quizData.length} correct answers</span>
                    <button className='quiz--btn' onClick={() => setReset(prevState => !prevState)}>
                    Reset
                    </button>
                </div>
                :
                <div className='btn--container'>
                    <button className='quiz--btn' onClick={allQuestionsAnswered && toggleIsGameOver}>
                    Check Answers
                    </button>
                </div>
            }
        </div>
    )
}

export default Quiz