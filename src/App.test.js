import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Title from './components/Title'

chai.use(chaiEnzyme())

const app = shallow(<App />)

describe('<App />', () => {
  it('contains a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('renders a Title', () => {
    expect(app).to.have.descendants(Title)
  })

  it('sets the title to "All Recipes"', () => {
    expect(app).to.contain(<Title content="All Recipes" />)
  })
})
