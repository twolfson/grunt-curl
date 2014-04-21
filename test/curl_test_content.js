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

  'using POST': [function () {
    this.task = 'post';
    this.filenames = ['multiPost/post.txt'];
  },  'postServer', 'execute task'],
};
