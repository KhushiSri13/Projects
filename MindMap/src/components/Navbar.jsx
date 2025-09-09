import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row gap-200 justify-between items-center">
        <div className="flex flex-row justify-evenly gap-6">
            <img src="#" alt="logo" /> 
            <h2>My Project</h2>
        </div>
        <div className="flex flex-row justify-evenly gap-6"> 
            <button>Add</button>
            <button>Theme</button>
            <h4>profile</h4>
        </div>
    </div>
  )
}

export default Navbar