const resolve = require('path').resolve;

module.exports = {
    mode: 'production',
    output: {
        path: resolve('public/js'),
        filename: 'bundle.js'
    },
    externals: {
        config: JSON.stringify({})
    }
};