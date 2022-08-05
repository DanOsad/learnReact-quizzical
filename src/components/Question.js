import React from "react"
import Answer from './Answer'
// import {nanoid} from "nanoid"
const he = require('he') //import HE library

function Question(props) {
    
    // const styles = {
    //     backgroundColor: props.isSelected ? "#D6DBF5" : "none"
    // }
    
    const displayAnswers = props.allAnswers.map(answer => {
            // return <button 
            //             key={props.correct_answer}
            //             type='button' 
            //             className='question--answer'
            //             style={styles}
            //             onClick={() => {
            //                 props.selectAnswer({
            //                     value: props.question, 
            //                     answer: props.correct_answer
            //                     })
            //                 }
            //         }>
            return <Answer 
                        key={answer}
                        id={props.id} 
                        value={answer} 
                        selectAnswer={props.selectAnswer} 
                        correctAnswer={props.correctAnswer}
                        allAnswers={props.allAnswers}
                        toggleCorrect={props.toggleCorrect}
                        />
                    //    {he.decode(answer)}
                //    </button>
        })
    
    return (
        <div className='question--container'>
            <span className='question--text'>{he.decode(props.questionText)}</span>
            <div className='question--answers'>
                {displayAnswers}
            </div>
            <div className='question--line'></div>
        </div>
    )
}

export default Question