# Boge-UI
[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

The simppe react Ui library

## Installation:

```bash
npm install boge-ui
```

or

```bash
yarn add boge-ui
```

## Usage :

Add `Button` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from 'boge-ui'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Default button</h2>
            <Button>Button</Button>
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/boge-ui
[npm-image]: https://img.shields.io/npm/v/my-react-typescript-package
[github-license]: https://img.shields.io/github/license/gapon2401/my-react-typescript-package
[github-license-url]: https://github.com/andisultan/boge-ui/main/LICENSE
[github-build]: https://github.com/andisultan/boge-ui/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/andisultan/boge-ui/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/boge-ui