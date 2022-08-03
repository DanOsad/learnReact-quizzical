import React from "react"

function Home(props) {
    return (
        <div className='home--container'>
            <h1 className='home--title'>Quizzacle</h1>
            <span className='home--description'>Test your knowledge!</span>
            <button 
                className='home--btn' 
                type='button'
                onClick={props.toggleIsPlaying}>
                    Start quiz
            </button>
        </div>
    )
}

export default Home