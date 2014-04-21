// Load in dependencies
var expect = require('chai').expect;
var express = require('express');
var fsUtils = require('./utils/fs');
var gruntUtils = require('./utils/grunt');

// Clean up the test directory
gruntUtils.exec('clean');

// curl tests
describe('grunt curl', function () {
  describe('downloading a js file', function () {
    gruntUtils.exec('curl:js');
    fsUtils.readExpectedFile('file.js', 'utf8');
    fsUtils.readActualFile('file.js', 'utf8');

    it('is successful', function () {
      expect(this.err).to.equal(null);
      expect(this.actualContent).to.equal(this.expectedContent);
    });
  });

  describe.skip('downloading a zip (binary) file', function () {
    it('is successful', function () {

    });
  });

  describe.skip('downloading a file from an invalid domain', function () {
    it('throws an error', function () {

    });
    it('does not create the file', function () {

    });
  });

  describe.skip('downloading a nonexistant file', function () {
    it('throws an error', function () {

    });
    it('does not create the file', function () {

    });
  });

  describe.skip('downloading a POST file', function () {
    it('is successful', function () {

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
