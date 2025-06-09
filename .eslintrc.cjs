module.exports = {
    parser: '@typescript-eslint/parser',       // TSコードを解析
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    settings: { react: { version: 'detect' } }, // Reactバージョン検知
    rules: {
      'react/react-in-jsx-scope': 'off',       // React 17+なら不要
      '@typescript-eslint/explicit-module-boundary-types': 'warn'
    }
  }
  