import styled from 'styled-components'

export const SelectWrapper = styled.div`
  box-sizing: border-box;
  text-align: left;
  border: 1px solid #ccc;
  position: relative;
  border-radius: 5px;
`

export const SelectInput = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`

export const SelectMenu = styled.div`
  position: absolute;
  transform: translateY(4px);
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: auto;
  max-height: 207px;
  background-color: #fff;
  z-index: 99;
`

type SelectItemProps = {
  isSelected?: boolean
}

export const SelectItem = styled.span<SelectItemProps>`
  display: block;
  padding: 5px;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? '#9fc3f870' : '#ffffff')};

  &:hover {
    background: #9fc3f870;
  }
`

export const SelectTag = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

export const SelectTagItem = styled.span`
  background-color: #ddd;
  padding: 2px 4px;
  border-radius: 2px;
  display: flex;
  align-items: center;
`

export const SelectTagItemClose = styled.button`
  border: 0;
  padding: 2px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SelectTagClose = styled.div`
  display: flex;
  align-items: center;
`

export const SelectSearchBox = styled.div`
  padding: 5px;
  background-color: #eee;

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`
