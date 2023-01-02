import React from 'react'
import { TagBase, TagInner } from './tag.style'

export interface TagProps {
  children?: React.ReactNode
  /**
   * Option to fit badge width to its parent width
   */
  block?: boolean
  /**
   * Set the variants of badge
   */
  variant?: 'solid' | 'outline' | 'danger' | 'success' | 'warning'
  /**
   * Set the background color of tag
   */
  /**
   * Option to add button close of tag
   */
  closable?: boolean
  /**
   * Custom close icon
   */
  closeIcon?: React.ReactNode
  /**
   * Callback executed when tag is closed
   */
  onClose?: () => void
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'solid',
  block,
  closable,
  closeIcon = 'x',
  onClose,
  ...props
}) => {
  return (
    <TagBase variant={variant} block={block} {...props}>
      <TagInner>
        {children}
        {closable && <button onClick={onClose}>{closeIcon}</button>}
      </TagInner>
    </TagBase>
  )
}
