import { useState } from 'react'
import anandLogo from '../public/anandLogo2.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://anandraj.tech" target="_blank">
          <img src={anandLogo} className="logo" alt="Vite logo" />
        </a>
        
      </div>
      <h1>Anand Raj</h1>
      <p>Something Special comming soon</p>
    </>
  )
}

export default App
