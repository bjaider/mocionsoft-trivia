import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Button from '../../Components/Button'
import QuestionScore from '../../Components/QuestionScore'
import ViewTitle from '../../Components/ViewTitle'
import {Context} from '../../context/ContextProvider'
import './styles.scss'
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
      <div>
        {answers.map((answer, index) => (
          <QuestionScore
            question={answer.question}
            correct={answer.correct}
            index={index + 1}
          />
        ))}
      </div>
      <Button
        className={'play-again-button'}
        onClick={() => {
          history.push('/questions')
          setAnswers([])
        }}
      >
        PLAY AGAIN?
      </Button>
    </div>
  )
}

export default Results
