import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  moduleFileExtensions: ['ts', 'js'],
  roots: [
    '/mnt/af374446-ae63-4275-841b-7ee0ed101b6e/Personal-Projects/Hands-Down-Projects/test/jest-with-typescript',
  ],
  transform: {
    '^.+\\.ts?$': '@swc/jest',
  },
  setupFilesAfterEnv: ['jest-extended'],

  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  globalSetup: './test/globalSetup.ts',
  globalTeardown: './test/gloablTeardown.ts',
};

export default config;
