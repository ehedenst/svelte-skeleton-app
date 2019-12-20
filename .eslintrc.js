module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
  ignorePatterns: ['node_modules/', 'public/build/', '!.eslintrc.js'],
  plugins: ['html', 'svelte3'],
  overrides: [
    {
      files: ['./*.js'],
      env: {
        node: true
      }
    },
    {
      files: ['**/*.test.js'],
      env: {
        jest: true
      }
    },
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ]
};
