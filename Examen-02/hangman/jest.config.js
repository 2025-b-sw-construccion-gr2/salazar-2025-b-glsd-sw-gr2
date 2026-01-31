module.exports = {
    testEnvironment: "jsdom",
    collectCoverageFrom: [
        "hangman.js",
        "!node_modules/**",
    ],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 20,
            statements: 20,
        },
    },
};
