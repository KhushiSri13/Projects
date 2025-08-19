import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Notes from './components/Notes'
import ViewNotes from './components/ViewNotes'
const router = createBrowserRouter(
    [
      {
        path:"/",
        element:
        <div>
          <Navbar/>
          <Home/>
        </div>
      },
      {
        path:"/notes",
        element:
        <div>
          <Navbar/>
          <Notes/>
        </div>
      },
      {
        path:"/notes/:id",
        element:
        <div>
          <Navbar/>
          <ViewNotes/>
        </div>
      },
    ]
);



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
