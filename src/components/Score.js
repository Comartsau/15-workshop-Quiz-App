import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

function Score() {

  const {score,setScore,setAppState} = useContext(DataContext)



  const quizAgain = () => {
    setScore(0)
    setAppState('quiz')
  }

  return (
    <div className='score'>
        <h1> สรุปผลคะแนนสอบ</h1>
          <h2>คะแนนที่ได้ = {score} / {QuestionsData.length} </h2>
          <button onClick={()=>quizAgain()}>ทำแบบทดสอบอีกครั้ง</button>
    </div>
  )
}

export default Score