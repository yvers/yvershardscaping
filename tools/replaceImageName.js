const path = require('path');
const fs = require('fs');

const imageSettings = require('./imageSettings');
const readImages = require('./readImages');

const srcPath = path.join(__dirname, '../src');
const targetFile = process.argv.slice(2)[0];

if (targetFile == null) {
  console.log('no target file.');
  return;
}

const targetFilePath = path.join(srcPath, targetFile);

readImages(imageSettings.path.full, (sizifiedImages) => {
  let d;

  fs.createReadStream(targetFilePath)
    .on('data', (data) => {
      d = data.toString();

      sizifiedImages.forEach((imageName) => {
        const [imageBase] = imageName.split(imageSettings.separator);
        const [imageFull] = imageName.split('.');
        const r = new RegExp(`${imageBase}(?!${imageSettings.separator})`, 'gm');

        d = d.replace(r, imageFull);
      });
    })
    .on('close', () => {
      fs.writeFile(targetFilePath, d, 'utf-8', function (err) {
        if (err) throw(err);

        console.log(`Updated "${targetFile}"!`);
      });
    });
}, true);
