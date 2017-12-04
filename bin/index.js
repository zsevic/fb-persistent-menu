#!/usr/bin/env node

const argv = require('yargs').argv
const lib = require('../lib')

if (argv.token) {
  if (argv.settings) {
    try {
      let data = JSON.parse(argv.settings)
      lib.addPersistentMenu(argv.token, data)
    } catch (e) {
      lib.handleError(`JSON is not well formatted`)
    }
  } else if (argv.remove || argv.r) {
    lib.removePersistentMenu(argv.token)
  } else {
    lib.usage()
  }
} else {
  lib.usage()
}
