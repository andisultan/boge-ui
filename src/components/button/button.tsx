import React from 'react'
import { ButtonWrapper, ButtonInner, ButtonBefore, ButtonAfter } from './button.style'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  /**
   * Set the before label component of button
   */
  before?: React.ReactNode
  /**
   * Set the after label component of button
   */
  after?: React.ReactNode
  /**
   * Option to fit button width to its parent
   */
  block?: boolean
  /**
   * Set the variants of button
   */
  variant?: 'solid' | 'outline' | 'transparent' | 'danger' | 'success' | 'warning'
  /**
   * Set the shap of button
   */
  shap?: 'square' | 'rounded' | 'circle'
  /**
   * Set the size of button
   */
  size?: 'medium' | 'small' | 'large'
}

export const Button: React.FC<ButtonProps> = ({
  before,
  after,
  block = false,
  variant = 'solid',
  shap = 'square',
  size = 'medium',
  children,
  ...props
}) => {
  return (
    <ButtonWrapper block={block} variant={variant} shap={shap} {...props}>
      <ButtonInner>
        {before && children ? <ButtonBefore size={size}>{before}</ButtonBefore> : before}
        {!before && !after ? <span className='child_text'>{children}</span> : children}
        {after && children ? <ButtonAfter size={size}>{after}</ButtonAfter> : after}
      </ButtonInner>
    </ButtonWrapper>
  )
}
