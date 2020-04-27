const {pwd} = require('./pwd.js');
const {ls} = require('./ls.js');
const {cat} = require('./cat.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd !== 'pwd') {
    process.stdout.write('you typed : ' + cmd);
    process.stdout.write('\nprompt > ');
  }

})


