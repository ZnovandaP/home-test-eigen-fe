// jest.config.mjs
export default {
  preset: "ts-jest/presets/default-esm", // ESM preset
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "./tsconfig.app.json",
      },
    ],
  },

  extensionsToTreatAsEsm: [".ts", ".tsx"],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^.+\\.svg$": "<rootDir>/__mocks__/svgMock.ts",
    "^@presentation/(.*)$": "<rootDir>/src/presentation/$1",
    "^@domain/(.*)$": "<rootDir>/src/domain/$1",
    "^@application/(.*)$": "<rootDir>/src/application/$1",
    "^@infrastructure/(.*)$": "<rootDir>/src/infrastructure/$1",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
