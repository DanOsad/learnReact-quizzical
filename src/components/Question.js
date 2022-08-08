import React from "react";
const he = require('he')

const Question = (props) => {

    return (
        <span className='question--text'>
            {he.decode(props.questionText)}
        </span>
    )
}

export default Question