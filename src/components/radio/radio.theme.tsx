import { radioThemeInterface } from './radio.theme.interface'

export const radioTheme: radioThemeInterface = {
  background: 'transparent',
  size: {
    medium: {
      height: '16px',
      width: '16px',
      margin: '0 6px 0 0',
      left: '2px',
      top: '2px',
      after: {
        width: '10px',
        height: '10px',
      },
    },
    small: {
      height: '12px',
      width: '12px',
      margin: '0 6px 0 0',
      left: '1px',
      top: '1px',
      after: {
        width: '8px',
        height: '8px',
      },
    },
    large: {
      height: '20px',
      width: '20px',
      margin: '0 6px 0 0',
      left: '2px',
      top: '2px',
      after: {
        width: '14px',
        height: '14px',
      },
    },
  },
  border: '1px solid #dee2e6',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out 0s',
  after: {
    borderRadius: '50%',
    background: '#ffffff',
  },
  hover: {
    border: '1px solid #1694e6',
    after: {
      background: '#1694e6',
    },
  },
  checked: {
    border: '1px solid #1694e6',
    after: {
      background: '#1694e6',
    },
  },
  disabled: {
    cursor: 'default',
    checked: {
      border: '1px solid #dee2e6',
      after: {
        background: '#dee2e6',
      },
    },
  },
}
