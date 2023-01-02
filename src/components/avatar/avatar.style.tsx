import styled from 'styled-components'
import { AvatarProps } from './avatar'

export const AvatarWrapper = styled.span<AvatarProps>`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  border: ${(props) => props.theme.avatar.border};
  border-radius: ${(props) =>
    props.shap === 'circle' ? props.theme.avatar.shap.circle : props.theme.avatar.shap.rounded};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`

export const AvatarBase = styled.img.attrs({ loading: 'lazy' })<AvatarProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`

export const AvatarNoImage = styled.span<AvatarProps>`
  box-sizing: border-box;
  display: block;
  font-size: 88%;
  text-transform: uppercase;
  height: ${(props) => props.size};
  justify-content: center;
  align-items: center;
  display: flex;
  width: auto;
`
