export interface buttonActivity {
  active: string
  hover: string
}

export interface buttonVariantProperty {
  background: buttonActivity
  border: buttonActivity
  color: buttonActivity
}

export interface buttonVariant {
  solid: buttonVariantProperty
  outline: buttonVariantProperty
  transparent: buttonVariantProperty
  danger: buttonVariantProperty
  success: buttonVariantProperty
  warning: buttonVariantProperty
}

export interface buttonSizeProperty {
  fontSize: string
  paddingInner: string
  paddingAddon: string
  paddingText: string
}

export interface buttonThemeInterface {
  boxShadow: string
  transition: string
  cursor: string
  variant: buttonVariant
  shap: {
    square: string
    rounded: string
    circle: string
  }
  size: {
    medium: buttonSizeProperty
    small: buttonSizeProperty
    large: buttonSizeProperty
  }
  disabled: {
    background: string
    border: string
    color: string
    cursor: string
  }
}
