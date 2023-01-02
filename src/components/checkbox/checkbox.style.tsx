import styled from 'styled-components'
import { CheckboxProps } from './checkbox'

export const CheckboxBase = styled.input.attrs({ type: 'checkbox' })<CheckboxProps>`
  box-sizing: border-box;
  padding: 0;
  line-height: 1;
  background: ${(props) => props.theme.checkbox.background};
  height: ${(props) => props.theme.checkbox.size[props.size || 'medium'].height};
  width: ${(props) => props.theme.checkbox.size[props.size || 'medium'].width};
  margin: ${(props) => props.theme.checkbox.size[props.size || 'medium'].margin};
  appearance: none;
  border: ${(props) => props.theme.checkbox.border};
  border-radius: ${(props) => props.theme.checkbox.borderRadius};
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  transition: all 0.15s ease-in-out 0s;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    background: ${(props) => props.theme.checkbox.after.background};
    position: absolute;
    width: ${(props) => props.theme.checkbox.size[props.size || 'medium'].after.width};
    height: ${(props) => props.theme.checkbox.size[props.size || 'medium'].after.height};
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    font-size: ${(props) => props.theme.checkbox.size[props.size || 'medium'].after.fontSize};
  }

  &:hover {
    border: ${(props) => props.theme.checkbox.hover.border};

    &:after {
      color: ${(props) => props.theme.checkbox.hover.after.color};
      content: ${(props) => props.theme.checkbox.hover.after.content[props.variant || 'check']};
    }
  }

  &:checked {
    border: ${(props) => props.theme.checkbox.checked.border};

    &:after {
      color: ${(props) => props.theme.checkbox.checked.after.color};
      content: ${(props) => props.theme.checkbox.checked.after.content[props.variant || 'check']};
    }
  }

  &:disabled {
    pointer-events: none;
    cursor: ${(props) => props.theme.checkbox.disabled.cursor};

    &:checked {
      border: ${(props) => props.theme.checkbox.disabled.checked.border};

      &:after {
        color: ${(props) => props.theme.checkbox.disabled.checked.after.color};
        content: ${(props) => props.theme.checkbox.disabled.checked.after.content[props.variant || 'check']};
      }
    }
  }
`
