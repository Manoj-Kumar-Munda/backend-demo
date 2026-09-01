module.exports = {
  apps: [{
    name: 'backend-demo',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    watch: false,
    autorestart: true,
    env_development: {
      NODE_ENV: 'development',
      PORT: process.env.PORT,
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: process.env.PORT,
    },
  }],
};
