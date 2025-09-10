import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 h-screen border-r py-8'>
        <div>
        <button className='flex justify-center items-center w-full'>Home</button>
        </div>
        
        <div className='flex flex-col gap-6 mt-6'>
          <h3>Upload Section</h3>
          <button>Upload PDF/DOC</button>
          <button>Upload Image</button>
        </div>

        <div className='flex flex-col gap-6 mt-6'>
          <h3>Manage Mindmaps</h3>
          <button>Create Mindmaps</button>
          <button>View Mindmaps</button>
        </div>
    </div>
  )
}

export default Sidebar