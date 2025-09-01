import { createSlice } from '@reduxjs/toolkit'
import toast, {Toaster} from  'react-hot-toast'
const initialState = {
  note: localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : []
}

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addToNotes: (state,action) => {
      const note = action.payload;
      state.note.push(note);
      localStorage.setItem("notes", JSON.stringify(state.note));
      // JSON.stringify(state.note);
      toast("Note created successfully");
    },
    updateToNotes: (state,action) => {
      const note = action.payload
      const index = state.note.findIndex((item) => item._id === note._id)
      if(index >= 0){
        state.note[index]=note;
        localStorage.setItem("notes",JSON.stringify(state.note))
        toast.success("Note updated")
      }
    },
    resetAllNotes: (state, action) => {
      state.note = [];
      localStorage.removeItem("note");
    },
    removeFromNotes: (state,action) => {
      const NotesId = action.payload;
      const index = state.note.findIndex((item) => item._id === NotesId)
      if(index >= 0){
        state.note.splice(index,1);
        localStorage.setItem("notes", JSON.stringify(state.note));
        toast.success("Note deleted");
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToNotes, updateToNotes, resetAllNotes, removeFromNotes } = noteSlice.actions

export default noteSlice.reducer