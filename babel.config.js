// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.ts',
          '.svg',
          '.ios.js',
          '.ios.ts',
          '.android.js',
          '.android.ts',
          '.json',
          '.tsx',
          '.ios.tsx',
          '.android.tsx',
        ],
        alias: {
          '~': path.resolve(__dirname, 'src'),
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
