module.exports = {
  'postServer': {
    before: function () {
      this.server = express();
      this.server.post('/post.txt', express.urlencoded(), function (req, res) {
        res.send(req.body);
      });
      this._server = this.server.listen(4000);
    },
    after: function (done) {
      this._server.close(done);
    }
  },

  // curl tasks
  'downloading a POST file': [function () {
      this.task = 'post';
      this.filenames = ['post.txt'];
  }, 'postServer', 'execute task'],
  'downloading a file from an invalid domain': [function () {
    this.task = 'nonExistingDomain';
    this.filenames = ['nonexistent-domain'];
  }, 'execute task'],
  'downloading a nonexistant file': [function () {
    this.task = 'nonExistingFile';
    this.filenames = ['nonexistent-file'];
  }, 'execute task'],

  // curl-dir tasks
  'downloading multiple files': [function () {
    this.task = 'multi';
    this.filenames = ['multi/LAB.min.js', 'multi/cookiejar.js'];
  }, 'execute task'],
  'downloading brace expanded files':  [function () {
    this.task = 'braceExpansion';
    this.filenames = ['braceExpansion/LAB.min.js', 'braceExpansion/cookiejar.js'];
  }, 'execute task'],
  'using a custom router': [function () {
    this.task = 'router';
    this.filenames = ['router/ajax/libs/labjs/2.0.3/LAB.min.js', 'router/ajax/libs/cookiejar/0.5/cookiejar.js'];
  }, 'execute task'],
  'using POST': [function () {
    this.task = 'post';
    this.filenames = ['multiPost/post.txt'];
  },  'postServer', 'execute task'],
};
