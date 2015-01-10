// Load in depednecies
var connectGzip = require('connect-gzip');
var express = require('express');

// Create a server for GET data
exports.runGetServer = function () {
  var _server;
  before(function startServer () {
    var server = express();
    server.get('/get.txt', function (req, res) {
      res.send(req.query);
    });
    _server = server.listen(4000);
  });
  after(function stopServer (done) {
    _server.close(done);
  });
};

// Create a server for POST data
exports.runPostServer = function () {
  var _server;
  before(function startServer () {
    var server = express();
    server.post('/post.txt', express.urlencoded(), function (req, res) {
      res.send(req.body);
    });
    _server = server.listen(4000);
  });
  after(function stopServer (done) {
    _server.close(done);
  });
};

exports.runGzipServer = function () {
  var _server;
  before(function startServer () {
    var server = express();
    server.get('/gzip.txt', connectGzip.gzip(), function (req, res) {
      res.send(req.query);
    });
    _server = server.listen(4000);
  });
  after(function stopServer (done) {
    _server.close(done);
  });
};
