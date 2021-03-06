module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testMatch: ['**/__tests__/**/*.test.tsx', '**/*.test.tsx?'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'coverage',
    '/__.*__/',
    'jest.config.js',
  ],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['**/**/*.tsx?'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
};
