import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, Theme, Button } from 'boge-ui'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <div>
        <h2>Buttons</h2>
        <Button>Variant Solid</Button>
        <br /> <br /> <Button variant='transparent'>Variant Transparent</Button>
        <br /> <br /> <Button variant='outline'>Variant Outline</Button>
        <br /> <br /> <Button variant='danger'>Variant Danger</Button>
        <br /> <br /> <Button variant='success'>Variant Success</Button>
        <br /> <br /> <Button variant='warning'>Variant Warning</Button>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
)
