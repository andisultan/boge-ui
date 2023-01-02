export interface anchorSizeProperty {
  paddingX: string
  paddingText: string
}

export interface anchorSize {
  medium: anchorSizeProperty
  small: anchorSizeProperty
  large: anchorSizeProperty
}

export interface anchorThemeInterface {
  cursor: string
  size: anchorSize
  disabled: {
    cursor: string
    color: string
  }
}
