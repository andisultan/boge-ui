import { textareaThemeInterface } from './textarea.theme.interface'

export const textareaTheme: textareaThemeInterface = {
  minHeight: '42px',
  padding: '14px',
  color: '#444444',
  fontSize: '16px',
  lineHeight: '1.5',
  boxShadow: 'none',
  background: '#ffffff',
  outline: 'none',
  shap: {
    square: '0',
    rounded: '8px',
    circle: '28px',
  },
  variant: {
    default: '1px solid #d9d9d9',
    transparent: '1px solid transparent',
    danger: '1px solid #ff4d4f',
    success: '1px solid #52c41a',
    warning: '1px solid #faad14',
  },
  hover: {
    border: '1px solid #1694e6',
    outline: 'none',
  },
}
