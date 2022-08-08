import {nanoid} from 'nanoid'

const formatQuestions = questions => {
    questions.map(question => ({
        questionText: question.question,
        correctAnswer: question.correct_answer,
        allAnswers: [
            ...question.incorrect_answers,
            question.correct_answer
            ].sort((a, b) => 0.5 - Math.random()),
}))}

const getQuestions = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return formatQuestions(data.results)
}

const getQuestions2 = url => {
    return fetch(url)
            .then(res => res.json())
            .then(data => data.results)
}

export default getQuestions