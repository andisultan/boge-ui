import React from 'react'
import { RadioBase } from './radio.style'

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Set the size of radio
   */
  size?: 'medium' | 'small' | 'large'
}

export const Radio: React.FC<RadioProps & any> = ({ size = 'medium', ...props }) => {
  return <RadioBase size={size} {...props} />
}
