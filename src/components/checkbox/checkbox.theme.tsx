import { checkboxThemeInterface } from './checkbox.theme.interface'

export const checkboxTheme: checkboxThemeInterface = {
  background: 'transparent',
  border: '2px solid #dee2e6',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out 0s',
  size: {
    medium: {
      height: '16px',
      width: '16px',
      margin: '0 6px 0 0',
      after: {
        width: '12px',
        height: '12px',
        fontSize: '14px',
      },
    },
    small: {
      height: '12px',
      width: '12px',
      margin: '0 6px 0 0',
      after: {
        width: '8px',
        height: '8px',
        fontSize: '10px',
      },
    },
    large: {
      height: '20px',
      width: '20px',
      margin: '0 6px 0 0',
      after: {
        width: '16px',
        height: '16px',
        fontSize: '16px',
      },
    },
  },
  after: {
    background: '#ffffff',
  },
  hover: {
    border: '2px solid #1694e6',
    after: {
      color: '#1694e6',
      content: {
        check: '"✔"',
        plus: '"+"',
        minus: '"-"',
      },
    },
  },
  checked: {
    border: '2px solid #1694e6',
    after: {
      color: '#1694e6',
      content: {
        check: '"✔"',
        plus: '"+"',
        minus: '"-"',
      },
    },
  },
  disabled: {
    cursor: 'default',
    checked: {
      border: '2px solid #dee2e6',
      after: {
        color: '#dee2e6',
        content: {
          check: '"✔"',
          plus: '"+"',
          minus: '"-"',
        },
      },
    },
  },
}
