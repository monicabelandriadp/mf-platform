import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/module-federation/webpack';
import { ModuleFederationConfig } from '@nx/module-federation';

import baseConfig from './module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
};

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config, { dts: false }),

  // ⬇⬇⬇ FIX REAL PARA LOS WARNINGS ⬇⬇⬇
  (webpackConfig) => {
    webpackConfig.ignoreWarnings = [
      ...(webpackConfig.ignoreWarnings ?? []),
      (warning) =>
        typeof warning?.message === 'string' &&
        warning.message.includes('@module-federation') &&
        warning.message.includes('source-map-loader'),
    ];

    return webpackConfig;
  }
);
