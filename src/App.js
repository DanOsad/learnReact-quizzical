import React, {useEffect, useState} from 'react'
import Question from './components/Question'
import {nanoid} from 'nanoid'

function App() {

  const [questions, setQuestions] = useState([])
  // const [correctCount, setCorrectCount] = useState(0)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
            .then(res => res.json())
            // .then(data => setQuestions(data.results.filter(obj => obj.question.length < 100).slice(0, 5)))}, [])
            .then(data => setQuestions(parseArr(data.results)) )
    
    const parseArr = arr => {
      const newArr = []
      arr.forEach(item => {
                newArr.push( 
                  {
                  ...item,
                  id: nanoid(),
                  isSelected: false
                  }
                )
              })
      return newArr.slice(0,5)
    }
  }, [])

  const selectAnswer = id => {
    setQuestions(prevState => prevState.map(question => {
      return question.id === id ? {...question, isSelected: !question.isSelected} : question
    }))
  }

  const questionsList = questions.map(question => {
      return (
        <Question 
          key={question.id}
          category={question.category}
          question={question.question}
          correct_answer={question.correct_answer}
          incorrect_answers={question.incorrect_answers}
          isSelected={question.isSelected}
          selectAnswer={selectAnswer}
        />
      )
  })


  return (
    <div className='container'>
      <div className='quiz--container'>
      {questions !== [] && questionsList}
      <button className='quiz--btn'>Check answers</button>
      </div>
    </div>
  )
}

export default App
