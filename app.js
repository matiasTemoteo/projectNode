var app = require('express')();
const server = require('./server/index');
const port = '3000';

app = server.createserver(app);

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
