let directory = require('./pwd')
let file = require('./ls')
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd.toLowerCase() === 'pwd'){
    directory();
  }
  else if (data.toString().trim() === 'ls') {
    file();
  }
});
