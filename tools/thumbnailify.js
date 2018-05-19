const Thumbnail = require('thumbnail');

const imageSettings = require('./imageSettings');
const readImages = require('./readImages');

const thumbnail = new Thumbnail(
  imageSettings.path.full,
  imageSettings.path.thumbs
);

function createThumbnail (originalFilename) {
  if (!originalFilename) return;

  thumbnail.ensureThumbnail(
    originalFilename,
    imageSettings.thumbWidth,
    imageSettings.thumbHeight,
    (err, thumbnailFilename, created) => {
      if (err != null) throw(err);
      if (created) console.log(`${thumbnailFilename}`);
    }
  );
}

readImages(imageSettings.path.full, createThumbnail);
