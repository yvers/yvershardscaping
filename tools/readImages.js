const readdir = require('fs').readdir;
const extname = require('path').extname;

function isImage (filename = '') {
  return ['jpg', 'jpeg', 'png', 'gif'].indexOf(extname(filename.toLowerCase()).slice(1)) >= 0;
}

module.exports = function (path, cb) {
  if (path == null || cb == null) return;

  console.log(`reading images from: ${path}`);

  readdir(path, (err, files) => {
    if (err != null) throw(err);

    const images = files.filter(isImage);

    images.forEach((filename) => cb(filename, path));

    console.log(`\nprocessing ${images.length} image(s)\n`);
  });
};
