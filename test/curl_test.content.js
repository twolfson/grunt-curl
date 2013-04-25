// Load in chai and expect
var chai = require('chai'),
    expect = chai.expect;

module.exports = {
  // Grunt commands
  'grunt curl': function () {
    this.cmd = 'grunt curl:';
  },
  'grunt curl-dir': function () {
    this.cmd = 'grunt curl-dir:';
  },

  // curl tasks
  'downloading a js (utf16) file': function () {
    this.task = 'js';
    // TODO: Add filename(s) here
  },
  'downloading a zip (binary) file':  function () {
    this.task = 'zip';
  },
  'downloading a file from an invalid domain':  function () {
    this.task = 'nonExistingDomain';
  },
  'downloading an non-existant file':  function () {
    this.task = 'nonExistingFile';
  },

  // curl-dir tasks
  'downloading multiple files': function () {
    this.task = 'multi';
  },
  'downloading brace expanded files':  function () {
    this.task = 'braceExpansion';
  },
  'using a custom router': function () {
    this.task = 'router';
  },

  // curl and curl-dir results
  'is successful':  function () {

  },
  'throws an error':  function () {

  },
  'does not create the file':  function () {

  }
};