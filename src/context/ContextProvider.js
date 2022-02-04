import React, {createContext, useState} from 'react'

export const Context = createContext({})

export const ContextProvider = ({children}) => {
  const [answers, setAnswers] = useState([])
  const [gameOver, setGameOver] = useState(false)

  return (
    <Context.Provider
      value={{
        answers,
        setAnswers,
        gameOver,
        setGameOver,
      }}
    >
      {children}
    </Context.Provider>
  )
}
