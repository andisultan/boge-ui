import React from 'react'
import { BadgeWrapper, BadgeSpan, BadgeSup } from './badge.style'

export interface BadgeProps {
  children?: React.ReactNode
  /**
   * Option to fit badge width to its parent width
   */
  block?: boolean
  /**
   * Set the variants of badge
   */
  variant?: 'solid' | 'danger' | 'success' | 'warning'
  /**
   * Set the couting number or text of badge
   */
  count?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'solid', count, ...props }) => {
  return (
    <BadgeWrapper {...props}>
      {count ? <BadgeSup variant={variant}>{count}</BadgeSup> : <BadgeSpan variant={variant} />}
      {children}
    </BadgeWrapper>
  )
}
