module.exports = {
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    transformIgnorePatterns: [],
    testEnvironment: 'node',
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest', {
            jsc: {
                'parser': { 'syntax': 'typescript' }
                }
            }
        ],
    },
    collectCoverage: true
}
