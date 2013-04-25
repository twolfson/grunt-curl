// Load in dependencies
var cp = require('child_process'),
    exec = cp.exec,
    chai = require('chai'),
    expect = chai.expect;

module.exports = {
  // Grunt commands
  'grunt curl': function () {
    this.cmd = 'grunt curl:';
  },
  'grunt curl-dir': function () {
    this.cmd = 'grunt curl-dir:';
  },
  'execute task': function (done) {
    exec(this.cmd + this.task, done);
  },

  // curl tasks
  'downloading a js (utf16) file': [function () {
    this.task = 'js';
    this.filenames = [''];
  }. 'execute task'],
  'downloading a zip (binary) file': [function () {
    this.task = 'zip';
    this.filenames = [''];
  }, 'execute task'],
  'downloading a file from an invalid domain': [function () {
    this.task = 'nonExistingDomain';
    this.filenames = [''];
  }, 'execute task'],
  'downloading an non-existant file': [function () {
    this.task = 'nonExistingFile';
    this.filenames = [''];
  }, 'execute task'],

  // curl-dir tasks
  'downloading multiple files': [function () {
    this.task = 'multi';
    this.filenames = [''];
  }, 'execute task'],
  'downloading brace expanded files':  [function () {
    this.task = 'braceExpansion';
    this.filenames = [''];
  }, 'execute task'],
  'using a custom router': [function () {
    this.task = 'router';
    this.filenames = [''];
  }, 'execute task'],

  // curl and curl-dir results
  'is successful':  function () {

  },
  'throws an error':  function () {

  },
  'does not create the file':  function () {

  }
};