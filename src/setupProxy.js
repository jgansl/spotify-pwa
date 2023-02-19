const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/auth/**', 
        createProxyMiddleware({ 
            target: 'https://spotify-pwa.vercel.app:5000'
        })
    );
};
