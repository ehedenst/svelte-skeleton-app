module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
  ignorePatterns: ['node_modules/', 'public/build/'],
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    },
    {
      files: ['**/*.test.js'],
      env: {
        jest: true
      }
    },
    {
      files: ['./*.js'],
      env: {
        node: true
      }
    }
  ]
};
