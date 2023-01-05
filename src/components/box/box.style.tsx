import styled from 'styled-components'

import { BoxProps } from './box'

export const BoxWrapper = styled.div<BoxProps>`
  padding: ${(props) => (props.padding ? props.padding : props.theme.box.padding)};
  margin: ${(props) => (props.padding ? props.margin : props.theme.box.margin)};
  border: ${(props) => (props.padding ? props.border : props.theme.box.border)};
  border-radius: ${(props) => (props.padding ? props.radius : props.theme.box.radius)};
  box-shadow: ${(props) => (props.padding ? props.boxShadow : props.theme.box.boxShadow)};
`
