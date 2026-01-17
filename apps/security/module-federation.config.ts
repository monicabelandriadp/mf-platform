import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'security',
  exposes: {
    './Module': './src/remote-entry.ts',
    './LoginForm': './src/app/login-form.tsx',
    './SecurityDashboard': './src/app/security-dashboard.tsx',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
