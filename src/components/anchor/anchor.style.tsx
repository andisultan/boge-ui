import styled from 'styled-components'
import { AnchorProps } from './anchor'

export const AnchorBase = styled.a<AnchorProps>`
  display: inline-block;
  vertical-align: middle;
  cursor: ${(props) => (props.disabled ? props.theme.anchor.disabled.cursor : props.theme.anchor.cursor)};

  .child_text {
    padding-left: ${(props) => props.theme.anchor.size[props.size || 'medium'].paddingText};
    padding-right: ${(props) => props.theme.anchor.size[props.size || 'medium'].paddingText};
  }
`

export const AnchorInner = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AnchorBefore = styled.span<AnchorProps>`
  padding-right: ${(props) => props.theme.anchor.size[props.size || 'medium'].paddingX};
`

export const AnchorAfter = styled.span<AnchorProps>`
  padding-left: ${(props) => props.theme.anchor.size[props.size || 'medium'].paddingX};
`
