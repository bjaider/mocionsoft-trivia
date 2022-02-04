import React, {useContext, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {Context} from '../../Context/ContextProvider'
import calculateTimeLeft from '../../Helpers/Countdown'
import './Countdown.scss'

const Countdown = ({time}) => {
  let history = useHistory()
  const {setGameOver} = useContext(Context)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(time))
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(timeLeft, timer,history,setGameOver))
    }, 1000)

    return () => clearInterval(timer)
  })
  return <p className="countdown">{timeLeft}</p>
}

export default Countdown
