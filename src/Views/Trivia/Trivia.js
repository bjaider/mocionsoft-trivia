import React, {useEffect, useState} from 'react'
import CategoryImage from '../../Components/CategoryImage/CategoryImage'
import Question from '../../Components/Question/Question'
import useGetQuestions from '../../Hooks/useGetQuestions'

const Trivia = () => {
  const {questionsData} = useGetQuestions()
  const [question, setQuestion] = useState(1)
  const [questionNumber, setQuestionNumber] = useState(1)
  useEffect(() => {
    if (questionsData) {
      setQuestion(questionsData[questionNumber])
    }
  }, [questionNumber, questionsData])

  return (
    <div>
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
    </div>
  )
}

export default Trivia
