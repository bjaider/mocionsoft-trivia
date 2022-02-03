import React, {useState} from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import './QuestionScore.scss'
const QuestionScore = ({question, correct, index}) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="question-score-container">
      <Modal show={showModal} setShowModal={setShowModal}>
        <p>{question}</p>
      </Modal>
      <p className="question-index">{index}</p>
      <p className="show-question" onClick={() => setShowModal(true)}>
        Show Question
      </p>
      {correct ? (
        <Button className={'close-button'}>
          <img
            src="https://res.cloudinary.com/dhxg3zyjz/image/upload/v1643911011/MocionSoft/check_1_umstzl.png"
            width={32}
            alt="Close Button"
          />
        </Button>
      ) : (
        <Button className={'close-button'}>
          <img
            src="https://res.cloudinary.com/dhxg3zyjz/image/upload/v1643911007/MocionSoft/wrong_1_ncrpnt.png"
            width={32}
            alt="Close Button"
          />
        </Button>
      )}
    </div>
  )
}

export default QuestionScore
