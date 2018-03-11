const fs = require('fs');
const { exec } = require('child_process');

fs.readdir('wpimages', function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }
  filenames.forEach(function(filename) {
    if (filename.match(/.+t.jpg$/g)) {
      console.log('***** ', filename);
      // exec(`rm wpimages/${filename}`);
    }
    // fs.readFile(dirname + filename, 'utf-8', function(err, content) {
    //   if (err) {
    //     onError(err);
    //     return;
    //   }
    //   onFileContent(filename, content);
    // });
  });
});
