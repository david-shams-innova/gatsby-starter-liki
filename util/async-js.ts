// let fs = require("fs");
import { readFile, readFileSync } from "fs"


module.exports = {
    showFile: readFile('note.txt', 'utf8', (err, data) => console.log(data))
}

setTimeout(() => console.log('Later...'), 0)
console.log('Now')
for (let i = 0; i < 100; i++) {
    console.log(i)
}


// fs.readFile('note.txt', 'utf8', (err, data) => {
//     if(!err){

//         console.log(data)
//     } else {
//         console.error(err.message)
//     }

// })


readFile('note.txt', 'utf8', (err, data) => console.log(data))