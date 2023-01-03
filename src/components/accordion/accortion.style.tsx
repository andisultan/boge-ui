import styled from 'styled-components'

interface AccordionActiveProps {
  isOpen: boolean
}

export const AccordionWrapper = styled.div`
  box-sizing: border-box;
  border: ${(props) => props.theme.accordion.borderWrapper};
  overflow: hidden;
`

export const AccordionItemWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  border-top: ${(props) => props.theme.accordion.borderTopItem};

  &:first-child {
    border-top: 0;
  }
`

export const AccordionItemHead = styled.button`
  padding: ${(props) => props.theme.accordion.paddingHeader};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.accordion.backgroundHeader};
  border: 0;
  cursor: pointer;
  margin: 0;
  width: 100%;
  font-size: ${(props) => props.theme.accordion.fontSizeHeader};
`

export const AccordionItemHeadTitle = styled.span`
  padding-right: ${(props) => props.theme.accordion.paddingRightTitle};
`

export const AccordionIcon = styled.span<AccordionActiveProps>`
  transform: ${(props) => (props.isOpen ? 'rotate(-90deg)' : 'rotate(0)')};
  transition: all 0.1s ease-in-out;
`

export const AccordionItemBody = styled.div<AccordionActiveProps>`
  padding-top: ${(props) => (props.isOpen ? props.theme.accordion.paddingBody : '0')};
  padding-right: ${(props) => props.theme.accordion.paddingBody};
  padding-bottom: ${(props) => (props.isOpen ? props.theme.accordion.paddingBody : '0')};
  padding-left: ${(props) => props.theme.accordion.paddingBody};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.1s ease-in-out;
  height: ${(props) => (props.isOpen ? 'auto' : '0')};
  overflow: hidden;
  background: ${(props) => props.theme.accordion.backgroundBody};
  font-size: ${(props) => props.theme.accordion.fontSizeBody};
  border-top: ${(props) => props.theme.accordion.borderTopBody};
`
