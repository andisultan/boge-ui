import React, { useEffect, useRef, useState } from 'react'
import {
  SelectWrapper,
  SelectInput,
  SelectMenu,
  SelectSearchBox,
  SelectItem,
  SelectTag,
  SelectTagItem,
  SelectTagItemClose,
} from './select.style'

const Icon = () => {
  return (
    <svg height='20' width='20' viewBox='0 0 20 20'>
      <path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'></path>
    </svg>
  )
}

const CloseIcon = () => {
  return (
    <svg height='20' width='20' viewBox='0 0 20 20'>
      <path d='M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'></path>
    </svg>
  )
}

type SelectOption = {
  value: string
  label: string
  prevState: null
}

export interface SelectProps {
  placeholder?: string
  options: SelectOption[]
  isMulti?: boolean
  isSearchable?: boolean
  onChange?: (value: any) => any
}

export const Select: React.FC<SelectProps> = ({ placeholder, options, isMulti, isSearchable, onChange }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [selectedValue, setSelectedValue] = useState<SelectOption[]>([])
  const [searchValue, setSearchValue] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSearchValue('')
    if (showMenu && searchRef.current) {
      searchRef.current.focus()
    }
  }, [showMenu])

  useEffect(() => {
    const handler = (e: any) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }

    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  })

  const handleInputClick = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setShowMenu(!showMenu)
  }

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeholder
    }

    if (isMulti) {
      return (
        <SelectTag>
          {selectedValue.map((option) => (
            <SelectTagItem key={option?.value}>
              {option?.label}
              <SelectTagItemClose onClick={(e: any) => onTagRemove(e, option)}>
                <CloseIcon />
              </SelectTagItemClose>
            </SelectTagItem>
          ))}
        </SelectTag>
      )
    }

    return selectedValue[0]?.label
  }

  const removeOption = (option: SelectOption) => {
    return selectedValue.filter((item) => item.value !== option.value)
  }

  const onTagRemove = (e: React.ChangeEvent, option: SelectOption) => {
    e.stopPropagation()
    const newValue = removeOption(option)
    setSelectedValue(newValue)
    onChange?.(newValue)
  }

  const onItemClick = (option: SelectOption) => {
    let newValue = []
    if (isMulti) {
      if (selectedValue.findIndex((item) => item.value === option.value) >= 0) {
        newValue = removeOption(option)
      } else {
        newValue = [...selectedValue, option]
      }
    } else {
      newValue = [option]
    }
    setSelectedValue(newValue)
    onChange?.(newValue)
  }

  const isSelected = (option: SelectOption) => {
    if (isMulti) {
      return selectedValue.filter((item) => item.value === option.value).length > 0
    }

    if (!selectedValue) {
      return false
    }

    return selectedValue[0]?.value === option.value
  }

  const onSearch = (e: any) => {
    setSearchValue(e.target.value)
  }

  const getOptions = () => {
    if (!searchValue) {
      return options
    }

    return options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
  }

  return (
    <SelectWrapper>
      <SelectInput ref={inputRef} onClick={handleInputClick}>
        {getDisplay()} <Icon />
      </SelectInput>
      {showMenu && (
        <SelectMenu>
          {isSearchable && (
            <SelectSearchBox>
              <input onChange={onSearch} value={searchValue} ref={searchRef} />
            </SelectSearchBox>
          )}
          {getOptions().map((option) => (
            <SelectItem onClick={() => onItemClick(option)} key={option.value} isSelected={isSelected(option)}>
              {option.label}
            </SelectItem>
          ))}
        </SelectMenu>
      )}
    </SelectWrapper>
  )
}