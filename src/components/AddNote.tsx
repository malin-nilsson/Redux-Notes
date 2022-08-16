import { useState } from 'react'
// Styled components //
import { StyledFlexWrapper } from './styledComponents/StyledFlexWrapper'
import { StyledButton } from './styledComponents/StyledButton'
import { StyledHeader } from './styledComponents/StyledHeader'
// Redux //
import { useDispatch } from 'react-redux'
import { add } from '../redux/features/NoteSlice'
import TextareaAutosize from '@mui/material/TextareaAutosize'

export default function AddNote() {
  const [noteText, setNoteText] = useState('')
  const dispatch = useDispatch()
  const maxNumOfChars = 120

  const clearInput = () => {
    setNoteText('')
  }

  const countCharacters = () => {
    let numOfEnteredChars = noteText.length
    let counter = maxNumOfChars - numOfEnteredChars
    return counter + ' / 120'
  }

  const textAreaStyle = {
    fontSize: '2rem',
    lineHeight: '2.7rem',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: '300',
    width: '100%',
    padding: '20px',
    color: '#fafafa',
    backgroundColor: '#555555',
    border: 'none',
  }

  return (
    <StyledFlexWrapper justify="flex-start" align="center">
      <StyledHeader>
        <StyledFlexWrapper justify="flex-end">
          <TextareaAutosize
            maxLength={120}
            style={textAreaStyle}
            onChange={(e) => setNoteText(e.target.value)}
            value={noteText}
            placeholder="Your note..."
            minRows={5}
            maxRows={5}
          />
          <span>{countCharacters()}</span>
        </StyledFlexWrapper>

        <StyledButton
          onClick={() => {
            dispatch(add(noteText))
            clearInput()
          }}
        >
          <span className="material-symbols-outlined">add</span>
          Save Note
        </StyledButton>
      </StyledHeader>
    </StyledFlexWrapper>
  )
}
