export interface radioSizeProperty {
  height: string
  width: string
  margin: string
  left: string
  top: string
  after: {
    width: string
    height: string
  }
}

export interface radioSize {
  medium: radioSizeProperty
  small: radioSizeProperty
  large: radioSizeProperty
}

export interface radioThemeInterface {
  background: string
  border: string
  borderRadius: string
  cursor: string
  transition: string
  size: radioSize
  after: {
    borderRadius: string
    background: string
  }
  hover: {
    border: string
    after: {
      background: string
    }
  }
  checked: {
    border: string
    after: {
      background: string
    }
  }
  disabled: {
    cursor: string
    checked: {
      border: string
      after: {
        background: string
      }
    }
  }
}
