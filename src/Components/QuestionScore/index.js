import React, {useState} from 'react'
import Button from '../Button'
import Modal from '../Modal'
import './styles.scss'
const QuestionScore = ({question, correct, index}) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="question-score-container" key={index}>
      {question ? (
        <Modal show={showModal} setShowModal={setShowModal}>
          <p>{question}</p>
        </Modal>
      ) : (
        ''
      )}
      <p className="question-index">{index}</p>
      <p
        className="show-question"
        onClick={() => setShowModal(true)}
        style={question ? {color: 'white'} : {color: '#999999'}}
      >
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
