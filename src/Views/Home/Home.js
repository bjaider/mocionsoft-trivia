import React from 'react'
import Button from '../../Components/Button/Button'
import Instructions from '../../Components/Instructions/Instructions'
import WelcomeMessage from '../../Components/WelcomeMessage/WelcomeMessage'
import './Home.scss'
const Home = () => {
  return (
    <div className="container">
      <WelcomeMessage />
      <Instructions />
      <Button className="begin-button" >BEGIN</Button>
    </div>
  )
}

export default Home
