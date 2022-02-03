import React, {useEffect, useState} from 'react'
import CategoryImage from '../../Components/CategoryImage/CategoryImage'
import Question from '../../Components/Question/Question'
import useGetQuestions from '../../Hooks/useGetQuestions'
import Button from '../../Components/Button/Button'
import './Trivia.scss'
import Countdown from '../../Components/Countdown/Countdown'
const Trivia = () => {
  const {questionsData} = useGetQuestions()
  const [question, setQuestion] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(1)
  
  useEffect(() => {
    if (questionsData) {
      setQuestion(questionsData[questionNumber])
    }
  }, [questionNumber, questionsData])

  return (
    <div className="trivia-container">
      <div className="trivia-top">
        <Button className={'close-button'}>
          <img
            src="https://res.cloudinary.com/dhxg3zyjz/image/upload/v1643870057/MocionSoft/close_1_m5c4mx.png"
            width={42}
            alt="Close Button"
          />{' '}
        </Button>
        <Countdown time={10} />
      </div>
      <CategoryImage
        src={
          'https://res.cloudinary.com/dhxg3zyjz/image/upload/v1643863251/MocionSoft/sports_1_dwndn4.png'
        }
        alt={'Category'}
      />
      <Question
        question={question}
        questionNumber={questionNumber}
        questionsTotal={10}
      />
      <div className="answer-buttons">
        <Button
          className="answer-button"
          onClick={() => setQuestionNumber(questionNumber + 1)}
        >
          True
        </Button>
        <Button
          className="answer-button"
          onClick={() => setQuestionNumber(questionNumber + 1)}
        >
          False
        </Button>
      </div>
    </div>
  )
}

export default Trivia
