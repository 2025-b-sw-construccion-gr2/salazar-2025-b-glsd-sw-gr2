module.exports = {
    testEnvironment: "jsdom",
    collectCoverageFrom: [
        "hangman.js",
        "!node_modules/**",
    ],
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50,
        },
    },
};
