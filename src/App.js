import React, {useState} from 'react'
import Home from './components/Home'
import Quiz from './components/Quiz'
// import { QuizProvider } from './components/QuizContext'

function App() {

    const [isGameStarted, setIsGameStarted] = useState(false)

    const toggleIsGameStarted = () => setIsGameStarted(prevState => !prevState)

    return (
            // <QuizProvider>
                <div className='container'>
                    {
                        !isGameStarted ? 
                        <Home toggleIsGameStarted={toggleIsGameStarted} /> :
                        <Quiz />
                    }
                </div>
            // </QuizProvider>
    )
    
}

export default App

// <div className='quiz--container'>
// {/* <button className='quiz--btn'>Check answers</button> */}
// {/* </div> */}