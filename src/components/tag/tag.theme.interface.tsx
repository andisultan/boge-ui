export interface tagVariantProperty {
  background: string
  borderColor: string
  color: string
}

export interface tagThemeInterface {
  margin: string
  fontSize: string
  padding: string
  variant: {
    solid: tagVariantProperty
    outline: tagVariantProperty
    danger: tagVariantProperty
    success: tagVariantProperty
    warning: tagVariantProperty
  }
}
