import React, {useContext} from 'react'
import AnswerButton from './AnswerButton'
import Question from './Question'
import { QuizContext } from './QuizContext'

function Quiz() {
    
    const [questions, setQuestions] = useContext(QuizContext)
    
    const questionBlocks = questions.map(question => {

        const allAnswers = [
            ...question.incorrect_answers,
            question.correct_answer
            ].sort((a, b) => 0.5 - Math.random())

        return (
            <div className='question--container'>
                <Question questionText={question.question} />
                <div className='question--answers'>
                    {allAnswers.map(answer => 
                        <AnswerButton answer={answer} />
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