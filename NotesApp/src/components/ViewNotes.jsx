// import React from 'react'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addToNotes, updateToNotes } from '../redux/noteSlice';
const ViewNotes = () => {
  
  const {id} = useParams();

  const allNotes = useSelector((state)=> state.notes.note)

  const notes = allNotes.find((p) => String(p._id) === String(id));

  console.log("notes id: ",id);
  
  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input className='p-1 rounded-2xl mt-2 w-[66%] pl-4 border'
        type="text" placeholder='Enter title here' value={notes?.title || ""} disabled/>
        {/* <button className='flex flex-row gap-7 ' onClick={createNotes}>
           {(NotesId) ? "Update Notes" : "Create Notes"}
        </button> */}
      </div>
      <div className='mt-8'>
        <textarea className='rounded-2xl mt-4 min-w-[500px] p-4 border-2'
        value={notes?.content || ""} placeholder="Enter Content Here" disabled
          rows={20}/>
      </div>
    </div>
  )
}

export default ViewNotes