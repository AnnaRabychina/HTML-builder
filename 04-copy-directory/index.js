const fs = require('fs')
const path = require('path');
const fsPromises = require('fs/promises');

const path_files = __dirname + '//files/'
const path_files_copy = __dirname + '//files-copy/'

fs.mkdir(path_files_copy, { recursive: true }, (err) => { 
    if (err) console.error(err);
    fs.readdir(path_files_copy, (err, files) => {
        if (err) console.error(err);
        if (files.length) {
            files.forEach(item => fsPromises.rm(path_files_copy + item));
        }
    });
})

setTimeout(() => {
    fs.readdir(path_files, (err, files) => {
        if (err) console.error(err)
        files.forEach(item => {
            fs.copyFile(path_files + item, path_files_copy + item, (err) => {
                if (err) console.error(err);
          });
        })
    })

}, 200)

