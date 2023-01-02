import styled from 'styled-components'
import { ButtonProps } from './button'

export const ButtonWrapper = styled.button<ButtonProps>`
  box-sizing: border-box;
  vertical-align: middle;
  cursor: ${(props) => props.theme.button.cursor};
  transition: ${(props) => props.theme.button.transition};
  line-height: 1;
  font-family: inherit;
  border-radius: ${(props) => props.theme.button.shap[props.shap || 'square']};
  padding: ${(props) => props.theme.button.size[props.size || 'medium'].paddingInner};
  font-size: ${(props) => props.theme.button.size[props.size || 'medium'].fontSize};
  width: ${(props) => (props.block ? '100%' : 'auto')};
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  box-shadow: ${(props) => (props.variant === 'transparent' ? 'transparent' : props.theme.button.boxShadow)};
  background: ${(props) => props.theme.button.variant[props.variant || 'solid'].background.active};
  color: ${(props) => props.theme.button.variant[props.variant || 'solid'].color.active};
  border: ${(props) => props.theme.button.variant[props.variant || 'solid'].border.active};

  &:hover {
    background: ${(props) => props.theme.button.variant[props.variant || 'solid'].background.hover};
    color: ${(props) => props.theme.button.variant[props.variant || 'solid'].color.hover};
    border: ${(props) => props.theme.button.variant[props.variant || 'solid'].border.hover};
  }

  .child_text {
    padding-left: ${(props) => props.theme.button.size[props.size || 'medium'].paddingText};
  }

  &:disabled {
    background: ${(props) => props.theme.button.disabled.background};
    border: ${(props) => props.theme.button.disabled.border};
    color: ${(props) => props.theme.button.disabled.color};
    cursor: ${(props) => props.theme.button.disabled.cursor};
  }
`

export const ButtonInner = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonBefore = styled.span<ButtonProps>`
  padding-right: ${(props) => props.theme.button.size[props.size || 'medium'].paddingAddon};
`

export const ButtonAfter = styled.span<ButtonProps>`
  padding-left: ${(props) => props.theme.button.size[props.size || 'medium'].paddingAddon};
`
