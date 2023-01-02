export interface checkboxSizeProperty {
  height: string
  width: string
  margin: string
  after: {
    width: string
    height: string
    fontSize: string
  }
}

export interface checkboxSize {
  medium: checkboxSizeProperty
  small: checkboxSizeProperty
  large: checkboxSizeProperty
}

export interface checkboxAfterContent {
  check: string
  plus: string
  minus: string
}

export interface checkboxThemeInterface {
  background: string
  border: string
  borderRadius: string
  cursor: string
  transition: string
  size: checkboxSize
  after: {
    background: string
  }
  hover: {
    border: string
    after: {
      color: string
      content: checkboxAfterContent
    }
  }
  checked: {
    border: string
    after: {
      color: string
      content: checkboxAfterContent
    }
  }
  disabled: {
    cursor: string
    checked: {
      border: string
      after: {
        color: string
        content: checkboxAfterContent
      }
    }
  }
}
