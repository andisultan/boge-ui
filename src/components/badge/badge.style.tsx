import styled, { css } from 'styled-components'
import { BadgeProps } from './badge'

export const BadgeWrapper = styled.span`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  vertical-align: top;
`

const baseCSs = css<BadgeProps>`
  box-sizing: border-box;
  display: inline-block;
  z-index: 9;
  background: ${(props) => props.theme.badge.variant[props.variant || 'solid'].background};
  color: ${(props) => props.theme.badge.variant[props.variant || 'solid'].color};
  box-shadow: 0 0 0 1px #fff;
  border-radius: 10px;
  position: absolute;
  top: 0;
  inset-inline-end: 0;
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
`

export const BadgeSpan = styled.span<BadgeProps>`
  ${baseCSs}
  height: 6px;
  width: 6px;
`

export const BadgeSup = styled.sup<BadgeProps>`
  ${baseCSs}
  font-weight: normal;
  font-size: 12px;
  white-space: nowrap;
  text-align: center;
  padding: 0 6px;
  height: 20px;
  line-height: 20px;
`
