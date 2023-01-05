export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/theme'

const PijarTheme = {
  ...Theme,
  name: 'pijar',
  button: {
    ...Theme.button,
    size: {
      medium: {
        paddingInner: '15px 35px',
        paddingAddon: '10px',
      }
    },
    variant: {
      solid: {
        background: {
          active: 'red',
          hover: 'linear-gradient(to right, #19527e 0%, #3088c8 100%)',
        },
        border: {
          active: '0',
          hover: '0',
        },
        color: {
          active: 'white',
          hover: 'white',
        }
      }
    },
    disabled: {
      background: 'red',
    }
  }
}

const themes = [Theme];
addDecorator(withThemesProvider(themes, ThemeProvider));