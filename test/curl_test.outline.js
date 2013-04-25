module.exports = [{
// curl tests
  'grunt curl': {
    'downloading a js (utf16) file': {
      'is successful': true
    },
    'downloading a zip (binary) file': {
      'is successful': true
    },
    'downloading a file from an invalid domain': {
      'throws an error': true,
      'does not create the file': true
    },
    'downloading a file from an invalid domain': {
      'throws an error': true,
      'does not create the file': true
    }
  }
}, {
// curl-dir tests
  'grunt curl-dir': {
    'downloading multiple files': {
      'is successful': true
    },
    'downloading brace expanded files': {
      'is successful': true
    },
    'using a custom router': {
      'is successful': true
    }
  }
}]