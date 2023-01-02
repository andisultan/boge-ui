import * as React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/theme'
import 'jest-canvas-mock'

import { Dropdown } from '../src/'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={Theme}>
        <Dropdown label='Dropdown'>This is content dropdown</Dropdown>
      </ThemeProvider>,
    )
  })
})
