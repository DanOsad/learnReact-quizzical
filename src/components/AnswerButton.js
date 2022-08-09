import React from "react"
const he = require('he')

function AnswerButton(props) {

    const styles = {
        backgroundColor:  
                         props.isGameOver && props.answer === props.correctAnswer ? "#94D7A2" :
                         props.isGameOver && props.isHeld && props.answer !== props.correctAnswer ? "#F8BCBC" :
                         props.isGameOver && props.answer !== props.correctAnswer ? "" :
                         props.isGameOver && !props.isHeld ? "" :
                         props.isHeld ? "#D6DBF5" :
                         "",
        opacity: props.isGameOver && props.answer !== props.correctAnswer ? "0.5" : "1" 
    }

    return (
        <button 
            id={props.id}
            value={props.answer}
            type='button' 
            className='question--answer'
            style={styles}
            onClick={() => props.selectAnswer(props.questionId, props.id)}        
        >
            {he.decode(props.answer)}
        </button>
    )
}

export default AnswerButton