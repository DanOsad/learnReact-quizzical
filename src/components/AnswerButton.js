import React, {useState} from "react";
const he = require('he')

function AnswerButton(props) {

    const [isSelected, setIsSelected] = useState(false)

    const styles = {
        backgroundColor: isSelected ? "#D6DBF5" : ""
    }

    return (
        <button 
            type='button' 
            className='question--answer'
            isSelected={isSelected}
            style={styles}
            onClick={() => setIsSelected(prevState => !prevState)}
        >
            {he.decode(props.answer)}
        </button>
    )
}

export default AnswerButton