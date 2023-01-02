export interface spinnerBorder {
  width: string
  color: string
}

export interface spinnerSizeProperty {
  border: {
    inner: spinnerBorder
    outer: spinnerBorder
  }
  volume: string
}

export interface spinnerSize {
  medium: spinnerSizeProperty
  small: spinnerSizeProperty
  large: spinnerSizeProperty
}

export interface spinnerThemeInterface {
  size: spinnerSize
}
