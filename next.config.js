const withPWA = require('next-pwa')
module.exports={
  images:{
      domains:['storage.googleapis.com'],
  }
};
[withPWA, {
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: true,
    sw: '/sw.js'
  }
}]


