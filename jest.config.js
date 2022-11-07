/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleNameMapper: {
    "^[./a-zA-Z0-9_]+\\.(jpg|png|svg)$": "assets/imgs",
    "assets/(.*)": [
      "assets/$1",
    ],
  },
  modulePaths: ["src"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
};
