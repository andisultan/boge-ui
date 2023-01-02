import React from 'react'
import {
  InputInner,
  InputOuter,
  InputContent,
  InputBase,
  InputBefore,
  InputAfter,
  InputMessage,
  InputHint,
} from './input.style'

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Set the before component of input
   */
  before?: React.ReactNode
  /**
   * Set the after component of input
   */
  after?: React.ReactNode
  /**
   * Option to fit input width to its parent
   */
  block?: boolean
  /**
   * Option to disable input
   */
  disabled?: boolean
  /**
   * Set the variants of input
   */
  variant?: 'default' | 'transparent' | 'danger' | 'success' | 'warning'
  /**
   * Set the shap of input
   */
  shap?: 'square' | 'rounded' | 'circle'
  /**
   * Set the size of input
   */
  size?: 'medium' | 'small' | 'large'
  /**
   * Set the message of input that colors is dependensies to variants
   */
  message?: React.ReactNode
  /**
   * Set the hint of input
   */
  hint?: React.ReactNode
}

export const Input: React.FC<InputProps> = ({
  before,
  after,
  block,
  disabled,
  message,
  hint,
  variant = 'default',
  shap = 'square',
  size = 'medium',
  ...props
}) => {
  return (
    <InputOuter>
      <InputInner block={block} size={size} disabled={disabled} variant={variant} shap={shap}>
        <InputContent>
          {before && <InputBefore size={size}>{before}</InputBefore>}
          <InputBase disabled={disabled} {...props} />
          {after && <InputAfter size={size}>{after}</InputAfter>}
        </InputContent>
      </InputInner>
      {message && <InputMessage variant={variant}>{message}</InputMessage>}
      {hint && <InputHint>{hint}</InputHint>}
    </InputOuter>
  )
}
