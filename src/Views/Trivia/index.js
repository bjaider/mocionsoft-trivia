import React, {useContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import CategoryImage from '../../Components/CategoryImage'
import Question from '../../Components/Question'
import useGetQuestions from '../../Hooks/useGetQuestions'
import Button from '../../Components/Button'
import Countdown from '../../Components/Countdown'
import {Context} from '../../context/ContextProvider'
import ViewTitle from '../../Components/ViewTitle'
import Lottie from 'react-lottie'
import animationData from '../../Lotties/loading.json'
import {Bounce} from 'react-awesome-reveal'
import Categories from '../../helpers/Categories'
import './styles.scss'
const Trivia = () => {
  let history = useHistory()
  const {questionsData} = useGetQuestions()
  const [question, setQuestion] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(1)
  const {answers, setAnswers} = useContext(Context)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    if (questionsData) {
      setQuestion(questionsData[questionNumber - 1])
    }
  }, [questionNumber, questionsData])
  const answerOnClick = (answer) => {
    if (question.correct_answer === answer) {
      setAnswers([...answers, {question: question.question, correct: true}])
    } else {
      setAnswers([...answers, {question: question.question, correct: false}])
    }
    if (questionNumber < 10) {
      setQuestionNumber(questionNumber + 1)
    } else {
      history.push('/results')
    }
  }
  const closeButtonOnClick = () => {
    history.push('/')
  }
  return (
    <div className="trivia-container">
      {questionsData ? (
        <>
          <div className="trivia-top">
            <Button
              className={'close-button'}
              onClick={() => {
                closeButtonOnClick()
                setAnswers([])
              }}
            >
              <img
                src={
                  'https://res.cloudinary.com/dhxg3zyjz/image/upload/v1643870057/MocionSoft/close_1_m5c4mx.png'
                }
                width={42}
                alt="Close Button"
              />
            </Button>

            <Countdown time={120} questionNumber={questionNumber} />
          </div>
          <ViewTitle text={question.category} className={'trivia-title'} />
          <CategoryImage src={Categories(question.category)} alt={'Category'} />
          <Question
            question={question}
            questionNumber={questionNumber}
            questionsTotal={10}
          />
          <div className="answer-buttons">
            <Bounce delay={200}>
              <Button
                className="answer-button"
                onClick={() => answerOnClick('True')}
              >
                True
              </Button>
            </Bounce>
            <Bounce delay={400}>
              <Button
                className="answer-button"
                onClick={() => answerOnClick('False')}
              >
                False
              </Button>
            </Bounce>
          </div>
        </>
      ) : (
        <div className="loading">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      )}
    </div>
  )
}

export default Trivia
