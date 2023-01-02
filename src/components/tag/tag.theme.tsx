import { tagThemeInterface } from './tag.theme.interface'

export const tagTheme: tagThemeInterface = {
  margin: '4px',
  fontSize: '12px',
  padding: '3px 6px',
  variant: {
    solid: {
      background: '#1694e6',
      color: '#fff',
      borderColor: '#1694e6',
    },
    outline: {
      background: '#00000005',
      color: '#3d2e2ee0',
      borderColor: '#d9d9d9',
    },
    danger: {
      background: '#fff2f0',
      borderColor: '#ffccc7',
      color: '#ff4d4f',
    },
    warning: {
      background: '#fffbe6',
      borderColor: '#ffe58f',
      color: '#faad14',
    },
    success: {
      background: '#f6ffed',
      borderColor: '#b7eb8f',
      color: '#52c41a',
    },
  },
}
