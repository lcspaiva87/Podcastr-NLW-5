if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PHVLZ9K-ULswkkAnF9ycK/_buildManifest.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/PHVLZ9K-ULswkkAnF9ycK/_ssgManifest.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/chunks/7b172eb4e6875643a31fcdec031a5c3b3b09702d.6c5cb8ad76395da73aaa.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/chunks/commons.06581df271f9d1f63435.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/chunks/framework.1cddd991bfe63666dc71.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/chunks/main-cf8247c969ee59f753f0.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/chunks/pages/_app-1fa3bd04df784c81862c.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/chunks/pages/_error-b59df151e406cfd4381c.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/chunks/pages/episodes/%5Bslug%5D-b80ade686e86f37b9a65.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/chunks/pages/index-df165e32a4fa78271810.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/chunks/polyfills-8f31809deb7932dd0187.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/css/2a4b942284c89b05d034.css",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/css/96e21cf2b1b3b5f0a057.css",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/_next/static/css/bab9bda900c2c8330378.css",revision:"PHVLZ9K-ULswkkAnF9ycK"},{url:"/arrow-left.svg",revision:"a4bec8983393a6650eeadc70ceaca3f1"},{url:"/favicon.png",revision:"9a10a0c57853a065708f39c0cf7c8640"},{url:"/gif_.gif",revision:"c77e4a46ed346fde3973594590d71884"},{url:"/icon-1024x1024.png",revision:"07717d5e7c78398ab549fac81db49a19"},{url:"/icon-128x128.png",revision:"f944a36fa089827baff0c85f2265e5a6"},{url:"/icon-256x256.png",revision:"84bbba49f8419fbf82a2870291fc48f7"},{url:"/icon-512x512.png",revision:"1a3728b6addda79f67debdb58168f110"},{url:"/img.png",revision:"5cf902b941be40946c75cd35a2aace59"},{url:"/img/gif_.gif",revision:"c77e4a46ed346fde3973594590d71884"},{url:"/img/img.png",revision:"5cf902b941be40946c75cd35a2aace59"},{url:"/logo.svg",revision:"270fed2f85e264e3b1b678bb7fb3f2fd"},{url:"/manifest.json",revision:"10bfe6aaa06b6911cf69c65be665e967"},{url:"/pause.svg",revision:"54841e81896727b41392f30ac032a7be"},{url:"/play-green.svg",revision:"de07138a15303202044cb5e780d3fdd3"},{url:"/play-next.svg",revision:"25a2b47e3cda80ad6285c6725bf9d5ba"},{url:"/play-previous.svg",revision:"85b6ed81bd274cf318272535025f002b"},{url:"/play.svg",revision:"4639f696f322c696dc52f91fdf2f6fcc"},{url:"/playing.svg",revision:"2f05f6b73a93700697b0491d1b77370a"},{url:"/repeat.svg",revision:"f61d9bb4e9c66d07ecb06fc5844a52c8"},{url:"/shuffle.svg",revision:"34540ba61de3ff9c3fff2af2c9cad007"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/(?!api\/).*$/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
