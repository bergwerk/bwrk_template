var config = require('./');

module.exports = {
  paths: [
    '{Classes,Configuration,Documentation,Resources,Tests}/**',
    'ext_*',
    'class.ext_update.php',
    '!' + '{Resources/Private/Assets,Resources/Vendor}',
    '!' + '{Resources/Private/Assets,Resources/Vendor}/**',
    '!' + '**/.{keep,gitignore,DS_Store,_*}',
  ],
  options: {
    nodir: true,
    dot: true
  }
};
