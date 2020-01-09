module.exports = {
  coverageDirectory: '.coverage',
  moduleFileExtensions: ['js', 'svelte'],
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': ['svelte-jester', { preprocess: true }]
  }
};
