import React from 'react'
import {useHistory} from 'react-router-dom'
import Button from '../../Components/Button/Button'
import Instructions from '../../Components/Instructions/Instructions'
import ViewTitle from '../../Components/ViewTitle/ViewTitle'
import './Home.scss'
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
