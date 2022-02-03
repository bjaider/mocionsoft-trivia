import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '../../Components/Button/Button'
import Instructions from '../../Components/Instructions/Instructions'
import WelcomeMessage from '../../Components/WelcomeMessage/WelcomeMessage'
import './Home.scss'
const Home = () => {
  let history=useHistory()
  return (
    <div className="container">
      <WelcomeMessage />
      <Instructions />
      <Button className="begin-button" onClick={()=>history.push("/questions")}>BEGIN</Button>
    </div>
  )
}

export default Home
