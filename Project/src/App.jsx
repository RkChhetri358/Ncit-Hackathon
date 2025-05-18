import { useState } from 'react'

import './App.css'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


   <div>
    <Navbar/>
    <Login />
   <Signup/>
   </div>


    <Footer/>



    </>
  )
}

export default App
