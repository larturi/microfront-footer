# Module Federation - Footer Component

<https://www.npmjs.com/package/@module-federation/nextjs-mf/v/6.0.7>

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

# Pasos para integrar el componente Footer

### Instalar dependencias en package.json

```bash
"dependencies": {
    "@module-federation/nextjs-mf": "^6.0.4",
    "webpack": "^5.75.0"
}
```

### Incluir el componente en next.config.js

```bash
require('@module-federation/nextjs-mf/src/include-defaults')

const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

module.exports = {
  webpack(config, options) {
    const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name: 'next1',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          fe2: `fe2@http://localhost:3002/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
      })
    )

    return config
  },
}
```

### Declarar el componente en ts.d.ts

```bash
declare module 'fe2/footer'
```

### Usar el componente en pages/_app.tsx

```bash
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ComponentType, Dispatch, ReactElement, SetStateAction, useState } from 'react'

type IFooter = {
  bgColor?: string
  color?: string
}

const Footer: ComponentType<IFooter> = dynamic(() => import('fe2/footer'), { ssr: false })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Footer bgColor='#0070F2' />
    </>
  )
}

export default MyApp
```

# Pasos para crear un nuevo componente

### Instalar dependencias en package.json

```bash
"dependencies": {
    "@module-federation/nextjs-mf": "^6.0.4",
    "webpack": "^5.75.0"
}
```

### Incluir el componente en next.config.js

```bash
const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'fe2',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './footer': './src/components/Footer.tsx',
          './section': './src/components/Section.jsx',
        },
        extraOptions: {
          exposePages: true, 
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
          automaticAsyncBoundary: true,
          skipSharingNextInternals: false,
        },
      })
    )

    return config
  },
}
```

### Crear el componente

```bash
import React from 'react'

interface IFooter {
  bgColor?: string
  color?: string
}

const Footer = ({ bgColor = '#000', color = '#fff', setCount, count = 0 }: IFooter) => {
  return (
    <>
      <div className='footer'>
        <div className='section'>
          <p>Remote Footer</p>
        </div>
      </div>
    </>
  )
}

export default Footer

```
