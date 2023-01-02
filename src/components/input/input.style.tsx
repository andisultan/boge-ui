import styled from 'styled-components'
import { InputProps } from './input'

export const InputOuter = styled.span`
  line-height: 1;
`

export const InputInner = styled.span<InputProps>`
  box-sizing: border-box;
  vertical-align: middle;
  cursor: pointer;
  line-height: 1;
  border-radius: ${(props) => props.theme.input.shap[props.shap || 'square']};
  font-size: ${(props) => props.theme.input.size[props.size || 'medium'].fontSize};
  width: ${(props) => (props.block ? '100%' : 'auto')};
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  box-shadow: ${(props) => (props.variant === 'transparent' ? 'transparent' : props.theme.input.boxShadow)};
  overflow: hidden;
  background: ${(props) => (props.disabled ? props.theme.input.disabled.background : props.theme.input.background)};
  color: ${(props) => !props.disabled && props.theme.input.variant[props.variant || 'default'].color.active};
  border: ${(props) =>
    props.disabled
      ? props.theme.input.disabled.border
      : props.theme.input.variant[props.variant || 'default'].border.active};

  &:hover {
    color: ${(props) => !props.disabled && props.theme.input.variant[props.variant || 'default'].color.hover};
    border: ${(props) => !props.disabled && props.theme.input.variant[props.variant || 'default'].border.hover};
  }
`

export const InputContent = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InputBase = styled.input<InputProps>`
  font-family: inherit;
  box-sizing: border-box;
  border: 1px solid transparent;
  outline: none;
  line-height: 1;
  font-size: inherit;
  color: ${(props) => props.theme.input.color};
  padding: ${(props) => props.theme.input.size[props.size || 'medium'].paddingInput};
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme.input.disabled.background};
    border: ${(props) => props.theme.input.disabled.border};
    color: ${(props) => props.theme.input.disabled.color};
  }
`

export const InputBefore = styled.span<InputProps>`
  padding-left: ${(props) => props.theme.input.size[props.size || 'medium'].paddingAddon};
`

export const InputAfter = styled.span<InputProps>`
  padding-right: ${(props) => props.theme.input.size[props.size || 'medium'].paddingAddon};
`

export const InputMessage = styled.span<InputProps>`
  display: block;
  color: ${(props) => props.theme.input.message.color[props.variant || 'default']};
  margin: ${(props) => props.theme.input.message.margin};
  font-size: ${(props) => props.theme.input.message.fontSize};
`

export const InputHint = styled.span`
  display: block;
  font-size: ${(props) => props.theme.input.hint.fontSize};
  color: ${(props) => props.theme.input.hint.color};
  margin: ${(props) => props.theme.input.hint.margin};
`
