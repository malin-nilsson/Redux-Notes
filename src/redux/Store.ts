import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './features/NoteSlice'

export default configureStore({
  reducer: {
    note: noteReducer,
  },
})
