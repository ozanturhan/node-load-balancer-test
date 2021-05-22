module.exports = {
  apps: [
    {
      name: 'pm2-test',
      script: './index.js',
      instances: 'max',
      exec_mode: 'cluster',
    },
  ],
};
