import React, {useState} from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import './QuestionScore.scss'
const QuestionScore = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="question-score-container">
      <Modal show={showModal} setShowModal={setShowModal}>
        <p>Modal</p>
      </Modal>
      <p>1</p>
      <p onClick={() => setShowModal(true)}>Question </p>
      <Button className={'close-button'}>
        <img
          src="https://res.cloudinary.com/dhxg3zyjz/image/upload/v1643870057/MocionSoft/close_1_m5c4mx.png"
          width={42}
          alt="Close Button"
        />
      </Button>
    </div>
  )
}

export default QuestionScore
