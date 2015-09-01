var path = require('path');
var moment = require('moment');
var meta = require(process.cwd() + '/package.json');

module.exports = function(archiveName) {
  if('version' in meta) {
    archiveName = archiveName + '_' + meta.version;
  }
  return archiveName + '_' + moment().format('YYYYMMDDHHmmss') + '.zip';

};
