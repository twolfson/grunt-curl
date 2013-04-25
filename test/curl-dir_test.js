var grunt = require('grunt');

var fs = require('fs');
exports['curl-dir'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'multi': function(test) {
    test.expect(2);
    // tests here
    var expectedLabContent = grunt.file.read('expected/file.js'),
        actualLabContent = grunt.file.read('actual/multi/LAB.min.js');
    test.equal(actualLabContent, expectedLabContent, 'should return the correct value for LAB.min.js.');

    var expectedCookiejarContent = grunt.file.read('expected/cookiejar.js'),
        actualCookiejarContent = grunt.file.read('actual/multi/cookiejar.js');
    test.equal(actualLabContent, expectedLabContent, 'should return the correct value for cookiejar.js.');

    test.done();
  },
  'braceExpansion': function(test) {
    test.expect(2);
    // tests here
    var expectedLabContent = grunt.file.read('expected/file.js'),
        actualLabContent = grunt.file.read('actual/braceExpansion/LAB.min.js');
    test.equal(actualLabContent, expectedLabContent, 'should return the correct value for LAB.min.js.');

    var expectedCookiejarContent = grunt.file.read('expected/cookiejar.js'),
        actualCookiejarContent = grunt.file.read('actual/braceExpansion/cookiejar.js');
    test.equal(actualLabContent, expectedLabContent, 'should return the correct value for cookiejar.js.');

    test.done();
  },
  'router': function(test) {
    test.expect(2);
    // tests here
    var expectedLabContent = grunt.file.read('expected/file.js'),
        actualLabContent = grunt.file.read('actual/router/ajax/libs/labjs/2.0.3/LAB.min.js');
    test.equal(actualLabContent, expectedLabContent, 'should return the correct value for LAB.min.js.');

    var expectedCookiejarContent = grunt.file.read('expected/cookiejar.js'),
        actualCookiejarContent = grunt.file.read('actual/router/ajax/libs/cookiejar/0.5/cookiejar.js');
    test.equal(actualLabContent, expectedLabContent, 'should return the correct value for cookiejar.js.');

    test.done();
  }
};
