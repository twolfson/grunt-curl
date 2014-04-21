var gruntUtils = require('./utils/grunt');

// Clean up the test directory
gruntUtils.exec('clean');

// curl tests
describe('grunt curl', function () {
  describe('downloading a js (utf16) file', function () {
      it('is successful', function () {

      });
  });

  describe('downloading a zip (binary) file', function () {
      it('is successful', function () {

      });
  });

  describe('downloading a file from an invalid domain', function () {
      it('throws an error', function () {

      });
      it('does not create the file', function () {

      });
  });

  describe('downloading a nonexistant file', function () {
      it('throws an error', function () {

      });
      it('does not create the file', function () {

      });
  });

  describe('downloading a POST file', function () {
    it('is successful', function () {

    });
  });
});

// curl-dir tests
describe('grunt curl-dir', function () {
  describe('downloading multiple files', function () {
    it('is successful', function () {

    });
  });
  describe('downloading brace expanded files', function () {
    it('is successful', function () {

    });
  });
  describe('using a custom router', function () {
    it('is successful', function () {

    });
  });
  describe('using POST', function () {
    it('is successful', function () {

    });
  });
});
