import * as React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/theme'
import 'jest-canvas-mock'

import { Accordion } from '../src/'

const ITEMS = {
  title: 'Accordion Item 1',
  content: <div>Hello</div>,
}

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={Theme}>
        <Accordion items={[ITEMS]} />
      </ThemeProvider>,
    )
  })
})
