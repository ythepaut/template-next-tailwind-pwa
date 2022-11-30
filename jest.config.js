const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testPathIgnorePatterns : [
        "<rootDir>/tests/mocks/*.mock.ts"
    ]
};

module.exports = createJestConfig(customJestConfig);
