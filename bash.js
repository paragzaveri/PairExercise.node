let directory = require('./pwd')
let file = require('./ls')
let cat = require('./cat');
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  if(cmd[0].toLowerCase() === 'pwd'){
    directory();
  }
  else if (cmd[0].toLowerCase() === 'ls') {
    file();
  } else if (cmd[0].toLowerCase() === 'cat') {
    cat(cmd[1]);
  }
});
