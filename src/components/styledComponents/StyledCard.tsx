import styled from 'styled-components'
import { devices } from '../../breakpoints/Breakpoints'
// Material UI //
import { Switch } from '@mui/material'
// Date fns //
import { formatDistanceToNow } from 'date-fns'
// Framer motion //
import { motion } from 'framer-motion'
// Redux //
import { useDispatch, useSelector } from 'react-redux'
import { remove, toggle } from '../../redux/features/NoteSlice'
import { IState } from '../../redux/models/IState'
// Styled components //
import { StyledFlexWrapper } from './StyledFlexWrapper'

export default function ShowNote() {
  const notes = useSelector((state: IState) => state.note.value)
  const dispatch = useDispatch()

  return (
    <StyledFlexWrapper gap="0">
      {notes &&
        notes.map((note, i) => {
          return (
            <StyledCard
              key={note.id}
              style={{
                opacity: note.done ? '0.5' : '',
              }}
            >
              <div className="animate-wrapper">
                <div className="toggle-container">
                  <Switch
                    color="default"
                    checked={note.done}
                    onChange={() => {
                      dispatch(toggle(i))
                    }}
                  />
                </div>
                <motion.div
                  className="text-container"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{note.text}</p>
                </motion.div>

                <div className="card-footer">
                  <div className="date-container">
                    <span className="date">
                      {formatDistanceToNow(new Date(note.created), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                  <div className="delete-icon-container">
                    <span
                      onClick={() => {
                        dispatch(remove(i))
                      }}
                      className="material-symbols-outlined delete"
                    >
                      delete
                    </span>
                  </div>
                </div>
              </div>
            </StyledCard>
          )
        })}
    </StyledFlexWrapper>
  )
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  border-radius: 3px;
  font-size: 1.1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: transform 0.2s linear;
  background-color: #ffd1dc;
  margin: 15px;

  &:nth-child(2n) {
    background-color: #fcfca9;
  }
  &:nth-child(3n) {
    background-color: #c4dcfa;
  }
  &:nth-child(4n) {
    background-color: #cdfecd;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
    position: relative;
    z-index: 5;
  }

  @media ${devices.tablet} {
    height: 330px;
    width: 300px;
  }

  p {
    padding: 0;
    margin: 0;
    font-size: 1.3rem;
    font-weight: 300;
    word-break: break-word;
    text-align: center;

    @media ${devices.tablet} {
      font-size: 1.1rem;
    }
  }

  .animate-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
  }

  .text-container {
    padding: 30px;
  }

  .card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;

    .date {
      font-size: 0.8rem;
      color: #474747;
    }
  }

  .toggle-container {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  .delete-icon-container {
    display: flex;
    justify-content: flex-end;

    span {
      padding: 5px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`
