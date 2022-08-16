import styled from 'styled-components'
import { devices } from '../../breakpoints/Breakpoints'

interface IWrapperProps {
  justify?: string
  align?: string
  gap?: string
  padding?: string
}

export const StyledFlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props: IWrapperProps) => props.justify || 'center'};
  align-items: ${(props: IWrapperProps) => props.align || 'center'};
  gap: ${(props: IWrapperProps) => props.gap || '10px'};
  padding: ${(props: IWrapperProps) => props.padding || ''};

  @media ${devices.tablet} {
    gap: 15px;
    flex-direction: row;
  }
`
