module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|scss)$": "<rootDir>/node_modules/jest-css-modules",
    "^@test-utils/(.*)$": "<rootDir>/tests/unit/_helpers/$1",
  },
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js?$": "babel-jest",
  },
  testMatch: ["**/tests/unit/**/*.spec.(js|jsx|ts|tsx)"],
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.vue",
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/stories/**/*.ts",
    "!<rootDir>/src/external.d.ts",
    "!<rootDir>/src/shims-vue.d.ts",
  ],
};
