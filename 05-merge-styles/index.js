const fs = require('fs')
const path = require('path');
const fsPromises = require('fs/promises');

const path_styles = __dirname + '/styles/';
const path_bundle = __dirname + '/project-dist/bundle.css';


fsPromises.rm(path_bundle,{ recursive: true, force: true });

fs.readdir(path_styles, (err, files) => {
    if (err) console.error(err);
    files.forEach(item => {
        fs.stat(path_styles+item, (err, stats) => {
            if (err) console.error(err);
            if (stats.isFile() && path.extname(path_styles + item) === '.css'){
                const input = new fs.ReadStream(path.join((__dirname + '//styles/'), item) ,'utf-8');
                 input.on('data', partData => {
                    fs.appendFile(path_bundle, partData, 'utf8', (err) => {if(err) throw err;}) 
                }); 
            }
         })
    });
});
