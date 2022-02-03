import React, {useContext} from 'react'
import QuestionScore from '../../Components/QuestionScore/QuestionScore'
import ViewTitle from '../../Components/ViewTitle/ViewTitle'
import {Context} from '../../context/ContextProvider'
import './Results.scss'
const Results = () => {
  const {answers, setAnswers} = useContext(Context)
  const correctAnswer = answers.filter((answer) => answer.correct === true)
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
