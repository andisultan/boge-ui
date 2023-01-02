import React from 'react'
import { CheckboxBase } from './checkbox.style'

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Set the status of checkbox
   */
  variant?: 'check' | 'minus' | 'plus'
  /**
   * Set the size of checkbox
   */
  size?: 'medium' | 'small' | 'large'
}

export const Checkbox: React.FC<CheckboxProps & any> = ({ size = 'medium', variant = 'check', ...props }) => {
  return <CheckboxBase size={size} variant={variant} {...props} />
}
