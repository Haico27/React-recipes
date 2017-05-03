import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import LikeButton from './LikeButton'
import spies from 'chai-spies'

chai.use(chaiEnzyme())
chai.use(spies)



describe('<LikeButton />', () => {
  const toggleLike = chai.spy()
  const button = shallow(<LikeButton liked={ false } onChange={ toggleLike } />)

  it('is wrapped in a paragraph with class "like"', () => {
    expect(button).to.have.tagName('p')
    expect(button).to.have.className('like')
  })

  describe('clicking the button', () => {
    it('calls the "onChange" function', () => {
      button.find('button').simulate('click')
      expect(toggleLike).to.have.been.called.exactly.once()
    })
  })
})
