/*
 * @Author: Nokey 
 * @Date: 2018-05-04 10:23:46 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-05-04 10:58:39
 */
'use strict'; 

var http    = require('http');
var opn     = require('opn');
var express = require('express');
var app     = express();
var path    = require('path');

app.set('port', 9009);

app.use(express.static(path.join(__dirname, '../')));
console.log(path.join(__dirname, '../'))

// HTTP Server
const server_http = http.createServer(app);
server_http.listen(app.get('port'), () => {
  console.dir('Express HTTP server listening on port ' + app.get('port'));

  opn('http://127.0.0.1:9009/__test/index.html');
});
