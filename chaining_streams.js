var fs = require("fs");
var zlib = require('zlib');

//compress the file input to input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));


console.log("File Compressed.");


//decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("File decompressed.");
