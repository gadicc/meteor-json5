# JSON5

Super simple wrapper of the JSON5
[npm package](https://www.npmjs.com/package/json5).

Note, there's no reason to use this on Meteor 1.3+, unless you're writing a
package that doesn't use the `modules` (or `ecmascript`) packages, e.g.
you're writing a custom compiler.

This is necessary because for some reason Meteor thinks JSON5 has binary
dependencies (maybe because it creates a CLI script in `.bin`).  So by
including this package over using `Npm.depends()`, you avoid the need to
publish on build machines for all platforms.