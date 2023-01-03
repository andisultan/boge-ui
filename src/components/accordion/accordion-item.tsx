import React from 'react'
import {
  AccordionItemWrapper,
  AccordionItemHead,
  AccordionItemHeadTitle,
  AccordionItemBody,
  AccordionIcon,
} from './accortion.style'
import { ItemType } from './accordion'

export interface AccordionItemProps {
  data: ItemType
  isOpen: boolean
  onClick: () => void
  icon?: React.ReactNode
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ data, icon, isOpen, onClick }) => {
  console.log(isOpen)
  return (
    <AccordionItemWrapper>
      <AccordionItemHead onClick={onClick}>
        <AccordionItemHeadTitle>{data.title}</AccordionItemHeadTitle>
        <AccordionIcon isOpen={isOpen}>{icon}</AccordionIcon>
      </AccordionItemHead>
      <AccordionItemBody isOpen={isOpen}>{data.content}</AccordionItemBody>
    </AccordionItemWrapper>
  )
}
