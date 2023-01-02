import React from 'react'
import { SpinnerBase } from './spinner.style'

export interface SpinnerProps {
  /**
   * Set the size of radio
   */
  size?: 'medium' | 'small' | 'large'
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', ...props }) => {
  return <SpinnerBase size={size} aria-live='polite' aria-busy='true' {...props} />
}
