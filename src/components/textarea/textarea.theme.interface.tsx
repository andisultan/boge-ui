export interface textareaVariant {
  default: string
  transparent: string
  danger: string
  success: string
  warning: string
}

export interface textareaThemeInterface {
  minHeight: string
  padding: string
  color: string
  fontSize: string
  lineHeight: string
  boxShadow: string
  background: string
  outline: string
  shap: {
    square: string
    rounded: string
    circle: string
  }
  variant: textareaVariant
  hover: {
    border: string
    outline: string
  }
}
