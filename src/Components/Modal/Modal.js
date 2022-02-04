import React, {useState} from 'react'
import Button from '../Button/Button'
import './Modal.scss'
const Modal = ({setShowModal, show, children}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Button
          type="button"
          className={'modal-button'}
          onClick={() => setShowModal(false)}
        >
          Close
        </Button>
      </section>
    </div>
  )
}

export default Modal
