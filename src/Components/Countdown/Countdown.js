import React, { useEffect, useState } from 'react';
import calculateTimeLeft from '../../helpers/Countdown';
import './Countdown.scss'

const Countdown = ({time}) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(time))
    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft(timeLeft, timer))
        }, 1000)
    
        return () => clearInterval(timer)
      })
  return  <p className='countdown'>{timeLeft}</p>;
};

export default Countdown;
