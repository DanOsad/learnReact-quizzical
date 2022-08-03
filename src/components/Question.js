import React from "react"
import {nanoid} from "nanoid"
const he = require('he') //import HE library

function Question(props) {
    
    const allAnswers = [...props.incorrect_answers, props.correct_answer].sort((a, b) => 0.5 - Math.random())
    
    const styles = {
        backgroundColor: props.isSelected ? "#D6DBF5" : "none"
    }
    
    const displayAnswers = allAnswers.map(answer => {
            return <button 
                        key={nanoid()}
                        type='button' 
                        className='question--answer'
                        style={styles}
                        onClick={() => props.selectAnswer(props.id)}
                   >
                       {he.decode(answer)}
                   </button>
        })
    

    return (
        <div className='question--container'>
            <span className='question--text'>{he.decode(props.question)}</span>
            <div className='question--answers'>
                {displayAnswers}
            </div>
            <div className='question--line'></div>
        </div>
    )
}

export default Question