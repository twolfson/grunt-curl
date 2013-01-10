# grunt-curl

Download files from the internet via grunt.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-curl`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-curl');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
`grunt-curl` retrieves data via [request][request]'s GET method and writes it to file.

We register a grunt task
```js
grunt.initConfig({
curl: {
  // Short format (dest: src)
  'location/to/download/file.js': 'http://files.com/path/to/file.js',

  // Long format
  long: {
    src: 'http://files.com/path/to/file.js',
    dest: 'location/to/download/file.js'
  }
}):
```

and a grunt helper
```js
grunt.helper('curl', url, function handleData (err, content) {
  // Handle error and use content
});
```

[request]: https://github.com/mikeal/request

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint your code using [grunt][grunt] and test via `npm test`.

## License
Copyright (c) 2013 Todd Wolfson
Licensed under the MIT license.
