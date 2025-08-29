import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToNotes, updateToNotes } from '../redux/noteSlice';
const Home = () => {
    const [ title,setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams,setSearchParams] = useSearchParams();
    const NotesId = searchParams.get("notesId");
    const dispatch = useDispatch()
    function createNotes(){
      const note = {
        title: title,
        content: value,
        _id: NotesId || Date.now().toString(36),
        createdAt: new Date().toISOString(),
      }
      if(NotesId){
        //update
        dispatch(updateToNotes(note));
      }
      else{
        //create
        dispatch(addToNotes(note));
      }

      // after creation/updation
      setTitle('');
      setValue('');
      setSearchParams({});
    }


  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input className='p-1 rounded-2xl mt-2 w-[66%] pl-4 border-1'
        type="text" placeholder='Enter title here' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button className='flex flex-row gap-7 ' onClick={createNotes}>
           {(NotesId) ? "Update Notes" : "Create Notes"}
        </button>
      </div>
      <div className='mt-8'>
        <textarea className='rounded-2xl mt-4, min-w-[500px] p-4 border-2'
        value={value} placeholder="Enter Content Here" onChange={(e)=> setValue(e.target.value)}
          rows={20}/>
      </div>
    </div>

    
  )
}

export default Home