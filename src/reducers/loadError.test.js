import chai, { expect } from 'chai'
import loadError from './loadError'
import { LOAD_ERROR } from '../actions/load/load-error'
import { LOAD_SUCCESS } from '../actions/load/load-success'

describe('loadError reducer', () => {
  const initialState = null



  describe('initialState', () => {
    it('is null', () => {
      expect(loadError(initialState, {} )).to.eq(null)
    })
  })
})
