import React, {useState} from 'react'
import Home from './components/Home'
import Quiz from './components/Quiz'
import { QuizProvider } from './components/QuizContext'

function App() {

    const [isPlaying, setIsPlaying] = useState(false)

    const toggleIsPlaying = () => setIsPlaying(prevState => !prevState)

    return (
            <QuizProvider>
                <div className='container'>
                    {
                        !isPlaying ? 
                        <Home toggleIsPlaying={toggleIsPlaying} /> :
                        <Quiz />
                    }
                </div>
            </QuizProvider>
    )
    
}

export default App

// <div className='quiz--container'>
// {/* <button className='quiz--btn'>Check answers</button> */}
// {/* </div> */}