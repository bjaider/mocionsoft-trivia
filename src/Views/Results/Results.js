import React from 'react'
import QuestionScore from '../../Components/QuestionScore/QuestionScore'
import './Results.scss'
const Results = () => {
  return (
    <div className='results-container'>
      <div>
        <h2>You Scored</h2>
        <h2>3/10</h2>
      </div>
      <QuestionScore />
    </div>
  )
}

export default Results
