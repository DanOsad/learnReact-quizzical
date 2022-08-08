import React, {useState} from "react";
const he = require('he')

function AnswerButton(props) {

    const [isSelected, setIsSelected] = useState(false)

    const styles = {
        backgroundColor: props.isHeld ? "#D6DBF5" : ""
    }

    return (
        <button 
            id={props.id}
            value={props.answer}
            type='button' 
            className='question--answer'
            // isSelected={isSelected}
            style={styles}
            onClick={() => props.selectAnswer(props.questionId, props.id)}        
        >
            {he.decode(props.answer)}
        </button>
    )
}

export default AnswerButton