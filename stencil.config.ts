import { less } from '@stencil-community/less';
import type { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'WebDriver-Bidi',
  autoprefixCss: false,
  plugins: [
    less(),
  ],
  devServer: {
    port: 8080,
    reloadStrategy: 'pageReload',
  },
  globalScript: 'src/components/global.ts',
  buildEs5: 'prod',
  outputTargets: [
    {
      type: 'docs-readme',
      dependencies: false,
      footer: '_End of auto-generated documentation._',
    },
    {
      type: 'dist',
    },
    {
      type: 'dist-hydrate-script',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true,
      minify: true,
      customElementsExportBehavior: 'bundle',
      copy: [
        {
          src: '**/*.{jpg,png,svg,gif,webp}',
          dest: 'dist/assets',
          warn: true,
        },
      ],
    },
    {
      type: 'www',
      baseUrl: 'http://localhost:8888',
      serviceWorker: null, // disable service workers
    },
  ],
  extras: {
    enableImportInjection: true,
  },
  testing: {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    setupFiles: ['jest-canvas-mock'],
    /**
     * Gitlab CI doesn't allow sandbox, therefor this parameters must be passed to your Headless Chrome
     * before it can run your tests
     */
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
};
