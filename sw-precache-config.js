module.exports = {
  staticFileGlobs: [
    'dist/css/**.css',
    'dist/**/*.html',
    'dist/images/**.*',
    'dist/js/**.js'
  ],
  stripPrefix: 'dist',
  runtimeCaching: [{
    urlPattern: /\/*/,
    handler: 'networkFirst'
  }]
};
