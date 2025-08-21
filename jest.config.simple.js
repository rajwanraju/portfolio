const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@api/(.*)$': '<rootDir>/src/app/api/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@root/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(redux-persist|@reduxjs/toolkit)/)',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
    '<rootDir>/test-simple.js',
  ],
}

module.exports = createJestConfig(customJestConfig)
