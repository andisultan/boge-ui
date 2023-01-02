import styled from 'styled-components'
import { TextareaProps } from './textarea'

export const TextareaBase = styled.textarea<TextareaProps>`
  box-sizing: border-box;
  text-overflow: ellipsis;
  height: auto;
  min-height: ${(props) => props.theme.textarea.minHeight};
  padding: ${(props) => props.theme.textarea.padding};
  color: ${(props) => props.theme.textarea.color};
  font-size: ${(props) => props.theme.textarea.fontSize};
  line-height: ${(props) => props.theme.textarea.lineHeight};
  width: ${(props) => (props.block ? '100%' : 'auto')};
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  box-shadow: ${(props) => props.theme.textarea.boxShadow};
  overflow: hidden;
  background: ${(props) => props.theme.textarea.background};
  outline: ${(props) => props.theme.textarea.hover.outline};
  border-radius: ${(props) => props.theme.textarea.shap[props.shap || 'square']};
  border: ${(props) => props.theme.textarea.variant[props.variant || 'default']};

  &:hover {
    border: ${(props) => props.theme.textarea.hover.border};
    outline: ${(props) => props.theme.textarea.hover.outline};
  }
`
