import React, {createContext, useState} from 'react'

export const Context = createContext({})

export const ContextProvider = ({children}) => {
  const [answers, setAnswers] = useState([])
  return (
    <Context.Provider
      value={{
        answers,
        setAnswers,
      }}
    >
      {children}
    </Context.Provider>
  )
}
