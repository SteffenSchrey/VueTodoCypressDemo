const webpack = require('@cypress/webpack-preprocessor');
const path = require('path');

module.exports = (on, config) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.js'],
      },
      node: { fs: 'empty', child_process: 'empty', readline: 'empty' },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: 'ts-loader',
                options: {
                  configFile: path.resolve(__dirname, '../tsconfig.json'),
                },
              },
            ],
          },
          {
            test: /\.feature$/,
            use: [
              {
                loader: 'cypress-cucumber-preprocessor/loader',
              },
            ],
          },
          {
            test: /\.features$/,
            use: [
              {
                loader: 'cypress-cucumber-preprocessor/lib/featuresLoader',
              },
            ],
          },
        ],
      },
    },
  };
  on('file:preprocessor', webpack(options));
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      console.log('Adding --disable-dev-shm-usage...');
      launchOptions.args.push('--disable-dev-shm-usage');
      return launchOptions;
    }
  });
  require('cypress-terminal-report/src/installLogsPrinter')(on);
  return config;
};
