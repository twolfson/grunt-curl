// Load in dependencies
var expect = require('chai').expect;
var express = require('express');
var fsUtils = require('./utils/fs');
var gruntUtils = require('./utils/grunt');

// Clean up the test directory
gruntUtils.exec('clean');

// curl tests
describe('grunt curl', function () {
  // DEV: This is a regression test
  describe.skip('downloading a locally hosted file', function () {
    it('is successful', function () {

    });
  });

  describe.skip('downloading a POST file', function () {
    it('is successful', function () {

    });
  });

  describe('downloading a utf8 file (js)', function () {
    gruntUtils.exec('curl:js');
    fsUtils.readExpectedFile('file.js', 'utf8');
    fsUtils.readActualFile('file.js', 'utf8');

    it('is successful', function () {
      expect(this.err).to.equal(null);
      expect(this.actualContent).to.equal(this.expectedContent);
    });
  });

  describe('downloading a binary file (zip)', function () {
    gruntUtils.exec('curl:zip');
    fsUtils.readExpectedFile('file.zip', 'binary');
    fsUtils.readActualFile('file.zip', 'binary');

    it('is successful', function () {
      expect(this.err).to.equal(null);
      expect(this.actualContent).to.equal(this.expectedContent);
    });
  });

  describe('downloading a file from an invalid domain', function () {
    gruntUtils.exec('curl:nonExistingDomain');
    fsUtils.exists('actual/nonexistent-domain');

    it('throws an error', function () {
      expect(this.err).to.not.equal(null);
    });

    it('does not create the file', function () {
      expect(this.fileExiss).to.not.equal(false);

    });
  });

  describe.skip('downloading a nonexistant file', function () {
    gruntUtils.exec('curl:nonExistingFile');
    fsUtils.exists('actual/nonexistent-file');

    it('throws an error', function () {
      expect(this.err).to.not.equal(null);
    });
    it('does not create the file', function () {
      expect(this.fileExiss).to.not.equal(false);

    });
  });

});

// curl-dir tests
describe.skip('grunt curl-dir', function () {
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
