const calculateTimeLeft = (timeLeft, timer, history, setGameOver) => {
  if (timeLeft > 0) {
    timeLeft = --timeLeft
  } else {
    setGameOver(true)
    history.push('/results')
    clearInterval(timer)
  }

  return timeLeft
}

export default calculateTimeLeft
