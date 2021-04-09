module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  coverageReporters: ['text'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', '.stories.(ts|tsx)$'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
    // This is to mock CSS imports
    '\\.css$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@theme/(.*)$': '<rootDir>/src/themes/$1',
  },
  testEnvironment: 'jest-environment-jsdom-sixteen',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
};
