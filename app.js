const express = require('express')
const app = express();
const hell= require('./hell');
const util = require('util');


const test = util.promisify(hell);
test().then((dd)=>{
    console.log('dd');
}).catch((err)=>{
    console.log(err)
});

console.log('start')
app.listen(3000);

 