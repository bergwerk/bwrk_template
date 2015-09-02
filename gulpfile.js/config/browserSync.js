var config = require('./');

module.exports = {
    server: false,
    open: false,
    proxy: config.browserSyncTarget,
    files: [config.sourceDirectory + '/{Layouts,Partials,Templates}/**/*.html']
};
