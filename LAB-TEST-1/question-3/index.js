const childProcess= require('child_process');

childProcess.execSync('node add.js', {stdio: [0,1,2]});

childProcess.execSync('node remove.js',{stdio: [0,1,2]} );