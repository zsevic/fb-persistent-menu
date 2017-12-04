#!/usr/bin/env node

const argv = require('yargs').argv
const lib = require('../lib')

if (argv.token) {
  if (argv.settings) {
    try {
      let json = JSON.parse(JSON.stringify(argv.settings.replace(/(\r\n|\n|\r| )/gm, '')))
      let data = JSON.parse(json)
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
