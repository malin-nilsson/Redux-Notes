import { Note } from '../../models/Note'

export interface IState {
  note: IValue
}

interface IValue {
  value: Note[]
}
