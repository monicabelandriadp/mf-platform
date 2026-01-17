#!/usr/bin/env node

import { execSync } from 'node:child_process';

const remoteName = process.argv[2];

if (!remoteName) {
  console.error('❌ Debes indicar el nombre del remote');
  console.error('Ejemplo: npm run create:remote login');
  process.exit(1);
}

const command = `npx nx g @nx/react:remote --name=${remoteName} directory=apps/${remoteName} --host=shell --bundler=webpack --style=css --e2eTestRunner=none`;

                 
console.log(`🚀 Creando remote: ${remoteName}`);
execSync(command, { stdio: 'inherit' });

console.log(`✅ Remote '${remoteName}' creado correctamente`);
