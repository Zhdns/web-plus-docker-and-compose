module.exports = {
    apps: [{
      name: 'kpd-backend',
      script: './dist/main.js',
      watch: true,
      exec_mode: 'cluster',
      instances: 2,
      max_restarts: 10,
      restart_delay: 1000,
    }],
  };