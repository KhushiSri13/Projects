import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 h-screen border-r py-8 margin-0'>
        <div>
        <button className='flex justify-center items-center w-full'>Home</button>
        </div>
        
        <div className='flex flex-col gap-6 mt-6'>
          <h3 className='bg-purple-900 text-white font-bold w-64 h-10 flex items-center justify-center'>Upload Section</h3>
          <button>Upload PDF/DOC</button>
          <button>Upload Image</button>
        </div>

        <div className='flex flex-col gap-6 mt-6'>
          <h3 className='bg-purple-900 text-white font-bold w-64 h-10 flex items-center justify-center'>Manage Mindmaps</h3>
          <button className='px-4 py-2 rounded-lg bg-white 
             border border-purple-300 hover:bg-purple-200 
             transition duration-300 ease-in-out'>Create Mindmaps</button>
          <button>View Mindmaps</button>
        </div>
    </div>
  )
}

export default Sidebar