import { useState } from 'react'
import './App.css'
import HomePage from './view/HomePage/homePage'
import TravelSearchCard from './view/HomePage/components/travelCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TravelSearchCard />
    </>
  )
}

export default App
