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
      <a href={"https://moviefreak.anandraj.tech"} ><button><h3>MovieFreak</h3></button></a>
      <a href={"https://reactredux.anandraj.tech"}><button><h3>React Redux</h3></button></a>
      <a href={"https://nirvanchat.anandraj.tech"}><button><h3>Nirvan Chat</h3></button></a>
      <a href={"https://socialcircle.anandraj.tech"}><button><h3>Social Circle</h3></button></a>
      <p>Something Special comming soon</p>
    </>
  )
}

export default App
