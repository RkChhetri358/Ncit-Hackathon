import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Login/>
   <Signup/>
    </>
  )
}

export default App
