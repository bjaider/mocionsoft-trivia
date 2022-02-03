const calculateTimeLeft = (timeLeft,timer) => {


  if (timeLeft > 0) {
    timeLeft =--timeLeft
  }else{
    clearInterval(timer);
  }

  return timeLeft
}

export default calculateTimeLeft
