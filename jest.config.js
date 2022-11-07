/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleNameMapper: {
    "^[./a-zA-Z0-9_]+\\.png$": "assets/imgs",
    "assets/(.*)": [
      "assets/$1",
    ],
  },
  modulePaths: ["src"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
};
