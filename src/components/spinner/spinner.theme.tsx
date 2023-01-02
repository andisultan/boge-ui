import { spinnerThemeInterface } from './spinner.theme.interface'

export const spinnerTheme: spinnerThemeInterface = {
  size: {
    medium: {
      border: {
        inner: {
          color: '#f3f3f3',
          width: '4px',
        },
        outer: {
          color: '#1694e6',
          width: '4px',
        },
      },
      volume: '14px',
    },
    small: {
      border: {
        inner: {
          color: '#f3f3f3',
          width: '2px',
        },
        outer: {
          color: '#1694e6',
          width: '2px',
        },
      },
      volume: '12px',
    },
    large: {
      border: {
        inner: {
          color: '#f3f3f3',
          width: '4px',
        },
        outer: {
          color: '#1694e6',
          width: '4px',
        },
      },
      volume: '18px',
    },
  },
}
