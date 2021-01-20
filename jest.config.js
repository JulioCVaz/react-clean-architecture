module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}'
    ],
    CoverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}