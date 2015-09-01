var config = require('./');

module.exports = {
    src: config.sourceDirectory + "Scss/**/*.{sass,scss}",
    dest: config.publicDirectory + '/Css'
};
