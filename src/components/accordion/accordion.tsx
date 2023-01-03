import React, { useState } from 'react'
import { AccordionItem } from './accordion-item'
import { AccordionWrapper } from './accortion.style'

export type ItemType = {
  title: string
  content: React.ReactNode
}

export interface AccordionItemProps {
  /**
   * key of the accordion item
   */
  items: [ItemType]
  /**
   * Element for active icon
   */
  icon?: React.ReactNode
}

export const Accordion: React.FC<AccordionItemProps> = ({ items, icon, ...props }) => {
  const [currentIdx, setCurrentIdx] = useState(-1)
  const onClick = (idx: number) => setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1))

  return (
    <AccordionWrapper {...props}>
      {items.map((item, idx) => (
        <AccordionItem icon={icon} key={idx} data={item} isOpen={idx === currentIdx} onClick={() => onClick(idx)} />
      ))}
    </AccordionWrapper>
  )
}
