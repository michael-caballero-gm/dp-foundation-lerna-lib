const { NormalModuleReplacementPlugin } = require('webpack');
const tsAliases = require('../ts-aliases');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  webpackFinal: config => {
    Object.assign(config.resolve.alias, tsAliases);

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          [
            'react-app',
            {
              flow: false,
              typescript: true,
            },
          ],
        ],
      },
    });

    config.resolve.extensions.push('.ts', '.tsx');

    const mockNextConfig = new NormalModuleReplacementPlugin(
      /next\/config/,
      process.cwd() + '/__mocks__/next/config.ts',
    );

    config.plugins.push(mockNextConfig);

    return config;
  },
};
