const fs = require('fs');
const rimraf = require('rimraf');

module.exports = function (dir, cb) {
  rimraf(dir, () => {
    fs.mkdirSync(dir);
    cb();
  });
};
