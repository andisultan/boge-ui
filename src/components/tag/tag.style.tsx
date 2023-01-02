import styled from 'styled-components'
import { TagProps } from './tag'

export const TagBase = styled.span<TagProps>`
  box-sizing: border-box;
  vertical-align: middle;
  line-height: 1;
  white-space: normal;
  color: ${(props) => props.theme.tag.variant[props.variant || 'solid'].color};
  background: ${(props) => props.theme.tag.variant[props.variant || 'solid'].background};
  border-color: ${(props) => props.theme.tag.variant[props.variant || 'solid'].borderColor};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  font-size: ${(props) => props.theme.tag.fontSize};
  padding: ${(props) => props.theme.tag.padding};
  margin: ${(props) => props.theme.tag.margin};
  width: ${(props) => (props.block ? '100%' : 'auto')};
  display: ${(props) => (props.block ? 'block' : 'inline-block')};

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    outline: none;
    color: inherit;
    padding-left: ${(props) => props.theme.tag.padding};
  }
`

export const TagInner = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
