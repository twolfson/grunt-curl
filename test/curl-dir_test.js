// Load in dependencies
var expect = require('chai').expect;
var fsUtils = require('./utils/fs');
var gruntUtils = require('./utils/grunt');

// curl-dir tests
describe.only('grunt curl-dir', function () {
  describe('downloading multiple files', function () {
    gruntUtils.runTask('curl-dir:multi');

    describe('the first file', function () {
      fsUtils.readExpectedFile('multi/LAB.min.js', 'utf8');
      fsUtils.readActualFile('multi/LAB.min.js', 'utf8');

      it('is successfully downloaded', function () {

      });
    });
    describe('the second file', function () {
      fsUtils.readExpectedFile('multi/cookiejar.js', 'utf8');
      fsUtils.readActualFile('multi/cookiejar.js', 'utf8');

      it('is successfully downloaded', function () {

      });
    });
  });
  describe.skip('downloading brace expanded files', function () {
    it('is successful', function () {

    });
  });
  describe.skip('using a custom router', function () {
    it('is successful', function () {

    });
  });
  describe.skip('using POST', function () {
    it('is successful', function () {

    });
  });
});
