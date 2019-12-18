module.exports = function() {
  return {
    files: [
      'src/**/*.js',
      'src/**/*.svelte',
      '!src/main.js',
      { pattern: '*.config.js', instrument: false, load: false, ignore: false }
    ],

    tests: ['tests/**/*.test.js'],

    env: {
      type: 'node'
    },

    testFramework: 'jest'
  };
};
