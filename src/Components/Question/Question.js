import React from 'react'
import './Questions.scss'
const Question = ({question, questionNumber, questionsTotal}) => {
  return (
    <div className='question-container'>
      <p className="remaining-questions">
        {`Question ${questionNumber} of ${questionsTotal}`}
      </p>
      <p className="question" >{question.question}</p>
    </div>
  )
}

export default Question
