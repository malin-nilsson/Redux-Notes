import styled from 'styled-components'
import { devices } from '../../breakpoints/Breakpoints'

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background-color: #b4bdfb;
  color: #433d66;
  font-size: 1.3rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  width: 100%;

  &:hover {
    cursor: pointer;
    background-color: #c9d0fe;
  }

  @media ${devices.tablet} {
    padding: 90px;
    width: 50%;
  }

  .material-symbols-outlined {
    font-size: 40px; /* Preferred icon size */
  }
`
