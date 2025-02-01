import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random_color'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <>
          <Accordian/>
          <RandomColor/>
        </>

      </div>
  );
}

export default App
