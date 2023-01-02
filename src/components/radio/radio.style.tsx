import styled from 'styled-components'
import { RadioProps } from './radio'

export const RadioBase = styled.input.attrs({ type: 'radio' })<RadioProps>`
  box-sizing: border-box;
  padding: 0;
  line-height: 1;
  appearance: none;
  background: ${(props) => props.theme.radio.background};
  height: ${(props) => props.theme.radio.size[props.size || 'medium'].height};
  width: ${(props) => props.theme.radio.size[props.size || 'medium'].width};
  margin: ${(props) => props.theme.radio.size[props.size || 'medium'].margin};
  border: ${(props) => props.theme.radio.border};
  border-radius: ${(props) => props.theme.radio.borderRadius};
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  transition: all 0.15s ease-in-out 0s;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    border-radius: ${(props) => props.theme.radio.after.borderRadius};
    background: ${(props) => props.theme.radio.after.background};
    width: ${(props) => props.theme.radio.size[props.size || 'medium'].after.width};
    height: ${(props) => props.theme.radio.size[props.size || 'medium'].after.height};
    display: flex;
    justify-content: center;
    align-items: center;
    left: ${(props) => props.theme.radio.size[props.size || 'medium'].left};
    top: ${(props) => props.theme.radio.size[props.size || 'medium'].top};
  }

  &:hover {
    border: ${(props) => props.theme.radio.hover.border};

    &:after {
      background: ${(props) => props.theme.radio.hover.after.background};
    }
  }

  &:checked {
    border: ${(props) => props.theme.radio.checked.border};

    &:after {
      background: ${(props) => props.theme.radio.checked.after.background};
    }
  }

  &:disabled {
    pointer-events: none;
    cursor: ${(props) => props.theme.radio.disabled.cursor};

    &:checked {
      border: ${(props) => props.theme.radio.disabled.checked.border};

      &:after {
        background: ${(props) => props.theme.radio.disabled.checked.after.background};
      }
    }
  }
`
