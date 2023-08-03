import { Config } from '@stencil/core';
import {readFileSync} from 'fs';
// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://felix.test/',
    },
  ],
    devServer: {
    basePath: '/',
    initialLoadUrl: '/',
    logRequests: false,
    openBrowser: true,
    reloadStrategy: 'hmr',
    port: 3335,
    address: 'felix.test',
    // Zertifikatsdateien einbinden
    https: {
      cert: readFileSync('felix.test.pem', 'utf8'),
      key: readFileSync('felix.test-key.pem', 'utf8')
    }
  }
};
