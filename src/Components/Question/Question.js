import React from 'react'

const Question = ({question,questionNumber,questionsTotal}) => {
console.log(question)
  return <div>
      <span>
          {`Question ${questionNumber} of ${questionsTotal}`}
      </span>
      <p>
          {question.question}
      </p>
  </div>
}

export default Question
