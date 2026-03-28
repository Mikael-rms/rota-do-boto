import { useState } from 'react'
import './App.css'
import Navbar from './view/components/NavBar/navBar'
import LoginPage from './view/loginPage/loginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <LoginPage />
    </>
  )
}

export default App
