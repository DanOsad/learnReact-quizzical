import React from 'react'
const he = require('he') //import HE library

function QuestionBlock(props) {

    const styles = {
        backgroundColor: props.isSelected ? "#D6DBF5" : "none"
    }

    const updateBtn = answer => {
        props.selectAnswer(answer)

    }

    const answerButtons = props.allAnswers.map(answer => {
        return (
            <button 
                type='button' 
                className='question--answer'
                onClick={() => updateBtn(answer)}
                // onClick={() => props.selectAnswer(answer)}
            >
                {he.decode(answer)}
            </button>
        )
    })

    return (
        <div className='question--container'>
            <span className='question--text'>{he.decode(props.questionText)}</span>
            <div className='question--answers'>
                {answerButtons}
            </div>
            <div className='question--line'></div>
        </div>
    )
}

export default QuestionBlock