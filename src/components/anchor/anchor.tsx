import React from 'react'
import { AnchorBase, AnchorBefore, AnchorAfter } from './anchor.style'

export interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
  /**
   * Set the before component of anchor
   */
  before?: React.ReactNode
  /**
   * Set the after component of anchor
   */
  after?: React.ReactNode
  /**
   * Disabled state of anchor
   */
  disabled?: boolean
  /**
   * Set the size of anchor
   */
  size?: 'medium' | 'small' | 'large'
}

export const Anchor: React.FC<AnchorProps> = ({ children, before, after, size = 'medium', disabled, ...props }) => {
  return (
    <AnchorBase disabled={disabled} size={size} {...props}>
      {before && children ? <AnchorBefore size={size}>{before}</AnchorBefore> : before}
      {!before && !after ? <span className='child_text'>{children}</span> : children}
      {after && children ? <AnchorAfter size={size}>{after}</AnchorAfter> : after}
    </AnchorBase>
  )
}
