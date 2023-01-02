import React from 'react'
import { AvatarWrapper, AvatarBase, AvatarNoImage } from './avatar.style'

export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  children?: React.ReactNode
  /**
   * Set the shap of avatar
   */
  shap?: 'rounded' | 'circle'
  /**
   * Set the size of avatar
   */
  size?: string
  /**
   * Set the alternative of avatar
   */
  alt?: string
  /**
   * The address of the image for an image avatar or image element
   */
  src?: string
  /**
   * Set the color of avatar
   */
  color?: string
  /**
   * Set the color of avatar
   */
  background?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  shap = 'circle',
  size = '24px',
  src = '',
  color = '#ffffff',
  background = '#dddddd',
  children,
  alt,
  ...props
}) => {
  return (
    <AvatarWrapper color={color} background={background} shap={shap} size={size}>
      {src ? (
        <AvatarBase background={background} shap={shap} size={size} alt={alt} src={src} {...props} />
      ) : (
        <AvatarNoImage color={color} background={background} shap={shap} size={size}>
          {children}
        </AvatarNoImage>
      )}
    </AvatarWrapper>
  )
}
