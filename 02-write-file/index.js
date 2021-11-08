const fs = require("fs");
const path = require('path');
const process = require('process');
const readline = require('readline');
const file = path.join(__dirname,'text.txt')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Enter your text\n', (text) => {
  text.trim().toLowerCase() =='exit'?  rl.close() : fs.writeFile(file, text + '\n', 'utf8', (err) => {if(err) throw err;});
 });


rl.on('line', (text) => {
  text.trim() =='exit' ? rl.close(): fs.appendFile(file, text + '\n', 'utf8', (err) => {if(err) throw err;});
});

rl.on('SIGINT', () => {
    rl.close();
    });

process.on('exit', (code) => {
    console.log('Thank you!');
    });