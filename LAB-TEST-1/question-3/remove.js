const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs')

if(fs.existsSync(logDir)){
    console.log('\nDELETING\n');
    const files = fs.readdirSync(logDir)
    for(let i = 0; i < files.length; i++){
        const file = files[i]
        console.log(`delete files...${file}`)
        fs.unlinkSync(path.join(logDir, file))
    }
    fs.rmdirSync(logDir)
}else{
    console.log("Directory doesn't exist")
}