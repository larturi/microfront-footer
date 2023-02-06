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
          exposePages: true, // `false` by default
          enableImageLoaderFix: true, // `false` by default
          enableUrlLoaderFix: true, // `false` by default
          automaticAsyncBoundary: true, // `false` by default
          skipSharingNextInternals: false, // `false` by default
        },
      })
    )

    return config
  },
}
