import axios from 'axios'
import {useEffect, useState} from 'react'

export const useGetQuestions = () => {
  const [questionsData, setQuestionsData] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`).then((response) => {
      const questions = response.data.results
      setQuestionsData(questions)
    })
  }

  return {
    questionsData,
  }
}

export default useGetQuestions