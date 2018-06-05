const fs = require('fs');
const path = require('path');

const sizeOf = require('image-size');

const imageSettings = require('./imageSettings');
const checkDir = require('./checkDir');
const readImages = require('./readImages');

function getNewFilename (filename, dimensions) {
  const ext = path.extname(filename);

  return `${path.basename(filename, ext)}__${dimensions.width}x${dimensions.height}${ext}`;
}

function writeFile (filePath, filename, dimensions, cb) {
  const newFileName = getNewFilename(filename, dimensions);
  const done = (err) => {
    console.log(newFileName);

    if (cb != null) cb(err);
  };

  const rd = fs.createReadStream(path.join(filePath, filename));
  rd.on('error', done);

  const wr = fs.createWriteStream(path.join(imageSettings.path.full, newFileName));
  wr.on('error', done);
  wr.on('close', () => done());

  rd.pipe(wr);
}

function setDimensions (originalFilename, originalFilePath) {
  sizeOf(path.join(originalFilePath, originalFilename), (err, dimensions) => {
    if (err != null) throw(err);

    writeFile(originalFilePath, originalFilename, dimensions);
  });
}

checkDir(imageSettings.path.images, () => {
  readImages(imageSettings.path.images, setDimensions);
});
