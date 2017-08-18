'use strict'

/* eslint-env mocha */
const itsName = require('.')
const snapshot = require('snap-shot-it')

describe('its-name', () => {
  describe('nested describe', () => {
    context('inner context', () => {
      it('finds all names', function () {
        const names = itsName(this)
        snapshot(names)
      })
    })
  })
})
