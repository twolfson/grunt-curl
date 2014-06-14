# grunt-curl [![Build status](https://travis-ci.org/twolfson/grunt-curl.png?branch=master)](https://travis-ci.org/twolfson/grunt-curl)

Download files from the internet via [grunt][].

This was created for dependency management via [`grunt-curl`][] and [`grunt-zip`][] as a low-tech alternative to `bower` and similar solutions.

http://twolfson.com/2014-01-19-low-tech-dependency-management-via-grunt-tasks

[grunt]: http://gruntjs.com/
[`grunt-curl`]: https://github.com/twolfson/grunt-curl
[`grunt-zip`]: https://github.com/twolfson/grunt-zip

## Getting Started
`grunt-curl` can be installed via npm: `npm install grunt-curl`

Then, add and configure the it in your grunt file:

```js
module.exports = function (grunt) {
  // Configure `curl` with URLs
  // If you would like to download multiple files
  // to the same directory, there is `curl-dir`
  grunt.initConfig({
    curl: {
      'location/to/download/github.html': 'http://github.com/',
    }
  });

  // Load in `grunt-curl`
  grunt.loadNpmTasks('grunt-curl');
};
```

Now, we can run our task:

```bash
$ grunt curl
Running "curl:location/to/download/github.html" (curl) task
File "location/to/download/github.html" created.

Done, without errors.
```

## Documentation
`grunt-curl` creates 2 `grunt` tasks for you to use/configure, `curl` and `curl-dir`. Both tasks support accepting [`request`] parameters as a `src` file.

[Example: This allows for `POST` requests and such.][post-example].

[`request`]: https://github.com/mikeal/request
[post-example]: TODO: Add me

### `curl`
The `curl` task is intended for downloading single files which may require special parameters.

We support 2 different formats for configuration.

#### Short format `{dest: src}`
```js
curl: {
  'location/to/download/file.js': 'http://files.com/path/to/file.js'
}
```

This format is suggested only if you don't need to run `curl` tasks separately

```js
grunt curl
```

If you want to run this task standalone, it must be executed via:

```js
grunt curl:dest
# grunt curl:location/to/download/file.js
```

#### Long format
```js
curl: {
  'task-name': {
    src: 'http://files.com/path/to/file.js',
    dest: 'location/to/download/file.js'
  }
}
```

This can be run standalone via

```js
grunt curl:task-name
```

#### Using request options
This is an example of the long format leveraging [`request`][] parameters for making a `POST` request.

```js
curl: {
  'task-name': {
    src: {
      url: 'http://files.com/path/to/file.js',
      method: 'POST',
      body: 'abc'
    },
    dest: 'location/to/download/file.js'
  }
}
```

  },
  // Grab multiple files
  'curl-dir': {
    // Short format (dest folder: [src1, src2])
    // These will be saved as 'location/to/save/files/file1.js'
    //    and 'location/to/save/files/file2.js'
    'location/to/save/files': [
      'http://files.com/path/to/file1.js',
      'http://generic.com/scripts/file2.js'
    ],

    // Long format
    long: {
      src: [
        'http://files.com/path/to/file1.js',
        'http://files.com/path/to/file2.js'
      ],
      dest: 'location/to/save/files'
    },

    // src files will expand to same file1.js and file2.js as long format
    braceExpansion: {
      src: ['http://files.com/path/to/{file1,file2}.js'],
      dest: 'location/to/save/files'
    },

    // Custom filepaths
    // This will save file1.js to location/to/save/files/path/to/file1.js
    //    and file2.js to location/to/save/files/scripts/file2.js
    customFilepaths: {
      src: [
        'http://files.com/path/to/file1.js',
        'http://generic.com/scripts/file2.js'
      ],
      router: function (url) {
        return url.replace('http://files.com/', '').replace('http://generic.com/', '');
      },
      dest: 'location/to/save/files'
    },

    // Use any of request's options
    custom: {
      src: [{
        url: 'http://files.com/path/to/file.js',
        method: 'POST',
        body: 'abc'
      }],
      dest: 'location/to/save/files'
    }
  }
}):
```

[request]: https://github.com/mikeal/request

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint your code using [grunt][grunt] and test via `npm test`.

## Donating
Support this project and [others by twolfson][gittip] via [gittip][].

[![Support via Gittip][gittip-badge]][gittip]

[gittip-badge]: https://rawgithub.com/twolfson/gittip-badge/master/dist/gittip.png
[gittip]: https://www.gittip.com/twolfson

## License
Copyright (c) 2013 Todd Wolfson
Licensed under the MIT license.
