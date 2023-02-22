import React ,{useState,useEffect, useContext} from 'react'
import QuestionsData from '../data/QuestionsData'
import { DataContext } from '../App'

function Quiz() {
  
  const [current,setCurrent] = useState(0)
  const [selectchioces,setSelectChoices] = useState('')
  
  const {score,setScore} = useContext(DataContext)
  const {setAppState} = useContext(DataContext)

  useEffect(() =>{
    checkAnswer()
    // eslint-disable-next-line
  },[selectchioces])
  
  const checkAnswer = () => {
    if (selectchioces !== '') {
      if (selectchioces === QuestionsData[current].answer) {
        setScore(score+1)
        setSelectChoices('')
        nextQuestion()
      } else {
        console.log('ตอบผิด')
        setSelectChoices('')
        nextQuestion()
        
      }
    }
  }

  const nextQuestion = () => {
    if(current === QuestionsData.length-1) {
      setAppState('score')
    } else {
      setCurrent(current+1)
    }
  }

  return (
    <div className='quiz'>
        <h1>{QuestionsData[current].question}</h1>
        <div className='choices'>
          <button onClick={() => setSelectChoices('A')}> {QuestionsData[current].A}</button>
          <button onClick={() => setSelectChoices('B')}> {QuestionsData[current].B}</button>
          <button onClick={() => setSelectChoices('C')}> {QuestionsData[current].C}</button>
          <button onClick={() => setSelectChoices('D')}> {QuestionsData[current].D}</button>
        </div>
        <p> {current+1} / {QuestionsData.length}</p>
    </div>
  )
}

export default Quiz