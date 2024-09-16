module.exports = {
  apps: [
    {
      name: 'typebot-builder',
      script: 'pnpm',
      args: 'start',
      cwd: 'apps/builder',
      env: {
        PORT: 3001
      }
    },
    {
      name: 'typebot-viewer',
      script: 'pnpm',
      args: 'start',
      cwd: 'apps/viewer',
      env: {
        PORT: 3002
      }
    }
  ]
};
