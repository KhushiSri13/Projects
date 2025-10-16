import React from 'react'

const Navbar = () => {
  return (
    <div className="h-10 flex justify-between items-center bg-violet-400 px-4 py-4">
        <div className="flex justify-around items-center gap-6">
            <img src="#" alt="logo" /> 
            <h1 className='font-extrabold'>MapMyMind</h1>
        </div>
        <div className="flex justify-around items-center gap-6"> 
            <button className='h-7 flex items-center bg-transparent'>Add</button>
            <button className='h-7 flex items-center bg-transparent'>Theme</button>
            <button className='h-7 flex items-center bg-transparent'>profile/login</button>
        </div>
    </div>
  )
}

export default Navbar