import * as React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/theme'
import 'jest-canvas-mock'

import { Button } from '../src/'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={Theme}>
        <Button>Button</Button>
      </ThemeProvider>,
    )
  })
})
