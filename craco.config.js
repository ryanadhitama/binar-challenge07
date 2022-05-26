const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@': './src',
          '@app': './src/app',
          '@assets': './src/assets',
          '@components': './src/components',
          '@pages': './src/pages',
          '@reducers': './src/reducers',
          '@libs': './src/libs'
        }
      }
    }
  ],
};
