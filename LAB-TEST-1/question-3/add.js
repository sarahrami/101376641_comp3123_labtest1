const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs')

if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir)
}

process.chdir(logDir)
console.log('\nCREATING\n');
for(let i = 0; i < 10; i++){
    const newFile = `log${i}.txt`
    if(!fs.existsSync(newFile)){
        fs.writeFileSync(newFile, `Log file ${i} successfully created`)
        console.log(newFile)
    }else{
        console.log(`${newFile} already exist.`)
    }
}