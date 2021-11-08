const fs = require('fs')
const path = require('path');

const dir =  __dirname + '//secret-folder/'

fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err)
    }
    files.forEach(item => {
       fs.stat(dir+item, (err, stats) => {
        if (err) {
            console.error(err)
        }
        if(stats.isFile()){
            console.log(path.basename(dir+item, path.extname(dir+item)) + ' - ' + path.extname(dir+item).slice(1) + ' - ' + stats.size + 'b')
        }
    })
   });
})
