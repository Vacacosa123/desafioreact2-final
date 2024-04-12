import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import AppRouter from './router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <AppRouter/>
    </>
  )
}

export default App
