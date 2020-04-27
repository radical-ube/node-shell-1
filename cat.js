const fs = require('fs');

const cat = process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const filename = cmd.split(' ')[1];
  if (cmd.substring(0, 3) === 'cat') {
    fs.readFile(filename, (err, data) => {
      if (err) throw err;
      else {
        process.stdout.write(data);
        process.stdout.write('\nprompt > ');
      }
    });
  }
})

module.exports.cat = cat;
