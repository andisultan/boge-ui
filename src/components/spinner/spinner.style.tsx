import styled, { keyframes } from 'styled-components'
import { SpinnerProps } from './spinner'

const spin = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);  
  }
  100% { 
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); 
  }
`

export const SpinnerBase = styled.span<SpinnerProps>`
  display: inline-block;
  border-style: solid;
  border-width: ${(props) => props.theme.spinner.size[props.size || 'medium'].border.inner.width};
  border-color: ${(props) => props.theme.spinner.size[props.size || 'medium'].border.inner.color};
  border-top-style: solid;
  border-top-width: ${(props) => props.theme.spinner.size[props.size || 'medium'].border.outer.width};
  border-top-color: ${(props) => props.theme.spinner.size[props.size || 'medium'].border.outer.color};
  border-radius: 50%;
  width: ${(props) => props.theme.spinner.size[props.size || 'medium'].volume};
  height: ${(props) => props.theme.spinner.size[props.size || 'medium'].volume};
  -webkit-animation: ${spin} 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`
