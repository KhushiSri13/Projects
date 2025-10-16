import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
// import { Router } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {path: '/',
    element: (<div><Navbar/></div>)
  }, 
  {}
  
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><Navbar/></div>
      <div><Sidebar/></div>
    </>
  )
}

export default App
