import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run mfe-shell-remotes:serve:development',
        production: 'nx run mfe-shell-remotes:serve:production',
      },
      ciWebServerCommand: 'nx run mfe-shell-remotes:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
