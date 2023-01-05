import React from 'react'
import { BoxWrapper } from './box.style'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set the element of box
   */
  children?: React.ReactNode
  /**
   * Set the background of box
   */
  background?: string
  /**
   * Set the padding of box
   */
  padding?: string
  /**
   * Set the margin of box
   */
  margin?: string
  /**
   * Set the border of box
   */
  border?: string
  /**
   * Set the border-radius of box
   */
  radius?: string
  /**
   * Set the box-shadow of box
   */
  boxShadow?: string
}

export const Box: React.FC<BoxProps> = ({
  background = '#fff',
  padding = '8px',
  margin = '8px',
  border = '1px solid #eeeeee',
  radius = '8px',
  boxShadow = 'none',
  children,
  ...props
}) => {
  return (
    <BoxWrapper
      background={background}
      padding={padding}
      margin={margin}
      border={border}
      radius={radius}
      boxShadow={boxShadow}
      {...props}
    >
      {children}
    </BoxWrapper>
  )
}
