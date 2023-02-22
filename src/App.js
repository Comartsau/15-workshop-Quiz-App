import { useState, createContext } from "react";
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import Score from "./components/Score";

import './App.css'

 export const DataContext = createContext()

function App() {
  const [appstate,setAppState] = useState('menu')
  const [score,setScore] = useState(0)

  return (
    <div className="App">
      <h1>Web Development Quiz</h1>
        <DataContext.Provider value={{appstate,setAppState, score,setScore}}>
          {appstate  === 'menu' && <Menu />}
          {appstate  === 'quiz' && <Quiz />}
          {appstate  === 'score' && <Score />}
        </DataContext.Provider>
    </div>
  );
}

export default App;
