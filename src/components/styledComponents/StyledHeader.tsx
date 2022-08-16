import styled from 'styled-components'
import { devices } from '../../breakpoints/Breakpoints'

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  align-items: flex-start;
  color: #656565;

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 0px 30px;
  }
`
