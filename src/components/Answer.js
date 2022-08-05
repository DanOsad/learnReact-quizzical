import React, {useState} from 'react'
const he = require('he')

function Answer(props) {

    // const answerObj = props.allAnswers.map(answer => (
    //     {
    //         id: props.id,
    //         value: answer, 
    //         isSelected: false, 
    //         correctAnswer: props.correctAnswer
    //     }
    //     ))
        
        // const [answers, setAnswers] = useState(answerObj)
        // const [answers, setAnswers] = useState(
        //     props.allAnswers.map(answer => (
        //         {

        //             id: props.id,
        //             value: answer, 
        //             isSelected: false, 
        //             correctAnswer: props.correctAnswer
        //         }
        //     ))
        // )

    const styles = {
        backgroundColor: props.isSelected ? "#D6DBF5" : "none"
    }

    // const isSelected = (event, value) => {
    //     if (event.target.value == value) {

    //     } 
    // }

    // const select = () => setAnswers(prevAnswers => {
    //     prevAnswers.map(answer => {
    //         if (answer.value) {

    //         }
    //     })
    // })

    // const selectAnswer = (selectedAnswer) => {
    //     if (selectedAnswer === props.correctAnswer) {
    //         props.toggleCorrect(props.id)
    //     }
    //     setAnswers(prevAnswers => prevAnswers.map(answer => {
    //         return selectedAnswer === answer.value ? 
    //         { ...answer, isSelected: true } :
    //         answer
    //     }))
    // }

    return (
        <button 
            key={props.correctAnswer} 
            type='button' 
            className='question--answer'
            onClick={() => props.selectAnswer(props.value)} 
            style={styles}
        >
            {he.decode(props.value)}
        </button>
    // return (
    //     <button 
    //         key={props.correct_answer}
    //         type='button' 
    //         className='question--answer'
    //         style={styles}
    //         onClick={() => props.selectAnswer(props.id)}
    //         isSelected={false}
    //     >
    //         {he.decode(answer)}
    //     </button>
    )
}

export default Answer