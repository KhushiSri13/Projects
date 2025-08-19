import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  note: localStorage.getItem("note")
  ? JSON.parse(localStorage.getItem("note"))
  : []
}

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addToNotes: (state,action) => {
      const note = action.payload;
      state.note.push(note);
      localStorage.setItem("notes", state.note);
    },
    updateToNotes: (state,action) => {
      
    },
    resetAllNotes: (state, action) => {
      
    },
    removeFromNotes: (state,action) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { addToNotes, updateToNotes, resetAllNotes, removeFromNotes } = noteSlice.actions

export default noteSlice.reducer