const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

module.exports = withPlugins([
  {
    images: {
      domains: ['storage.googleapis.com']
    },

    distDir: 'build',
    future: { webpack5: true },
    typescript: {
      // !! WARN !!
      ignoreBuildErrors: true,
    },

  },
  [withPWA, {
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
      register: true,
      sw: '/sw.js'
    }
  }],
  
  // your other plugins here
])