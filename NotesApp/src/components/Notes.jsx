import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromNotes } from '../redux/noteSlice';

const Notes = () => {
  // filter contents
  const note = useSelector((state)=> state.notes.note);
  // console.log(note);
  const [searchTerm,setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredData = note.filter(
    (notes)=> notes.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  function handleDelete(NotesId){
    dispatch(removeFromNotes(NotesId))
  }
  return (
    <div>
      <input className='p-2 rounded-2xl min-w-[600px] mt-5' type="search" placeholder="Search here" value ={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      <div className='flex flex-col gap-5 mt-5'>
        {filteredData.length > 0 && filteredData.map((notes)=>{return(
          <div className='border'>
            <div>{notes.title}</div>
            <div>{notes.content}</div>
            <div className='flex flex-row gap-4 place-content-evenly'>
              <button>edit</button>
              <button>view</button>
              <button onClick={handleDelete}>delete</button>
              <button>copy</button>
              <button>share</button>
            </div>
            <div>
              {notes.createdAt}
            </div>
          </div>
        )})
        
        }
      </div>
    </div>
  )
}

export default Notes