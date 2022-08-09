import React, {useState} from 'react'
import Home from './components/Home'
import Quiz from './components/Quiz'
// import blueBlob from './images/blueBlob.png';
// import yellowBlob from './images/yellowBlob.png';

function App() {

    const [isGameStarted, setIsGameStarted] = useState(false)

    const toggleIsGameStarted = () => setIsGameStarted(prevState => !prevState)

    return (
        <div className='container'>
            {
                !isGameStarted ? 
                <Home toggleIsGameStarted={toggleIsGameStarted} /> :
                <Quiz />
            }
        </div>
    )
    
}

export default App