import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import QuestionScore from '../../Components/QuestionScore/QuestionScore'
import ViewTitle from '../../Components/ViewTitle/ViewTitle'
import {Context} from '../../context/ContextProvider'
import './Results.scss'
const Results = () => {
  const {answers, setAnswers, gameOver} = useContext(Context)
  let history = useHistory()

  const correctAnswer = answers.filter((answer) => answer.correct === true)
  if (answers.length < 10 && !gameOver) {
    history.push('/questions')
  } else {
    for (let index = answers.length; index < 10; index++) {
      setAnswers([...answers, {question: '', correct: false}])
    }
  }
  return (
    <div className="results-container">
      <ViewTitle
        text={`You Scored ${correctAnswer.length} of 10`}
        className={'results-title'}
      />
      {answers.map((answer, index) => (
        <QuestionScore
          question={answer.question}
          correct={answer.correct}
          index={index + 1}
        />
      ))}
    </div>
  )
}

export default Results
