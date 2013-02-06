var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

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
  }
};
