import { inputThemeInterface } from './input.theme.interface'

export const inputTheme: inputThemeInterface = {
  background: '#ffffff',
  boxShadow: 'none',
  color: '#333333',
  shap: {
    square: '0',
    rounded: '8px',
    circle: '28px',
  },
  size: {
    medium: {
      fontSize: '14px',
      paddingAddon: '10px',
      paddingInput: '4px 8px',
    },
    small: {
      fontSize: '10px',
      paddingAddon: '8px',
      paddingInput: '4px 8px',
    },
    large: {
      fontSize: '16px',
      paddingAddon: '12px',
      paddingInput: '6px 12px',
    },
  },
  variant: {
    default: {
      border: {
        active: '1px solid #dee2e6',
        hover: '1px solid #dee2e6',
      },
      color: {
        active: '#333333',
        hover: '#333333',
      },
    },
    transparent: {
      border: {
        active: '1px solid transparent',
        hover: '1px solid transparent',
      },
      color: {
        active: '#333333',
        hover: '#333333',
      },
    },
    danger: {
      border: {
        active: '1px solid #bb2d3b',
        hover: '1px solid #bb2d3b',
      },
      color: {
        active: '#333333',
        hover: '#333333',
      },
    },
    success: {
      border: {
        active: '1px solid #198754',
        hover: '1px solid #198754',
      },
      color: {
        active: '#333333',
        hover: '#333333',
      },
    },
    warning: {
      border: {
        active: '1px solid #faad14',
        hover: '1px solid #faad14',
      },
      color: {
        active: '#333333',
        hover: '#333333',
      },
    },
  },
  message: {
    fontSize: '12px',
    margin: '6px 0 0 0',
    color: {
      default: '#333333',
      transparent: '#333333',
      danger: '#bb2d3b',
      success: '#198754',
      warning: '#faad14',
    },
  },
  hint: {
    color: '#333333',
    fontSize: '12px',
    margin: '6px 0 0 0',
  },
  disabled: {
    background: '#eeeeee',
    border: '1px solid transparent',
    color: '#858585',
    cursor: 'none',
  },
}
