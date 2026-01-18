#!/usr/bin/env node

import { execSync } from 'node:child_process';

const libraryName = process.argv[2];

if (!libraryName) {
  console.error('❌ Debes indicar el nombre de la librería');
  console.error('Ejemplo: npm run create:library ui');
  process.exit(1);
}

const command = `
nx g @nx/react:library ${libraryName}
  --directory=packages/${libraryName}
  --importPath=@platform/${libraryName}
  --bundler=none
  --style=css
  --unitTestRunner=none
`.replace(/\s+/g, ' ').trim();

console.log(`🚀 Creando library: ${libraryName}`);
execSync(command, { stdio: 'inherit' });

console.log(`✅ Library '${libraryName}' creado correctamente`);
