"use strict";
exports.__esModule = true;
// let fs = require("fs");
var fs_1 = require("fs");
module.exports = {
    showFile: fs_1.readFile('note.txt', 'utf8', function (err, data) { return console.log(data); })
};
setTimeout(function () { return console.log('Later...'); }, 0);
console.log('Now');
for (var i = 0; i < 100; i++) {
    console.log(i);
}
// fs.readFile('note.txt', 'utf8', (err, data) => {
//     if(!err){
//         console.log(data)
//     } else {
//         console.error(err.message)
//     }
// })
fs_1.readFile('note.txt', 'utf8', function (err, data) { return console.log(data); });
