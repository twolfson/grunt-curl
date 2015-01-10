// Load in depednecies
var zlib = require('zlib');
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
    server.get('/gzip.txt', function (req, res) {
      // Guarantee gzip response *always*
      res.setHeader('Content-Encoding', 'gzip');

      // Take the query, stringify it, gzip it, and send it back
      var queryJson = JSON.stringify(req.query, null, 2);
      zlib.gzip(queryJson, function handleGzippedContent (err, gzipData) {
        // If there was an error, throw it
        if (err) {
          throw err;
        }

        // Otherwise, send back our gzipped content
        res.send(gzipData);
      });

    });
    _server = server.listen(4000);
  });
  after(function stopServer (done) {
    _server.close(done);
  });
};
