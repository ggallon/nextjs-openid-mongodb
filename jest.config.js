module.exports = {
  rootDir: './',
  testEnvironment: 'node',
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules',
    'tests',
    './jest.config.js'
  ],
  coverageReporters: [
    'lcov',
    'text',
    'text-summary'
  ],
  preset: 'ts-jest'
};
