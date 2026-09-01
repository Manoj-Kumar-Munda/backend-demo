module.exports = {
  apps: [{
    name: 'backend-demo',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    watch: false,
    autorestart: true,
    env: {
      NODE_ENV: 'production',
      PORT: 4000,
    },
    env_development: {
      NODE_ENV: 'development',
      PORT: 4000,
    },
  }],
};
