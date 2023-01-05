import React, { useState } from 'react'
import { AccordionItem } from './accordion-item'
import { AccordionWrapper } from './accortion.style'

export type ItemType = {
  title: string
  content: React.ReactNode
}

export interface AccordionItemProps {
  /**
   * List of the accordion item
   */
  items: ItemType[]
  /**
   * Element for active icon
   */
  icon?: React.ReactNode
  /**
   * Set default accordion open
   */
  defaultActive?: number
}

export const Accordion: React.FC<AccordionItemProps> = ({ items, icon, defaultActive = -1, ...props }) => {
  const [currentIdx, setCurrentIdx] = useState(defaultActive)
  const onClick = (idx: number) => setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1))

  return (
    <AccordionWrapper {...props}>
      {items.map((item, idx) => (
        <AccordionItem icon={icon} key={idx} data={item} isOpen={idx === currentIdx} onClick={() => onClick(idx)} />
      ))}
    </AccordionWrapper>
  )
}
