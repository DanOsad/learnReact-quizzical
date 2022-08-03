import React, {useEffect, useState} from 'react'
import Home from './components/Home'
import Question from './components/Question'
import {nanoid} from 'nanoid'

function App() {

  const [isPlaying, setIsPlaying] = useState(false)
  const [questions, setQuestions] = useState([])
  // const [correctCount, setCorrectCount] = useState(0)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => {
              const filteredQuestions = data.results.filter(item => item.question.length < 100)
              setQuestions(() => filteredQuestions.slice(0,5).map(item => {
                return {
                  ...item,
                  id: nanoid(),
                  isSelected: false,
                  allAnswers: [...item.incorrect_answers, item.correct_answer].sort((a, b) => 0.5 - Math.random())
                }
              }))})
  }, [])

  // const selectAnswer = id => {
  //   setQuestions(prevState => prevState.map(question => {
  //     return question.id === id ? {...question, isSelected: !question.isSelected} : question
  //   }))
  // }

  const toggleIsPlaying = () => setIsPlaying(prevState => !prevState)

  const selectAnswer = () => console.log("Answered!") //just for testing

  const questionsList = questions.map(question => {
      return (
        <Question 
          key={question.id}
          category={question.category}
          question={question.question}
          correct_answer={question.correct_answer}
          incorrect_answers={question.incorrect_answers}
          allAnswers={question.allAnswers}
          isSelected={question.isSelected}
          selectAnswer={selectAnswer}
        />
      )
  })

  return (
      <div className='container'>
        {!isPlaying ? <Home toggleIsPlaying={() => toggleIsPlaying()} /> :
          <div className='quiz--container'>
            {questions !== [] && questionsList}
            <button className='quiz--btn'>Check answers</button>
          </div>
        }
      </div>
  )

}

export default App
