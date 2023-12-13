import { useState } from 'react'
import './App.css'
import {useWindowSize} from "react-use";
import Confetti from 'react-confetti'

function App() {
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize()

  return (
    <>
        {showConfetti &&<Confetti
            width={width}
            height={height}
        />}
      <h1>Do you want to know who is the best girl in the world?</h1>
      <h2>Press button below</h2>
        <button className="glow-on-hover" type="button" onClick={() => setShowConfetti(true)}>
            Reveal
        </button>
    </>
  )
}

export default App
