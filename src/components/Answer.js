import React from '@react'

function Answer(props) {

    return (
        <button 
            key={nanoid()}
            type='button' 
            className='question--answer'
            style={styles}
            onClick={() => props.selectAnswer(props.id)}
        >
            {he.decode(answer)}
        </button>
    )
}

export default Answer