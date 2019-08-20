const express = require('express')
const app = express();
const hell= require('./hell');
const util = require('util');

const fs = require('fs');

const readdir = util.promisify(fs.readdir);
readdir(__dirname).then((files) => {
    console.log(files);
    console.log('we are here')
}).catch((err) => {
    console.log(err);
});
console.log('start');
app.listen(3000);

 