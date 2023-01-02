import React from 'react'
import { TextareaBase } from './textarea.style'

export interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  block?: boolean
  /**
   * Set the variants of textarea
   */
  variant?: 'default' | 'transparent' | 'danger' | 'success' | 'warning'
  /**
   * Set the shap of textarea
   */
  shap?: 'square' | 'rounded' | 'circle'
}

export const Textarea: React.FC<TextareaProps> = ({
  block = false,
  variant = 'default',
  shap = 'square',
  ...props
}) => {
  return <TextareaBase block={block} variant={variant} shap={shap} {...props} />
}
