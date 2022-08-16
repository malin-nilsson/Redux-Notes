import { createSlice } from '@reduxjs/toolkit'
import { Note } from '../../models/Note'
import { getNotes, saveNote } from '../../services/StorageService'
import { IAction } from '../models/IAction'

let defaultValue: Note[] = getNotes<Note>()

const noteSlice = createSlice({
  name: 'note',
  initialState: {
    value: defaultValue,
  },
  reducers: {
    add: (state, action: IAction<string>) => {
      if (action.payload === '') {
        alert('You forgot to write something.')
      } else {
        state.value.push({
          text: action.payload,
          done: false,
          id: Date.now(),
          created: new Date().toLocaleString(),
        })
        state.value.sort(function (a, b) {
          return b.id - a.id
        })
        saveNote(state.value)
      }
    },
    remove: (state, action: IAction<number>) => {
      state.value.splice(action.payload, 1)
      saveNote(state.value)
    },
    toggle: (state, action: IAction<number>) => {
      state.value[action.payload].done = !state.value[action.payload].done
      saveNote(state.value)
    },
  },
})

export const { add, remove, toggle } = noteSlice.actions
export default noteSlice.reducer
