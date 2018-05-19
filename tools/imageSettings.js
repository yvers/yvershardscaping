const path = require('path');

const assets = path.resolve(__dirname, '../src/assets');
const images = path.join(assets, 'img');
const full = path.join(images, 'full');
const thumbs = path.join(images, 'thumb');

module.exports = {
  path: {
    assets,
    images,
    full,
    thumbs,
  },
  thumbWidth: 200,
  thumbHeight: null,
};
