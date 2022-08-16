import styled from 'styled-components'
import { devices } from '../../breakpoints/Breakpoints'

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;

  @media ${devices.tablet} {
    padding: 30px;
  }

  @media ${devices.desktop} {
    padding: 30px 130px;
  }
`
