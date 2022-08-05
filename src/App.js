import React, {useEffect, useState} from 'react'
import Home from './components/Home'
import Question from './components/Question'
import QuestionBlock from './components/QuestionBlock'
import { QuizProvider } from './components/QuizContext'
import {nanoid} from 'nanoid'

function App() {

  const [isPlaying, setIsPlaying] = useState(false)
  const [questions, setQuestions] = useState([])
  // const [score, setScore] = useState(0)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => {
              const filteredQuestions = data.results.filter(item => item.question.length < 100)
              setQuestions(() => filteredQuestions.slice(0,5).map(item => {
                return {
                  id: nanoid(),
                  questionText: item.question,
                  correctAnswer: item.correct_answer,
                  allAnswers: [...item.incorrect_answers, item.correct_answer].sort((a, b) => 0.5 - Math.random()),
                  selectedAnswer: "",
                  isCorrect: false,
                }
              }))})
  }, [])

  // const selectAnswer = id => {
  //   setQuestions(prevState => prevState.map(question => {
  //     return question.id === id ? {...question, isSelected: !question.isSelected} : question
  //   }))
  // }

  const toggleIsPlaying = () => setIsPlaying(prevState => !prevState)

  // const selectAnswer = (answer) => console.log(answer) //just for testing
  const selectAnswer = (answer) => {
    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {
        return question.correctAnswer === answer ?
          {...question, isCorrect: true, selectedAnswer: answer} :
          question
      })
    })
  }

  const toggleCorrect = (id) => setQuestions(prevQuestions => {
    prevQuestions.map(question => {
      return question.id === id ? 
        { ...question, isCorrect: !question.isCorrect } :
        question
    })
    // console.log(questions)
  })

  // const questionList = questions.map(question => {
  //     return (
  //       <Question 
  //         key={question.id}
  //         // id={question.id}
  //         questionText={question.questionText}
  //         correctAnswer={question.correctAnswer}
  //         allAnswers={question.allAnswers}
  //         selectAnswer={selectAnswer}
  //         toggleCorrect={toggleCorrect}
  //         />
  //         )
  //       })
        
  const questionBlockList = questions.map( question => {
    return (
      <QuestionBlock 
        key={question.id}
        questionText={question.questionText}
        correctAnswer={question.correctAnswer}
        allAnswers={question.allAnswers}
        selectAnswer={selectAnswer}
        selectedAnswer={question.selectedAnswer}
        isCorrect={question.isCorrect}
      />
      )
    }
  )

  return (
    <QuizProvider>
        <div className='container'>
          {!isPlaying ? <Home toggleIsPlaying={toggleIsPlaying} /> :
            <div className='quiz--container'>
              {/* {questions !== [] && questionList} */}
              {questions !== [] && questionBlockList}
              <button className='quiz--btn'>Check answers</button>
            </div>
          }
        </div>
      </QuizProvider>
  )

}

export default App
