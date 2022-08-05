const Path = require('path')

exports.SimplePath = class SimplePath {
  constructor(dirname) {
    this.base = dirname
  }

  full(...relativePath) {
    return Path.join(this.base, ...relativePath)
  }
}