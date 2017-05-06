module.exports = {
  staticFileGlobs: [
    'dist/css/**.css',
    'dist/**/*.html',
    'dist/images/**.*',
    'dist/js/**.js'
  ],
  skipWaiting: true,
  stripPrefix: 'dist',
  runtimeCaching: [{
    urlPattern: /\//,
    handler: 'networkOnly'
  },{
    urlPattern: /\/*/,
    handler: 'networkFirst'
  }]
};
