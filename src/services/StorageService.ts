const LOCALSTORAGE_KEY = 'notes'

export const getNotes = <T>(): T[] => {
  let valueFromLS = localStorage.getItem(LOCALSTORAGE_KEY) || '[]'
  return JSON.parse(valueFromLS) as T[]
}

export const saveNote = <T>(data: T): void => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data))
}
