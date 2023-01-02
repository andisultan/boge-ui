import React from 'react'
import { DropdownWrapper, DropdownChild } from './dropdown.style'
import { Button } from '../../index'

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  /**
   * Set the before component of dropdown button
   */
  before?: React.ReactNode
  /**
   * Set the after component of dropdown button
   */
  after?: React.ReactNode
  /**
   * Option to fit button width to its parent
   */
  block?: boolean
  /**
   * Set the variants of dropdown button
   */
  variant?: 'solid' | 'outline' | 'transparent' | 'danger' | 'success' | 'warning'
  /**
   * Set the shap of dropdown  button
   */
  shap?: 'square' | 'rounded' | 'circle'
  /**
   * Set the size of dropdown button
   */
  size?: 'medium' | 'small' | 'large'
  /**
   * Set the label of dropdown button
   */
  label?: string
  /**
   * Set the toogle the dropdown
   */
  isOpen?: boolean
  /**
   * Set the callback to be called when the button is clicked
   */
  onClick?: () => void
}

export const Dropdown: React.FC<DropdownProps> = ({
  before,
  after,
  block = false,
  variant = 'solid',
  shap = 'square',
  size = 'medium',
  label = '',
  isOpen = false,
  onClick,
  children,
  ...props
}) => {
  return (
    <DropdownWrapper block={block} {...props}>
      <Button variant={variant} shap={shap} block={block} size={size} before={before} after={after} onClick={onClick}>
        {label}
      </Button>
      <DropdownChild isOpen={isOpen}>{children}</DropdownChild>
    </DropdownWrapper>
  )
}
