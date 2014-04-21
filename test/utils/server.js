var express = require('express');

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
