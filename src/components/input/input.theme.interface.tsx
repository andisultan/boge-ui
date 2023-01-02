export interface inputSizeProperty {
  fontSize: string
  paddingAddon: string
  paddingInput: string
}

export interface inputSize {
  medium: inputSizeProperty
  small: inputSizeProperty
  large: inputSizeProperty
}

export interface inputActifity {
  active: string
  hover: string
}

export interface inputVariantProperties {
  border: inputActifity
  color: inputActifity
}

export interface inputVariant {
  default: inputVariantProperties
  transparent: inputVariantProperties
  danger: inputVariantProperties
  success: inputVariantProperties
  warning: inputVariantProperties
}

export interface inputThemeInterface {
  background: string
  boxShadow: string
  color: string
  shap: {
    square: string
    rounded: string
    circle: string
  }
  size: inputSize
  variant: inputVariant
  disabled: {
    background: string
    border: string
    color: string
    cursor: string
  }
  message: {
    fontSize: string
    margin: string
    color: {
      default: string
      transparent: string
      danger: string
      success: string
      warning: string
    }
  }
  hint: {
    fontSize: string
    color: string
    margin: string
  }
}
