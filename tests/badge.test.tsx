import * as React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/theme'
import 'jest-canvas-mock'

import { Badge, Avatar } from '../src/'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={Theme}>
        <Badge count='99'>
          <Avatar size='40px' shap='rounded'>
            AS
          </Avatar>
        </Badge>
      </ThemeProvider>,
    )
  })
})
