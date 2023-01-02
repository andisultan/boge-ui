import styled from 'styled-components'
import { DropdownProps } from './dropdown'

export const DropdownWrapper = styled.div<DropdownProps>`
  box-sizing: border-box;
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  vertical-align: middle;
  position: relative;
  z-index: 999;
`

export const DropdownChild = styled.div<DropdownProps>`
  box-sizing: border-box;
  position: absolute;
  top: ${(props) => props.theme.dropdown.top};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  padding: ${(props) => props.theme.dropdown.padding};
  background: ${(props) => props.theme.dropdown.background};
  border-radius: ${(props) => props.theme.dropdown.borderRadius};
  border: ${(props) => props.theme.dropdown.border};
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transform: translateY(0);
  box-shadow: ${(props) => props.theme.dropdown.boxShadow};
  transition: ${(props) => props.theme.dropdown.transition};
`
