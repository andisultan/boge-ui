import { buttonThemeInterface } from './button.theme.interface'

export const buttonTheme: buttonThemeInterface = {
  boxShadow: 'none',
  transition: 'all 0.35s ease',
  cursor: 'pointer',
  variant: {
    solid: {
      background: {
        active: '#1694e6',
        hover: '#1694e6',
      },
      border: {
        active: '1px solid #1694e6',
        hover: '1px solid  #1694e6',
      },
      color: {
        active: 'white',
        hover: 'white',
      },
    },
    outline: {
      background: {
        active: 'transparent',
        hover: '#1694e6',
      },
      border: {
        active: '1px solid #1694e6',
        hover: '1px solid  #1694e6',
      },
      color: {
        active: '#1694e6',
        hover: 'white',
      },
    },
    transparent: {
      background: {
        active: 'transparent',
        hover: '#1694e6',
      },
      border: {
        active: '1px solid transparent',
        hover: '1px solid  transparent',
      },
      color: {
        active: '#1694e6',
        hover: 'white',
      },
    },
    danger: {
      background: {
        active: 'red',
        hover: 'red',
      },
      border: {
        active: '1px solid red',
        hover: '1px solid  red',
      },
      color: {
        active: 'white',
        hover: 'white',
      },
    },
    success: {
      background: {
        active: 'green',
        hover: 'green',
      },
      border: {
        active: '1px solid green',
        hover: '1px solid  green',
      },
      color: {
        active: 'white',
        hover: 'white',
      },
    },
    warning: {
      background: {
        active: 'yellow',
        hover: 'yellow',
      },
      border: {
        active: '1px solid yellow',
        hover: '1px solid  yellow',
      },
      color: {
        active: '#333',
        hover: '#333',
      },
    },
  },
  shap: {
    square: '0',
    rounded: '8px',
    circle: '28px',
  },
  size: {
    medium: {
      fontSize: '14px',
      paddingInner: '10px',
      paddingAddon: '10px',
      paddingText: '0',
    },
    small: {
      fontSize: '12px',
      paddingInner: '10px',
      paddingAddon: '10px',
      paddingText: '0',
    },
    large: {
      fontSize: '18px',
      paddingInner: '10px',
      paddingAddon: '10px',
      paddingText: '0',
    },
  },
  disabled: {
    background: '#eeeeee',
    border: '0',
    color: '#858585',
    cursor: 'not-allowed',
  },
}
