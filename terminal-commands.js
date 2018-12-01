const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce( (acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (filename) => {

  fs.writeFile(filename, '', (err) => {
    if (err) throw err;
    console.log(`Created ${filename}`);
  });

  //Alternative method using fs.open and fs.close I came across.

  // fs.open(filename, 'w', (err, fd) => {
  //   if (err) throw err;
  //   fs.close(fd, err => {
  //     if (err) throw err;
  //   });
  // });

};

module.exports.mkdir = (path) => {

  //Option object setting recursive to true so parent directories will be created.
  fs.mkdir(path, { recursive: true }, err => {
    if (err) throw err;
    console.log(`${path} created.`);
  });

};
