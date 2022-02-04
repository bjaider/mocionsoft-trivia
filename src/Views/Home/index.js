import React from 'react'
import {useHistory} from 'react-router-dom'
import Button from '../../Components/Button'
import Instructions from '../../Components/Instructions'
import ViewTitle from '../../Components/ViewTitle'
import './styles.scss'
const Home = () => {
  let history = useHistory()
  return (
    <div className="container">
      <ViewTitle text={'Welcome to the challenge Trivia Challenge!'} className={'home-title'}/>
      <Instructions />
      <Button
        className="begin-button"
        onClick={() => history.push('/questions')}
      >
        BEGIN
      </Button>
    </div>
  )
}

export default Home
