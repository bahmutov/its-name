'use strict'

/* eslint-env mocha */
const itsName = require('.')
const snapshot = require('snap-shot-it')

describe('its-name', () => {
  describe('nested describe', () => {
    context('inner context', function () {
      const names = itsName(this)
      console.log(names)
      // snapshot(names)
    })
  })
})
